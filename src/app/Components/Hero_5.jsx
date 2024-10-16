"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero5() {
    const feedbacks = [
        { name: "Swagat Patel", message: "Great Service. Loved the product. Looking forward to shop more with Sneakers Factory." },
        { name: "Swoyamjeet Sahu", message: "Great Service. Loved the product. The customer experience was top-notch." },
        { name: "Sonali Suchismita", message: "Great Service. The customer experience was top-notch." },
        { name: "Brajamohan Das", message: "Looking forward to shop more with Sneakers Factory." },
        { name: "Priyanshu Kumar Patra", message: "Great Service. The customer experience was top-notch." },
        { name: "Piyush Mishra", message: "The customer experience was top-notch." },
        { name: "Piyush Kumar Jena", message: "Loved the product. Looking forward to shop more." },
        { name: "Pawani Yadav", message: "Great Service. Looking forward to shop more." },
        { name: "Prateek Parija", message: "Great Service. Loved the product." },
        { name: "Debi Prasanna Dash", message: "The customer experience was top-notch." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [hasMounted, setHasMounted] = useState(false); // To check if the component has mounted

    const updateIndex = useCallback((newIndex) => {
        if (newIndex < 0) {
            setCurrentIndex(feedbacks.length - 1);
        } else if (newIndex >= feedbacks.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    }, [feedbacks.length]);

    useEffect(() => {
        setHasMounted(true); // Set mounted to true on client-side
        const interval = setInterval(() => {
            setDirection(1);
            updateIndex(currentIndex + 1);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, updateIndex]);

    const handlePrev = () => {
        setDirection(-1);
        updateIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setDirection(1);
        updateIndex(currentIndex + 1);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    if (!hasMounted) return null; // Return null while mounting on server

    return (
        <div className="bg-[#FFA14F] h-auto w-auto pt-16 pb-5">
            <h2 className="text-[60px] font-bold text-center text-white mb-8 font-spartan">
                Feedback Corner
            </h2>

            <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full"
                    >
                        <div className="flex justify-center align-items-center h-full font-spartan">
                            <div className="bg-orange-200 bg-opacity-50 p-5 m-2 text-center flex flex-col justify-center items-center" style={{ width: "50%", height: "300px" }}>
                                <p className="text-white text-[35px]" style={{ minHeight: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    &ldquo; {feedbacks[currentIndex].message} &rdquo;
                                </p>
                                <h5 className="font-bold text-[50px] mt-4 text-white text-center">
                                    {feedbacks[currentIndex].name}
                                </h5>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons with SVG icons */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none transition duration-300 z-10"
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none transition duration-300 z-10"
                    onClick={handleNext}
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Navigation Indicators */}
            <div className="flex justify-center mt-4">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        className={`w-8 h-1 mx-1 focus:outline-none transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white opacity-50'}`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            updateIndex(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero5;
