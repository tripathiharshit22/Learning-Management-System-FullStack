import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b rgb(255 255 255 / 70%)">
      <SearchBar />
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
      No fluff. Just focused learning.
        <span className="text-gray-600">    Crafted to fit your lifestyle.</span>
        {/* <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" /> */}
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        Explore flexible, expert-led courses designed to help you grow confidently in your personal and professional journey.
      </p>
      
      
    </div>



  );
};

export default Hero;
