"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoIosClose } from "react-icons/io";

import { CgProfile } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";

import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Travel Style",
    "Destination",
    "Mt.Kilimanjaro",
    "DayTrips",
    "Experiences",
    "Escape DSM",
  ];

  return (
    <>
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-2xl font-medium text-gray-900">Rejo</span>
            </div>

            {/* Center Navigation - Desktop (Hidden by default, shown when toggled) */}
            <nav
              className={`hidden md:flex items-center space-x-12 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-8 pointer-events-none"
              }`}
            >
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-gray-700 hover:text-gray-900 transition-all duration-200 font-normal text-base transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right side - Desktop CTA + Profile (Hidden by default, shown when toggled) + Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA and Profile - Toggle with menu */}
              <div
                className=" md:flex items-center space-x-6 transition-all duration-300  opacity-100 transform translate-x-0 "
                style={{
                  transitionDelay: isMenuOpen ? "300ms" : "0ms",
                }}
              >
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-sm">
                  Host with us
                </button>
              </div>

              {/* Hamburger menu button - Always visible */}

              <div className="flex items-center space-x-4 px-4 py-2 border border-gray-400 rounded-full">
                <IoPersonCircleOutline color="black" className="text-lg" />
                <div className="w-[1px] h-4 bg-gray-300"></div>
                <button
                  onClick={toggleMenu}
                  className=" text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {isMenuOpen ? <IoIosClose size={24} /> : <CiMenuFries size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Only for small screens */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu Sidebar - Only for small screens */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-xl font-medium text-gray-900">Rejo</span>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <IoIosClose size={24} />
              </button>
            </div>

            {/* Mobile Menu Items - Column Direction */}
            <nav className="flex-1 px-6 py-4">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-normal py-4 px-4 rounded-lg transform ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div
              className={`p-6 border-t space-y-4 transform transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "600ms" : "0ms",
              }}
            >
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium">
                Host with us
              </button>
             
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
