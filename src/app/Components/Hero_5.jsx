"use client";
import React, { useState, useEffect } from "react";

function Hero5() {
    const feedbacks = [
        { name: "Swagat Patel", message: "Great Service. Loved the product..." },
        { name: "Swoyamjeet Sahu", message: "Great Service. Loved the product..." },
        { name: "Sonali Suchismita", message: "Great Service. Loved the product..." },
        { name: "Brajamohan Das", message: "Great Service. Loved the product..." },
        { name: "Priyanshu Kumar Patra", message: "Great Service. Loved the product..." },
        { name: "Piyush Kumar Mishra", message: "Great Service. Loved the product..." },
        { name: "Piyush Kumar Jena", message: "Great Service. Loved the product..." },
        { name: "Pawani Yadav", message: "Great Service. Loved the product..." },
        { name: "Prateek Parija", message: "Great Service. Loved the product..." },
        { name: "Debi Prasanna Dash", message: "Great Service. Loved the product..." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle left button click
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : feedbacks.length - 1));
    };

    // Handle right button click
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < feedbacks.length - 1 ? prevIndex + 1 : 0));
    };

    // Auto-rotate functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex < feedbacks.length - 1 ? prevIndex + 1 : 0));
        }, 3000); // Change slides every 3 seconds

        // Cleanup on unmount
        return () => {
            clearInterval(interval);
        };
    }, [feedbacks.length]);

    return (
        <div className="bg-[#FFA14F] h-auto w-auto pt-16">
            <h2 className="text-4xl md:text-[60px] font-bold text-center text-white mb-8 md:mb-16 font-spartan">
                Feedback Corner.
            </h2>

            {/* Feedback Cards Container */}
            <div className="relative overflow-hidden max-w-full mx-auto px-4">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {feedbacks.map((feedback, index) => (
                        <div 
                            key={index} 
                            className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-8"
                        >
                            <div className="bg-orange-200 bg-opacity-50 p-8 rounded-lg">
                                <div className="items-baseline">
                                    <p className="text-4xl md:text-6xl text-white leading-none">&ldquo;</p>
                                    <h1 className="text-2xl md:text-4xl font-bold text-white">{feedback.name}</h1>
                                </div>
                                <p className="text-white text-[16px] md:text-[18px] font-inter leading-tight mt-4">
                                    {feedback.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 md:mt-16 pb-8">
                <button
                    className={`items-center text-lg w-10 h-10 mx-2 rounded-full ${currentIndex === 0 ? "opacity-50" : "hover:bg-orange-500 transition duration-300"}`}
                    onClick={handleLeftClick}
                >
                    <span className="text-xl">&#9664;</span>
                </button>
                <button
                    className={`items-center text-lg w-10 h-10 mx-2 rounded-full ${currentIndex === feedbacks.length - 1 ? "opacity-50" : "hover:bg-orange-500 transition duration-300"}`}
                    onClick={handleRightClick}
                >
                    <span className="text-xl">&#9654;</span>
                </button>
            </div>
        </div>
    );
}

export default Hero5;