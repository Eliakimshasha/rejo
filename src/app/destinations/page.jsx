"use client";
import React, { useState } from "react";
import { destinations } from "../../../components/Destinations";
import Link from "next/link";

const DestinationsPage = () => {
  const [activeSlides, setActiveSlides] = useState({});

  const goToSlide = (destinationId, slideIndex) => {
    setActiveSlides((prev) => ({
      ...prev,
      [destinationId]: slideIndex,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center py-16 px-6">
        <h1 className="md:text-5xl text-3xl font-light text-gray-800 mb-8">
          Explore. Experience. Enjoy 🌍✨
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover Unforgettable Adventures, Rich Cultures, And Hidden Gems
          Across Our Handpicked Destinations. Your Next Journey Starts Here.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => {
            const currentSlide = activeSlides[destination.id] || 0;

            return (
              <Link
              href="#"
                key={destination.id}
                className="overflow-hidden  transition-shadow"
              >
                {/* Image Carousel */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {destination.images.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0">
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
