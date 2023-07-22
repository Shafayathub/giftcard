/* eslint-disable no-unused-vars */
import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.config';

const UpdateProfile = () => {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    updateProfile({ displayName, photoURL });
    event.target.reset();
    toast('Profile updated. Reload your site.');
  };
  if (updating) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="m-10 progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-screen-xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>

        {error && toast(error?.message)}
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Profile"
          />
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;
