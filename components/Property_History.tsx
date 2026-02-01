"use client";
import React from "react";
import { motion } from "framer-motion";

function Property_History() {
  return (
    <div className="mt-60 md:mt-30  flex flex-col lg:flex lg:flex-row relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-10 md:p-50 bg-[#F3F9FD] w-3/4 h-auto flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold mb-60 md:mb-0">
          Property History
          <br />
          How we became number one
        </h1>

        <p className="text-gray-600 mt-7">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing. Various versions have evolved over the years,
          sometimes by accident, sometimes as necessary making release of
          Letraset sheets containing Lorem Ipsum passages.
        </p>
        
        <button className="mt-5 w-50 p-3 rounded-xl text-blue-500 border border-blue-500 bg-white cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">
          More Details
        </button>
      </motion.div>

      <div className="bg-[#BCCFE1] w-1/4 h-auto"></div>

      <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        className="absolute right-10 md:right-40 mt-40 w-60 h-80 bg-[#FFFFFF] rounded-2xl p-6 border-blue-600 border-4 shadow-2xl z-10"
      >
        <h1 className="text-2xl font-bold leading-tight">BEST REAL ESTATE COMPANY</h1>
        
        <div className="flex mt-15 gap-6 items-end">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">
              Years
              <br />
              Experience
            </p>
            <p className="text-5xl font-bold">33</p>
          </div>
          <img src="../logo (1).svg" alt="logo" className="w-12 h-12" />
        </div>
      </motion.div>

    </div>
  );
}

export default Property_History;