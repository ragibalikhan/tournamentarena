'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-2xl"
      >
        {isPlaying ? (
          <motion.video 
            src="/hero-video.mp4" 
            controls 
            autoPlay 
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src="/heroimg.png" 
              alt="Video Thumbnail" 
              className="w-full h-auto rounded-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className=" bg-opacity-30 p-6 rounded-full backdrop-blur-md shadow-lg transition-all duration-300">
                <span className="text-4xl text-white">▶</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default VideoSection;
