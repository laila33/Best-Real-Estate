"use client";
import React, { useState, useEffect } from "react";
import img1 from "../public/logo-light.png.png";
import Link from "next/link";
import { ChevronDown, Moon, TextAlignJustify, Sun } from "lucide-react";
import { X } from "lucide-react";
import { SignupModal } from "./SignupModal";
import { SigninModal } from "./SigninModal";
// import { useTheme } from "next-themes";
function NavBar() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSiginpOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (theme === "dark") {
        html.classList.add("dark");
        html.setAttribute("data-theme", "dark");
      } else {
        html.classList.remove("dark");
        html.setAttribute("data-theme", "light");
      }
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className=" relative p-2 md:px-40 mt-10 flex items-center justify-between">
      <div>
        <img
          src="../logo.svg"
          className="w-[150px] md:w-[250px] lg:w-[260px]"
        />
      </div>
      <div className="hidden  lg:flex items-center gap-10 text-2xl  ">
        <Link href={"#"} className="text-blue-500">Home</Link>
        <details>
          <summary className="list-none cursor-pointer flex items-center">
            Properties
            {/* <ChevronDown /> */}
          </summary>
          <ul className="absolute">
            <li>{/* <a>Property List</a> */}</li>
            <li>{/* <a>Property Details</a> */}</li>
          </ul>
        </details>
        <details>
          <summary className="list-none cursor-pointer flex items-center">
            Blog
            {/* <ChevronDown /> */}
          </summary>
          <ul className="absolute">
            {" "}
            <li>{/* <a>Blog Grid</a> */}</li>
            <li>{/* <a>Blog Details</a> */}</li>
          </ul>
        </details>
        <Link href={"#"}> Contact</Link>
      </div>
      <div className="flex items-center gap-2 md:gap-8 lg:gap-2">
        <div
          onClick={toggleTheme}
          className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-all"
        >
          {theme === "light" ? (
            <Moon className="text-gray-600" />
          ) : (
            <Sun className="text-yellow-400" /> // استورديها من lucide-react
          )}
        </div>
        <div
          className="lg:hidden cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-8 h-8 text-blue-500" />
          ) : (
            <TextAlignJustify className="w-8 h-8 text-blue-500" />
          )}
        </div>
        <button
          onClick={() => setIsSiginpOpen(true)} 
          className="hidden lg:block p-3 rounded-xl text-blue-500 border border-blue-500 bg-white  cursor-pointer hover:bg-blue-500 hover:text-white"
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignupOpen(true)} // لما يدوس يفتح المودال
          className="cursor-pointer hidden lg:block p-3 rounded-xl text-white bg-blue-500 hover:bg-blue-600"
        >
          Sign up
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-[300px] bg-white shadow-xl z-999 flex flex-col p-6 gap-6 lg:hidden border-t">
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-xs">PROPERTIES</p>
            <Link
              href="#"
              className="pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Property List
            </Link>
            <Link
              href="#"
              className="pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Property Details
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-xs">Blog</p>
            <Link
              href="#"
              className="pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog Grid
            </Link>
            <Link
              href="#"
              className="pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog Details
            </Link>
          </div>

          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => setIsSiginpOpen(true)} // لما يدوس يفتح المودال
              className="cursor-pointer  lg:block p-3 rounded-xl text-white bg-blue-500"
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignupOpen(true)} // لما يدوس يفتح المودال
              className="cursor-pointer  lg:block p-3 rounded-xl text-white bg-blue-500"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
      <SigninModal
        isOpen={isSigninOpen}
        onClose={() => setIsSiginpOpen(false)}
      />
    </div>
  );
}

export default NavBar;
