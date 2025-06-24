"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import frame10 from "../../../public/assets/images/Frame 48.png";
import frame11 from "../../../public/assets/images/Frame 50.png";
import frame52 from "../../../public/assets/images/Frame 44.png";
import Link from "next/link"

const adventureTypes = [
  {
    id: "family",
    name: "Family Adventures",
    href: "/family-adventures",
    images: [
      {
        src: frame10,
        alt: "Family safari adventure",
        title: "Ultimate Northern Tanzania Safari",
        price: "$4500 / person",
        duration: "8 Days Trip",
      },
      {
        src: frame11,
        alt: "Family mountain adventure",
        title: "Ultimate Northern Tanzania Safari",
        price: "$4500 / person",
        duration: "8 Days Trip",
      },
      {
        src: frame52,
        alt: "Family camping adventure",
        title: "Ultimate Northern Tanzania Safari",
        price: "$4500 / person",
        duration: "8 Days Trip",
      },
    ],
  },
  {
    id: "couple",
    name: "Couple Adventures",
    href: "/couple-adventures",
    images: [
      {
        src: frame10,
        alt: "Romantic sunset adventure",
        title: "Romantic Serengeti Getaway",
        price: "$3800 / person",
        duration: "6 Days Trip",
      },
      {
        src: frame11,
        alt: "Couple hiking adventure",
        title: "Romantic Serengeti Getaway",
        price: "$3800 / person",
        duration: "6 Days Trip",
      },
      {
        src: frame52,
        alt: "Couple beach adventure",
        title: "Romantic Serengeti Getaway",
        price: "$3800 / person",
        duration: "6 Days Trip",
      },
    ],
  },
  {
    id: "group",
    name: "Group Adventures",
    href: "/group-adventures",
    images: [
      {
        src: frame10,
        alt: "Group safari adventure",
        title: "Epic Group Safari Experience",
        price: "$3200 / person",
        duration: "10 Days Trip",
      },
      {
        src: frame52,
        alt: "Group camping adventure",
        title: "Epic Group Safari Experience",
        price: "$3200 / person",
        duration: "10 Days Trip",
      },
      {
        src: frame11,
        alt: "Group hiking adventure",
        title: "Epic Group Safari Experience",
        price: "$3200 / person",
        duration: "10 Days Trip",
      },
    ],
  },
  {
    id: "girls",
    name: "Girls Adventures",
    href: "/girls-adventures",
    images: [
      {
        src: frame11,
        alt: "Girls safari adventure",
        title: "Girls Only Safari Adventure",
        price: "$3600 / person",
        duration: "7 Days Trip",
      },
      {
        src: frame52,
        alt: "Girls beach adventure",
        title: "Girls Only Safari Adventure",
        price: "$3600 / person",
        duration: "7 Days Trip",
      },
      {
        src: frame10,
        alt: "Girls cultural adventure",
        title: "Girls Only Safari Adventure",
        price: "$3600 / person",
        duration: "7 Days Trip",
      },
    ],
  },
  {
    id: "individual",
    name: "Individual Adventures",
    href: "/individual-adventures",
    images: [
      {
        src: frame11,
        alt: "Solo safari adventure",
        title: "Solo Explorer Safari",
        price: "$4200 / person",
        duration: "9 Days Trip",
      },
      {
        src: frame10,
        alt: "Solo hiking adventure",
        title: "Solo Explorer Safari",
        price: "$4200 / person",
        duration: "9 Days Trip",
      },
      {
        src: frame52,
        alt: "Solo cultural adventure",
        title: "Solo Explorer Safari",
        price: "$4200 / person",
        duration: "9 Days Trip",
      },
    ],
  },
  {
    id: "corporates",
    name: "Corporates Adventures",
    href: "/corporates-adventures",
    images: [
      {
        src: frame10,
        alt: "Corporate team building safari",
        title: "Corporate Team Safari",
        price: "$2800 / person",
        duration: "5 Days Trip",
      },
      {
        src: frame11,
        alt: "Corporate retreat adventure",
        title: "Corporate Team Safari",
        price: "$2800 / person",
        duration: "5 Days Trip",
      },
      {
        src: frame52,
        alt: "Corporate conference adventure",
        title: "Corporate Team Safari",
        price: "$2800 / person",
        duration: "5 Days Trip",
      },
    ],
  },
]

export default function TravelShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % adventureTypes.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const currentAdventure = adventureTypes[activeIndex]

  return (
    <div className="min-h-[640px] bg-gray-50 h-fit p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-1  items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 ">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Perfect Travel Style
              </h1>
            </div>

            {/* Adventure Types */}
            <div className="space-y-3">
              {adventureTypes.map((adventure, index) => (
                <Link
                  key={adventure.id}
                  href={adventure.href}
                  className={`block text-2xl md:text-3xl font-bold transition-all duration-500 hover:text-[#bf895a] ${
                    index === activeIndex ? "text-[#F4A460] opacity-100" : "text-black opacity-2"
                   

                  }`}
                >
                  {adventure.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Images Grid */}
          <div className="grid grid-cols-2 gap-4 md:h-[600px] h-[400px]">
            {/* Left Column - Two Small Images Stacked */}
            <div className="flex flex-col gap-4">
              <div className="relative group overflow-hidden rounded-2xl flex-1">
                <Image
                  src={currentAdventure.images[0].src || "/placeholder.svg"}
                  alt={currentAdventure.images[0].alt}
                  width={300}
                  height={280}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
                <div className="absolute md:top-4 top-2 md:left-4 left-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 md:py-1 py-[2px] rounded-full md:text-sm text-xs font-medium text-gray-700">
                    {currentAdventure.images[0].duration}
                  </span>
                </div>
                <div className="absolute bottom-0 w-full left-0">
                  <div className="bg-white/20 backdrop-blur-md  p-3 text-white">
                    <h3 className="font-semibold text-sm mb-1 hidden md:block">{currentAdventure.images[0].title}</h3>
                    <p className="text-xs opacity-90">{currentAdventure.images[0].price}</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl flex-1">
                <Image
                  src={currentAdventure.images[1].src || "/placeholder.svg"}
                  alt={currentAdventure.images[1].alt}
                  width={300}
                  height={280}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
                <div className="absolute md:top-4 top-2 md:left-4 left-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 md:py-1 py-[2px] rounded-full md:text-sm text-xs font-medium text-gray-700">
                    {currentAdventure.images[1].duration}
                  </span>
                </div>
                <div className="absolute bottom-0 w-full left-0">
                  <div className="bg-white/20 backdrop-blur-md  p-3 text-white">
                    <h3 className="font-semibold text-sm mb-1 hidden md:block">{currentAdventure.images[1].title}</h3>
                    <p className="text-xs opacity-90">{currentAdventure.images[1].price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Large Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src={currentAdventure.images[2].src || "/placeholder.svg"}
                alt={currentAdventure.images[2].alt}
                width={400}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
              />
              <div className="absolute md:top-4 top-2 md:left-4 left-2">
                <span className="bg-white/90 backdrop-blur-sm px-3 md:py-1 py-[2px] rounded-full md:text-sm text-xs font-medium text-gray-700">
                  {currentAdventure.images[2].duration}
                </span>
              </div>
              <div className="absolute bottom-0 w-full left-0">
                <div className="bg-white/20 backdrop-blur-md  p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 hidden md:block">{currentAdventure.images[2].title}</h3>
                  <p className="text-sm opacity-90">{currentAdventure.images[2].price}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          {/* <div className="flex justify-center mt-12 space-x-2">
            {adventureTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-orange-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
