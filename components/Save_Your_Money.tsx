"use client";
import React, { useState } from "react";
import { CustomHorizontalTimeline } from "./Horizontal_Timeline";
import { BuySellToggle } from "./Toggle";
import { Slider } from "./ui/slider";

function Save_Your_Money() {
  const [value, setValue] = useState([10000]);

  return (
    <div className="p-2 md:px-40  mt-10 lg:mt-40 flex flex-col lg:flex lg:flex-row justify-between  mb-30">
      <div className=" flex flex-col gap-4 mt-30">
        <h1 className="self-start text-3xl lg:text-5xl dark:text-white text-[#102D47] font-bold">
          Save Your Money
        </h1>
        <p className="text-gray-400 w-70 md:w-120">
          Sometimes by accident, sometimes chunks as necessary making this the
          first true generator on the Internet.
        </p>
        <CustomHorizontalTimeline />
        <div className="flex gap-5 mb-10 lg:mb-0">
          <button className="md:text-2xl w-40 font-bold  lg:block  md:p-3 rounded-xl text-blue-500 border border-blue-500 bg-white  cursor-pointer hover:bg-blue-500 hover:text-white">
            Buy House
          </button>
          <button className="md:text-2xl w-40 font-bold  cursor-pointer  lg:block p-3 rounded-xl text-white bg-blue-500 hover:bg-blue-600">
            Sell House
          </button>
        </div>
      </div>
      <div className= "hidden md:flex bg-blue-500 w-80  md:w-120 rounded-2xl flex flex-col justify-center items-center pt-10">
        <h1 className="text-4xl text-white font-bold">Savings Calculator</h1>
        <BuySellToggle />
        <div className="flex flex-col items-center gap-8 p-6">
          <div className="text-center">
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
              Savings
            </p>
            <h2 className="text-white text-6xl font-bold mt-2">
              ${value[0].toLocaleString()}
            </h2>
          </div>

          <div className="w-full max-w-md mt-10">
            <Slider
              defaultValue={value}
              max={400000} 
              min={10000} 
              step={100} 
              onValueChange={(val) => setValue(val)} 
              className="cursor-pointer"
            />

            <div className="flex justify-between mt-4 text-white font-bold text-sm">
              <span>$10K</span>
              <span>$400K</span>
            </div>
          </div>
        </div>{" "}
        <div className="mt-10 bg-blue-800 text-2xl text-gray-400  w-full flex flex-col items-center justify-center p-5 rounded-2xl">
         <h1 className="mb-3">Have Questions?</h1>
         <p className="text-xl"> Call US 
            <span  className="p-1 text-white font-bold">
                +902 525 225 552
            </span>
         </p>


        </div>
      </div>
    </div>
  );
}

export default Save_Your_Money;
