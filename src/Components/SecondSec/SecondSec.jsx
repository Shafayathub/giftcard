/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TrendingCard from '../Card/TrendingCard';
import BgImage from '../../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';

const SecondSec = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(8, 14)));
  }, []);
  // const selectedProducts = products?.filter(
  //   (product) => product?.catagory === 'Subscriptions'
  // );
  return (
    <section
      className="p-5"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <h1 className="text-white text-2xl font-bold">Bestsellers</h1>
      <p className="text-gray-300">
        Browse the most popular video games on the platform.
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <TrendingCard key={index} product={product}></TrendingCard>
        ))}
      </div>
      <button
        onClick={() => navigate('/subscription')}
        className="btn btn-link text-blue-700 text-lg flex justify-end w-full">
        see all
      </button>
    </section>
  );
};

export default SecondSec;
