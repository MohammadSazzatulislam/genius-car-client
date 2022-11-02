import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  const { _id, img, price, title } = card;

  return (
    <div className="card  mx-auto w-96 bg-base-100 p-4 border-2 rounded-md shadow-xl">
      <figure>
        <img className="rounded-md" src={img} alt="Shoes" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-orange-600 font-semibold">Price :${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline btn-circle btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
