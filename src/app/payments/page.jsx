"use client";
import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Package,
  CreditCard,
  Smartphone,
  ChevronDown,
  Shield,
  Heart,
} from "lucide-react";

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [phoneNumber, setPhoneNumber] = useState("0XXXXXXXXX");
  const [cardOwner, setCardOwner] = useState("First Name & Last Name");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [expiryDate, setExpiryDate] = useState("MM/YYYY");
  const [cvv, setCvv] = useState("XXX");

    const dateInputRef = useRef(null);
  

  // Adventure Details State
  const [adventureDetails, setAdventureDetails] = useState({
    adults: 2,
    children: 1,
    startDate: "12 March 2025",
    endDate: "13 June 2025",
  });

  // Traveler Details State
  const [travelers, setTravelers] = useState([]);

  // Initialize travelers when adults count changes
  React.useEffect(() => {
    const newTravelers = Array.from(
      { length: adventureDetails.adults },
      (_, index) => ({
        id: index + 1,
        fullName: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        phone: "",
      })
    );
    setTravelers(newTravelers);
  }, [adventureDetails.adults]);

  const updateTraveler = (id, field, value) => {
    setTravelers((prev) =>
      prev.map((traveler) =>
        traveler.id === id ? { ...traveler, [field]: value } : traveler
      )
    );
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateTotal = () => {
    const adultTotal = adventureDetails.adults * 512;
    const childTotal = adventureDetails.children * 512;
    return adultTotal + childTotal;
  };

  // Step 1: Adventure Details
  const renderAdventureDetails = () => (
    <div className="space-y-6">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">
        Adventure Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number Of Adults
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={adventureDetails.adults}
            onChange={(e) =>
              setAdventureDetails((prev) => ({
                ...prev,
                adults: Number.parseInt(e.target.value) || 1,
              }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number Of Children
          </label>
          <input
            type="number"
            min="0"
            max="10"
            value={adventureDetails.children}
            onChange={(e) =>
              setAdventureDetails((prev) => ({
                ...prev,
                children: Number.parseInt(e.target.value) || 0,
              }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start-Trip Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={adventureDetails.startDate}
              onChange={(e) =>
                setAdventureDetails((prev) => ({
                  ...prev,
                  startDate: e.target.value,
                }))
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="12 March 2025"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End-Trip Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={adventureDetails.endDate}
              onChange={(e) =>
                setAdventureDetails((prev) => ({
                  ...prev,
                  endDate: e.target.value,
                }))
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="13 June 2025"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <button
        onClick={nextStep}
        className="w-full bg-gray-800 text-white py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center"
      >
        <span>Continue</span>
        <div className="ml-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">→</span>
        </div>
      </button>
    </div>
  );

  // Step 2: Personal Details
  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button
          onClick={prevStep}
          className="mr-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
          Traveler Details
        </h2>
      </div>

      <div className="space-y-8">
        {travelers.map((traveler, index) => (
          <div
            key={traveler.id}
            className="border border-gray-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Traveler {index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={traveler.fullName}
                  onChange={(e) =>
                    updateTraveler(traveler.id, "fullName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={traveler.email}
                  onChange={(e) =>
                    updateTraveler(traveler.id, "email", e.target.value)
                  }
                  className="w-full p-3  text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Of Birth
                </label>
                <div className="relative">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={traveler.dateOfBirth}
                    onChange={(e) =>
                      updateTraveler(traveler.id, "dateOfBirth", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 pr-10
                     [&::-webkit-calendar-picker-indicator]:opacity-0 
        [&::-webkit-calendar-picker-indicator]:absolute 
        [&::-webkit-calendar-picker-indicator]:w-full 
        [&::-webkit-calendar-picker-indicator]:h-full 
        [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    "
                    placeholder="DD - MM - YYYY"
                  />
                  <Calendar
                    className="absolute right-3 top-3 w-5 h-5 text-gray-400"
                    onClick={() => dateInputRef.current?.showPicker()}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <div className="relative">
                  <select
                    value={traveler.gender}
                    onChange={(e) =>
                      updateTraveler(traveler.id, "gender", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality
                </label>
                <div className="relative">
                  <select
                    value={traveler.nationality}
                    onChange={(e) =>
                      updateTraveler(traveler.id, "nationality", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="tz">Tanzania</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={traveler.phone}
                  onChange={(e) =>
                    updateTraveler(traveler.id, "phone", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                  placeholder="E.g +255 745 456 789"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextStep}
        className="w-full bg-gray-800 text-white py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center"
      >
        <span>Continue</span>
        <div className="ml-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">→</span>
        </div>
      </button>
    </div>
  );

  // Step 3: Payment (existing code)
  const renderPayment = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-6 lg:mb-8">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mr-3">
          Complete Payment Securely
        </h1>
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Payment Methods Sidebar */}
        <div className="w-full lg:w-48 mb-6 lg:mb-0 lg:mr-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-4">Payment Method</h3>

            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 lg:w-full flex items-center justify-center lg:justify-start p-3 rounded-lg transition-colors ${
                  paymentMethod === "card"
                    ? "bg-gray-800 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                <CreditCard className="w-4 h-4 mr-2 lg:mr-3" />
                <span className="text-sm">Card</span>
              </button>

              <button
                onClick={() => setPaymentMethod("mobile")}
                className={`flex-1 lg:w-full flex items-center justify-center lg:justify-start p-3 rounded-lg transition-colors ${
                  paymentMethod === "mobile"
                    ? "bg-gray-800 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Smartphone className="w-4 h-4 mr-2 lg:mr-3" />
                <span className="text-sm">Mobile Money</span>
              </button>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="flex-1">
          <button
            onClick={prevStep}
            className="mb-4 lg:mb-6 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {paymentMethod === "mobile" ? (
            <div className="space-y-4 lg:space-y-6">
              {/* Mobile Money Network */}
              <div>
                <div className="bg-gray-100 p-3 lg:p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Mobile Money Network
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Select Network
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                  placeholder="0XXXXXXXXX"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4 lg:space-y-6">
              {/* Card Owner Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NAME OF CARD OWNER
                </label>
                <input
                  type="text"
                  value={cardOwner}
                  onChange={(e) => setCardOwner(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                  placeholder="First Name & Last Name"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CARD NUMBER
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 pr-12 text-sm lg:text-base"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="absolute right-3 top-3 flex space-x-1">
                    <div className="w-4 h-3 lg:w-6 lg:h-4 bg-red-500 rounded-sm"></div>
                    <div className="w-4 h-3 lg:w-6 lg:h-4 bg-orange-400 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Expiry and CVV */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EXPIRY DATE
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 pr-12 text-sm lg:text-base"
                      placeholder="XXX"
                    />
                    <div className="absolute right-3 top-3">
                      <div className="w-4 h-3 lg:w-6 lg:h-4 bg-blue-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pay Button */}
          <button className="w-full bg-gray-800 text-white py-3 lg:py-4 rounded-lg font-semibold mt-6 lg:mt-8 hover:bg-gray-900 transition-colors text-sm lg:text-base">
            Pay ${calculateTotal().toLocaleString()}
          </button>

          {/* Security Info */}
          <div className="flex items-center justify-center mt-4 text-xs lg:text-sm text-gray-500">
            <Shield className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
            <span>Secured By</span>
            <span className="text-orange-500 ml-1">SwahiliePay</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="w-full lg:w-2/3 bg-white p-4 lg:p-8 lg:pt-4">
        {/* Header */}
        <div className="flex items-center mb-4 lg:mb-4">
          <svg
            width="90"
            height="50"
            viewBox="0 0 156 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.0952 55.4053C48.8921 55.4209 48.4937 55.5303 47.8999 55.7334C47.3062 55.9365
                     46.6499 56.0381 45.9312 56.0381C44.2905 56.0381 42.9858 55.7646 42.0171 55.2178C41.064
                      54.6709 40.3218 53.9521 39.7905 53.0615C39.2749 52.1553 38.8608 51.1631 38.5483
                       50.085C38.2515 49.0068 37.9468 47.9365 37.6343 46.874C37.3218 45.7959 36.8921 44.8115
                        36.3452 43.9209C35.7983 43.0146 35.0327 42.2881 34.0483 41.7412C33.064 41.1943 31.728
                         40.9209 30.0405 40.9209C29.5405 40.9209 29.064 40.9365 28.6108 40.9678C28.1733 40.999
                          27.9312 41.0146 27.8843 41.0146V51.96C27.8843 52.1943 27.9624 52.4209 28.1187
                           52.6396C28.2905 52.8584 28.5483 52.9834 28.8921 53.0146L31.4233
                            53.2021V55.2646H19.4937V53.2021L21.978 53.0146C22.3218 52.9834 22.5796 52.8584 
                            22.7515 52.6396C22.939 52.4209 23.0327 52.1943 23.0327 51.96V26.3662C23.0327 26.1318 22.939 25.9053 22.7515 25.6865C22.5796 25.4521 22.3218 25.3271 21.978 25.3115L19.4937 25.124V23.0615H32.0093C35.6499 23.0615 38.5171 23.6943 40.6108 24.96C42.7202 26.21 43.7749 28.4209 43.7749 31.5928C43.7749 33.2646 43.3999 34.6396 42.6499 35.7178C41.8999 36.7803 40.9233 37.6162 39.7202 38.2256C38.5327 38.835 37.2593 39.2959 35.8999 39.6084C37.3843 39.9678 38.5405 40.4834 39.3687 41.1553C40.2124 41.8115 40.8374 42.5615 41.2437 43.4053C41.6499 44.249 41.9546 45.124 42.1577 46.0303C42.3608 46.9365 42.564 47.8193 42.7671 48.6787C42.9702 49.5381 43.2749 50.3115 43.6812 50.999C44.103 51.6865 44.7358 52.2334 45.5796 52.6396C46.4233 53.0459 47.5952 53.249 49.0952 53.249V55.4053ZM38.5483 31.8037C38.5483 29.7568 37.8921 28.1787 36.5796 27.0693C35.2827 25.96 33.1187 25.4053 30.0874 25.4053H27.8843V38.5537C27.9624 38.5537 28.2827 38.5615 28.8452 38.5771C29.4233 38.5928 29.8999 38.6006 30.2749 38.6006C32.9468 38.6006 34.9937 38.1084 36.4155 37.124C37.8374 36.1396 38.5483 34.3662 38.5483 31.8037ZM72.4493 52.874C71.1055 53.7021 69.6524 54.4053 68.0899 54.9834C66.543 55.5615 64.9571 55.8506 63.3321 55.8506C61.3946 55.8506 59.5743 55.4209 57.8712 54.5615C56.1837 53.6865 54.8165 52.3662 53.7696 50.6006C52.7227 48.835 52.1993 46.6162 52.1993 43.9443C52.1993 41.4443 52.6837 39.2646 53.6524 37.4053C54.6212 35.5459 55.9571 34.1084 57.6602 33.0928C59.3633 32.0615 61.3008 31.5459 63.4727 31.5459C66.4571 31.5459 68.6993 32.4756 70.1993 34.335C71.6993 36.1787 72.4493 38.5303 72.4493 41.3896C72.4493 41.5459 72.4493 41.7568 72.4493 42.0225C72.4493 42.2725 72.4337 42.5068 72.4024 42.7256H56.8399C56.8399 43.9443 56.9649 45.1631 57.2149 46.3818C57.4805 47.585 57.918 48.6787 58.5274 49.6631C59.1368 50.6475 59.9571 51.4365 60.9883 52.0303C62.0196 52.624 63.3087 52.9209 64.8555 52.9209C66.2305 52.9209 67.5665 52.6084 68.8633 51.9834C70.1758 51.3428 71.3712 50.6631 72.4493 49.9443V52.874ZM67.6446 40.5693V39.5146C67.6446 37.9365 67.2618 36.6084 66.4962 35.5303C65.7462 34.4521 64.5743 33.9131 62.9805 33.9131C61.4024 33.9131 60.0587 34.5068 58.9493 35.6943C57.8399 36.8818 57.2227 38.5068 57.0977 40.5693H67.6446ZM85.7487 24.21C85.7487 25.0225 85.4674 25.7256 84.9049 26.3193C84.3424 26.8975 83.6471 27.1865 82.819 27.1865C82.0065 27.1865 81.3033 26.8975 80.7096 26.3193C80.1315 25.7256 79.8424 25.0225 79.8424 24.21C79.8424 23.3818 80.1315 22.6865 80.7096 22.124C81.3033 21.5615 82.0065 21.2803 82.819 21.2803C83.6471 21.2803 84.3424 21.5615 84.9049 22.124C85.4674 22.6865 85.7487 23.3818 85.7487 24.21ZM85.233 52.1943C85.233 53.1475 85.1862 54.21 85.0924 55.3818C85.0143 56.5537 84.8346 57.7021 84.5533 58.8271C84.2877 59.9521 83.8815 60.9443 83.3346 61.8037C82.3658 63.3193 81.1783 64.4365 79.7721 65.1553C78.3658 65.8896 76.9049 66.2568 75.3893 66.2568C74.4049 66.2568 73.5533 66.0381 72.8346 65.6006C72.1002 65.1787 71.733 64.5146 71.733 63.6084C71.733 62.7959 71.9596 62.1709 72.4127 61.7334C72.8502 61.2959 73.3112 60.999 73.7955 60.8428L78.4596 64.0537C79.3502 63.5537 79.9518 62.5928 80.2643 61.1709C80.5924 59.749 80.7565 58.1162 80.7565 56.2725V34.9678H77.358V33.374L83.2643 31.5459H85.233V52.1943ZM115.454 43.7334C115.454 45.999 114.986 48.0537 114.048 49.8975C113.111 51.7256 111.782 53.1787 110.064 54.2568C108.361 55.3193 106.337 55.8506 103.993 55.8506C101.665 55.8506 99.6496 55.3193 97.9465 54.2568C96.2433 53.1943 94.9308 51.749 94.009 49.9209C93.0871 48.0928 92.6262 46.0303 92.6262 43.7334C92.6262 41.4521 93.0871 39.3896 94.009 37.5459C94.9465 35.7021 96.2746 34.2412 97.9933 33.1631C99.7277 32.085 101.775 31.5459 104.134 31.5459C106.525 31.5459 108.564 32.0928 110.251 33.1865C111.939 34.2803 113.228 35.749 114.118 37.5928C115.009 39.4365 115.454 41.4834 115.454 43.7334ZM110.462 43.6865C110.462 41.9365 110.228 40.3037 109.759 38.7881C109.306 37.2725 108.603 36.0459 107.65 35.1084C106.712 34.1709 105.525 33.7021 104.087 33.7021C102.603 33.7021 101.384 34.1709 100.431 35.1084C99.4933 36.0459 98.798 37.2725 98.3449 38.7881C97.8918 40.3037 97.6652 41.9365 97.6652 43.6865C97.6652 45.4209 97.8918 47.0537 98.3449 48.585C98.8137 50.1006 99.5168 51.3271 100.454 52.2646C101.407 53.2021 102.603 53.6709 104.04 53.6709C105.509 53.6709 106.712 53.2021 107.65 52.2646C108.603 51.3271 109.306 50.1006 109.759 48.585C110.228 47.0693 110.462 45.4365 110.462 43.6865Z"
              fill="black"
            />
            <ellipse
              cx="17.9469"
              cy="17.2059"
              rx="17.9469"
              ry="17.2059"
              fill="#F4A460"
            />
          </svg>
        </div>

        {/* Title with Heart */}
        <div className="flex items-center mb-6">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mr-2">
            Skies Over The Wild - Balloon Experience
          </h1>
          <Heart className="w-5 h-5 text-red-500 fill-current" />
        </div>

        {/* Step Content */}
        <div className="flex-1">
          {currentStep === 1 && renderAdventureDetails()}
          {currentStep === 2 && renderPersonalDetails()}
          {currentStep === 3 && renderPayment()}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mt-6 lg:mt-8">
          <span className="text-xs lg:text-sm text-gray-500">STEPS</span>
          <span className="text-xs lg:text-sm text-gray-500">
            {currentStep}/3
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <div
            className="bg-gray-800 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Right Panel - Trip Details */}
      <div className="w-full lg:w-1/3 bg-white border-l border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Trip Details</h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <div>
              <div className="text-sm text-gray-500">Destination</div>
              <div className="font-medium text-gray-800">
                Mt Kilimanjaro - Machame Route
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-medium text-gray-800">6 Days</div>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <div>
              <div className="text-sm text-gray-500">Start and End</div>
              <div className="font-medium text-gray-800">
                {adventureDetails.startDate} - {adventureDetails.endDate}
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <Package className="w-4 h-4 text-gray-500 mt-1 mr-3" />
            <div>
              <div className="text-sm text-gray-500">Package Includes</div>
              <div className="font-medium text-gray-800">
                Accommodation, Guide, Meals, Transport
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Payment Details
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700">
                  {adventureDetails.adults} Adults
                </span>
                <span className="text-xs text-gray-500 ml-2">@ $512</span>
              </div>
              <span className="font-semibold text-gray-800">
                ${(adventureDetails.adults * 512).toLocaleString()}
              </span>
            </div>

            {adventureDetails.children > 0 && (
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-700">
                    {adventureDetails.children} Child
                    {adventureDetails.children > 1 ? "ren" : ""}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">@ $512</span>
                </div>
                <span className="font-semibold text-gray-800">
                  ${(adventureDetails.children * 512).toLocaleString()}
                </span>
              </div>
            )}

            <div className="border-t border-gray-200 pt-3 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">TOTAL</span>
                <span className="text-xl font-bold text-gray-800">
                  ${calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
