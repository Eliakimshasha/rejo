"use client";
import React, { useRef, useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    phone: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    gender: false,
    nationality: false,
  });

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
  const countries = [
    "Tanzania",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Burundi",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };
  const dateInputRef = useRef(null);

  return (

    <>
      <div className="relative md:h-[90vh] h-[50vh] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="min-h-screen bg-[#F8FFF3] flex flex-col items-center justify-center p-4">
        <h1 className="my-20 font-medium text-black md:text-3xl text-xl text-center">
          Get In Touch With Us. Looking Forward To Hearing From You
        </h1>

        <div className="w-full max-w-5xl md:px-20 md:py-14 bg-white rounded-3xl border border-gray-200 p-8">
          <form className="space-y-8">
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Date of Birth and Gender Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Date Of Birth
                </label>
                <div className="relative">
                  <input
                    ref={dateInputRef}
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="DD -MM - YYYY"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-12 
        [&::-webkit-calendar-picker-indicator]:opacity-0 
        [&::-webkit-calendar-picker-indicator]:absolute 
        [&::-webkit-calendar-picker-indicator]:w-full 
        [&::-webkit-calendar-picker-indicator]:h-full 
        [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                  <Calendar
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer pointer-events-none"
                    onClick={() => dateInputRef.current?.showPicker()}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Gender
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("gender")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-left flex items-center justify-between"
                  >
                    <span>{formData.gender || "Select Gender"}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  {dropdownOpen.gender && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {genderOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect("gender", option)}
                          className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Nationality and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Nationality
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("nationality")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-left flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 relative">
                          <div className="absolute top-0 left-0 w-full h-2 bg-green-500 rounded-t-full"></div>
                          <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 rounded-b-full"></div>
                        </div>
                      </div>
                      <span>{formData.nationality || "Select Country"}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  {dropdownOpen.nationality && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() =>
                            handleDropdownSelect("nationality", country)
                          }
                          className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.g +255 743 404 942"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Anything you would like us to know about you"
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gray-200 text-gray-600 rounded-xl hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
