"use client";
import React from 'react';

// UserIcon 
const CustomUserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
    <g fill="none" stroke="black" strokeWidth={1.5}>
      <circle cx={12} cy={6} r={4}></circle>
      <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" opacity={1}></path>
    </g>
  </svg>
);

function page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center p-3 flex-wrap bg-orange-400">
        <img
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={600}
          className="px-4"
        />
        <ul className="flex flex-wrap space-x-6 lg:space-x-28 list-none text-white ml-auto text-base md:text-lg lg:text-xl px-6">
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Home</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Men</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Women</li>
          <li className=" bg-white text-black rounded px-3 py-1 cursor-pointer">Contact</li>
          <li className="hover:bg-white hover:text-black rounded px-3 py-1 cursor-pointer">Cart</li>
          <button className="border border-white rounded hover:bg-green-300 px-4 py-2">
            Login
          </button>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-grow bg-[#FFEAD8]">
        {/* Contact Us Section */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-[#9D5A20]">Contact Us</h1>
          <p className="text-lg mt-2 mb-10 text-[#9D5A20]">Any queries? Just mail our team.</p>
        </div>

        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-6 md:px-12 lg:px-24 pb-24">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex flex-wrap justify-center items-center min-h-[225px] max-w-sm relative bg-[#FFD8B5] p-6 rounded-lg text-center hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out group
                ${index === contacts.length - 1 && contacts.length % 3 === 1 ? 'md:col-start-2' : ''}
                ${index === contacts.length - 1 && contacts.length % 3 === 2 ? 'md:col-start-2 md:col-span-1' : ''}`}
            >
              {/* Floating User Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full p-3">
                  <CustomUserIcon />
                </div>
              </div>
              {/* Contact Details */}
              <div className="pt-8">
                <h2 className="text-xl font-semibold text-[#a16a3a] group-hover:text-white">{contact.name}</h2>
                <p className="text-lg mt-2 text-[#a16a3a] group-hover:text-white">{contact.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact data
const contacts = [
  { name: 'Piyush Mishra', email: '22053610@kiit.ac.in' },
  { name: 'Debi Prasanna Dash', email: '22053682@kiit.ac.in' },
  { name: 'Piyush Ku. Jena', email: '22053611@kiit.ac.in' },
  { name: 'Sonali Suchismita', email: '22053640@kiit.ac.in' },
  { name: 'Swagat Patel', email: '22053649@kiit.ac.in' },
  { name: 'Brajamohan Das', email: '22053677@kiit.ac.in' },
  { name: 'Pawani Yadav', email: '22053609@kiit.ac.in' },
  { name: 'Swoyamjeet Sahu', email: '22053733@kiit.ac.in' },
  { name: 'Prateek Parija', email: '22053614@kiit.ac.in' },
  { name: 'Priyanshu Kumar Patra', email: '22053703@kiit.ac.in' },
];

export default page;
