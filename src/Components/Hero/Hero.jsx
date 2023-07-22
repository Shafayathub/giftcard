/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/images/background.jpg';
import image1 from '../../assets/images/bigsale.png';

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full grid grid-cols-6 gap-3">
          <div className="hidden md:col-span-2  md:block">
            <div className="bg-base-300 text-gray-900 text-left px-10 py-5">
              <ul>
                <li className="grid grid-cols-2 gap-5">
                  Games{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
                    />
                  </svg>
                </li>
                <li className="grid grid-cols-2 gap-5">
                  Gift Crads{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
                    />
                  </svg>
                </li>
                <li className="grid grid-cols-2 gap-5">
                  Best Seller{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 col-span-6">
            <div className="carousel w-full max-h-screen">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
