/* eslint-disable no-unused-vars */
import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.config';
import google from '../../assets/images/google.png';
import useToken from '../../hooks/useToken';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // // Our custom hook
  const [token] = useToken(user || gUser);

  const handleRegister = async (data) => {
    const { name, email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast(
      'Check your email to verify. After verifying reload your site please.'
    );
  };
  let ERROR;
  if (error || gError || updatingError) {
    return (ERROR = (
      <p>
        <small>Error: {error.message}</small>
      </p>
    ));
  }
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <section className="my-5 flex justify-center">
      <div className="lg:w-96 border rounded-lg shadow-xl p-10">
        <h4 className="text-3xl font-semibold text-center">Register</h4>
        <form className="mt-5" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register('name', { required: 'Please enter your name' })}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', { required: 'Please enter a valid Email' })}
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register(
                'password',
                {
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    message:
                      'Password must contain uppercase, numeric & special character & must be eight characters or longer',
                  },
                },
                {
                  required: 'Please enter your Password',
                }
              )}
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>
          {ERROR}

          <input
            className="btn btn-primary w-full max-w-xs mt-3"
            type="submit"
          />
        </form>
        <p className="mt-2">
          Already have an account?
          <Link to="/login" className="ml-1 text-primary">
            Login here
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={async () => {
            await signInWithGoogle();
            navigate(from, { replace: true });
          }}
          className="btn btn-outline w-full">
          <img className="w-8 mr-2 rounded-lg" src={google} alt="GOOGLE" />{' '}
          CONTINUE WITH GOOGLE
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
