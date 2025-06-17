"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import frame1 from "../../../public/assets/images/dsm (2).png";
import frame2 from "../../../public/assets/images/dsm (1).png";
import frame3 from "../../../public/assets/images/dsm (4).png";
import frame4 from "../../../public/assets/images/dsm (3).png";

import frame5 from "../../../public/assets/images/dsm (5).png";
import frame6 from "../../../public/assets/images/dsm (6).png";
import frame7 from "../../../public/assets/images/dsm (7).png";
import frame8 from "../../../public/assets/images/dsm (8).png";
import frame9 from "../../../public/assets/images/dsm (9).png";
import frame10 from "../../../public/assets/images/dsm (10).png";
import frame11 from "../../../public/assets/images/dsm (11).png";
import frame52 from "../../../public/assets/images/dsm (1).png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiGrid41 } from "react-icons/ci";

const EscapeDar = () => {
  const router = useRouter();

  const routes = [
    {
      id: "machame-route",
      name: "Machame Route",
      nickname: "Whiskey",
      description:
        'The Machame route, often referred to as the "Whiskey" route, is the most popular trail on Kilimanjaro, renowned for its breathtaking scenic beauty.',
      image: frame5,
    },
    {
      id: "marangu-route",
      name: "Marangu Route",
      nickname: "Coca-Cola",
      description:
        'The Marangu route, known as the "Coca-Cola" route, is the oldest and most established route on Kilimanjaro, offering hut accommodations along the way.',
      image: frame6,
    },
    {
      id: "lemosho-route",
      name: "Lemosho Route",
      nickname: "Wilderness",
      description:
        "The Lemosho route is considered one of the most beautiful routes on Kilimanjaro, offering spectacular views and excellent acclimatization.",
      image: frame7,
    },
    {
      id: "rongai-route",
      name: "Rongai Route",
      nickname: "Northern Circuit",
      description:
        "The Rongai route approaches Kilimanjaro from the north, offering a unique perspective and less crowded trails with beautiful wilderness scenery.",
      image: frame8,
    },
    {
      id: "northern-circuit",
      name: "Northern Circuit",
      nickname: "Grand Traverse",
      description:
        "The Northern Circuit is the longest route on Kilimanjaro, providing the best acclimatization and stunning 360-degree views of the mountain.",
      image: frame9,
    },
    {
      id: "umbwe-route",
      name: "Umbwe Route",
      nickname: "Steep & Direct",
      description:
        "The Umbwe route is the most challenging and direct route to the summit, recommended only for experienced climbers seeking adventure.",
      image: frame10,
    },
    {
      id: "shira-route",
      name: "Shira Route",
      nickname: "Plateau",
      description:
        "The Shira route offers incredible views of the Shira Plateau and provides excellent acclimatization opportunities for climbers.",
      image: frame11,
    },
  ];

  const handleBookNow = (routeId) => {
    router.push(`/routes/${routeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white pt-16 pb-0 md:pb-16">
        <div className=" mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-md text-gray-900 mb-12">
            Mount Kilimanjaro Tours, Routes & Packages
          </h1>

          {/* Image Grid */}
          <div className="grid md:grid-cols-4 grid-cols-3 gap-4 md:mb-12 h-[75vh]">
            {/* Left - Large Giraffe image (spans 2 columns and full height) */}
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl relative">
              <Image
                src={frame2}
                alt="Giraffe with Mount Kilimanjaro in background"
                className="object-cover"
                fill
              />
            </div>

            {/* Middle column - Two stacked images */}
            <div className="flex flex-col gap-4">
              {/* Top middle - Camping image */}
              <div className="rounded-3xl overflow-hidden shadow-xl relative flex-1">
                <Image
                  src={frame1}
                  alt="Camping on Kilimanjaro"
                  className="object-cover"
                  fill
                />
              </div>

              {/* Bottom middle - Rock climbing image */}
              <div className="rounded-3xl overflow-hidden shadow-xl relative flex-1">
                <Image
                  src={frame4}
                  alt="Rock climbing on Kilimanjaro"
                  className="object-cover"
                  fill
                />
              </div>
            </div>

            {/* Right - Large Summit success image with button overlay */}
            <div className="flex flex-col h-[70%] md:h-full md:col-span-1 col-span-3">
              {/* Image container */}
              <div className="rounded-3xl overflow-hidden shadow-xl relative flex-1">
                <Image
                  src={frame3}
                  alt="Climbers at Uhuru Peak"
                  className="object-cover w-full h-full"
                  fill
                />
              </div>

              {/* Button below the image */}
              <div className="flex justify-center mt-4 ">
                <button className="text-white bg-[#F4A460] hover:bg-[#a27d5c]  px-6 py-3 w-full md:w-auto rounded-2xl flex items-center justify-center md:justify-normal gap-2 transition-all duration-200 text-sm">
                  <CiGrid41 size={22} />
                  <span className="whitespace-nowrap text-xl">
                    View the experience
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to the Roof of Africa Section */}
      <section className="bg-[#F1FAF1] py-20">
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Escape Dar es Salaam
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Long before the high-rises, honking traffic, and endless city
              lights, there was Mzizima—a quiet fishing village cradled by the
              sea, its name meaning "Healthy Town." Life moved slowly then,
              guided by tides, trade winds, and the rhythm of the ocean. Over
              time, Mzizima grew into Dar es Salaam—Haven of Peace—a bustling
              metropolis full of life, culture, and movement.
            </p>

            <p>
              But every now and then, the soul yearns for that original
              stillness. A return to the gentle breath of nature, to winding
              coastal paths, rustling palms, and starlit skies. Escape Dar es
              Salaam is a call back to that simplicity—offering you a curated
              collection of serene getaways and hidden gems just beyond the
              city’s edge. Whether it’s a weekend retreat or a spontaneous road
              trip, these escapes reconnect you with the tranquility that once
              defined this land.
            </p>

            <p>
              Step outside the noise—and rediscover peace, just like it was in
              Mzizima.
            </p>
          </div>
        </div>
      </section>

      {/* Climb with Confidence Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Climb with confidence. Climb with purpose.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              <span className="font-semibold">
                8 routes to get to the peak of Africa.
              </span>{" "}
              The journey begins with best selection of the path, let's begin
              today.
            </p>
          </div>

          {/* Routes in Z-format */}
          <div className="space-y-20">
            {routes.map((route, index) => (
              <div
                key={index}
                className={`flex flex-col bg-[#ffd0a622] rounded-4xl p-5 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={route.image}
                      alt={`${route.name} - Mount Kilimanjaro`}
                      className="w-full h-64 object-cover"
                      layout="responsive" // or 'fill' depending on layout style
                      width={800} // provide your image's width
                      height={600} // provide your image's height
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                    {route.name}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {route.description}
                  </p>

                  <button
                    onClick={() => handleBookNow(route.id)}
                    className="inline-flex items-center px-8 py-3 bg-[#7db750] text-white rounded-full font-semibold hover:bg-[#68AC33] transition-colors cursor-pointer"
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="relative  md:h-[85vh] h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={frame52}
            alt="Kilimanjaro background"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute w-full z-10  left-1/2 -translate-x-1/2 px-4 bottom-3 text-center">
          <h2 className="text-xl font-bold text-white mb-1">
            Ready to Conquer Kilimanjaro?
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            Choose your route and start your journey to the roof of Africa
            today.
          </p>
          <button className="inline-flex items-center px-6 py-2 bg-[#68AC33] text-white rounded-full text-sm font-semibold hover:bg-[#68AC33] transition-colors">
            Start Planning Your Adventure
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default EscapeDar;
