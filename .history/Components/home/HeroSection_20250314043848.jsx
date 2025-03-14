"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import herobg from '../../assets/images/heroimg.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

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

const HeroSection = ({ activeSlide, totalSlides, onDotClick }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      
      <div className="relative h-full flex flex-col justify-center px-16 max-w-6xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-6xl font-bold text-white leading-tight mb-6"
        >
          The Ultimate Gaming &<br /> Sports Streaming Platform
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl text-white mb-10"
        >
          Join the next generation of competitive gaming and sports streaming
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center space-x-4"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Start Watching
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-400 bg-opacity-20 text-teal-400 mr-2">
              i
            </span>
            What is Atrena?
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 w-full">
        <CarouselDots total={totalSlides} active={activeSlide} onDotClick={onDotClick} />
      </div>
    </div>
  );
};

const SectionWithBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt="Section background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center px-8 text-center max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-5xl font-bold text-white mb-6"
        >
          Discover Exclusive Content & Live Events
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg text-white mb-8"
        >
          Stay ahead in the world of gaming and sports entertainment with our premium streaming services.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

// const StreamingPlatform = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const totalSlides = 6;
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);
  
//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <HeroSection 
//         activeSlide={activeSlide} 
//         totalSlides={totalSlides} 
//         onDotClick={setActiveSlide} 
//       />
//       <SectionWithBackground />
//     </div>
//   );
// };

// export default StreamingPlatform;