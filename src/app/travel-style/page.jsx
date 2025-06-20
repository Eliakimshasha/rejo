"use client";

import { useState } from "react";
import Link from "next/link";
import {
  getAllPackagesByCategory,
  categories,
} from "../../../components/Travel-style";
import { Card, CardContent } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { Carousel } from "../../../components/ui/carousel";
import { Clock, MapPin, Users, Heart, Building2, User } from "lucide-react";

const categoryIcons = {
  individual: User,
  family: Users,
  groups: Users,
  girls: Heart,
  couples: Heart,
  corporates: Building2,
};

const categoryLabels = {
  individual: "Individual",
  family: "Family",
  groups: "Groups",
  girls: "Girls",
  couples: "Couples",
  corporates: "Corporate",
};

export default function TravelStyle() {
  const [activeTab, setActiveTab] = useState("individual");

  const currentPackages = getAllPackagesByCategory(activeTab);

  return (
    <div className="w-full max-w-7xl relative mx-auto p-6 bg-[#F8FFF3]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="md:text-5xl text-2xl mt-9 font-light mb-2 text-gray-800 md:py-9">
          Family fun Starts With Us 🌍✨
        </h1>
        {/* <p className="md:text-lg text-gray-600 max-w-2xl mx-auto  md:mb-4">
          Discover Tanzania's incredible destinations tailored to your unique
          travel preferences and group type.
        </p> */}
      </div>

      {/* Tab Navigation */}
      <div className="border-b bg-[#F8FFF3] border-gray-200 sticky md:top-[72px] top-20 z-10 md:border-none  pt-2   md:shadow-xl md:rounded-full md:my-9 md:mt-16 pb-3 md:pb-2 mb-6 md:px-5 w-full">
        <div className="relative ">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 md:hidden bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 md:hidden w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrollable container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 md:justify-between  min-w-max px-2  py-1 md:items-center">
             
              {categories.map((category) => {
                const IconComponent = categoryIcons[category];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`flex items-center gap-2 md:px-6 px-3 md:py-1 py-1 rounded-full font-medium transition-all duration-200 ${
                      activeTab === category
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-black/5"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {categoryLabels[category]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid md:px-7 px-0 relative z-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPackages.map((packageItem) => (
          <Link
            key={`${packageItem.destinationId}-${activeTab}`}
            href={`/destinations/${packageItem.destinationId}?category=${activeTab}`}
            className="block"
          >
            <div className="overflow-hidden transition-shadow duration-300 cursor-pointer">
              <div className="relative h-60 w-full">
                <Carousel
                  images={packageItem.images}
                  alt={packageItem.name}
                  className="rounded-3xl"
                />

                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-slate-800 text-white">
                    {packageItem.time}
                  </Badge>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="lg:text-lg font-semibold text-gray-900 mb-1">
                  {packageItem.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  <span className="font-bold">${packageItem.price}</span>/per
                  person
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Category Description */}
      <div className="mt-12 relative z-0 text-center bg-[#68AC33] md:w-[80%] md:mx-auto p-8 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          {activeTab === "individual" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Individual Adventures
              </h3>
              <p className="text-white/90">
                Perfect for solo travelers seeking personal discovery and
                freedom. Enjoy flexible schedules, private guides, and the
                ultimate safari experience tailored just for you.
              </p>
            </>
          )}
          {activeTab === "family" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Family Safaris
              </h3>
              <p className="text-white/90">
                Create unforgettable memories with your loved ones. Our family
                packages include educational programs, child-friendly
                activities, and safe environments for all ages.
              </p>
            </>
          )}
          {activeTab === "groups" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Group Adventures
              </h3>
              <p className="text-white/90">
                Share the excitement with friends and fellow travelers. Enjoy
                group discounts, shared experiences, and the camaraderie of
                exploring Tanzania together.
              </p>
            </>
          )}
          {activeTab === "girls" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Girls Getaways
              </h3>
              <p className="text-white/90">
                Empowering adventures designed for women. Experience cultural
                immersion, wellness activities, and the support of like-minded
                female travelers.
              </p>
            </>
          )}
          {activeTab === "couples" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Romantic Escapes
              </h3>
              <p className="text-white/90">
                Celebrate your love in Africa's most romantic settings. Enjoy
                private accommodations, sunset dinners, and intimate moments in
                Tanzania's stunning landscapes.
              </p>
            </>
          )}
          {activeTab === "corporates" && (
            <>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Corporate Retreats
              </h3>
              <p className="text-white/90">
                Combine business with adventure. Our corporate packages include
                team building activities, conference facilities, and unique
                networking opportunities in the wild.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
