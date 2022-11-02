import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
      <div className="hero my-16 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img alt="" src={person} className=" w-4/5 rounded-lg shadow-2xl" />
            <img
              alt=""
              src={parts}
              className=" absolute left-60 border-8 border-white w-1/2 top-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <p className="text-md font-bold text-red-500 mb-2">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-3">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-info  w-20 md:w-28 lg:w-36 rounded-md text-white font-semibold ">
              Discover More
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;