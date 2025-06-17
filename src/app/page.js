"use client";
import React, { useState } from "react";
import curve1 from "../../public/assets/images/home (1).png";
import curve2 from "../../public/assets/images/home (2).png";
import curve3 from "../../public/assets/images/home (3).png";
import curve4 from "../../public/assets/images/Frame 46.png";
import curve5 from "../../public/assets/images/Frame 45.png";
import curve6 from "../../public/assets/images/Frame 43.png";
import hom1 from "../../public/assets/images/hom (1).png";
import hom2 from "../../public/assets/images/hom (2).png";
import Image from "next/image";

import { destinations } from "../../components/Destinations";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

function page() {
  const [activeSlides, setActiveSlides] = useState({});

  const router = useRouter();

  const goToSlide = (destinationId, slideIndex) => {
    setActiveSlides((prev) => ({
      ...prev,
      [destinationId]: slideIndex,
    }));
  };

  const navigateToDestinations = () => {
    router.push("/destinations");
  };

  return (
    <>
      <div className="min-h-screen mx-auto px-4 py-12  md:pt-36 bg-[#F8FFF3] relative overflow-hidden lg:px-12">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-xl pr-8">
            <h1 className="text-5xl lg:text-[60px]  md:leading-[80px] font-bold text-gray-900 leading-tight mb-6">
              Explore Tanzania.
              <br /> The Land Of Unlimited Experiences & Joy!
            </h1>

            <p className="text-lg text-gray-900 mb-10 md:text-xl max-w-md">
              Discover The Beauty Of Tanzania - Safaris, Beaches & Adventures
            </p>

            <button className="bg-[#68AC33] hover:bg-[#559426] text-white px-8 py-4 rounded-full text-lg flex items-center gap-3 transition-colors duration-300">
              View all destinations
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Complex Image Layout */}
          <div className="flex-1 relative h-[400px] w-full max-w-2xl">
            {/* Main large image - lake with boats */}
            <div className="w-[85%] h-full mx-auto">
              <div className="relative w-full z-20 h-full">
                 <h1 className="absolute z-30 inset-0 flex items-center text-4xl justify-center text-black/30 font-bold">
                  VISIT TANZANIA
                </h1>
                <Image
                  src={curve2}
                  alt="Lake with wooden boats"
                  fill
                  className=""
                  priority
                />
              </div>
            </div>

            {/* Top left overlay image */}
            <div className="absolute -top-36 -left-2 w-44 h-44 z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={curve1}
                  alt="Historical building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom right overlay image */}
            <div className="absolute -bottom-24 -right-3 w-44 h-44 z-30">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={curve3}
                  alt="Adventure scene"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Large background accent element */}
            <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-white bg-opacity-20 -z-10"></div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Text Content */}
          <div className="text-center   mt-14 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Explore Tanzania.
              <br /> The Land Of Unlimited Experiences & Joy!
            </h1>

            <p className="text-base sm:text-lg text-gray-900 mb-8 max-w-lg mx-auto">
              Discover The Beauty Of Tanzania - Safaris, Beaches & Adventures
            </p>

            <button className="bg-[#68AC33] hover:bg-[#559426] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg flex items-center gap-3 transition-colors duration-300 mx-auto">
              View all destinations
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Simplified Mobile Image Layout */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full mt-14 max-w-md mx-auto">
            {/* Main image */}
            <div className="w-full h-[300px] sm:h-[280px]  md:h-[320px] mx-auto">
              <div className="relative w-full h-full overflow-hidden">
                <h1 className="absolute z-30 inset-0 flex items-center text-4xl justify-center text-black/30 font-bold">
                  VISIT TANZANIA
                </h1>
                <Image
                  src={curve2}
                  alt="Lake with wooden boats"
                  fill
                  className=""
                  priority
                />
              </div>
            </div>

            {/* Top left overlay - smaller and repositioned */}
            <div className="absolute -top-11 -left-4 w-30 h-30 sm:w-24 sm:h-24 z-20">
              <div className="relative w-full h-full overflow-hidden rounded-lg ">
                <Image
                  src={curve1}
                  alt="Historical building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom right overlay - smaller and repositioned */}
            <div className="absolute -bottom-16 -right-4 w-36 h-36 sm:w-24 sm:h-24 z-20">
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={curve3}
                  alt="Adventure scene"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Background accent - smaller */}
            <div className="absolute bottom-[-20px] right-[-20px] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-white bg-opacity-20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        {/* Header Section */}
        <div className="text-center md:py-16 py-9 px-6">
          <h1 className="md:text-6xl font-bold text-3xl  text-gray-800 mb-8">
            Popular Packages
          </h1>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 6).map((destination) => {
              const currentSlide = activeSlides[destination.id] || 0;

              return (
                <div
                  key={destination.id}
                  className="overflow-hidden   transition-shadow"
                >
                  {/* Image Carousel */}
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out h-full"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {destination.images.map((image, index) => (
                        <div
                          key={index}
                          className="w-full h-full flex-shrink-0"
                        >
                          <img
                            src={image}
                            alt={`${destination.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-3xl"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {destination.category}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    {/* <button
                    onClick={() => prevSlide(destination.id)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => nextSlide(destination.id)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button> */}

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {destination.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(destination.id, index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide
                              ? "bg-green-600"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full flex justify-center mt-3 md:py-16 items-center">
            <button
              className="bg-[#68AC33] cursor-pointer hover:bg-[#559426] text-white px-8 py-4 rounded-full text-lg flex items-center gap-3 transition-colors duration-300"
              onClick={() => navigateToDestinations()}
            >
              Explore More Popular Destinations
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col lg:flex-row md:justify-between md:items-start  md:pl-9 md:pr-0 px-4">
        {/* Left side - Main landscape image */}
        <div className="flex-1 relative h-[300px] sm:h-80 md:h-[615px] ">
          <Image
            src={hom1} // using Frame 45.png as the main top image
            alt="Corporate retreat by the lake"
            fill
            className="object-cover rounded-2xl "
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="md:flex-1 md:py-0 py-9  flex flex-col md:justify-center px-2   md:px-12  ">
          <div className="max-w-lg  mx-auto lg:mx-0">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-6 sm:mb-8 leading-tight">
              Corporate Retreats
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-950 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Get your team off the desk and away from the office with our
              stunning, amazing corporate retreats
            </p>

            {/* CTA Button */}
            <button className="bg-[#68AC33] hover:bg-[#559426] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-3 transition-colors mb-8 sm:mb-12 md:mb-16 group w-full sm:w-auto justify-center sm:justify-start">
              Get the team to experience the best
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bottom landscape image */}
            <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={hom2} // using Frame 46.png for the bottom image
                alt="Mountain retreat landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Trip Planning Section */}
      <div className="bg-[#F8FFF3] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 z-10 relative flex flex-col items-center lg:items-start">
            <div className="md:space-y-1 space-y-3">
              <h2 className="md:text-[59px] text-[40px] font-medium text-center md:text-start  text-gray-900 leading-tight">
                Let's Plan Your trip
              </h2>

              <p className="md:text-[30px] text-center md:text-start  text-gray-700 leading-relaxed ">
                Tell us a bit about your dream getaway, and we'll handle the
                rest.
              </p>
            </div>

            <button className="inline-flex items-center gap-3  bg-[#68AC33]  hover:bg-[#559426] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-sm hover:scale-105">
              Customize My Trip
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Images Grid */}
          <div className="flex-1 relative">
            <div className="relative max-w-md ml-auto h-96">
              {/* Top Left - Rock Formation (frame1) */}
              <div className="absolute top-0 md:left-8 left-16 z-30">
                <div className="w-[118px] h-[242px] overflow-hidden">
                  <Image
                    src={curve4}
                    alt="Rock Formation"
                    fill
                    className="object-cover rounded-[80px]"
                  />
                </div>
              </div>

              {/* Top Right - Architecture (curve3) */}
              <div className="absolute top-4 md:right-4 right-16 z-20">
                <div className="w-[118px] h-[242px] overflow-hidden">
                  <Image
                    src={curve5}
                    alt="Architecture"
                    fill
                    className="object-cover rounded-[80px]"
                  />
                </div>
              </div>

              {/* Bottom Center - Lake & Boats (curve2) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-[118px] h-[242px] overflow-hidden">
                  <Image
                    src={curve6}
                    alt="Lake & Boats"
                    fill
                    className="object-cover rounded-[80px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
