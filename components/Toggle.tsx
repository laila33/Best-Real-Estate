"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export function BuySellToggle() {
  const [isSell, setIsSell] = useState(true);

  return (
    <div className="flex items-center justify-center p-4">
      <div 
        className="relative flex w-64 h-16 p-2 bg-transparent border-2 border-sky-400 rounded-full cursor-pointer items-center"
        onClick={() => setIsSell(!isSell)}
      >
        <motion.div
          className="absolute h-12 w-[48%] bg-sky-400 rounded-full shadow-md"
          animate={{ x: isSell ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <div className="relative z-10 flex w-full justify-around text-white font-bold text-xl">
          <span className={!isSell ? "text-white" : "text-sky-100"}>Buy</span>
          <span className={isSell ? "text-white" : "text-sky-100"}>Sell</span>
        </div>
      </div>
    </div>
  );
}