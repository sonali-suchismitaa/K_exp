"use client";
import React, { useState } from "react";

function Hero5() {
    // Feedback data
    const feedbacks = [
        {
            name: "Swagat Patel",
            message: "Great Service. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Swoyamjeet Sahu",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Sonali Suchismita",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Brajamohan Das",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Priyanshu Kumar Patra",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Piyush Kumar Mishra",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Piyush Kumar Jena",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Pawani Yadav",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Prateek Parija",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        },
        {
            name: "Debi Prasanna Dash",
            message: "Great Service. Loved the product. The customer experience was top-notch. Looking forward to shop more with Sneakers Factory."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle left button click
    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Handle right button click
    const handleRightClick = () => {
        if (currentIndex < feedbacks.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className="bg-[#FFA14F] h-auto w-auto pt-16">
            {/* Title */}
            <h2 className="text-[60px] font-bold text-center text-white mb-16 font-spartan">
                Feedback Corner.
            </h2>

            {/* Feedback Cards Container */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {/* Render Feedback Cards */}
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="flex-none w-1/3 px-8">
                            <div className="bg-orange-200 bg-opacity-50 p-8">
                                <div className="items-baseline">
                                    <p className="text-6xl text-white leading-none">&ldquo;</p>
                                    <h1 className="text-4xl font-bold text-white">{feedback.name}</h1>
                                </div>
                                <p className="text-white text-[18px] font-inter leading-tight mt-4">
                                    {feedback.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-16 pb-8">
                <button
                    className={`items-center text-lg w-10 h-10 mx-2 rounded-full ${currentIndex === 0 ? "opacity-50" : "hover:bg-orange-500 transition duration-300"}`}
                    onClick={handleLeftClick}
                    disabled={currentIndex === 0}
                >
                    <span className="text-xl">&#9664;</span>
                </button>
                <button
                    className={`items-center text-lg w-10 h-10 mx-2 rounded-full ${currentIndex === feedbacks.length - 3 ? "opacity-50" : "hover:bg-orange-500 transition duration-300"}`}
                    onClick={handleRightClick}
                    disabled={currentIndex === feedbacks.length - 3}
                >
                    <span className="text-xl">&#9654;</span>
                </button>
            </div>
        </div>
    );
}

export default Hero5;