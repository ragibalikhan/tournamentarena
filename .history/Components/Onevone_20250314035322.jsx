'use client';

import { motion } from 'framer-motion';

export default function TournamentMatchup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative flex items-center justify-center bg-black min-h-screen p-6"
    >
      <div className="relative flex w-full max-w-5xl items-center justify-center">
        {/* Left Side */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative flex-1 flex flex-col items-center text-white bg-green-700 rounded-xl p-6"
        >
          <img src="/phoenix.png" alt="Phoenix" className="w-48 h-48 rounded-full" />
          <h2 className="text-4xl font-bold mt-4">PHOENIX</h2>
          <p className="text-red-400 text-lg">United Kingdom</p>
        </motion.div>
        
        {/* Center Section */}
        <div className="relative flex flex-col items-center bg-green-900 text-white rounded-xl p-6 mx-4">
          <h1 className="text-2xl font-bold">Join The Big Tournament</h1>
          <p className="text-center text-sm mt-2">Welcome to Aterna - The next generation streaming platform for gamers and sports enthusiasts. Join our community and start streaming today.</p>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full text-lg font-bold"
          >
            1 vs 1
          </motion.div>
        </div>
        
        {/* Right Side */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative flex-1 flex flex-col items-center text-white bg-green-700 rounded-xl p-6"
        >
          <img src="/sage.png" alt="Sage" className="w-48 h-48 rounded-full" />
          <h2 className="text-4xl font-bold mt-4">SAGE</h2>
          <p className="text-red-400 text-lg">Spain</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
