"use client";
import React from "react";
import { motion } from "framer-motion";

function Customer() {
  return (
    <div className="mt-20 flex justify-end py-10 overflow-hidden">
      <div className="p-7 gap-10 md:gap-0 flex flex-col md:flex md:flex-row items-center justify-between w-310 bg-blue-600 lg:h-40 rounded-tl-2xl rounded-bl-2xl">
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex gap-3 items-center justify-center"
        >
          <h1 className="text-white text-6xl">99%</h1>
          <p className="text-white text-2xl">Happy Customer</p>
        </motion.div>

        <div className="hidden lg:flex w-0.5 bg-white h-39"></div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex gap-3 items-center justify-center"
        >
          <h1 className="text-white text-6xl">780K</h1>
          <p className="text-white text-2xl">Property Sales</p>
        </motion.div>

        <div className="hidden lg:flex w-0.5 bg-white h-39"></div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex gap-3 items-center justify-center"
        >
          <h1 className="text-white text-6xl">160+</h1>
          <p className="text-white text-2xl">Award Winning</p>
        </motion.div>

      </div>
    </div>
  );
}

export default Customer;