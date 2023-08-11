/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TrendingCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  // const { name, img, catagory, price, oldPrice, about } = product;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="card w-80 glass shadow-xl">
      <figure>
        <img src={product?.img} alt={product?.name} className="w-full" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">
          {product?.name}
          <div className="badge bg-red-700 text-white">{product?.catagory}</div>
        </h2>
        <p className="text-base">{product?.about}</p>
        <div className="card-actions justify-start">
          <h5 className="badge badge-outline">{product?.price}$</h5>
          <h5 className="badge badge-outline line-through">
            {product?.oldPrice}$
          </h5>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuyNow(product?._id)}
            className="btn bg-red-700 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
