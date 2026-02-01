"use client";
import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SigninModal = ({ isOpen, onClose }: ModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault(); 

   const savedData = localStorage.getItem("user_data");

    if (savedData) {
      const userData = JSON.parse(savedData);

      if (userData.email === formData.email && userData.password === formData.password) {
        alert(`Welcome back, ${userData.fullName}!`);
        onClose(); 
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No account found with this email. Please Sign up first.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Sign in</h2>
              <p className="text-gray-500 mb-6">Welcome back to our community</p>
              
              <form className="space-y-4" onSubmit={handleSignIn}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border dark:bg-slate-800"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border dark:bg-slate-800"
                />
             
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  Sign In
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};