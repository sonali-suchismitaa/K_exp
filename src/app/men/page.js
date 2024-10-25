// pages/women/index.js
import React from 'react';
import Footer from '../Components/Footer';
import { useRouter } from 'next/navigation'

const page = () => {
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
    <img
      src="/logo.svg"
      alt="Logo"
      width={200}
      height={600}
      className="px-4"
    />
    <ul className="flex flex-wrap space-x-6 lg:space-x-28 list-none text-white ml-auto text-base md:text-lg lg:text-xl px-6">
      <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Home</li>
      <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToMen}>Men</li>
      <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToWomen}>Women</li>
      <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer" onClick={navigateToContacts}>Contact</li>
      <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Cart</li>
      <button className="border border-white rounded hover:bg-green-300 px-4 py-2">
        Login
      </button>
    </ul>
  </nav>

  {/* Main Content */}
  <div className="container mx-auto py-12">
    {/* Section Title */}
    <h2 className="text-center text-3xl font-bold mb-8 text-[#9D5A20]">Men</h2>

    {/* Filter and Sort */}
    <div className="flex justify-end mb-4 space-x-4">
      <button className="flex items-center bg-orange-300 text-white px-4 py-2 rounded-full">
        Sort By
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </button>
      <button className="flex items-center bg-orange-300 text-white px-4 py-2 rounded-full">
        Filter
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V20a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
      </button>
    </div>

    {/* Top Row of Products (4 items) */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {Array(4).fill().map((_, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={`m${(index % 2) + 1}.png`} alt="Product" className="mb-4 w-full" />
          <h3 className="text-center text-xl font-bold mb-2 text-[#6C4422]">Rs 5999</h3>
          <p className="text-center text-gray-500 line-through">Rs 8999</p>
        </div>
      ))}
    </div>

    {/* Bottom Row of Products (4 items) */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {Array(4).fill().map((_, index) => (
        <div key={index + 4} className="bg-white p-4 rounded-lg shadow-md">
          <img src={`m${(index % 2) + 1}.png`} alt="Product" className="mb-4 w-full" />
          <h3 className="text-center text-xl font-bold mb-2 text-[#6C4422]">Rs 5999</h3>
          <p className="text-center text-gray-500 line-through">Rs 8999</p>
        </div>
      ))}
    </div>
  </div>
  <Footer />
</div>
  );
};

export default page;
