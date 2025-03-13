'use client';

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000] text-white border-b border-b-[#46C190]" >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-3xl font-bold tracking-wide" href="#">
          ATR3NA
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {["Browser", "Categories"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 absolute w-full py-4 shadow-lg">
          <ul className="text-center space-y-4">
            {["Browser", "Categories"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
