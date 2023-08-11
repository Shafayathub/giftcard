/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TrendingCard from '../../Components/Card/TrendingCard';
import BgImage from '../../assets/images/background.jpg';

const Subscription = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://server.netflixbuy.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const selectedProducts = products?.filter(
    (product) => product?.catagory === 'Subscriptions'
  );

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
      <div className="mt-5 flex flex-wrap gap-5 justify-around">
        {selectedProducts?.map((product, index) => (
          <TrendingCard key={index} product={product}></TrendingCard>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
