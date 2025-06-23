// 'rejo header'
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoIosClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useParams, usePathname, useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from '../public/assets/images/logo.png'

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#D9EDD9",
    color: "rgba(0, 0, 0, 0.87)",
    right: 0,
    minWidth: 100,
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Header = () => {
  const param = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const route = useRouter();
  const { id } = param;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToContact = () => {
    route.push("/contact");
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Travel Style", link: "/travel-style" },
    { name: "Destinations", link: "/destinations" },
    { name: "Mt.Kilimanjaro", link: "/kilimanjaro" },
    { name: "DayTrips", link: "/daytrips" },
    { name: "Experiences", link: "/experiences" },
    { name: "Escape DSM", link: "/escape-dsm" },
  ];

  const handleNavigation = () => {
    route.push("/");
  };
   const navigateToLogin = () => {
    route.push("/authentication/login");
  };
  // Check if this is the Lemosho route for special styling
  const isLemoshoRoute = id === "lemosho-route";
  return (
    <>
      <header
        className={`${
          path.startsWith("/escapeDsm")
            ? "bg-white"
            : path.startsWith("/routes")
            ? "bg-gray-50"
            : "bg-[#F8FFF3]"
        }  z-50 fixed top-0 left-0 w-full }`}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className=" cursor-pointer pl-0" onClick={() => handleNavigation()}>
             <Image src={logo} alt="logo" className="h-24 w-auto"/>
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
                  href={item.link}
                  className={`text-gray-700 hover:text-gray-900 transition-all duration-200 font-normal text-base transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side - Desktop CTA + Profile (Hidden by default, shown when toggled) + Hamburger */}
            <div className="flex items-center space-x-4 pr-5">
              {/* Desktop CTA and Profile - Toggle with menu */}
              <div
                className=" md:flex items-center space-x-6 transition-all duration-300  opacity-100 transform translate-x-0 "
                style={{
                  transitionDelay: isMenuOpen ? "300ms" : "0ms",
                }}
              >
                <button
                  className={`${
                    path.startsWith("/escapeDsm")
                      ? "bg-[#F4A460] hover:bg-[#a27d5c]"
                      : isLemoshoRoute
                      ? "bg-[#F4A460] hover:bg-[#a27d5c]"
                      : "bg-[#68AC33] hover:bg-[#559426]"
                  } text-white px-3 md:px-6 py-2 rounded-full transition-colors duration-200 font-medium text-sm`}
                  onClick={navigateToContact}
                >
                  Host with us
                </button>
              </div>

              {/* Hamburger menu button - Always visible */}

              <div
                className={`flex items-center ${
                  path.startsWith("/escapeDsm")
                    ? "bg-twhite"
                    : isLemoshoRoute
                    ? "bg-transparent"
                    : "bg-[#D9EDD9] "
                } space-x-4 px-4 py-[6px]  border border-gray-400 rounded-full`}
              >
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <button  className="py-[2px] mx-center w-full" onClick={navigateToLogin}>
                       { `Login ->`}
                      </button>
                    </React.Fragment>
                  }
                  PopperProps={{
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [25, 0], // [x, y] = [horizontal offset, vertical offset]
                        },
                      },
                    ],
                  }}
                >
                  <IoPersonCircleOutline
                    color="black"
                    className="text-2xl cursor-pointer"
                  />
                </HtmlTooltip>
                <div className="w-[1px] h-4 bg-gray-500"></div>
                <button
                  onClick={toggleMenu}
                  className=" text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {isMenuOpen ? (
                    <IoIosClose size={24} />
                  ) : (
                    <CiMenuFries size={18} color="black" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Only for small screens */}
        <div
          className={`md:hidden fixed inset-0 bg-[#F8FFF3] bg-opacity-50 transition-opacity duration-300 z-40 ${
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
                <svg
                  width="70"
                  height="50"
                  viewBox="0 0 113 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.1484 53.1406C43.9453 53.1562 43.5469 53.2656 42.9531 53.4688C42.3594 53.6719 41.7031 53.7734 40.9844 53.7734C39.3438 53.7734 38.0391 53.5 37.0703 52.9531C36.1172 52.4062 35.375 51.6875 34.8438 50.7969C34.3281 49.8906 33.9141 48.8984 33.6016 47.8203C33.3047 46.7422 33 45.6719 32.6875 44.6094C32.375 43.5312 31.9453 42.5469 31.3984 41.6562C30.8516 40.75 30.0859 40.0234 29.1016 39.4766C28.1172 38.9297 26.7812 38.6562 25.0938 38.6562C24.5938 38.6562 24.1172 38.6719 23.6641 38.7031C23.2266 38.7344 22.9844 38.75 22.9375 38.75V49.6953C22.9375 49.9297 23.0156 50.1562 23.1719 50.375C23.3438 50.5938 23.6016 50.7188 23.9453 50.75L26.4766 50.9375V53H14.5469V50.9375L17.0312 50.75C17.375 50.7188 17.6328 50.5938 17.8047 50.375C17.9922 50.1562 18.0859 49.9297 18.0859 49.6953V24.1016C18.0859 23.8672 17.9922 23.6406 17.8047 23.4219C17.6328 23.1875 17.375 23.0625 17.0312 23.0469L14.5469 22.8594V20.7969H27.0625C30.7031 20.7969 33.5703 21.4297 35.6641 22.6953C37.7734 23.9453 38.8281 26.1562 38.8281 29.3281C38.8281 31 38.4531 32.375 37.7031 33.4531C36.9531 34.5156 35.9766 35.3516 34.7734 35.9609C33.5859 36.5703 32.3125 37.0312 30.9531 37.3438C32.4375 37.7031 33.5938 38.2188 34.4219 38.8906C35.2656 39.5469 35.8906 40.2969 36.2969 41.1406C36.7031 41.9844 37.0078 42.8594 37.2109 43.7656C37.4141 44.6719 37.6172 45.5547 37.8203 46.4141C38.0234 47.2734 38.3281 48.0469 38.7344 48.7344C39.1562 49.4219 39.7891 49.9688 40.6328 50.375C41.4766 50.7812 42.6484 50.9844 44.1484 50.9844V53.1406ZM33.6016 29.5391C33.6016 27.4922 32.9453 25.9141 31.6328 24.8047C30.3359 23.6953 28.1719 23.1406 25.1406 23.1406H22.9375V36.2891C23.0156 36.2891 23.3359 36.2969 23.8984 36.3125C24.4766 36.3281 24.9531 36.3359 25.3281 36.3359C28 36.3359 30.0469 35.8438 31.4688 34.8594C32.8906 33.875 33.6016 32.1016 33.6016 29.5391ZM67.5025 50.6094C66.1587 51.4375 64.7056 52.1406 63.1431 52.7188C61.5962 53.2969 60.0103 53.5859 58.3853 53.5859C56.4478 53.5859 54.6275 53.1562 52.9244 52.2969C51.2369 51.4219 49.8697 50.1016 48.8228 48.3359C47.7759 46.5703 47.2525 44.3516 47.2525 41.6797C47.2525 39.1797 47.7369 37 48.7056 35.1406C49.6744 33.2812 51.0103 31.8438 52.7134 30.8281C54.4166 29.7969 56.3541 29.2812 58.5259 29.2812C61.5103 29.2812 63.7525 30.2109 65.2525 32.0703C66.7525 33.9141 67.5025 36.2656 67.5025 39.125C67.5025 39.2812 67.5025 39.4922 67.5025 39.7578C67.5025 40.0078 67.4869 40.2422 67.4556 40.4609H51.8931C51.8931 41.6797 52.0181 42.8984 52.2681 44.1172C52.5337 45.3203 52.9712 46.4141 53.5806 47.3984C54.19 48.3828 55.0103 49.1719 56.0416 49.7656C57.0728 50.3594 58.3619 50.6562 59.9087 50.6562C61.2837 50.6562 62.6197 50.3438 63.9166 49.7188C65.2291 49.0781 66.4244 48.3984 67.5025 47.6797V50.6094ZM62.6978 38.3047V37.25C62.6978 35.6719 62.315 34.3438 61.5494 33.2656C60.7994 32.1875 59.6275 31.6484 58.0337 31.6484C56.4556 31.6484 55.1119 32.2422 54.0025 33.4297C52.8931 34.6172 52.2759 36.2422 52.1509 38.3047H62.6978ZM80.8019 21.9453C80.8019 22.7578 80.5206 23.4609 79.9581 24.0547C79.3956 24.6328 78.7003 24.9219 77.8722 24.9219C77.0597 24.9219 76.3566 24.6328 75.7628 24.0547C75.1847 23.4609 74.8956 22.7578 74.8956 21.9453C74.8956 21.1172 75.1847 20.4219 75.7628 19.8594C76.3566 19.2969 77.0597 19.0156 77.8722 19.0156C78.7003 19.0156 79.3956 19.2969 79.9581 19.8594C80.5206 20.4219 80.8019 21.1172 80.8019 21.9453ZM80.2863 49.9297C80.2863 50.8828 80.2394 51.9453 80.1456 53.1172C80.0675 54.2891 79.8878 55.4375 79.6066 56.5625C79.3409 57.6875 78.9347 58.6797 78.3878 59.5391C77.4191 61.0547 76.2316 62.1719 74.8253 62.8906C73.4191 63.625 71.9581 63.9922 70.4425 63.9922C69.4581 63.9922 68.6066 63.7734 67.8878 63.3359C67.1534 62.9141 66.7863 62.25 66.7863 61.3438C66.7863 60.5312 67.0128 59.9062 67.4659 59.4688C67.9034 59.0312 68.3644 58.7344 68.8488 58.5781L73.5128 61.7891C74.4034 61.2891 75.005 60.3281 75.3175 58.9062C75.6456 57.4844 75.8097 55.8516 75.8097 54.0078V32.7031H72.4113V31.1094L78.3175 29.2812H80.2863V49.9297ZM110.507 41.4688C110.507 43.7344 110.039 45.7891 109.101 47.6328C108.164 49.4609 106.836 50.9141 105.117 51.9922C103.414 53.0547 101.39 53.5859 99.0466 53.5859C96.7184 53.5859 94.7028 53.0547 92.9997 51.9922C91.2966 50.9297 89.9841 49.4844 89.0622 47.6562C88.1403 45.8281 87.6794 43.7656 87.6794 41.4688C87.6794 39.1875 88.1403 37.125 89.0622 35.2812C89.9997 33.4375 91.3278 31.9766 93.0466 30.8984C94.7809 29.8203 96.8278 29.2812 99.1872 29.2812C101.578 29.2812 103.617 29.8281 105.304 30.9219C106.992 32.0156 108.281 33.4844 109.172 35.3281C110.062 37.1719 110.507 39.2188 110.507 41.4688ZM105.515 41.4219C105.515 39.6719 105.281 38.0391 104.812 36.5234C104.359 35.0078 103.656 33.7812 102.703 32.8438C101.765 31.9062 100.578 31.4375 99.1403 31.4375C97.6559 31.4375 96.4372 31.9062 95.4841 32.8438C94.5466 33.7812 93.8512 35.0078 93.3981 36.5234C92.945 38.0391 92.7184 39.6719 92.7184 41.4219C92.7184 43.1562 92.945 44.7891 93.3981 46.3203C93.8669 47.8359 94.57 49.0625 95.5075 50C96.4606 50.9375 97.6559 51.4062 99.0934 51.4062C100.562 51.4062 101.765 50.9375 102.703 50C103.656 49.0625 104.359 47.8359 104.812 46.3203C105.281 44.8047 105.515 43.1719 105.515 41.4219Z"
                    fill="black"
                  />
                  <circle cx="13" cy="13" r="13" fill="#68AC33" />
                </svg>
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
                    href={item.link}
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
                    {item.name}
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
              onClick={navigateToContact}
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
