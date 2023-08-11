/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TrendingCard from '../Card/TrendingCard';
import BgImage from '../../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';

const FifthSec = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // const selectedProducts = products?.filter(
  //   (product) => product?.catagory === 'bestSoftwares'
  // );
  return (
    <section
      className="p-5"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <h1 className="text-white text-2xl font-bold">Best software products</h1>
      <p className="text-gray-300">
        From methods of protecting your PC to software useful in your
        professional life, you will find it all here at attractive prices.
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <TrendingCard key={index} product={product}></TrendingCard>
        ))}
      </div>
      <button
        onClick={() => navigate('/softwares')}
        className="btn btn-link text-blue-700 text-lg flex justify-end w-full">
        see all
      </button>
    </section>
  );
};

export default FifthSec;
