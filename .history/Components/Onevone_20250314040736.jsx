'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TournamentMatchup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative flex items-center justify-center bg-black min-h-screen p-6"
    >
      <div className="relative flex w-full max-w-6xl items-center justify-center">
        {/* Left Side */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          whileHover={{ y: -10 }}
          className="relative flex-1 flex flex-col items-center text-white bg-gradient-to-b from-[#065F46] to-[#043B2D] rounded-[30px] p-8 shadow-lg overflow-hidden border border-green-600"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            animate={{ x: [0, 200, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          ></motion.div>
          <Image src="/Tanner.png" alt="Phoenix" width={150} height={150} className="w-48 h-48 rounded-full" />
          <h2 className="text-4xl font-bold mt-4 uppercase tracking-wide">PHOENIX</h2>
          <p className="text-red-400 text-lg uppercase tracking-widest">United Kingdom</p>
        </motion.div>
        
        {/* Center Section */}
        <div className="relative flex flex-col items-center bg-gradient-to-b from-[#0E4D3A] to-[#093229] text-white rounded-[30px] p-10 mx-4 text-center shadow-xl border border-green-700">
          <h1 className="text-3xl font-bold">Join The Big Tournament</h1>
          <p className="text-sm mt-2 max-w-sm">Welcome to Aterna - The next generation streaming platform for gamers and sports enthusiasts. Join our community and start streaming today.</p>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md cursor-pointer"
          >
            1 vs 1
          </motion.div>
        </div>
        
        {/* Right Side */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          whileHover={{ y: -10 }}
          className="relative flex-1 flex flex-col items-center text-white bg-gradient-to-b from-[#065F46] to-[#043B2D] rounded-[30px] p-8 shadow-lg overflow-hidden border border-green-600"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            animate={{ x: [0, 200, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          ></motion.div>
          <Image src="/Tyler.png" alt="Sage" width={150} height={150} className="w-48 h-48 rounded-full" />
          <h2 className="text-4xl font-bold mt-4 uppercase tracking-wide">SAGE</h2>
          <p className="text-red-400 text-lg uppercase tracking-widest">Spain</p>
        </motion.div>
      </div>
    </motion.div>
  );
}