"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";
import { Crown, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const FoundersClub = () => {
  const initialState = {
    name: "",
    sportGame: "",
    mobile: "",
    email: "",
    platform: "",
    referral: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.sportGame.trim())
      newErrors.sportGame = "Sport/Game is required.";
    if (!/^\d{10}$/.test(formData.mobile.trim()))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = "Enter a valid email address.";
    if (!formData.platform.trim()) newErrors.platform = "Platform is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsLoading(true);
    const webAppUrl =
      "https://script.google.com/macros/s/AKfycbxSjJ0BWdN9HJxcA30UYPKo3ZwORWN4wJYwD10hFuCIU83gDZQ4R4ngiYgVizFEu94B/exec";

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors", // 👈 Fix CORS issue
      });

      const result = await response.json();

      if (response.ok && result?.status === "success") {
        toast.success("Sign-up successful! 🎉");
        setFormData(initialState);
      } else {
        throw new Error(result?.message || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.error(error.message || "Error submitting data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-8 sm:py-12 px-3 sm:px-4 bg-black text-white relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="mx-auto mb-4 sm:mb-6 flex justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="h-10 w-10 sm:h-12 sm:w-12 text-green-400" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
              Join the Founders' Club
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
              Be among the first 200 content creators to shape the future of
              Atrena
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[
                { id: "name", label: "Name:", type: "text" },
                { id: "sportGame", label: "Sport/Game:", type: "text" },
                { id: "mobile", label: "Mobile:", type: "tel" },
                { id: "email", label: "Email ID:", type: "email" },
                {
                  id: "platform",
                  label: "Current Stream/Content Platform:",
                  type: "text",
                },
                { id: "referral", label: "How did you find us?", type: "text" },
              ].map((field) => (
                <div key={field.id} className="mb-3">
                  <label
                    htmlFor={field.id}
                    className="block text-xs sm:text-sm text-gray-400 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`w-full h-9 px-3 bg-transparent border rounded-md focus:ring-1 focus:ring-green-400 ${
                      errors[field.id] ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors[field.id] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 bg-green-400 text-white hover:bg-green-500 rounded font-medium transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin h-4 w-4 sm:h-5 sm:w-5" />{" "}
                      Submitting...
                    </div>
                  ) : (
                    "Sign Up Early"
                  )}
                </Button>
              </div>
            </motion.form>

            <p className="text-2xs sm:text-xs text-gray-500 mt-4 sm:mt-5">
              Only 200 spots available
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FoundersClub;
