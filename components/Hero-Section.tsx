"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
function Hero_Section() {
  return (
    <div className=" relative p-2 md:px-40 mt-10 flex items-center justify-between min-h-[80vh] bg-gradient-to-t from-sky-100/50 via-sky-50/20 to-white dark:from-slate-900 dark:to-black">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-3 lg:mt-40"
      >
        <h1 className=" text-[#102d47] dark:text-white font-bold text-2xl md:text-5xl">
          Find Your Best Real Estate
        </h1>

        <Tabs.Root className="flex flex-col " defaultValue="buy">
          <Tabs.List className="flex ">
            <Tabs.Trigger
              value="buy"
              className=" px-10 py-3 font-bold rounded-t-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 bg-gray-100/50 text-gray-500"
            >
              Sell
            </Tabs.Trigger>
            <Tabs.Trigger
              value="sell"
              className="px-10 py-3 font-bold rounded-t-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 bg-gray-100/50 text-gray-500"
            >
              Buy
            </Tabs.Trigger>
          </Tabs.List>

          <div className= "w-75 md:w-150 bg-white dark:bg-black p-15 shadow-2xl rounded-b-2xl rounded-tr-2xl border border-gray-100">
            <Tabs.Content
              value="buy"
              className="flex flex-wrap md:flex-nowrap gap-6 items-end outline-none"
            >
              <div className="flex-1">
                <label className="text-gray-400 text-sm block mb-2 uppercase">
                  Location (Buy)
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to buy?"
                  className="dark:bg-black w-full p-3 bg-gray-50 rounded-lg border border-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-12 h-[52px] rounded-lg">
                Search
              </button>
            </Tabs.Content>

            <Tabs.Content
              value="sell"
              className="flex flex-wrap md:flex-nowrap gap-6 items-end outline-none"
            >
              <div className="flex-1">
                <label className="text-gray-400 text-sm block mb-2 uppercase">
                  Property Type (Sell)
                </label>
                <input
                  type="text"
                  placeholder="What are you selling?"
                  className="w-full p-3 bg-gray-50 dark:bg-black rounded-lg outline-none border border-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-12 h-[52px] rounded-lg">
                Search
              </button>
            </Tabs.Content>
          </div>
        </Tabs.Root>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }} // تأخير بسيط لزيادة الشياكة
          className="flex flex-col gap-1 mt-20"
        >
          <div className="flex gap-1">
            <Star className="fill-blue-600 text-blue-600 w-5 h-5" />
            <Star className="fill-blue-600 text-blue-600 w-5 h-5" />
            <Star className="fill-blue-600 text-blue-600 w-5 h-5" />
            <Star className="fill-blue-600 text-blue-600 w-5 h-5" />
            <Star className="fill-blue-600 text-blue-600 w-5 h-5" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            4.9/5 - from 658 reviews
          </p>
        </motion.div>
      </motion.div>

      <div>
        <img
          src="../hero-image.png"
          className="hidden md:hidden lg:flex absolute right-0 top-0"
        />
      </div>
    </div>
  );
}

export default Hero_Section;
