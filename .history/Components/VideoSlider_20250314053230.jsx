'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { id: "1tXmGhKmzEGyHAv8xZLGbpx8IBKb5Do3o", thumbnail: "/thumb1.jpg" },
    { id: "1WjAxRk8pu2_ONBm9Cz9qmv9iCpPMozvF", thumbnail: "/thumb2.jpg" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-2xl"
      >
        {currentVideo ? (
          <motion.video
            src={`https://drive.google.com/uc?export=download&id=${currentVideo}`}
            controls
            autoPlay
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <Slider {...settings}>
            {videos.map((video) => (
              <motion.div key={video.id} className="relative cursor-pointer group" onClick={() => setCurrentVideo(video.id)}>
                <img src={video.thumbnail} alt="Video Thumbnail" className="w-full h-auto rounded-lg group-hover:opacity-80 transition-opacity duration-300" />
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white bg-opacity-30 p-6 rounded-full backdrop-blur-md shadow-lg transition-all duration-300">
                    <span className="text-4xl text-white">▶</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        )}
      </motion.div>
    </section>
  );
};

export default VideoSlider;
