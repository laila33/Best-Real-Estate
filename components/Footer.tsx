"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {


  return (
    <footer className="mt-10 bg-[#0A2239] text-white pt-16 pb-8 px-6 md:px-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="flex items-center gap-2 self-start">
          <img src="../logo.svg" alt="" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Address</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Property Real estate 4263 <br />
            Wilkinson Street Tennessee
          </p>
          <div className="flex gap-4 text-sm font-bold text-gray-400">
            <Facebook /> <Twitter /> <Instagram />{" "}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact Support</li>
            <li className="hover:text-white cursor-pointer">Properties</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Popular Searches</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Apartment for Rent
            </li>
            <li className="hover:text-white cursor-pointer">House for Buy</li>
            <li className="hover:text-white cursor-pointer">Offices for Buy</li>
            <li className="hover:text-white cursor-pointer">Shop for Rent</li>
          </ul>
        </div>
      </div>

      <div className="py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">#</span>
            <span>Phone : +(690) 2560 0020</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">@</span>
            <span>Email : real@property.com</span>
          </div>
        </div>

        {/* النشرة البريدية (Newsletter) */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <span className="font-bold whitespace-nowrap hidden sm:block">
            Newsletter
          </span>
          <div className="flex w-full bg-white rounded-xl overflow-hidden p-1 max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-gray-800 px-4 py-2 w-full outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
 
    </footer>
  );
}
