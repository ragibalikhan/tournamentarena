"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle, XCircle, Loader2 } from "lucide-react";
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

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: null, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.sportGame.trim()) newErrors.sportGame = "Sport/Game is required.";
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address.";
    if (!formData.platform.trim()) newErrors.platform = "Platform is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setStatus({ success: null, message: "" });

    const webAppUrl =
      "https://script.google.com/macros/s/AKfycbxxdWjrJtzs0Wz1vMo5hcFzSQ_PINcW_TIcx4C9o5rD5gJoYAM7CXsb174W2yW6pLiF/exec";

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",  // 🔹 Allow CORS
        credentials: "omit",  // 🔹 Prevent cookies from being sent
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus({ success: true, message: "Sign-up successful!" });
        setFormData({ name: "", sportGame: "", mobile: "", email: "", platform: "", referral: "" });
      } else {
        throw new Error(result.message || "Submission failed. Try again.");
      }
    } catch (error) {
      setStatus({ success: false, message: error.message || "Error submitting data. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div className="bg-gray-900 rounded-lg overflow-hidden mb-12">
        <section className="py-12 px-4 bg-black text-white relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div className="mx-auto mb-6 flex justify-center">
              <Crown className="h-12 w-12 text-green-400" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">Join the Founders' Club</h2>
            <p className="text-gray-400 mb-8">Be among the first 200 content creators to shape the future of Atrena</p>

            {status.success !== null && (
              <motion.div
                className={`rounded-lg p-6 mb-6 ${
                  status.success ? "bg-green-800" : "bg-red-800"
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  {status.success ? (
                    <CheckCircle className="h-10 w-10 text-white" />
                  ) : (
                    <XCircle className="h-10 w-10 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-bold">{status.message}</h3>
              </motion.div>
            )}

            <motion.form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
              <div className="grid grid-cols-1 gap-4 mb-6">
                {[
                  { id: "name", label: "Name:", type: "text" },
                  { id: "sportGame", label: "Sport/Game:", type: "text" },
                  { id: "mobile", label: "Mobile:", type: "tel" },
                  { id: "email", label: "Email ID:", type: "email" },
                  { id: "platform", label: "Current Stream/Content Platform:", type: "text" },
                  { id: "referral", label: "How did you find us?", type: "text" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm text-gray-400 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className={`w-full h-10 px-4 bg-transparent border rounded-md ${
                        errors[field.id] ? "border-red-500" : "border-gray-700"
                      }`}
                    />
                    {errors[field.id] && <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="px-8 py-2 bg-green-400 text-white hover:bg-green-500 rounded font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-5 w-5" /> Submitting...
                    </div>
                  ) : (
                    "Sign Up Early"
                  )}
                </Button>
              </div>
            </motion.form>

            <p className="text-xs text-gray-500 mt-5">Only 200 spots available</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FoundersClub;
