'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image src="/gaming-background.jpg" alt="Gaming Background" layout="fill" objectFit="cover" className="opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          The Ultimate Gaming & Sports Streaming Platform
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          Join the next generation of competitive gaming and sports streaming
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex justify-center gap-4"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;