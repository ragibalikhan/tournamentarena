'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  { id: "1tXmGhKmzEGyHAv8xZLGbpx8IBKb5Do3o", thumbnail: "/thumb1.jpg" },
  { id: "1WjAxRk8pu2_ONBm9Cz9qmv9iCpPMozvF", thumbnail: "/thumb2.jpg" }
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="relative w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-2xl overflow-hidden">
        
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.video
              key={videos[currentIndex].id}
              src={"/v1.mp4"}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div 
              key={videos[currentIndex].id}
              className="relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsPlaying(true)}
            >
              <img src={videos[currentIndex].thumbnail} alt="Thumbnail" className="w-full h-auto rounded-lg" />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white bg-opacity-30 p-6 rounded-full backdrop-blur-md shadow-lg">
                  <span className="text-4xl text-white">▶</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        {!isPlaying && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
            <button onClick={prevSlide} className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700">⬅</button>
            <button onClick={nextSlide} className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700">➡</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSlider;
