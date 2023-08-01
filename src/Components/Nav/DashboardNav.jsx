/* eslint-disable no-unused-vars */
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardNav = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    const agree = window.confirm('Do you really want to log Out?');
    if (agree) {
      signOut(auth);
    }
  };
  return (
    <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
            <li>
              <Link to={'/games'}>Trending Products</Link>
            </li>
            <li>
              <a>Gift Cards</a>
            </li>
            <li>
              <a>Best Seller</a>
            </li>
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          G2G
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/games'}>Trending Products</Link>
          </li>

          <li>
            <a>Gift Cards</a>
          </li>
          <li>
            <a>Best Seller</a>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Dashboard
        </label>
        {user?.emailVerified ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost h-14 w-14 rounded-full">
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      'https://i.ibb.co/K9dVbKs/image-processing20210613-2832-x5fecm.png'
                    }
                    alt=""
                  />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content shadow bg-neutral text-neutral-content rounded-box min-w-60 mt-4 z-50">
              <li className="btn btn-primary">
                <Link to="/profile">Update Profile</Link>
              </li>
              <li className="text-center p-2">
                {user?.displayName || 'Display Name'}
              </li>
              <li className="text-center p-2">{user?.email}</li>
              <li>
                <button className="btn" onClick={logout}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashboardNav;
