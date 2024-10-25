"use client";
import React from 'react';
import { useRouter } from 'next/navigation'

function Hero_1() {

  const router = useRouter();
  const navigateToMen = () =>{
    router.push('/men')
  };
  const navigateToWomen = () =>{
    router.push('/women')
  };
  const navigateToContacts = () =>{
    router.push('/contacts')
  };
  const navigateToLogin = () =>{
    router.push('/login')
  };

  return (
    <div className="bg-orange-400 min-h-screen w-full">
      {/* Navbar */}
      <nav className="flex items-center p-3 flex-wrap">
        <img src="/logo.svg" alt="Logo" width={200} height={600} className="px-4" />
        <ul className="flex flex-wrap space-x-6 lg:space-x-28 list-none text-white ml-auto text-base md:text-lg lg:text-xl px-6">
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Home</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToMen}>Mens</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToWomen}>Women</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToContacts}>Contact</li> {/* Fixed the handler name */}
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Cart</li>
          <button className="border border-white rounded hover:bg-green-300 px-4 py-2" onClick={navigateToLogin}>
            Login
          </button>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 py-12 space-y-6 md:space-y-0 md:space-x-12 lg:space-x-[20%]">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Unleash Your
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Style.
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-thin text-white mt-4">
            Curated Collection of Sneakers
          </h2>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-thin text-white mb-6">
            At Best Ever Price
          </h2>
          <button className="bg-black rounded hover:bg-green-300 text-white px-6 py-3">
            Explore
          </button>
        </div>

        <img
          src="/start_shoe.svg"
          alt="Sneakers"
          className="w-[60%] md:w-[40%] lg:w-[35%] h-auto mx-auto md:ml-0"
        />
      </div>
    </div>
  );
}

export default Hero_1;
