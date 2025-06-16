"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronDown, Users, Calendar, Plane, Home, FileText, MapPin, DollarSign, Navigation } from "lucide-react"

// Sample data for different routes
const routeData = {
  "machame-route": {
    name: "Machame Route",
    nickname: "Whiskey Route",
    description:
      'The Machame route, often referred to as the "Whiskey" route, is the most popular trail on Kilimanjaro, renowned for its breathtaking scenic beauty. This route offers diverse landscapes, from lush rainforest to alpine desert, providing climbers with an unforgettable experience as they ascend to Uhuru Peak.',
    image: "/placeholder.svg?height=400&width=800",
    duration: "7 Days",
    difficulty: "Moderate to Challenging",
    success_rate: "85%",
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        altitude: "1640m - 2835m",
        distance: "11 Km",
        time: "5-7 hours",
        habitat: "Rain Forest",
        description:
          "The drive from Moshi to the Machame Gate takes about 45 minutes. The journey passes through the village of Machame which is located on the lower slopes of the mountain.",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        altitude: "2835m - 3750m",
        distance: "5 Km",
        time: "4-6 hours",
        habitat: "Moorland",
        description:
          "After breakfast, we leave the glades of the rain forest and continue on an ascending path, crossing the little valley walking along a steep rocky ridge.",
      },
    ],
    pricing: [
      { group: "1 person", price: 2050 },
      { group: "2-4 people", price: 1900 },
      { group: "5-7 people", price: 1850 },
      { group: "8-10 people", price: 1750 },
      { group: "11+ people", price: 1700 },
    ],
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park (conservation fees, camping fees, crew fees, vehicle fee, rescue fee and all other fees collected by the Tanzania National Parks Authority)",
      "Tented accommodation on Mount Kilimanjaro (modern, comfortable 4-Season tents, North Face VE-25)",
    ],
    exclusions: ["Airline tickets", "Accommodation before and after trekking", "Visa fees", "Personal gear rentals"],
  },
  "lemosho-route": {
    name: "Lemosho Route",
    nickname: "Wilderness Route",
    description:
      "The Lemosho route is widely regarded as the most picturesque trail on Mount Kilimanjaro, offering breathtaking views from various angles. As one of the more recent trails, it is an excellent option for climbers. This route is particularly favored due to its perfect combination of minimal crowds, stunning landscapes, and a high success rate for reaching the summit.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "8 Days",
    difficulty: "Moderate",
    success_rate: "90%",
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Forest Camp",
        altitude: "2100m - 2785m",
        distance: "6 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        description:
          "Drive to Londorossi Gate for registration and permits. Begin hiking through pristine forest with chances to see wildlife.",
      },
    ],
    pricing: [
      { group: "1 person", price: 2200 },
      { group: "2-4 people", price: 2000 },
      { group: "5-7 people", price: 1950 },
      { group: "8-10 people", price: 1850 },
      { group: "11+ people", price: 1800 },
    ],
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park",
      "Tented accommodation on Mount Kilimanjaro",
    ],
    exclusions: ["Airline tickets", "Accommodation before and after trekking", "Visa fees", "Personal gear rentals"],
  },
  "rongai-route": {
    name: "Rongai Route",
    nickname: "Northern Circuit",
    description:
      "The Rongai Route begins with a scenic drive from Moshi to the Rongai Gate near the Kenyan border, covering approximately 70 to 80 kilometers and taking about 4-5 hours. It's the only route that approaches Kilimanjaro from the north, offering a quieter and less crowded experience. The route starts in dry savannah and gradually transitions through moorland and alpine desert, with key resting stops including Simba Camp at the forest edge, followed by Second Cave and Kikelewa Camp in the heath zone. From there, hikers proceed to Mawenzi Tarn, nestled beneath the dramatic Mawenzi Peak, then cross the Saddle to reach Kibo Hut— the base for the final summit push. After reaching Uhuru Peak, the descent follows the Marangu Route, with Horombo Hut as the last overnight stop before exiting through Marangu Gate.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "7 Days",
    difficulty: "Moderate",
    success_rate: "80%",
    itinerary: [
      {
        day: 1,
        title: "From Rongai Gate to Simba Camp",
        altitude: "1950m - 2,635 m",
        distance: "8 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        description:
          "It will take 4-5 hour drive from Moshi to the Kilimanjaro National Park Gate, passing through the Nale Muru village. There is only one route over on the north eastern side of the mountain, Rongai route. After the climbing permits and rescue service registration are completed, the group will begin their hike up to Simba Camp. With breathtaking views of the Kenyan plains, Simba Camp is located close to the first cave at the edge of the moorland zone.",
      },
    ],
    pricing: [
      { group: "1 person", price: 1950 },
      { group: "2-4 people", price: 1800 },
      { group: "5-7 people", price: 1750 },
      { group: "8-10 people", price: 1650 },
      { group: "11+ people", price: 1600 },
    ],
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park (conservation fees, camping fees, crew fees, vehicle fee, rescue fee and all other fees collected by the Tanzania National Parks Authority)",
      "Tented accommodation on Mount Kilimanjaro (modern, comfortable 4-Season tents, North Face VE-25)",
    ],
    exclusions: ["Airline tickets", "Accommodation before and after trekking", "Visa fees", "Personal gear rentals"],
  },
  "shira-route": {
    name: "Shira Route",
    nickname: "Plateau Route",
    description:
      "The Shira Route is a lesser-used trail that starts near Shira Ridge and closely resembles the Lemosho Route. In fact, Shira was the original path, with Lemosho later developed as an improved version. While Shira offers diverse and stunning scenery, it is less popular due to its high starting altitude, which is quickly reached by vehicle. As a result, climbers may experience altitude-related symptoms on the first day while camping at 11,800 feet.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "8 Days",
    difficulty: "Moderate to Challenging",
    success_rate: "75%",
    itinerary: [
      {
        day: 1,
        title: "Shira Gate to Shira Camp",
        altitude: "3600m - 3840m",
        distance: "4 Km",
        time: "2-3 hours",
        habitat: "Moorland",
        description:
          "Drive to Shira Gate and begin the trek across the Shira Plateau. The route offers spectacular views but starts at high altitude.",
      },
    ],
    pricing: [
      { group: "1 person", price: 2100 },
      { group: "2-4 people", price: 1950 },
      { group: "5-7 people", price: 1900 },
      { group: "8-10 people", price: 1800 },
      { group: "11+ people", price: 1750 },
    ],
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park",
      "Tented accommodation on Mount Kilimanjaro",
    ],
    exclusions: ["Airline tickets", "Accommodation before and after trekking", "Visa fees", "Personal gear rentals"],
  },
  "umbwe-route": {
    name: "Umbwe Route",
    nickname: "Steep & Direct Route",
    description:
      "The only way to reach Kilimanjaro from the north, close to the Kenyan border, is via the Rongai route. Although it is becoming more and more popular with climbers, it is still not overly crowded. For those looking for an alternative to the more crowded Marangu route, Rongai is a fantastic option because it provides a more gradual ascent than other routes on the mountain.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "7 Days",
    difficulty: "Very Challenging",
    success_rate: "70%",
    itinerary: [
      {
        day: 1,
        title: "Umbwe Gate to Umbwe Camp",
        altitude: "1640m - 2940m",
        distance: "11 Km",
        time: "5-7 hours",
        habitat: "Rain Forest",
        description:
          "The Umbwe route is known for its steep, direct ascent. Begin the challenging climb through dense rainforest.",
      },
    ],
    pricing: [
      { group: "1 person", price: 1900 },
      { group: "2-4 people", price: 1750 },
      { group: "5-7 people", price: 1700 },
      { group: "8-10 people", price: 1600 },
      { group: "11+ people", price: 1550 },
    ],
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park",
      "Tented accommodation on Mount Kilimanjaro",
    ],
    exclusions: ["Airline tickets", "Accommodation before and after trekking", "Visa fees", "Personal gear rentals"],
  },
}

