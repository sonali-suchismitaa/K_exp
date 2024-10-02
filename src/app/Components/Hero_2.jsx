"use client";
import React from 'react';
import Head from 'next/head';

function Hero_2() {
    return (
        <div className="bg-orange-200 flex items-center justify-center min-h-screen">
            <Head>
                <title>Best Selling Sneakers</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.tailwindcss.com"></script>

            </Head>
            <div className="text-center max-w-4xl mx-auto p-8">
                {/* Heading */}
                <h1 className="text-4xl font-bold mb-4">Best Selling</h1>
                <p className="text-lg mb-8">Join The Trend With Our Curated Selection Of Best Selling Sneakers</p>
                
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {/* Sneaker 1 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/1.png" alt="Sneaker 1" className="w-full h-40 object-contain" />
                    </div>
                    {/* Sneaker 2 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/2.png" alt="Sneaker 2" className="w-full h-40 object-contain -translate-y-2" />
                    </div>
                    {/* Sneaker 3 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/3.png" alt="Sneaker 3" className="w-full h-40 object-contain transform scale-x-[-1] translate-y-2" />
                    </div>
                </div>
                
                {/* View More Button */}
                <a href="#" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-700">
                    View More →
                </a>
            </div>
        </div>
    );
}

export default Hero_2;