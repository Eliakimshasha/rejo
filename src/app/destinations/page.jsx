'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DestinationsPage = () => {
  const [activeSlides, setActiveSlides] = useState({});

  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      category: "Northern Circuit",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1561155214-165b4e3ba5c2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Ngorongoro National Park",
      category: "Northern Circuit",
      images: [
        "https://images.unsplash.com/photo-1553639868-c622ba4a6c7e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565207919071-98c5efb4a63d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1550839893-0ad415de56c8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1567213204553-b11e2ae5a4f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Tarangire National Park",
      category: "Northern Circuit",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1580628068766-4ec2dce1e1c5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1612215254164-e14fb5b4b11e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527176930608-09cb256ab504?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Lake Manyara National Park",
      category: "Northern Circuit",
      images: [
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565207919071-98c5efb4a63d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519981593452-666cf05569a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570457998745-e95f5da4f8cd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Ruaha National Park",
      category: "Southern Circuit",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577983073797-2f5d3eab6e56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Selous Game Reserve",
      category: "Southern Circuit",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1547980703-7c30a5bb7c9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553639868-c622ba4a6c7e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1612215254164-e14fb5b4b11e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565207919071-98c5efb4a63d?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      name: "Mikumi National Park",
      category: "Southern Circuit",
      images: [
        "https://images.unsplash.com/photo-1550839893-0ad415de56c8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519981593452-666cf05569a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527176930608-09cb256ab504?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      name: "Kilimanjaro National Park",
      category: "Mountain Adventures",
      images: [
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512551980832-13df02b0529f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526296953709-6c4f7103dd24?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 9,
      name: "Mount Meru National Park",
      category: "Mountain Adventures",
      images: [
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1478827387698-6ba70b24e2c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512551980832-13df02b0529f?w=800&h=600&fit=crop"
      ]
    },
     {
      id: 10,
      name: "Mikumi National Park",
      category: "Southern Circuit",
      images: [
        "https://images.unsplash.com/photo-1550839893-0ad415de56c8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519981593452-666cf05569a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527176930608-09cb256ab504?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 11,
      name: "Kilimanjaro National Park",
      category: "Mountain Adventures",
      images: [
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512551980832-13df02b0529f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526296953709-6c4f7103dd24?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 12,
      name: "Mount Meru National Park",
      category: "Mountain Adventures",
      images: [
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1478827387698-6ba70b24e2c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512551980832-13df02b0529f?w=800&h=600&fit=crop"
      ]
    }
  ];

  const nextSlide = (destinationId) => {
    setActiveSlides(prev => ({
      ...prev,
      [destinationId]: ((prev[destinationId] || 0) + 1) % 5
    }));
  };

  const prevSlide = (destinationId) => {
    setActiveSlides(prev => ({
      ...prev,
      [destinationId]: ((prev[destinationId] || 0) - 1 + 5) % 5
    }));
  };

  const goToSlide = (destinationId, slideIndex) => {
    setActiveSlides(prev => ({
      ...prev,
      [destinationId]: slideIndex
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
          Discover Unforgettable Adventures, Rich Cultures, And Hidden Gems Across Our Handpicked
          Destinations. Your Next Journey Starts Here.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => {
            const currentSlide = activeSlides[destination.id] || 0;
            
            return (
              <div key={destination.id} className="overflow-hidden   transition-shadow">
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
                          index === currentSlide ? 'bg-green-600' : 'bg-white/50'
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
      </div>
    </div>
  );
};

export default DestinationsPage;