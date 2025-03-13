'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-500 min-h-screen">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
            <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 ..."></path>
          </svg>
        </a>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-blue-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
            <li key={item}>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:items-center space-x-3">
          <a className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl" href="#">Sign In</a>
          <a className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl" href="#">Sign Up</a>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-25 z-50">
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r">
            <button className="mb-4" onClick={() => setIsOpen(false)}>Close</button>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
