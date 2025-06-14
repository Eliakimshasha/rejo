"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import frame1 from "../../../public/assets/images/Frame 31.png";
import frame2 from "../../../public/assets/images/Frame 30.png";
import frame3 from "../../../public/assets/images/Frame 34.png";
import frame4 from "../../../public/assets/images/Frame 32.png";
import frame5 from "../../../public/assets/images/Frame 36.png";
import frame6 from "../../../public/assets/images/Frame2.png";
import frame7 from "../../../public/assets/images/Frame 42.png";
import frame8 from "../../../public/assets/images/Frame 44.png";
import frame9 from "../../../public/assets/images/Frame1.png";
import frame10 from "../../../public/assets/images/Frame 48.png";
import frame11 from "../../../public/assets/images/Frame 50.png";
import frame12 from "../../../public/assets/images/Frame 32.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiGrid41 } from "react-icons/ci";

const KilimanjaroTours = () => {
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
                <button className="text-white bg-[#68AC33]  px-6 py-3 w-full md:w-auto rounded-2xl flex items-center justify-center md:justify-normal gap-2 transition-all duration-200 text-sm">
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
            Welcome to the roof of Africa
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              At the heart of Tanzania stands a legend—Mount Kilimanjaro, the
              tallest free-standing mountain in the world and the highest peak
              in Africa.
            </p>

            <p>
              Tanzania, nestled in East Africa, is a{" "}
              <span className="font-semibold">dream destination</span> for
              mountain climbers, home to some of the world's most iconic and
              challenging peaks. The country's landscape is dominated by three
              major mountains, each offering a distinctive and unforgettable
              climbing adventure.
            </p>

            <p>
              Rising majestically above the Tanzanian terrain, Mount Kilimanjaro
              is Africa's tallest peak, standing at a remarkable{" "}
              <span className="font-semibold">5,895 meters</span> (19,341 feet)
              above sea level. As the highest freestanding mountain on the
              planet, Kilimanjaro attracts climbers with its stunning views and
              the accessibility of its trails.
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
                className={`flex flex-col ${
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
                    className="inline-flex items-center px-8 py-3 bg-[#68AC33] text-white rounded-full font-semibold hover:bg-[#68AC33] transition-colors cursor-pointer"
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
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Conquer Kilimanjaro?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your route and start your journey to the roof of Africa
            today.
          </p>
          <button className="inline-flex items-center px-10 py-4 bg-[#68AC33] text-white rounded-full text-lg font-semibold hover:bg-[#68AC33]  transition-colors">
            Start Planning Your Adventure
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default KilimanjaroTours;
