/* eslint-disable no-unused-vars */
import React from 'react';

import image1 from '../../assets/images/carousel3.png';

import BgImage from '../../assets/images/carousel1.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero lg:min-h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content flex-col lg:flex-row md:gap-10 lg:gap-20 p-5">
        <img
          src={image1}
          className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg opacity-80"
        />
        <div className=" text-white">
          <h1 className="text-5xl font-bold">Entertainment is here!</h1>
          <p className="py-6">
            Tons of hot deals on video games, software, various gift cards, and
            more!
          </p>
          <div className="w-full flex justify-end lg:justify-start">
            <button
              onClick={() => navigate('/allproducts')}
              className="btn bg-red-600 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
