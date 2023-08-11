/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TrendingCard from '../Card/TrendingCard';
import BgImage from '../../assets/images/background.jpg';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const CardSection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 7)));
  }, []);

  return (
    <section
      className="p-5"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <h1 className="text-white text-2xl font-bold">Summer Playground</h1>
      <p className="text-gray-300">
        Tons of hot deals on video games, software, various gift cards, and
        more!
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.length > 0 ? (
          products?.map((product, index) => (
            <TrendingCard key={index} product={product}></TrendingCard>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
      <button
        onClick={() => navigate('/videogames')}
        className="btn btn-link text-blue-700 text-lg flex justify-end w-full">
        see all
      </button>
    </section>
  );
};

export default CardSection;
