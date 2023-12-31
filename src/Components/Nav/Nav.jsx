/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Nav = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user]);
  // console.log(admin);
  const currentUser = admin?.find(
    (addeduser) => addeduser?.email === user?.email
  );
  // console.log(currentUser);
  // console.log(user);
  let isAdmin = false;
  if (currentUser?.email === user?.email && currentUser?.role === 'admin') {
    isAdmin = true;
  } else if (
    currentUser?.email === user?.email &&
    currentUser?.role === 'moderator'
  ) {
    isAdmin = true;
  }
  console.log(isAdmin);

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
          {isAdmin && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <form className="form-control mr-5">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-24 md:w-auto"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
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

export default Nav;
