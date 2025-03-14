'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const VideoSec = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[80%] max-w-4xl bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        {isPlaying ? (
          <motion.video 
            src="/sample-video.mp4" 
            controls 
            autoPlay 
            className="w-full h-auto rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src="/video-thumbnail.jpg" 
              alt="Video Thumbnail" 
              className="w-full h-auto rounded-lg"
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-green-500 p-4 rounded-full">
                ▶️
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default VideoSec;
