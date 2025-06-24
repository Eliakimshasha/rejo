"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronDown,
  Users,
  Calendar,
  Plane,
  Home,
  FileText,
  DollarSign,
  Navigation,
} from "lucide-react";
import Image from "next/image";

const routeData = {
  // Kilimanjaro routes with multiple day options
  "machame-route": {
    name: "Machame Route",
    nickname: "Whiskey Route",
    hasMultipleDays: true,
    variants: {
      "7-days": {
        duration: "7 Days",
        tabDescription:
          "The 7-day Machame route offers a challenging but rewarding climb with excellent acclimatization. This route takes you through diverse landscapes from lush rainforest to alpine desert, providing climbers with an unforgettable experience as they ascend to Uhuru Peak.",
        description:
          'The Machame route, often referred to as the "Whiskey" route, is the most popular trail on Kilimanjaro, renowned for its breathtaking scenic beauty. This 7-day version provides adequate time for acclimatization while maintaining a challenging pace.',
        itinerary: [
          {
            day: 1,
            title: "Machame Gate to Machame Camp",
            altitude: "1640m - 2835m",
            distance: "11 Km",
            time: "5-7 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61.png",
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
            image: "/assets/images/Frame 61 (1).png",
            description:
              "After breakfast, we leave the glades of the rain forest and continue on an ascending path, crossing the little valley walking along a steep rocky ridge.",
          },
          {
            day: 3,
            title: "Shira Camp to Lava Tower to Barranco Camp",
            altitude: "3750m - 4630m - 3960m",
            distance: "10 Km",
            time: "6-8 hours",
            habitat: "Semi Desert",
            image: "/assets/images/Frame 61 (2).png",
            description:
              "From the Shira Plateau, we continue to the east up a ridge, passing the junction towards the peak of Kibo. As we continue, our direction changes to the South East towards the Lava Tower, called the 'Shark's Tooth'.",
          },
          {
            day: 4,
            title: "Barranco Camp to Karanga Camp",
            altitude: "3960m - 4035m",
            distance: "5 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (3).png",
            description:
              "After breakfast, we leave Barranco and continue on a steep ridge passing the Barranco Wall, to the Karanga Valley campsite. This is a short day meant for acclimatization.",
          },
          {
            day: 5,
            title: "Karanga Camp to Barafu Camp",
            altitude: "4035m - 4673m",
            distance: "4 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (4).png",
            description:
              "After breakfast, we leave Karanga and hit the junction which connects with the Mweka Trail. We continue up to the Barafu Hut. At this point, you have completed the South Circuit, which offers views of the summit from many different angles.",
          },
          {
            day: 6,
            title: "Barafu Camp to Summit to Mweka Camp",
            altitude: "4673m - 5895m - 3068m",
            distance: "17 Km",
            time: "12-16 hours",
            habitat: "Arctic",
            image: "/assets/images/Frame 61 (1).png",
            description:
              "Very early in the morning (midnight to 2am), we continue our way to the summit between the Rebmann and Ratzel glaciers. You head in a northwesterly direction and ascend through heavy scree towards Stella Point on the crater rim.",
          },
          {
            day: 7,
            title: "Mweka Camp to Mweka Gate",
            altitude: "3068m - 1640m",
            distance: "10 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 60.png",
            description:
              "After breakfast, we continue the descent down to the Mweka Park Gate to receive your summit certificates. At lower elevations, it can be wet and muddy. Gaiters and trekking poles are recommended.",
          },
        ],
        pricing: [
          { group: "1 person", price: 2050 },
          { group: "2-4 people", price: 1900 },
          { group: "5-7 people", price: 1850 },
          { group: "8-10 people", price: 1750 },
          { group: "11+ people", price: 1700 },
        ],
      },
      "8-days": {
        duration: "8 Days",
        tabDescription:
          "The 8-day Machame route provides the best acclimatization profile with an extra day for rest and adjustment. This extended version significantly increases your chances of summit success while allowing you to fully enjoy the spectacular scenery and diverse ecosystems of Kilimanjaro.",
        description:
          "The extended 8-day Machame route offers superior acclimatization and higher success rates. This version includes an additional acclimatization day, making it ideal for climbers who want to maximize their summit chances while enjoying the journey.",
        itinerary: [
          {
            day: 1,
            title: "Machame Gate to Machame Camp",
            altitude: "1640m - 2835m",
            distance: "11 Km",
            time: "5-7 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61.png",
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
            image: "/assets/images/Frame 61 (1).png",
            description:
              "After breakfast, we leave the glades of the rain forest and continue on an ascending path, crossing the little valley walking along a steep rocky ridge.",
          },
          {
            day: 3,
            title: "Shira Camp to Lava Tower to Barranco Camp",
            altitude: "3750m - 4630m - 3960m",
            distance: "10 Km",
            time: "6-8 hours",
            habitat: "Semi Desert",
            image: "/assets/images/Frame 61 (2).png",
            description:
              "From the Shira Plateau, we continue to the east up a ridge, passing the junction towards the peak of Kibo. As we continue, our direction changes to the South East towards the Lava Tower, called the 'Shark's Tooth'.",
          },
          {
            day: 4,
            title: "Barranco Camp to Karanga Camp",
            altitude: "3960m - 4035m",
            distance: "5 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (3).png",
            description:
              "After breakfast, we leave Barranco and continue on a steep ridge passing the Barranco Wall, to the Karanga Valley campsite. This is a short day meant for acclimatization.",
          },
          {
            day: 5,
            title: "Karanga Camp - Acclimatization Day",
            altitude: "4035m",
            distance: "3 Km",
            time: "2-3 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (4).png",
            description:
              "Today is dedicated to acclimatization. We take a short hike to higher altitude and return to Karanga Camp for rest. This extra day significantly improves your chances of summit success.",
          },
          {
            day: 6,
            title: "Karanga Camp to Barafu Camp",
            altitude: "4035m - 4673m",
            distance: "4 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (4).png",
            description:
              "After breakfast, we leave Karanga and hit the junction which connects with the Mweka Trail. We continue up to the Barafu Hut. At this point, you have completed the South Circuit, which offers views of the summit from many different angles.",
          },
          {
            day: 7,
            title: "Barafu Camp to Summit to Mweka Camp",
            altitude: "4673m - 5895m - 3068m",
            distance: "17 Km",
            time: "12-16 hours",
            habitat: "Arctic",
            image: "/assets/images/Frame 61 (1).png",
            description:
              "Very early in the morning (midnight to 2am), we continue our way to the summit between the Rebmann and Ratzel glaciers. You head in a northwesterly direction and ascend through heavy scree towards Stella Point on the crater rim.",
          },
          {
            day: 8,
            title: "Mweka Camp to Mweka Gate",
            altitude: "3068m - 1640m",
            distance: "10 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 60.png",
            description:
              "After breakfast, we continue the descent down to the Mweka Park Gate to receive your summit certificates. At lower elevations, it can be wet and muddy. Gaiters and trekking poles are recommended.",
          },
        ],
        pricing: [
          { group: "1 person", price: 2250 },
          { group: "2-4 people", price: 2100 },
          { group: "5-7 people", price: 2050 },
          { group: "8-10 people", price: 1950 },
          { group: "11+ people", price: 1900 },
        ],
      },
    },
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Moderate to Challenging",
    success_rate: "85%",
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park (conservation fees, camping fees, crew fees, vehicle fee, rescue fee and all other fees collected by the Tanzania National Parks Authority)",
      "Tented accommodation on Mount Kilimanjaro (modern, comfortable 4-Season tents, North Face VE-25)",
    ],
    exclusions: [
      "Airline tickets",
      "Accommodation before and after trekking",
      "Visa fees",
      "Personal gear rentals",
    ],
  },

  "lemosho-route": {
    name: "Lemosho Route",
    nickname: "Wilderness Route",
    hasMultipleDays: true,
    variants: {
      "7-days": {
        duration: "7 Days",
        tabDescription:
          "The 7-day Lemosho route offers a more direct approach to the summit while still providing excellent scenery and good acclimatization. This route is perfect for experienced climbers who want to experience the wilderness beauty of Lemosho in a shorter timeframe.",
        description:
          "The 7-day Lemosho route is a condensed version of our most scenic trail, offering breathtaking views and excellent wildlife viewing opportunities. This route provides a perfect balance of challenge and beauty for experienced climbers.",
        itinerary: [
          {
            day: 1,
            title: "Londorossi Gate to Forest Camp",
            altitude: "2100m - 2785m",
            distance: "6 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61.png",
            description:
              "Drive to Londorossi Gate for registration and permits. Begin hiking through pristine forest with chances to see wildlife.",
          },
          {
            day: 2,
            title: "Forest Camp to Shira Camp 1",
            altitude: "2785m - 3504m",
            distance: "8 Km",
            time: "5-6 hours",
            habitat: "Heath",
            image: "/assets/images/Frame 61 (1).png",
            description:
              "We continue on the trail leading out of the forest and into a savannah of tall grasses, heather, and volcanic rock draped with lichen beards.",
          },
          {
            day: 3,
            title: "Shira Camp 1 to Lava Tower to Barranco Camp",
            altitude: "3504m - 4630m - 3960m",
            distance: "10 Km",
            time: "6-8 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (2).png",
            description:
              "From the Shira Plateau, we continue to the east up a ridge, passing the junction towards the peak of Kibo.",
          },
          {
            day: 4,
            title: "Barranco Camp to Karanga Camp",
            altitude: "3960m - 4035m",
            distance: "5 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (3).png",
            description:
              "After breakfast, we leave Barranco and continue on a steep ridge passing the Barranco Wall, to the Karanga Valley campsite.",
          },
          {
            day: 5,
            title: "Karanga Camp to Barafu Camp",
            altitude: "4035m - 4673m",
            distance: "4 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (4).png",
            description:
              "After breakfast, we leave Karanga and hit the junction which connects with the Mweka Trail.",
          },
          {
            day: 6,
            title: "Barafu Camp to Summit to Mweka Camp",
            altitude: "4673m - 5895m - 3068m",
            distance: "17 Km",
            time: "12-16 hours",
            habitat: "Arctic",
            image: "/assets/images/Frame 61 (5).png",
            description:
              "Very early in the morning (midnight to 2am), we continue our way to the summit between the Rebmann and Ratzel glaciers.",
          },
          {
            day: 7,
            title: "Mweka Camp to Mweka Gate",
            altitude: "3068m - 1640m",
            distance: "10 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61 (6).png",
            description:
              "After breakfast, we continue the descent down to the Mweka Park Gate to receive your summit certificates.",
          },
        ],
        pricing: [
          { group: "1 person", price: 2000 },
          { group: "2-4 people", price: 1850 },
          { group: "5-7 people", price: 1800 },
          { group: "8-10 people", price: 1700 },
          { group: "11+ people", price: 1650 },
        ],
      },
      "8-days": {
        duration: "8 Days",
        tabDescription:
          "The 8-day Lemosho route is widely regarded as the most picturesque trail on Mount Kilimanjaro, offering breathtaking views from various angles. As one of the more recent trails, it is an excellent option for climbers. This route is particularly favored due to its perfect combination of minimal crowds, stunning landscapes, and a high success rate for reaching the summit.",
        description:
          "The Lemosho route is widely regarded as the most picturesque trail on Mount Kilimanjaro, offering breathtaking views from various angles. As one of the more recent trails, it is an excellent option for climbers. This route is particularly favored due to its perfect combination of minimal crowds, stunning landscapes, and a high success rate for reaching the summit.",
        itinerary: [
          {
            day: 1,
            title: "Londorossi Gate to Forest Camp",
            altitude: "2100m - 2785m",
            distance: "6 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61.png",
            description:
              "Drive to Londorossi Gate for registration and permits. Begin hiking through pristine forest with chances to see wildlife.",
          },
          {
            day: 2,
            title: "Forest Camp to Shira Camp 1",
            altitude: "2785m - 3504m",
            distance: "8 Km",
            time: "5-6 hours",
            habitat: "Heath",
            image: "/assets/images/Frame 61 (1).png",
            description:
              "We continue on the trail leading out of the forest and into a savannah of tall grasses, heather, and volcanic rock draped with lichen beards.",
          },
          {
            day: 3,
            title: "Shira Camp 1 to Shira 2 to Moir Hut",
            altitude: "3504m - 4200m",
            distance: "14 Km",
            time: "5-7 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (2).png",
            description:
              "We explore the Shira plateau for a full day. It is a gentle walk east toward Kibo's glaciered peak, across the plateau which leads to Shira 2 camp.",
          },
          {
            day: 4,
            title: "Moir Hut to Lava Tower to Barranco Camp",
            altitude: "4200m - 4630m - 3960m",
            distance: "7 Km",
            time: "4-6 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (2).png",
            description:
              "From the Shira Plateau, we continue to the east up a ridge, passing the junction towards the peak of Kibo.",
          },
          {
            day: 5,
            title: "Barranco Camp to Karanga Camp",
            altitude: "3960m - 4035m",
            distance: "5 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (3).png",
            description:
              "After breakfast, we leave Barranco and continue on a steep ridge passing the Barranco Wall, to the Karanga Valley campsite.",
          },
          {
            day: 6,
            title: "Karanga Camp to Barafu Camp",
            altitude: "4035m - 4673m",
            distance: "4 Km",
            time: "4-5 hours",
            habitat: "Alpine Desert",
            image: "/assets/images/Frame 61 (4).png",
            description:
              "After breakfast, we leave Karanga and hit the junction which connects with the Mweka Trail.",
          },
          {
            day: 7,
            title: "Barafu Camp to Summit to Mweka Camp",
            altitude: "4673m - 5895m - 3068m",
            distance: "17 Km",
            time: "12-16 hours",
            habitat: "Arctic",
            image: "/assets/images/Frame 61 (5).png",
            description:
              "Very early in the morning (midnight to 2am), we continue our way to the summit between the Rebmann and Ratzel glaciers.",
          },
          {
            day: 8,
            title: "Mweka Camp to Mweka Gate",
            altitude: "3068m - 1640m",
            distance: "10 Km",
            time: "3-4 hours",
            habitat: "Rain Forest",
            image: "/assets/images/Frame 61 (6).png",
            description:
              "After breakfast, we continue the descent down to the Mweka Park Gate to receive your summit certificates.",
          },
        ],
        pricing: [
          { group: "1 person", price: 2200 },
          { group: "2-4 people", price: 2000 },
          { group: "5-7 people", price: 1950 },
          { group: "8-10 people", price: 1850 },
          { group: "11+ people", price: 1800 },
        ],
      },
    },
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Moderate",
    success_rate: "90%",
    inclusions: [
      "Pick-up and drop-off at Kilimanjaro International Airport",
      "Transfer to and pick-up from the gate of Kilimanjaro National Park",
      "All park fees collected by the Kilimanjaro National Park",
      "Tented accommodation on Mount Kilimanjaro",
    ],
    exclusions: [
      "Airline tickets",
      "Accommodation before and after trekking",
      "Visa fees",
      "Personal gear rentals",
    ],
  },

  // Destination routes (no tabs, single duration)
  "mikumi-national-park": {
    name: "Mikumi National Park",
    hasMultipleDays: false,
    duration: "3 Days",
    tabDescription:
      "Mikumi National Park is Tanzania's fourth-largest national park and the most accessible from Dar es Salaam. The park offers excellent wildlife viewing opportunities with its open horizons and abundant wildlife that includes elephants, lions, wild dogs, zebras, hyenas, hippos, hartebeest, wildebeest, eland, impala, warthog, waterbuck and reedbuck.",
    description:
      "Mikumi National Park is Tanzania's fourth-largest national park, covering an area of 3,230 square kilometers. Located between the Uluguru Mountains and the Lumango range, Mikumi is the most accessible from Dar es Salaam. The park offers excellent wildlife viewing with its open horizons and abundant wildlife.",
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Easy",
    success_rate: "100%",
    itinerary: [
      {
        day: 1,
        title: "Dar es Salaam to Mikumi National Park",
        altitude: "500m",
        distance: "283 Km",
        time: "5-6 hours",
        habitat: "Savannah",
        image: "/assets/images/Frame 60.png",
        description:
          "Early morning departure from Dar es Salaam to Mikumi National Park. Arrive at the park and enjoy afternoon game drive. Dinner and overnight at the lodge.",
      },
      {
        day: 2,
        title: "Full Day Game Drive in Mikumi",
        altitude: "500m",
        distance: "150 Km",
        time: "8-10 hours",
        habitat: "Savannah",
        image: "/assets/images/Frame 60.png",
        description:
          "Full day game drive in Mikumi National Park. The park is rich in wildlife including elephant, lion, wild dog, zebra, hyena, hippo, hartebeest, wildebeest, eland, impala, warthog, waterbuck and reedbuck.",
      },
      {
        day: 3,
        title: "Mikumi to Dar es Salaam",
        altitude: "500m - 0m",
        distance: "283 Km",
        time: "5-6 hours",
        habitat: "Urban",
        image: "/assets/images/Frame 60.png",
        description:
          "Morning game drive then depart for Dar es Salaam. Arrive in the evening and transfer to your hotel or airport for departure.",
      },
    ],
    pricing: [
      { group: "1 person", price: 800 },
      { group: "2-4 people", price: 650 },
      { group: "5-7 people", price: 600 },
      { group: "8-10 people", price: 550 },
      { group: "11+ people", price: 500 },
    ],
    inclusions: [
      "Transportation in 4WD safari vehicle",
      "Professional safari guide",
      "All park fees and government taxes",
      "Accommodation as specified",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
    ],
  },

  "serengeti-national-park": {
    name: "Serengeti National Park",
    hasMultipleDays: false,
    duration: "4 Days",
    tabDescription:
      "The Serengeti National Park is undoubtedly the best-known wildlife sanctuary in the world, unequalled for its natural beauty and scientific value. It has the greatest concentration of plains game in Africa and is famous for the annual Great Migration of wildebeest and zebra.",
    description:
      "The Serengeti National Park is undoubtedly the best-known wildlife sanctuary in the world, unequalled for its natural beauty and scientific value. It has the greatest concentration of plains game in Africa and is famous for the annual Great Migration.",
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Easy",
    success_rate: "100%",
    itinerary: [
      {
        day: 1,
        title: "Arusha to Serengeti National Park",
        altitude: "1400m - 1500m",
        distance: "335 Km",
        time: "6-7 hours",
        habitat: "Savannah",
        image: "/assets/images/Frame 60.png",
        description:
          "Depart from Arusha and drive to Serengeti National Park via Ngorongoro Conservation Area. Enjoy game drive en route and arrive at your accommodation for dinner and overnight.",
      },
      {
        day: 2,
        title: "Full Day Serengeti Game Drive",
        altitude: "1500m",
        distance: "200 Km",
        time: "8-10 hours",
        habitat: "Savannah",
        image: "/assets/images/Frame 60.png",
        description:
          "Full day game drive in Serengeti National Park. The park is famous for its annual migration of over 1.5 million white-bearded wildebeest and 250,000 zebra.",
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro",
        altitude: "1500m - 2300m",
        distance: "145 Km",
        time: "4-5 hours",
        habitat: "Highland",
        image: "/assets/images/Frame 60.png",
        description:
          "Morning game drive in Serengeti then drive to Ngorongoro Conservation Area. Arrive at your lodge on the crater rim for dinner and overnight.",
      },
      {
        day: 4,
        title: "Ngorongoro Crater to Arusha",
        altitude: "2300m - 1600m - 1400m",
        distance: "210 Km",
        time: "6-7 hours",
        habitat: "Crater Floor",
        image: "/assets/images/Frame 60.png",
        description:
          "Early morning descent into Ngorongoro Crater for game drive. Afternoon drive back to Arusha arriving in the evening.",
      },
    ],
    pricing: [
      { group: "1 person", price: 1500 },
      { group: "2-4 people", price: 1200 },
      { group: "5-7 people", price: 1100 },
      { group: "8-10 people", price: 1000 },
      { group: "11+ people", price: 950 },
    ],
    inclusions: [
      "Transportation in 4WD safari vehicle",
      "Professional safari guide",
      "All park fees and government taxes",
      "Accommodation as specified",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
    ],
  },

  // Escape DSM destinations (no tabs, show routes on left, days on right)
  "from-city-lights-to-safari-nights": {
    name: "From City Lights to Safari Nights",
    hasMultipleDays: false,
    isEscapeDSM: true,
    whiteBg: "Mikumi & Nyerere National Parks",
    blackBg: "7 Days",
    tabDescription:
      "Leave behind the hum of the city and follow the call of the wild. This journey takes you from the heartbeat of Dar es Salaam to the open plains of Mikumi and the untamed wilderness of Nyerere—where elephants roam free, rivers whisper ancient stories, and the stars shine brighter than ever.",
    description:
      "Leave behind the hum of the city and follow the call of the wild. This journey takes you from the heartbeat of Dar es Salaam to the open plains of Mikumi and the untamed wilderness of Nyerere—where elephants roam free, rivers whisper ancient stories, and the stars shine brighter than ever.",
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Easy",
    success_rate: "100%",
    itinerary: [
      {
        day: 1,
        title: "Dar es Salaam to Mikumi National Park",
        altitude: "0m - 500m",
        distance: "283 Km",
        time: "5-6 hours",
        habitat: "Urban to Savannah",
        image: "/assets/images/Frame 61.png",
        description:
          "Early morning departure from the bustling streets of Dar es Salaam. Journey through changing landscapes as the city gives way to rural Tanzania, arriving at Mikumi National Park for your first taste of the wild.",
      },
      {
        day: 2,
        title: "Mikumi Game Drives",
        altitude: "500m",
        distance: "150 Km",
        time: "8-10 hours",
        habitat: "Savannah",
        image: "/assets/images/Frame 61 (1).png",
        description:
          "Full day exploring Mikumi's vast plains. Watch elephants move in family groups, lions lounging in the shade, and zebras grazing peacefully. The park's open horizons offer spectacular wildlife viewing opportunities.",
      },
      {
        day: 3,
        title: "Mikumi to Nyerere National Park",
        altitude: "500m - 300m",
        distance: "230 Km",
        time: "4-5 hours",
        habitat: "Savannah to Woodland",
        image: "/assets/images/Frame 61 (2).png",
        description:
          "Journey deeper into Tanzania's wilderness as you travel to Nyerere National Park, Africa's largest national park. The landscape transforms from open plains to dense woodlands and riverine forests.",
      },
      {
        day: 4,
        title: "Nyerere Game Drive & Boat Safari",
        altitude: "300m",
        distance: "100 Km",
        time: "8-10 hours",
        habitat: "Woodland & River",
        image: "/assets/images/Frame 61 (3).png",
        description:
          "Experience the magic of Nyerere with morning game drives and afternoon boat safari on the Rufiji River. Watch hippos and crocodiles in their natural habitat while elephants come to drink at the water's edge.",
      },
      {
        day: 5,
        title: "Full Day Nyerere Exploration",
        altitude: "300m",
        distance: "200 Km",
        time: "10-12 hours",
        habitat: "Diverse Ecosystems",
        image: "/assets/images/Frame 61 (4).png",
        description:
          "Immerse yourself completely in the untamed wilderness of Nyerere. Track wild dogs, spot rare birds, and witness the raw beauty of Africa's largest protected area where nature reigns supreme.",
      },
      {
        day: 6,
        title: "Nyerere to Dar es Salaam",
        altitude: "300m - 0m",
        distance: "230 Km",
        time: "5-6 hours",
        habitat: "Woodland to Urban",
        image: "/assets/images/Frame 61 (1).png",
        description:
          "Morning game drive followed by the journey back to Dar es Salaam. Watch as the wilderness gradually gives way to civilization, carrying with you memories of Africa's untamed heart.",
      },
      {
        day: 7,
        title: "Departure Day",
        altitude: "0m",
        distance: "0 Km",
        time: "Transfer",
        habitat: "Urban",
        image: "/assets/images/Frame 60.png",
        description:
          "Final morning in Dar es Salaam. Transfer to Julius Nyerere International Airport for your departure, taking with you the sounds, sights, and spirit of the African wilderness.",
      },
    ],
    pricing: [
      { group: "1 person", price: 2500 },
      { group: "2-4 people", price: 2200 },
      { group: "5-7 people", price: 2000 },
      { group: "8-10 people", price: 1800 },
      { group: "11+ people", price: 1600 },
    ],
    inclusions: [
      "Transportation in 4WD safari vehicle",
      "Professional safari guide",
      "All park fees and government taxes",
      "Accommodation as specified",
      "Boat safari in Nyerere",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
    ],
  },

  "unzip-serengeti-and-ngorongoro": {
    name: "Unzip Serengeti and Ngorongoro",
    hasMultipleDays: false,
    isEscapeDSM: true,
    whiteBg: "Serengeti & Ngorongoro",
    blackBg: "6 Days",
    tabDescription:
      "Escape the urban jungle and dive into the real one. From Dar es Salaam's busy streets to the endless plains of Serengeti and the ancient crater of Ngorongoro—witness the Great Migration, spot the Big Five, and discover why Tanzania is the heart of African safari.",
    description:
      "Escape the urban jungle and dive into the real one. From Dar es Salaam's busy streets to the endless plains of Serengeti and the ancient crater of Ngorongoro—witness the Great Migration, spot the Big Five, and discover why Tanzania is the heart of African safari.",
    image: "/placeholder.svg?height=400&width=800",
    difficulty: "Easy",
    success_rate: "100%",
    itinerary: [
      {
        day: 1,
        title: "Dar es Salaam to Arusha",
        altitude: "0m - 1400m",
        distance: "650 Km",
        time: "1 hour flight",
        habitat: "Urban to Highland",
        image: "/assets/images/Frame 61.png",
        description:
          "Fly from Dar es Salaam to Arusha, leaving behind the coastal humidity for the crisp highland air. Arusha, the safari capital of Tanzania, welcomes you with views of Mount Meru.",
      },
      {
        day: 2,
        title: "Arusha to Serengeti National Park",
        altitude: "1400m - 1500m",
        distance: "335 Km",
        time: "6-7 hours",
        habitat: "Highland to Savannah",
        image: "/assets/images/Frame 61 (1).png",
        description:
          "Journey through the Ngorongoro Conservation Area to reach the legendary Serengeti. As you crest the crater rim, the endless plains stretch before you—home to the greatest wildlife spectacle on Earth.",
      },
      {
        day: 3,
        title: "Full Day Serengeti Safari",
        altitude: "1500m",
        distance: "200 Km",
        time: "8-10 hours",
        habitat: "Endless Plains",
        image: "/assets/images/Frame 61 (2).png",
        description:
          "Immerse yourself in the Serengeti's magic. Follow the Great Migration, watch predators in action, and experience the raw drama of survival in Africa's most famous national park.",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro",
        altitude: "1500m - 2300m",
        distance: "145 Km",
        time: "4-5 hours",
        habitat: "Plains to Crater Rim",
        image: "/assets/images/Frame 61 (3).png",
        description:
          "Morning game drive in Serengeti before ascending to the Ngorongoro Crater rim. Perched on the edge of this ancient caldera, prepare for tomorrow's descent into the 'Garden of Eden.'",
      },
      {
        day: 5,
        title: "Ngorongoro Crater Safari",
        altitude: "2300m - 1700m - 2300m",
        distance: "120 Km",
        time: "8-10 hours",
        habitat: "Crater Floor",
        image: "/assets/images/Frame 61 (4).png",
        description:
          "Descend into the Ngorongoro Crater, a UNESCO World Heritage Site. This natural amphitheater hosts an incredible concentration of wildlife, including the rare black rhino.",
      },
      {
        day: 6,
        title: "Ngorongoro to Dar es Salaam",
        altitude: "2300m - 1400m - 0m",
        distance: "650 Km",
        time: "1 hour flight",
        habitat: "Highland to Coastal",
        image: "/assets/images/Frame 60.png",
        description:
          "Return to Arusha and fly back to Dar es Salaam, carrying with you the memories of Tanzania's most iconic wildlife destinations and the spirit of the African wilderness.",
      },
    ],
    pricing: [
      { group: "1 person", price: 3000 },
      { group: "2-4 people", price: 2700 },
      { group: "5-7 people", price: 2500 },
      { group: "8-10 people", price: 2300 },
      { group: "11+ people", price: 2100 },
    ],
    inclusions: [
      "Domestic flights Dar-Arusha-Dar",
      "Transportation in 4WD safari vehicle",
      "Professional safari guide",
      "All park fees and government taxes",
      "Accommodation as specified",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
    ],
  },
};

