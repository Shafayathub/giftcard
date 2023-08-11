/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import BgImage from '../../assets/images/background.jpg';

const Nav = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/user')
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

  const logout = () => {
    const agree = window.confirm('Do you really want to log Out?');
    if (agree) {
      signOut(auth);
    }
  };

  return (
    <div
      className="navbar bg-neutral text-neutral-content sticky top-0 z-50"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
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
              <Link to={'/trending_products'}>Trending Products</Link>
            </li>
            <li>
              <Link to="/giftcards">Gift Cards</Link>
            </li>
            <li>
              <Link to="/trending_products">Best Seller</Link>
            </li>
            <li>
              <Link to="/gaming_giftcards">Gaming Giftcards </Link>
            </li>
            <li>
              <Link to="/videogames">Video Games </Link>
            </li>
            <li>
              <Link to="/subscription">Subscriptions </Link>
            </li>
            <li>
              <Link to="/softwares">Best Softwares </Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn btn-ghost normal-case text-xl text-red-600 font-bold">
          NetflixBuy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link to={'/trending_products'}>Trending Products</Link>
          </li>

          <li>
            <Link to="/giftcards">Gift Cards</Link>
          </li>
          <li>
            <Link to="/trending_products">Best Seller</Link>
          </li>
          <li>
            <Link to="/gaming_giftcards">Gaming Giftcards </Link>
          </li>
          <li>
            <Link to="/videogames">Video Games </Link>
          </li>
          <li>
            <Link to="/subscription">Subscriptions </Link>
          </li>
          <li>
            <Link to="/softwares">Best Softwares </Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
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
