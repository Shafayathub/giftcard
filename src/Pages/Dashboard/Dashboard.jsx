/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import Loading from '../../Components/Shared/Loading';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState(null);
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  const currentUser = admin?.find(
    (addeduser) => addeduser?.email === user?.email
  );
  // console.log(currentUser);
  // console.log(user);
  let isAdmin = false;
  if (currentUser?.email === user?.email && currentUser?.role === 'admin') {
    isAdmin = true;
  }
  return (
    <section className="mt-5 mx-5">
      <h1 className="text-center text-primary text-xl font-semibold mb-3">
        Dashboard
      </h1>
      <div className="overflow-x-scroll">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Product</th>
              <th>Catagory</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row  --> */}
            {products?.map((product, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{product?.name}</td>
                <td>{product?.catagory}</td>
                <td>{product?.price}$</td>

                {isAdmin && (
                  <button className="btn-xs btn-error text-white mt-3">
                    delete
                  </button>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Sl.</th>
              <th>Product</th>
              <th>Catagory</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
