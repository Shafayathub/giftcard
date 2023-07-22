/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/images/cardImage.jpg';

const Card = () => {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
