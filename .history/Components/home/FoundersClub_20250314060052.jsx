"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FoundersClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    sportGame: "",
    mobile: "",
    email: "",
    platform: "",
    referral: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webAppUrl = "https://script.google.com/macros/s/AKfycbxbfHdEfzPT4mIeJ-GHO_A4M9bNQ8eaUqCW1BEEtEuzJ77DriFt5DPP0Xw_j_tDr9xe/exec";
  
    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log("Google Sheets response:", result);
  
      if (result.status === "success") {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            sportGame: "",
            mobile: "",
            email: "",
            platform: "",
            referral: "",
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div 
        className="bg-gray-900 rounded-lg overflow-hidden mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <section className="py-12 px-4 bg-black text-white relative overflow-hidden">
          {/* Background animated elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl opacity-5"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-5"
            animate={{ 
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut" 
            }}
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto mb-6 flex justify-center"
            >
              <motion.div
                animate={{ 
                  rotateZ: [0, 10, 0, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Crown className="h-12 w-12 text-green-400" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-3"
              >
                Join the Founders' Club
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 mb-8"
              >
                Be among the first 200 content creators to shape the future of
                Atrena
              </motion.p>

              {submitted ? (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-800 rounded-lg p-8 mb-6"
                >
                  <motion.div 
                    className="mx-auto flex justify-center mb-4"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Sign Up Successful!</h3>
                  <p className="text-gray-400">Thank you for joining the Founders' Club</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-lg mx-auto text-left"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {[
                      { id: "name", label: "Name:", type: "text" },
                      { id: "sportGame", label: "Sport/Game:", type: "text" },
                      { id: "mobile", label: "Mobile:", type: "tel" },
                      { id: "email", label: "Email ID:", type: "email", placeholder: "Enter your email" },
                      { id: "platform", label: "Current Stream/Content Platform:", type: "text" },
                      { id: "referral", label: "How did you find us?", type: "text" }
                    ].map((field, index) => (
                      <motion.div 
                        key={field.id}
                        variants={formItemVariants}
                        custom={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <label
                          htmlFor={field.id}
                          className="block text-sm text-gray-400 mb-1"
                        >
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          placeholder={field.placeholder || ""}
                          className="w-full h-10 px-4 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 transition-all"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#34D399" }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="px-8 py-2 bg-green-400 text-white hover:bg-green-500 rounded font-medium"
                    >
                      Sign Up Early
                    </Button>
                  </motion.div>
                </motion.form>
              )}

              <motion.p 
                variants={itemVariants}
                className="text-xs text-gray-500 mt-5"
              >
                <motion.span
                  animate={{ 
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Only 200 spots available
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FoundersClub;