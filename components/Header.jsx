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
      <header className="bg-[#F8FFF3]   z-50 fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="">
              <svg
                width="90"
                height="50"
                viewBox="0 0 156 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.0952 55.4053C48.8921 55.4209 48.4937 55.5303 47.8999 55.7334C47.3062 55.9365 46.6499 56.0381 45.9312 56.0381C44.2905 56.0381 42.9858 55.7646 42.0171 55.2178C41.064 54.6709 40.3218 53.9521 39.7905 53.0615C39.2749 52.1553 38.8608 51.1631 38.5483 50.085C38.2515 49.0068 37.9468 47.9365 37.6343 46.874C37.3218 45.7959 36.8921 44.8115 36.3452 43.9209C35.7983 43.0146 35.0327 42.2881 34.0483 41.7412C33.064 41.1943 31.728 40.9209 30.0405 40.9209C29.5405 40.9209 29.064 40.9365 28.6108 40.9678C28.1733 40.999 27.9312 41.0146 27.8843 41.0146V51.96C27.8843 52.1943 27.9624 52.4209 28.1187 52.6396C28.2905 52.8584 28.5483 52.9834 28.8921 53.0146L31.4233 53.2021V55.2646H19.4937V53.2021L21.978 53.0146C22.3218 52.9834 22.5796 52.8584 22.7515 52.6396C22.939 52.4209 23.0327 52.1943 23.0327 51.96V26.3662C23.0327 26.1318 22.939 25.9053 22.7515 25.6865C22.5796 25.4521 22.3218 25.3271 21.978 25.3115L19.4937 25.124V23.0615H32.0093C35.6499 23.0615 38.5171 23.6943 40.6108 24.96C42.7202 26.21 43.7749 28.4209 43.7749 31.5928C43.7749 33.2646 43.3999 34.6396 42.6499 35.7178C41.8999 36.7803 40.9233 37.6162 39.7202 38.2256C38.5327 38.835 37.2593 39.2959 35.8999 39.6084C37.3843 39.9678 38.5405 40.4834 39.3687 41.1553C40.2124 41.8115 40.8374 42.5615 41.2437 43.4053C41.6499 44.249 41.9546 45.124 42.1577 46.0303C42.3608 46.9365 42.564 47.8193 42.7671 48.6787C42.9702 49.5381 43.2749 50.3115 43.6812 50.999C44.103 51.6865 44.7358 52.2334 45.5796 52.6396C46.4233 53.0459 47.5952 53.249 49.0952 53.249V55.4053ZM38.5483 31.8037C38.5483 29.7568 37.8921 28.1787 36.5796 27.0693C35.2827 25.96 33.1187 25.4053 30.0874 25.4053H27.8843V38.5537C27.9624 38.5537 28.2827 38.5615 28.8452 38.5771C29.4233 38.5928 29.8999 38.6006 30.2749 38.6006C32.9468 38.6006 34.9937 38.1084 36.4155 37.124C37.8374 36.1396 38.5483 34.3662 38.5483 31.8037ZM72.4493 52.874C71.1055 53.7021 69.6524 54.4053 68.0899 54.9834C66.543 55.5615 64.9571 55.8506 63.3321 55.8506C61.3946 55.8506 59.5743 55.4209 57.8712 54.5615C56.1837 53.6865 54.8165 52.3662 53.7696 50.6006C52.7227 48.835 52.1993 46.6162 52.1993 43.9443C52.1993 41.4443 52.6837 39.2646 53.6524 37.4053C54.6212 35.5459 55.9571 34.1084 57.6602 33.0928C59.3633 32.0615 61.3008 31.5459 63.4727 31.5459C66.4571 31.5459 68.6993 32.4756 70.1993 34.335C71.6993 36.1787 72.4493 38.5303 72.4493 41.3896C72.4493 41.5459 72.4493 41.7568 72.4493 42.0225C72.4493 42.2725 72.4337 42.5068 72.4024 42.7256H56.8399C56.8399 43.9443 56.9649 45.1631 57.2149 46.3818C57.4805 47.585 57.918 48.6787 58.5274 49.6631C59.1368 50.6475 59.9571 51.4365 60.9883 52.0303C62.0196 52.624 63.3087 52.9209 64.8555 52.9209C66.2305 52.9209 67.5665 52.6084 68.8633 51.9834C70.1758 51.3428 71.3712 50.6631 72.4493 49.9443V52.874ZM67.6446 40.5693V39.5146C67.6446 37.9365 67.2618 36.6084 66.4962 35.5303C65.7462 34.4521 64.5743 33.9131 62.9805 33.9131C61.4024 33.9131 60.0587 34.5068 58.9493 35.6943C57.8399 36.8818 57.2227 38.5068 57.0977 40.5693H67.6446ZM85.7487 24.21C85.7487 25.0225 85.4674 25.7256 84.9049 26.3193C84.3424 26.8975 83.6471 27.1865 82.819 27.1865C82.0065 27.1865 81.3033 26.8975 80.7096 26.3193C80.1315 25.7256 79.8424 25.0225 79.8424 24.21C79.8424 23.3818 80.1315 22.6865 80.7096 22.124C81.3033 21.5615 82.0065 21.2803 82.819 21.2803C83.6471 21.2803 84.3424 21.5615 84.9049 22.124C85.4674 22.6865 85.7487 23.3818 85.7487 24.21ZM85.233 52.1943C85.233 53.1475 85.1862 54.21 85.0924 55.3818C85.0143 56.5537 84.8346 57.7021 84.5533 58.8271C84.2877 59.9521 83.8815 60.9443 83.3346 61.8037C82.3658 63.3193 81.1783 64.4365 79.7721 65.1553C78.3658 65.8896 76.9049 66.2568 75.3893 66.2568C74.4049 66.2568 73.5533 66.0381 72.8346 65.6006C72.1002 65.1787 71.733 64.5146 71.733 63.6084C71.733 62.7959 71.9596 62.1709 72.4127 61.7334C72.8502 61.2959 73.3112 60.999 73.7955 60.8428L78.4596 64.0537C79.3502 63.5537 79.9518 62.5928 80.2643 61.1709C80.5924 59.749 80.7565 58.1162 80.7565 56.2725V34.9678H77.358V33.374L83.2643 31.5459H85.233V52.1943ZM115.454 43.7334C115.454 45.999 114.986 48.0537 114.048 49.8975C113.111 51.7256 111.782 53.1787 110.064 54.2568C108.361 55.3193 106.337 55.8506 103.993 55.8506C101.665 55.8506 99.6496 55.3193 97.9465 54.2568C96.2433 53.1943 94.9308 51.749 94.009 49.9209C93.0871 48.0928 92.6262 46.0303 92.6262 43.7334C92.6262 41.4521 93.0871 39.3896 94.009 37.5459C94.9465 35.7021 96.2746 34.2412 97.9933 33.1631C99.7277 32.085 101.775 31.5459 104.134 31.5459C106.525 31.5459 108.564 32.0928 110.251 33.1865C111.939 34.2803 113.228 35.749 114.118 37.5928C115.009 39.4365 115.454 41.4834 115.454 43.7334ZM110.462 43.6865C110.462 41.9365 110.228 40.3037 109.759 38.7881C109.306 37.2725 108.603 36.0459 107.65 35.1084C106.712 34.1709 105.525 33.7021 104.087 33.7021C102.603 33.7021 101.384 34.1709 100.431 35.1084C99.4933 36.0459 98.798 37.2725 98.3449 38.7881C97.8918 40.3037 97.6652 41.9365 97.6652 43.6865C97.6652 45.4209 97.8918 47.0537 98.3449 48.585C98.8137 50.1006 99.5168 51.3271 100.454 52.2646C101.407 53.2021 102.603 53.6709 104.04 53.6709C105.509 53.6709 106.712 53.2021 107.65 52.2646C108.603 51.3271 109.306 50.1006 109.759 48.585C110.228 47.0693 110.462 45.4365 110.462 43.6865Z"
                  fill="black"
                />
                <ellipse
                  cx="17.9469"
                  cy="17.2059"
                  rx="17.9469"
                  ry="17.2059"
                  fill="#F4A460"
                />
              </svg>
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
                <button className="bg-[#68AC33] hover:bg-[#559426] text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-sm">
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
                  {isMenuOpen ? (
                    <IoIosClose size={24} />
                  ) : (
                    <CiMenuFries size={18} />
                  )}
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
              <button className="w-full bg-[#68AC33] hover:bg-[#559426] text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium">
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
