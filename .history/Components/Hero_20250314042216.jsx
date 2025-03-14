'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsPlaying(false);
        controls.start({ opacity: 1, y: 0 });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Section */}
      {isPlaying && (
        <motion.video
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </motion.video>
      )}

      {/* Thumbnail Image When Video Stops */}
      {!isPlaying && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/heroimg.png"
            alt="Hero Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
            className="z-10"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute px-6 py-5 bg-[#46C190] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#3aa67c] transition z-20"
          >
            ▶
          </button>
        </motion.div>
      )}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Join The Big Tournament</h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Welcome to Atrena - The next generation streaming platform for gamers and sports enthusiasts. Join our community and start streaming today.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
