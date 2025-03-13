import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
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
