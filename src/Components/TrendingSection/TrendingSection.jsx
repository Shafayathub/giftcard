/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import BgImage from '../../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';

const TrendingSection = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/product/64ca22f9d5e99a69191f9b9f')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section
      className="p-5"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={product?.img}
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          />
          <div className="text-gray-200">
            <h1 className="text-5xl font-bold">Trending products</h1>
            <p className="py-6">
              The best offers, new video games, AAA titles and indies, DLCs,
              gift cards, and more. Buy bestselling games, and other digital
              products at the best possible price.
            </p>
            <button
              onClick={() => navigate('/trending_products')}
              className="btn bg-red-700 text-white">
              See All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
