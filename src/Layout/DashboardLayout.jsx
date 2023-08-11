/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import DashboardNav from '../Components/Nav/DashboardNav';

const DashboardLayout = () => {
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
  }
  // console.log(isAdmin);
  return (
    <>
      <div className="navbar sticky top-0 z-10">
        <DashboardNav></DashboardNav>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-content w-8"
                  viewBox="0 0 24 24">
                  <circle cx="5" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M4 4h2v9H4z" />
                  <path
                    fill="currentColor"
                    d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19H3V3h4Z"
                  />
                  <circle cx="12" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M11 4h2v9h-2z" />
                  <path
                    fill="currentColor"
                    d="M14 2h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19h-4V3h4Z"
                  />
                  <circle cx="19" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M18 4h2v9h-2z" />
                  <path
                    fill="currentColor"
                    d="M21 2h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19h-4V3h4Z"
                  />
                </svg>
                <Link to="/dashboard">Products</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-content w-8"
                  viewBox="0 0 24 24">
                  <circle cx="5" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M4 4h2v9H4z" />
                  <path
                    fill="currentColor"
                    d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19H3V3h4Z"
                  />
                  <circle cx="12" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M11 4h2v9h-2z" />
                  <path
                    fill="currentColor"
                    d="M14 2h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19h-4V3h4Z"
                  />
                  <circle cx="19" cy="19" r="1" fill="currentColor" />
                  <path fill="currentColor" d="M18 4h2v9h-2z" />
                  <path
                    fill="currentColor"
                    d="M21 2h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19h-4V3h4Z"
                  />
                </svg>
                <Link to="/dashboard/addproducts">Add Products</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-content w-8"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                  />
                </svg>
                <Link to="/dashboard/adduser">Add Users</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
