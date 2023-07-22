/* eslint-disable no-unused-vars */
import React from 'react';

import BgImage from '../../assets/images/background.jpg';
import TrendingCard from '../Card/TrendingCard';

const TrendingSection = () => {
  return (
    <section
      className="p-5"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <h1 className="text-white text-2xl font-bold">Trending products</h1>
      <p className="text-gray-300">
        The best offers, new video games, AAA titles and indies, DLCs, gift
        cards, and more. Buy bestselling games, and other digital products at
        the best possible price.
      </p>
      <div className="mt-5 flex flex-wrap gap-5 justify-around">
        <TrendingCard></TrendingCard>
        <TrendingCard></TrendingCard>
        <TrendingCard></TrendingCard>
      </div>
    </section>
  );
};

export default TrendingSection;
