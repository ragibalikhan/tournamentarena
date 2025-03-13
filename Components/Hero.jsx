'use client'
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Thumbnail Image (Visible Before Clicking) */}
      {!isPlaying && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer">
          <Image
            src="/heroimg.png" // Thumbnail Image
            alt="Hero Thumbnail"
            layout="fill"
            objectFit="cover"
            className="z-10"
            onClick={() => setIsPlaying(true)}
          />
          {/* Play Button Overlay */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute px-6 py-5 bg-[#46C190]  text-white text-lg font-semibold rounded-full transition z-20"
          >
            ▶
          </button>
        </div>
      )}

      {/* Video Background (Visible After Clicking) */}
      {isPlaying && (
        <video
          autoPlay
          controls
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Join The Big Tournament
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Welcome to Atrena - The next generation streaming platform for gamers
          and sports enthusiasts. Join our community and start streaming today.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
