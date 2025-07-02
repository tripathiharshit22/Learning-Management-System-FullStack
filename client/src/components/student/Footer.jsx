import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Get smarter every week</h2>
          <p className="text-sm text-white/80">
          We will send you top content and helpful resources once a week — straight to your inbox.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-200/30 bg-black text-gray-500 placeholder-gray-600 outline-none w-64 h-9 rounded-3xl px-2 text-sm" type="email" placeholder="Enter your email" />
            <button className="bg-gray-200 w-24   h-9 text-black rounded-3xl">Update</button>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © HMT.All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
