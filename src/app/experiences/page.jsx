import React from "react";
import Image from "next/image";
import frame1 from "../../../public/assets/images/Frame 40.png";
import frame2 from "../../../public/assets/images/Frame 38.png";
import frame3 from "../../../public/assets/images/Frame 39.png";
import curve1 from "../../../public/assets/images/Frame 46.png";
import curve2 from "../../../public/assets/images/Frame 45.png";
import curve3 from "../../../public/assets/images/Frame 43.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Balloon Experience",
      description:
        "You will experience a unique rush when the hot-air balloon safari pilot inflates the enormous balloon for the final time, causing you to start floating upward into the clear early morning. Usually intended for a small group of intrepid travelers, your hot-air balloon expedition surpasses all expectations. The gentle breezes allow for a leisurely, almost sleepy, balloon safari, giving you time to take in the scenery and fauna below.",
      image: frame1,
      bgColor: "#F1F9FF",
    },
    {
      id: 2,
      title: "Desert Adventure",
      description:
        "Embark on an extraordinary desert balloon journey that takes you soaring above golden dunes and ancient landscapes. As the sun rises, casting warm hues across the endless sand, you'll witness the desert come alive with subtle movements and hidden wildlife. This serene flight offers unparalleled views of oasis settlements, nomadic camps, and the breathtaking contrast between civilization and wilderness.",
      image: frame2,
      bgColor: "#F3FFF2",
    },
    {
      id: 3,
      title: "Mountain Vista",
      description:
        "Drift peacefully above majestic mountain ranges in this unforgettable alpine balloon experience. Watch as morning mist clings to valley floors while snow-capped peaks pierce through clouds below. The crisp mountain air and panoramic vistas create a sense of wonder as you glide silently over pristine forests, crystal-clear lakes, and rugged terrain that few have seen from this perspective.",
      image: frame3,
      bgColor: " #FEF6FF",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-[40px] text-gray-900 leading-tight">
            Memorable Experiences, One Day at a Time 🌍✨
          </h1>

          <p className="text-[20px] text-gray-700 leading-relaxed max-w-5xl mx-auto">
            Explore Enriching Experiences That Go Beyond Just A Day. Whether
            It's A Weekend Escape, A Cultural Journey, Or A Wellness Retreat,
            Each Trip Is Designed To Leave A Lasting Impression.
          </p>
        </div>
      </div>
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className="rounded-xl p-8"
          style={{ backgroundColor: experience.bgColor }}
        >
          <div
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="flex-1 max-w-md">
              <div className="relative w-full h-48 md:h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Balloon overlay for visual consistency */}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                {experience.title}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed md:leading-[40px]">
                {experience.description}
              </p>

              <button className="inline-flex items-center gap-3 bg-[#68AC33] hover:bg-[#559426] text-white font-semibold px-8 py-2 rounded-full transition-colors duration-200 ">
                Book Now
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
          </div>
        </div>
      ))}

      {/* Trip Planning Section */}
      <div className="bg-[#F8FFF3] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 z-10 relative flex flex-col items-center lg:items-start">
            <div className="md:space-y-1 space-y-3">
              <h2 className="md:text-[54px] text-[40px] text-center md:text-start  text-gray-900 leading-tight">
                Let's Plan Your trip
              </h2>

              <p className="md:text-[17px] text-center md:text-start  text-gray-700 leading-relaxed ">
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
                    src={curve1}
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
                    src={curve3}
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
                    src={curve2}
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
    </div>
  );
};

export default Experience;
