"use client";
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

function Hero_1() {
  return (
    <div className="bg-orange-400 h-auto w-auto">
      <nav className="flex items-center p-3">
        <img src="logo_sf.svg" alt="Logo" className=" px-[2%]" />
        <ul className="flex  mr-[12%] space-x-7 list-none text-white ml-auto text-[140%]">
          <li className="hover:bg-green-300 rounded">Home</li>
          <li className="hover:bg-green-300 rounded">Shop</li>
          <li className="hover:bg-green-300 rounded">Features</li>
          <li className="hover:bg-green-300 rounded">Contact</li>
          <li className="hover:bg-green-300 rounded">Cart</li>
          <button className='border border-white rounded hover:bg-green-300 h-[200%] w-[200%]'>Login</button>
        </ul>
      </nav>

      <div className="flex px-[8%] py-[3%] space-x-[20%] items-center">
        <div className="">
          <h1 className="text-[50px] font-bold text-white">Unleash Your</h1>
          <h1 className="text-[50px] font-bold text-white">Style.</h1>
          <h2 className="text-[24px] font-thin text-white">Curated Collection of Sneakers</h2>
          <h2 className="text-[24px] font-thin text-white">At Best Ever Price</h2>
          <button className=" bg-black rounded hover:bg-green-300 text-white px-6 py-3">
            Explore
          </button>
        </div>
        <img src="start_shoe.svg" alt="Sneakers" className="w-[40%] h-[50%] mr-[50%]" />
      </div>
    </div>
  );
}

export default Hero_1;
