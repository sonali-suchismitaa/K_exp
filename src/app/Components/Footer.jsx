"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import icons

function Footer() {
    return (
        <div className="bg-[#FED8B4] h-auto w-auto py-16 font-montserrat">
            <div className="container mx-auto px-4">
                {/* Flex container with responsive adjustments */}
                <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center space-y-10 lg:space-y-0 lg:space-x-28">
                    {/* Column 1: Get In Touch */}
                    <div className="lg:mr-40 text-center lg:text-left">
                        <h3 className="text-[24px] font-extrabold text-gray-800 mb-4">Get In Touch</h3>
                        <p className="text-gray-600 mb-6">The quick fox jumps over the lazy dog.</p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <FaFacebook className="text-orange-400 hover:text-orange-500 cursor-pointer" size={24} />
                            <FaInstagram className="text-orange-400 hover:text-orange-500 cursor-pointer" size={24} />
                            <FaTwitter className="text-orange-400 hover:text-orange-500 cursor-pointer" size={24} />
                        </div>
                    </div>

                    {/* Column 2: Company Info */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-[24px] font-bold text-gray-800 mb-4">Company Info</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">About Us</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">Career</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">We are hiring</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* Column 3: Features */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-[24px] font-bold text-gray-800 mb-4">Features</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">Business Marketing</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">User Analytics</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">Live Chat</li>
                            <li className="text-[14px] hover:text-orange-500 cursor-pointer">Unlimited Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
