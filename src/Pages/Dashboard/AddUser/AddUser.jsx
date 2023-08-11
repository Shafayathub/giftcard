/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {
  const addUser = (data) => {
    const { email, role } = data;
    const newUser = {
      email,
      role,
    };
    fetch('https://server.netflixbuy.com/user', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="my-5 flex justify-center">
      <div className="lg:w-96 border rounded-lg shadow-xl p-10">
        <h4 className="text-3xl font-semibold text-center">Register</h4>
        <form className="mt-5" onSubmit={handleSubmit(addUser)}>
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
              <span className="label-text">Role</span>
            </label>
            <select {...register('role')}>
              <option value="user">user</option>
              <option value="moderator">moderator</option>
              <option value="admin">admin</option>
            </select>

            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-primary w-full max-w-xs mt-3"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddUser;
