"use client";
import { Heart } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Why_People_Choose_Property() {
  return (
    <div className="overflow-hidden max-w-full p-2 md:px-40 mt-10 lg:mt-40 flex flex-col  lg:flex lg:flex-row relative h-auto">
      <div className="hidden lg:flex relative w-150">
        <img
          src="../features_iimage.jpg"
          className="w-[600px] h-[560px] absolute rounded-3xl object-cover"
          alt="Features"
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col rounded-2xl bg-[#FFFFFF] shadow-2xl absolute mt-60 ms-32 p-2 w-fit z-10"
        >
          <div className="relative">
            <img
              src="../prop-5.jpg"
              className="w-80 h-55 rounded-2xl object-cover"
              alt="Property"
            />

            <div className="w-10 h-10 bg-white absolute top-3 right-3 rounded-xl flex items-center justify-center shadow-md">
              <Heart className="fill-blue-700 text-blue-700" size={20} />
            </div>
          </div>

          <div className="flex justify-between items-center px-2 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl text-[#102D47]">$250,000</h1>
              <p className="text-gray-500 font-medium">Palm Villa</p>
            </div>
            <button className="rounded-xl bg-[#D1F2FF] text-[#00A3FF] font-bold px-4 py-2 text-sm">
              Illinois
            </button>
          </div>
        </motion.div>
      </div>
      <div className="ms-10 flex flex-col gap-5 ">
        <p className="text-4xl font-bold ">Why People Choose Property</p>
        <div className="flex flex-col gap-20 mt-10 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex gap-10"
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#D5E3FC] mt-2">
              <img src="../m1.svg" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold md:text-2xl">Great Experience</h1>
              <p className="text-gray-500 md:w-100">
                Letraset sheets containing Lorem Ipsum passages and more
                recently with desktop publishing Variou
              </p>
            </div>
          </motion.div>

          {/* الكارت الثاني */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }} // تأخير بسيط لعمل تأثير التوالي
            className="flex gap-10"
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#D5E3FC] mt-2">
              <img src="../m2.svg" />
            </div>
             <div className="flex flex-col gap-2">
              <h1 className="font-bold md:text-2xl">Great Experience</h1>
              <p className="text-gray-500 md:w-100">
                Letraset sheets containing Lorem Ipsum passages and more
                recently with desktop publishing Variou
              </p>
            </div>
          </motion.div>

          {/* الكارت الثالث */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }} // تأخير أطول قليلاً
            className="flex gap-10"
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#D5E3FC] mt-2">
              <img src="../m3.svg" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold md:text-2xl">Great Experience</h1>
              <p className="text-gray-500 md:w-100">
                Letraset sheets containing Lorem Ipsum passages and more
                recently with desktop publishing Variou
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why_People_Choose_Property;
