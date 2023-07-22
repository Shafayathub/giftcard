/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Card/Card';
import BgImage from '../../assets/images/background.jpg';
const CardSection = () => {
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default CardSection;
