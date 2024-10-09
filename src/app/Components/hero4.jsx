"use client"
import React from 'react';
import { useRouter } from 'next/navigation'


const ShoeStore = () => {
  const router = useRouter(); // Initialize useRouter

  // Navigation handlers
  const navigateToMen = () => {
    router.push('/men'); // Navigate to /men page
  };

  const navigateToWomen = () => {
    router.push('/women'); // Navigate to /women page
  };

  return (
    <div className=" bg-orange-300">
      {/* Container */}
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            The Perfect Shoe for Every Individuality.
          </h1>
        </header>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" >
          {/* Men Section */}
          <div className="relative">
          <img src="/image1.png" className="w-full h-full object-cover rounded-lg cursor-pointer" onClick={navigateToMen}/>
            <div className="absolute bottom-4 left-4 bg-orange-500 bg-opacity-90 text-white px-4 py-2 rounded-lg text-2xl font-bold" onClick={navigateToMen}>Men</div>
          </div>

          {/* Women Section */}
          <div className="relative">
            <img src="image2.png" alt="Women" className="w-full h-full object-cover rounded-lg cursor-pointer" onClick={navigateToWomen}/>
            <div className="absolute bottom-4 left-4 bg-orange-500 bg-opacity-90 text-white px-4 py-2 rounded-lg text-2xl font-bold" onClick={navigateToWomen}>Women</div>
          </div>

          {/* Kids and Clothing Stacked (Right Side) */}
          <div className="grid grid-rows-2 gap-4">
            {/* Kids Section */}
            <div className="relative">
              <img src="image3.png" alt="Kids" className="w-full h-full object-cover rounded-lg cursor-pointer" />
              <div className="absolute bottom-4 left-4 bg-orange-500 bg-opacity-90 text-white px-4 py-2 rounded-lg text-2xl font-bold">Kids</div>
            </div>

            {/* Clothing Section */}
            <div className="relative">
              <img src="image4.png" alt="Clothing" className="w-full h-full object-cover rounded-lg cursor-pointer" />
              <div className="absolute bottom-4 left-4 bg-orange-500 bg-opacity-90 text-white px-4 py-2 rounded-lg text-2xl font-bold">Clothing</div>
            </div>
          </div>
        </div>

        {/* 50% Off Store Promo */}
        <div className=" bg-orange-400 text-white p-6 rounded-lg shadow-md flex items-center justify-between max-w-10xl mx-auto cursor-pointer">
          <img src="image5.png" alt="Promo Image" className="w-[16%] h-[8%] object-cover rounded-full cursor-pointer" />
          <a href="#" className="text-6xl font-bold text-white no-underline">The 50% Off Store →</a>
        </div>
      </div>
    </div>
  );
};

export default ShoeStore;