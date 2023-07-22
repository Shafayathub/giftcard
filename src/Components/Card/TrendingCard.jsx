/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/images/cardImage.jpg';

const TrendingCard = () => {
  return (
    <div className="card w-80 glass shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
