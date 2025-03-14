'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'The Ultimate Gaming & Sports Streaming Platform',
    description: 'Join the next generation of competitive gaming and sports streaming',
    image: '/gaming-background.jpg'
  },
  {
    id: 2,
    title: 'Experience High-Quality Streaming',
    description: 'Watch your favorite eSports tournaments in stunning HD',
    image: '/gaming-background2.jpg'
  },
  {
    id: 3,
    title: 'Join a Community of Gamers',
    description: 'Connect with like-minded gamers and share your experiences',
    image: '/gaming-background3.jpg'
  }
];

const SHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 flex items-center justify-start px-12 ${index === currentSlide ? 'block' : 'hidden'}`}
        >
          {/* Background Image */}
          <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" className="opacity-40" />

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">{slide.description}</p>
            <div className="mt-6 flex gap-4">
              <Link href="#" passHref>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 text-black font-semibold px-6 py-3 rounded-lg"
                >
                  Start Watching
                </motion.button>
              </Link>
              <Link href="#" passHref>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <span className="text-xl">ℹ️</span>
                  What is Atrena?
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-500'}`}
          />
        ))}
      </div>

      {/* Auto Slide Transition */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }} 
        onAnimationComplete={nextSlide} 
      />
    </section>
  );
};

export default SHero;