export default function RouteDetail() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [dayTabValue, setDayTabValue] = useState(0); // For day selection tabs (7 days vs 8 days)
  const [contentTabValue, setContentTabValue] = useState(0); // For content tabs (Description, Itinerary, etc.)
  const [selectedPeople, setSelectedPeople] = useState("2 people");
  const [selectedDate, setSelectedDate] = useState("12-03-2024");

  const route = routeData[id];

  if (!route) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mt-8">Route not found</h1>
      </div>
    );
  }

  // Get current route data based on selected day tab
  const getCurrentRouteData = () => {
    if (route.hasMultipleDays) {
      const dayOptions = Object.keys(route.variants);
      const selectedDayOption = dayOptions[dayTabValue];
      return route.variants[selectedDayOption];
    }
    return route;
  };

  const currentData = getCurrentRouteData();

  const handleDayTabChange = (newValue) => {
    setDayTabValue(newValue);
  };

  const handleContentTabChange = (newValue) => {
    setContentTabValue(newValue);
  };

  const getCurrentPrice = () => {
    const priceData = currentData.pricing.find(
      (p) =>
        p.group.includes(selectedPeople.split(" ")[0]) ||
        (selectedPeople === "2 people" && p.group === "2-4 people")
    );
    return priceData ? priceData.price : currentData.pricing[1].price;
  };

  const contentTabs = [
    "Description",
    "Itinerary",
    "Price",
    "Inclusion",
    "Exclusion",
  ];

  return (
    <div className="bg-gray-50 min-h-screen md:px-4">
      {/* Header */}
      <div className="bg-gray-50 pt-8 pb-4">
        <div className="text-black mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:mb-12 md:text-5xl font-bold mb-4 mt-5 md:mt-0">
                {route.name}
              </h1>

              {/* Day Selection Tabs - Only for Kilimanjaro routes with multiple days */}
              {route.hasMultipleDays && (
                <div className="flex flex-wrap gap-4 mb-6">
                  {Object.keys(route.variants).map((dayOption, index) => (
                    <button
                      key={dayOption}
                      onClick={() => handleDayTabChange(index)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        dayTabValue === index
                          ? "bg-gray-800 text-white"
                          : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {route.variants[dayOption].duration} route
                    </button>
                  ))}
                </div>
              )}

              {/* For Escape DSM destinations - show routes on left, days on right */}
              {route.isEscapeDSM && (
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="border border-gray-300 bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium">
                    {route.blackBg}
                  </span>
                  <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                    {route.whiteBg}
                  </span>
                </div>
              )}

              {/* For regular destination routes - show only duration */}
              {!route.hasMultipleDays && !route.isEscapeDSM && (
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                    {route.duration}
                  </span>
                </div>
              )}

              <p className="text-black leading-relaxed mb-8 max-w-4xl md:leading-[40px] md:text-lg">
                {currentData.description}
              </p>
            </div>

            {/* Booking Card */}
            <div className="w-full lg:ml-8 lg:w-[400px] bg-white rounded-xl shadow-lg p-6">
              <div className="text-2xl font-bold mb-6">
                ${getCurrentPrice().toLocaleString()} / person
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-3" />
                    <span>{selectedPeople}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <span>{selectedDate}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900">$1,000</span>
                  <span className="text-gray-500">1 Adults</span>
                  <span className="text-gray-900">$1,000</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-900">$500</span>
                  <span className="text-gray-500">1 Child</span>
                  <span className="text-gray-900">$500</span>
                </div>

                <hr className="border-gray-200 mb-4" />

                <div className="flex justify-between items-center font-semibold">
                  <span>Totals before tax</span>
                  <span>$1,500</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="flex-1 bg-[#78D8FF] text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors">
                  Pay Full Amount
                </button>
                <button className="flex-1 bg-[#F4A460] text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-[#f4b660] transition-colors">
                  Pay in Installments
                </button>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="border-b border-gray-200 md:border-none md:pt-2 md:bg-white md:shadow-xl md:rounded-full md:my-9 md:mt-16 pb-3 md:pb-2 mb-6 md:px-5 w-full">
            <div className="relative">
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 md:hidden bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 md:hidden w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Scrollable container */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 md:justify-between min-w-max px-2 py-1 md:items-center">
                  {contentTabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => handleContentTabChange(index)}
                      className={`px-6 md:px-14 py-1 text-base font-medium rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                        contentTabValue === index
                          ? "bg-gray-800 text-white shadow-lg transform scale-105"
                          : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Description Tab */}
        {contentTabValue === 0 && (
          <div className="py-4 sm:py-6">
            <p className="text-base sm:text-lg md:text-lg text-gray-800 leading-relaxed md:leading-[40px] md:mb-16">
              {currentData.tabDescription}
            </p>
          </div>
        )}

        {/* Itinerary Tab */}
        {contentTabValue === 1 && (
          <div className="py-4 sm:py-6">
            {currentData.itinerary.map((day, index) => {
              const cardColors = [
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
                "#F3FFF2",
              ];

              const bgColor = cardColors[index % cardColors.length];

              return (
                <div
                  key={index}
                  className="relative min-h-[700px] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 xl:p-10"
                  style={{ backgroundColor: bgColor }}
                >
                  {/* Content Container */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 lg:gap-8 relative z-10 h-full">
                    {/* Left Side - Day Badge and Content */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 flex-1 min-h-0">
                      {/* Day Badge and Title */}
                      <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
                        <span className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-[#2E492E] text-white rounded-full text-sm sm:text-base font-bold whitespace-nowrap">
                          Day {day.day}
                        </span>
                        <div className="bg-[#f1f7f1] backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <img
                              src="/assets/images/distance.png"
                              alt="Distance"
                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                            />
                            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-900 leading-tight truncate">
                              {day.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex-1 flex items-start lg:items-center overflow-hidden">
                        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                          <p className="text-[#2E492E] lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E] lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E] lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E] lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Image and Info */}
                    <div className="w-full lg:w-[45%] xl:w-[50%] flex-shrink-0">
                      <div className="h-full flex flex-col justify-center lg:justify-end">
                        {/* Image Container - Takes full available height */}
                        <div className="h-[320px] sm:h-[320px] z-20 md:h-[400px] lg:h-[400px] xl:h-[400px] relative">
                          <Image
                            src={day.image || "/placeholder.svg"}
                            alt={`Day ${day.day} illustration`}
                            fill
                            className="h-full w-auto"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Price Tab */}
        {contentTabValue === 2 && (
          <div className="py-4 sm:py-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 text-gray-900">
              The more you climb together, the more rewarding it becomes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              Our pricing is designed to encourage shared adventure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              {currentData.pricing.map((pricing, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 text-center rounded-lg shadow-sm ${
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
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-600" />
                    <span className="text-gray-600 text-xs sm:text-sm">
                      {pricing.group}
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    ${pricing.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base md:my-16 text-gray-600 max-w-4xl mx-auto px-4">
              All prices quoted are per person in USD (US Dollars) and are
              negotiable according to the period of the year, includes and
              excludes and change of government policies. Please contact us for
              more information.
            </p>
          </div>
        )}

        {/* Inclusion Tab */}
        {contentTabValue === 3 && (
          <div className="py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">
              Package Includes
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {route.inclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 flex items-center justify-center min-w-10 h-10 sm:min-w-12 sm:h-12 flex-shrink-0">
                    {index === 0 && (
                      <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                    )}
                    {index === 1 && (
                      <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                    )}
                    {index === 2 && (
                      <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                    )}
                    {index === 3 && (
                      <Home className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                    )}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exclusion Tab */}
        {contentTabValue === 4 && (
          <div className="py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">
              Package Excludes
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {route.exclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-red-100 rounded-full p-2 sm:p-3 flex items-center justify-center min-w-10 h-10 sm:min-w-12 sm:h-12 flex-shrink-0">
                    {index === 0 && (
                      <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    {index === 1 && (
                      <Home className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    {index === 2 && (
                      <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    {index === 3 && (
                      <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    )}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
