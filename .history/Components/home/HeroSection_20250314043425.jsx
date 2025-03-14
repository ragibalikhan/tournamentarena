"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import herobg from '../../assets/images/heroimg.png'

// Carousel dots component
const CarouselDots = ({ total, active, onDotClick }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${
            active === index ? 'bg-teal-400' : 'bg-white'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Category button component
const CategoryButton = ({ icon, label, isActive }) => {
  return (
    <button
      className={`flex items-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
        isActive ? 'bg-teal-500' : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

// Hero section component
const HeroSection = ({ activeSlide, totalSlides, onDotClick }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt="Gaming background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center px-16 max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-white leading-tight mb-6">
          The Ultimate Gaming &<br />
          Sports Streaming Platform
        </h1>
        <p className="text-xl text-white mb-10">
          Join the next generation of competitive gaming and sports streaming
        </p>
        
        <div className="flex items-center space-x-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Start Watching
          </button>
          <button className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-400 bg-opacity-20 text-teal-400 mr-2">
              i
            </span>
            What is Atrena?
          </button>
        </div>
      </div>
      
      {/* Carousel dots */}
      <div className="absolute bottom-8 w-full">
        <CarouselDots total={totalSlides} active={activeSlide} onDotClick={onDotClick} />
      </div>
    </div>
  );
};

// Category tabs component


// Main component
const StreamingPlatform = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <HeroSection 
        activeSlide={activeSlide} 
        totalSlides={totalSlides} 
        onDotClick={setActiveSlide} 
      />
      
    </div>
  );
};

export default StreamingPlatform;