export default function RouteDetail() {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const [tabValue, setTabValue] = useState(0)
  const [selectedPeople, setSelectedPeople] = useState("2 people")
  const [selectedDate, setSelectedDate] = useState("12-03-2024")

  const route = routeData[id]

  if (!route) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mt-8">Route not found</h1>
      </div>
    )
  }

  const handleTabChange = (newValue) => {
    setTabValue(newValue)
  }

  const getCurrentPrice = () => {
    const priceData = route.pricing.find(
      (p) =>
        p.group.includes(selectedPeople.split(" ")[0]) || (selectedPeople === "2 people" && p.group === "2-4 people"),
    )
    return priceData ? priceData.price : route.pricing[1].price
  }

  const tabs = ["Description", "Itenary", "Price", "Inclusion", "Exclusion"]

  return (
    <div className="bg-gray-50 min-h-screen md:px-4">
      {/* Header */}
     <div className="bg-gray-50 pt-8 pb-4">
      <div className="text-black mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{route.name}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm">8 Days route</span>
              <span className="border border-gray-300 px-6 py-2 rounded-full text-sm">7 Days route</span>
            </div>

            <p className="text-black -600 text-lg leading-relaxed mb-8 max-w-4xl">{route.description}</p>
          </div>

          {/* Booking Card */}
          <div className="w-full lg:ml-8 lg:w-[400px] bg-white rounded-xl shadow-lg p-6">
            <div className="text-2xl font-bold mb-6">${getCurrentPrice().toLocaleString()} / person</div>

            <div className="mb-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-black -500 mr-3" />
                  <span>{selectedPeople}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-black -500" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-black -500 mr-3" />
                  <span>{selectedDate}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-black -500" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-black -900">$1,000</span>
                <span className="text-black -500">1 Adults</span>
                <span className="text-black -900">$1,000</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-black -900">$500</span>
                <span className="text-black -500">1 Child</span>
                <span className="text-black -900">$500</span>
              </div>

              <hr className="border-gray-200 mb-4" />

              <div className="flex justify-between items-center font-semibold">
                <span>Totals before tax</span>
                <span>$1,500</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex-1 border border-pink-500 text-pink-500 py-3 px-4 rounded-full text-sm font-medium hover:bg-pink-50 transition-colors">
                Pay Full Amount
              </button>
              <button className="flex-1 bg-pink-500 text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
                Pay in Installments
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`px-6 py-2 text-base font-medium rounded-full transition-colors ${
                  tabValue === index ? "bg-gray-800 text-white" : "text-black -500 hover:text-black -700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Description Tab */}
        {tabValue === 0 && (
          <div className="py-6">
            <p className="text-lg leading-relaxed text-black -700">{route.description}</p>
          </div>
        )}

        {/* Itinerary Tab */}
        {tabValue === 1 && (
          <div className="py-6">
            {route.itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm mb-6 p-6">
                <div className="flex items-start gap-6">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Day {day.day}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-black -500 mr-2" />
                      <h3 className="text-xl font-bold">{day.title}</h3>
                    </div>
                    <p className="text-black -700 leading-relaxed mb-6">{day.description}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 min-w-64">
                    <h4 className="text-lg font-bold mb-4">Altitude: {day.altitude}</h4>
                    <p className="text-sm mb-2">
                      <strong>Hiking Distance:</strong> {day.distance}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Hiking Time:</strong> {day.time}
                    </p>
                    <p className="text-sm">
                      <strong>Habitat:</strong> {day.habitat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Price Tab */}
        {tabValue === 2 && (
          <div className="py-6 text-center">
            <h2 className="text-4xl font-bold mb-4">The more you climb together, the more rewarding it becomes</h2>
            <p className="text-xl text-black -600 mb-8">Our pricing is designed to encourage shared adventure.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center mb-8">
              {route.pricing.map((pricing, index) => (
                <div
                  key={index}
                  className={`p-6 text-center rounded-lg shadow-sm ${
                    index === 0
                      ? "bg-orange-50"
                      : index === 1
                        ? "bg-blue-50"
                        : index === 2
                          ? "bg-pink-50"
                          : index === 3
                            ? "bg-purple-50"
                            : "bg-green-50"
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-black -600 text-sm">{pricing.group}</span>
                  </div>
                  <div className="text-3xl font-bold">${pricing.price.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <p className="text-black -600 max-w-4xl mx-auto">
              All prices quoted are per person in USD (US Dollars) and are negotiable according to the period of the
              year, includes and excludes and change of government policies. Please contact us for more information.
            </p>
          </div>
        )}

        {/* Inclusion Tab */}
        {tabValue === 3 && (
          <div className="py-6">
            <h2 className="text-4xl font-bold mb-8">Package Includes</h2>

            <div className="space-y-6">
              {route.inclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 flex items-center justify-center min-w-12 h-12">
                    {index === 0 && <Plane className="w-6 h-6" />}
                    {index === 1 && <Navigation className="w-6 h-6" />}
                    {index === 2 && <DollarSign className="w-6 h-6" />}
                    {index === 3 && <Home className="w-6 h-6" />}
                  </div>
                  <p className="text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exclusion Tab */}
        {tabValue === 4 && (
          <div className="py-6">
            <h2 className="text-4xl font-bold mb-8">Package Excludes</h2>

            <div className="space-y-6">
              {route.exclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-3 flex items-center justify-center min-w-12 h-12">
                    {index === 0 && <Plane className="w-6 h-6" />}
                    {index === 1 && <Home className="w-6 h-6" />}
                    {index === 2 && <FileText className="w-6 h-6" />}
                    {index === 3 && <Navigation className="w-6 h-6" />}
                  </div>
                  <p className="text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
