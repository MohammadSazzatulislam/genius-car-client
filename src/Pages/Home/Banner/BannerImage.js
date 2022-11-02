import React from "react";

import "./Banner.css";

const BannerImage = ({ slide }) => {
  const { image, id, prev, next } = slide;
  console.log(slide);

  return (
    <div
      id={`slide${id}`}
      className="carousel-item text-white relative w-full "
    >
      <div className=" carusol-img  ">
        <img alt="" src={image} className="w-full rounded-xl   " />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-28 md:left-12 left-6 right-5 top-1/4">
        <h1 className="lg:text-6xl md:text-3xl text-xl  font-bold lg:mb-8 md:mb-3 mb-12">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex w-2/5 justify-between transform -translate-y-1/2 lg:left-28 md:left-12 left-6 right-5  top-1/2">
        <p className=" lg:mb-10 md:mb-3 mb-0 lg:text-xl md:text-md text-sm ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-28 md:left-12 left-6 right-5  top-3/4">
        <button className="btn btn-info mr-5 w-20 md:w-28 lg:w-36 rounded-md text-white font-semibold ">
          Discover More
        </button>
        <button className="w-20 md:w-28 lg:w-36 text-white btn btn-outline rounded-md  font-semibold">
          Letest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle border-none hover:bg-orange-400 text-white mr-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle border-none hover:bg-orange-400 text-white"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerImage;
