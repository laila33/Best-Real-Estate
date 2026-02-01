"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

function Discover_Properties() {
  const categories = [
    { id: 1, name: "Apartment", count: 3, icon: "../apartment.svg" },
    { id: 2, name: "Villa", count: 3, icon: "../villa.svg" },
    { id: 3, name: "Office", count: 3, icon: "../office.svg" },
    { id: 4, name: "Shop", count: 3, icon: "../shop.svg" },
    { id: 5, name: "House", count: 3, icon: "../house.svg" },
    { id: 6, name: "WhereHouse", count: 3, icon: "../warehouse.svg" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } // الآن سيفهم TypeScript أن easeOut قيمة صالحة
    },
  };

  return (
    <div className="p-2 md:px-40 mt-20 flex flex-col gap-10">
      <h1 className="self-start text-4xl text-[#102D47] font-bold">
        Discover Properties
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {categories.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="flex flex-col items-center p-10 bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-gray-50 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-12 h-12 group-hover:invert transition-all" 
              />
            </div>
            <p className="text-2xl font-bold text-[#102D47] dark:text-white">{item.name}</p>
            <p className="text-gray-500 mt-1">{item.count} Properties</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Discover_Properties;