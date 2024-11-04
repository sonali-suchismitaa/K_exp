"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero5() {
    const feedbacks = [
        { name: "Swagat Patel", message: "Great Service. Loved the product. Looking forward to shop more with Urban Steps." },
        { name: "Swoyamjeet Sahu", message: "Great Service. Loved the product. The customer experience was top-notch." },
        { name: "Sonali Suchismita", message: "Great Service. The customer experience was top-notch." },
        { name: "Brajamohan Das", message: "Looking forward to shop more with Urban Steps." },
        { name: "Priyanshu Kumar Patra", message: "Great Service. The customer experience was top-notch." },
        { name: "Piyush Mishra", message: "The customer experience was top-notch." },
        { name: "Piyush Kumar Jena", message: "Loved the product. Looking forward to shop more." },
        { name: "Pawani Yadav", message: "Great Service. Looking forward to shop more." },
        { name: "Prateek Parija", message: "Great Service. Loved the product." },
        { name: "Debi Prasanna Dash", message: "The customer experience was top-notch." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [hasMounted, setHasMounted] = useState(false);

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
        setHasMounted(true);
        const interval = setInterval(() => {
            setDirection(1);
            updateIndex(currentIndex + 1);
        }, 5000);

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

    if (!hasMounted) return null;

    return (
        <div className="bg-[#FFA14F] h-auto w-full pt-16 pb-5">
            <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold text-center text-white mb-8 font-spartan">
                Feedback Corner
            </h2>

            <div className="relative overflow-hidden px-4" style={{ minHeight: '350px' }}>
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
                        <div className="flex justify-center items-center h-full font-spartan">
                            <div className="bg-orange-200 bg-opacity-50 p-5 m-2 text-center flex flex-col justify-center items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3" style={{ height: "300px" }}>
                                <p className="text-white text-[20px] md:text-[25px] lg:text-[35px] flex justify-center items-center text-center" style={{ minHeight: "100px" }}>
                                    &ldquo; {feedbacks[currentIndex].message} &rdquo;
                                </p>
                                <h5 className="font-bold text-[30px] md:text-[40px] lg:text-[50px] mt-4 text-white text-center">
                                    {feedbacks[currentIndex].name}
                                </h5>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-orange-500 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full focus:outline-none transition duration-300 z-10"
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white hover:bg-orange-500 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full focus:outline-none transition duration-300 z-10"
                    onClick={handleNext}
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center mt-4">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        className={`w-6 h-1 md:w-8 mx-1 focus:outline-none transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white opacity-50'}`}
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
