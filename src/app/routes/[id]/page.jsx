"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronDown, Users, Calendar, Plane, Home, FileText, DollarSign, Navigation } from "lucide-react"
import Image from "next/image"

const routeData = {
  "machame-route": {
    name: "Machame Route",
    nickname: "Whiskey Route",
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

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
      "The Lemosho route is widely regarded as the most picturesque trail on Mount Kilimanjaro, offering breathtaking views from various angles. As one of the more recent trails, it is an excellent option for climbers. This route is particularly favored due to its perfect combination of minimal crowds, stunning landscapes, and a high success rate for reaching the summit. Almighty Kilimanjaro specializes in guiding climbers along the Lemosho route, with most of our clients choosing it and consistently expressing their satisfaction. ",
    image: "/placeholder.svg?height=400&width=800",
    duration: "8 Days",
    difficulty: "Moderate",
    success_rate: "90%",
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",
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
        description: "After breakfast, we leave Karanga and hit the junction which connects with the Mweka Trail.",
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
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

    description:
      "The Rongai Route begins with a scenic drive from Moshi to the Rongai Gate near the Kenyan border, covering approximately 70 to 80 kilometers and taking about 4-5 hours. It's the only route that approaches Kilimanjaro from the north, offering a quieter and less crowded experience.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "7 Days",
    difficulty: "Moderate",
    success_rate: "80%",
    itinerary: [
      {
        day: 1,
        title: "Rongai Gate to Simba Camp",
        altitude: "1950m - 2635m",
        distance: "8 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        image: "/assets/images/Frame 60.png",
        description:
          "It will take 4-5 hour drive from Moshi to the Kilimanjaro National Park Gate, passing through the Nale Muru village. After the climbing permits and rescue service registration are completed, the group will begin their hike up to Simba Camp.",
      },
      {
        day: 2,
        title: "Simba Camp to Second Cave Camp",
        altitude: "2635m - 3487m",
        distance: "5.8 Km",
        time: "5-6 hours",
        habitat: "Moorland",
        image: "/assets/images/Frame 60.png",
        description:
          "After early morning breakfast, the group will leave Simba Camp to Second Cave Camp, your second high altitude camp. You will have your first look at the ice fields on the Eastern crater rim and enjoy some amazing views of Kibo.",
      },
      {
        day: 3,
        title: "Second Cave Camp to Kikelewa Camp",
        altitude: "3487m - 4675m",
        distance: "6 Km",
        time: "2-3 hours",
        habitat: "Semi Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "After breakfast, journey to steady climb across the Moorland in the direction of the ragged peaks of Mawenzi begins. You get closer to the Easter ice fields on this comparatively short hiking day.",
      },
      {
        day: 4,
        title: "Kikelewa Camp to Mawenzi Tarn",
        altitude: "3675m - 4302m",
        distance: "3.7 Km",
        time: "3-4 hours",
        habitat: "Semi Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "Early wakeup, breakfast and the start of trekking to Mawenzi Tarn Camp, which is situated at the foot of Mawenzi Volcano, Kilimanjaro's second summit. When you reach the camp, you will have lunch and rest.",
      },
      {
        day: 5,
        title: "Mawenzi Tarn to Kibo Hut",
        altitude: "4302m - 4714m",
        distance: "8.9 Km",
        time: "3-4 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "Early wakeup, breakfast and the start of trekking to Mawenzi Tarn Camp, which is situated at the foot of Mawenzi Volcano, Kilimanjaro's second summit. When you reach the camp, you will have lunch and rest.",
      },
      {
        day: 6,
        title: "Kibo Hut to Summit to Horombo Hut",
        altitude: "4714m - 5895m - 3720m",
        distance: "22 Km",
        time: "12-15 hours",
        habitat: "Glaciers, Snow Capped Summit",
        image: "/assets/images/Frame 60.png",
        description:
          "Early wakeup, breakfast and the start of trekking to Mawenzi Tarn Camp, which is situated at the foot of Mawenzi Volcano, Kilimanjaro's second summit. When you reach the camp, you will have lunch and rest, after which there will be an acclimatization hike towards Mawenzi Volcano, followed by a hike back down to Mawenzi Tarn Camp, where you will have dinner in the evening.",
      },
      {
        day: 7,
        title: "Horombo Huts to Marangu Gate",
        altitude: "3720m - 1830m",
        distance: "20 Km",
        time: "6-7 hours",
        habitat: "Rain Forest",
        image: "/assets/images/Frame 60.png",
        description:
          "It's time to say farewell to your staff after breakfast and a sincere ceremony of gratitude and team building. We keep going down, to Marangu Park Gate where you will be given your certificates. We strongly advise Gaiters and trekking poles because the terrain is damp, muddy, and steep due to the significantly warmer temperature. A car will pick you up at the entrance and take you back to your Moshi for about 45 minutes drive.",
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
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

    description:
      "The Shira Route is a lesser-used trail that starts near Shira Ridge and closely resembles the Lemosho Route. In fact, Shira was the original path, with Lemosho later developed as an improved version.",
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
        image: "/assets/images/Frame 60.png",
        description:
          "Drive to Shira Gate and begin the trek across the Shira Plateau. The route offers spectacular views but starts at high altitude.",
      },
      {
        day: 2,
        title: "Shira Camp to Moir Hut",
        altitude: "3840m - 4200m",
        distance: "8 Km",
        time: "5-6 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "Continue across the Shira Plateau with stunning views of Kibo peak. The trail leads through moorland and alpine desert terrain.",
      },
      {
        day: 3,
        title: "Moir Hut to Lava Tower to Barranco Camp",
        altitude: "4200m - 4630m - 3960m",
        distance: "7 Km",
        time: "4-6 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "Ascend to Lava Tower for acclimatization, then descend to Barranco Camp. This is an important acclimatization day.",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3960m - 4035m",
        distance: "5 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description:
          "Navigate the famous Barranco Wall and continue to Karanga Camp. This is a shorter day for acclimatization.",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        altitude: "4035m - 4673m",
        distance: "4 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Final approach to base camp. Rest and prepare for the summit attempt.",
      },
      {
        day: 6,
        title: "Barafu Camp to Summit to Mweka Camp",
        altitude: "4673m - 5895m - 3068m",
        distance: "17 Km",
        time: "12-16 hours",
        habitat: "Arctic",
        image: "/assets/images/Frame 60.png",
        description: "Summit day! Early morning start for the final push to Uhuru Peak, then descend to Mweka Camp.",
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
          "Final descent through the rainforest to Mweka Gate where you'll receive your summit certificates.",
      },
      {
        day: 8,
        title: "Departure Day",
        altitude: "1640m",
        distance: "0 Km",
        time: "Transfer",
        habitat: "Moshi Town",
        image: "/assets/images/Frame 60.png",
        description: "Transfer back to your hotel in Moshi or to Kilimanjaro International Airport for your departure.",
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
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

    nickname: "Steep & Direct Route",
    description:
      "The Umbwe route is known for its steep, direct ascent and is considered one of the most challenging routes on Kilimanjaro. It's recommended for experienced hikers who are confident in their ability to acclimatize quickly.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "6 Days",
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
        image: "/assets/images/Frame 60.png",
        description:
          "The Umbwe route is known for its steep, direct ascent. Begin the challenging climb through dense rainforest.",
      },
      {
        day: 2,
        title: "Umbwe Camp to Barranco Camp",
        altitude: "2940m - 3960m",
        distance: "6 Km",
        time: "4-6 hours",
        habitat: "Heath/Moorland",
        image: "/assets/images/Frame 60.png",
        description: "Continue the steep ascent, leaving the forest behind and entering the heath and moorland zones.",
      },
      {
        day: 3,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3960m - 4035m",
        distance: "5 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Navigate the famous Barranco Wall and continue to Karanga Camp for acclimatization.",
      },
      {
        day: 4,
        title: "Karanga Camp to Barafu Camp",
        altitude: "4035m - 4673m",
        distance: "4 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Final approach to base camp. Rest and prepare for the summit attempt.",
      },
      {
        day: 5,
        title: "Barafu Camp to Summit to Mweka Camp",
        altitude: "4673m - 5895m - 3068m",
        distance: "17 Km",
        time: "12-16 hours",
        habitat: "Arctic",
        image: "/assets/images/Frame 60.png",
        description: "Summit day! Early morning start for the final push to Uhuru Peak, then descend to Mweka Camp.",
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3068m - 1640m",
        distance: "10 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        image: "/assets/images/Frame 60.png",
        description:
          "Final descent through the rainforest to Mweka Gate where you'll receive your summit certificates.",
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
   "marangu-route": {
    name: "Umbwe Route",
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

    nickname: "Steep & Direct Route",
    description:
      "The Umbwe route is known for its steep, direct ascent and is considered one of the most challenging routes on Kilimanjaro. It's recommended for experienced hikers who are confident in their ability to acclimatize quickly.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "6 Days",
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
        image: "/assets/images/Frame 60.png",
        description:
          "The Umbwe route is known for its steep, direct ascent. Begin the challenging climb through dense rainforest.",
      },
      {
        day: 2,
        title: "Umbwe Camp to Barranco Camp",
        altitude: "2940m - 3960m",
        distance: "6 Km",
        time: "4-6 hours",
        habitat: "Heath/Moorland",
        image: "/assets/images/Frame 60.png",
        description: "Continue the steep ascent, leaving the forest behind and entering the heath and moorland zones.",
      },
      {
        day: 3,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3960m - 4035m",
        distance: "5 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Navigate the famous Barranco Wall and continue to Karanga Camp for acclimatization.",
      },
      {
        day: 4,
        title: "Karanga Camp to Barafu Camp",
        altitude: "4035m - 4673m",
        distance: "4 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Final approach to base camp. Rest and prepare for the summit attempt.",
      },
      {
        day: 5,
        title: "Barafu Camp to Summit to Mweka Camp",
        altitude: "4673m - 5895m - 3068m",
        distance: "17 Km",
        time: "12-16 hours",
        habitat: "Arctic",
        image: "/assets/images/Frame 60.png",
        description: "Summit day! Early morning start for the final push to Uhuru Peak, then descend to Mweka Camp.",
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3068m - 1640m",
        distance: "10 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        image: "/assets/images/Frame 60.png",
        description:
          "Final descent through the rainforest to Mweka Gate where you'll receive your summit certificates.",
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
   "northern-circuit": {
    name: "Umbwe Route",
    description2:"The trail begins on the western side of Mount Kilimanjaro, with a scenic drive from Moshi to Londorossi Gate. The initial two days involve trekking through lush rainforests to reach Shira Ridge. The route then extends across the entire Shira Plateau from west to east, providing a relatively gentle and enjoyable hike. While the trail remains uncrowded at first, it merges with the Machame route near Lava Tower. From there, climbers follow the Southern Circuit beneath Kilimanjaro’s Southern Ice Field before making the final ascent from Barafu. The descent follows the Mweka route",

    nickname: "Steep & Direct Route",
    description:
      "The Umbwe route is known for its steep, direct ascent and is considered one of the most challenging routes on Kilimanjaro. It's recommended for experienced hikers who are confident in their ability to acclimatize quickly.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "6 Days",
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
        image: "/assets/images/Frame 60.png",
        description:
          "The Umbwe route is known for its steep, direct ascent. Begin the challenging climb through dense rainforest.",
      },
      {
        day: 2,
        title: "Umbwe Camp to Barranco Camp",
        altitude: "2940m - 3960m",
        distance: "6 Km",
        time: "4-6 hours",
        habitat: "Heath/Moorland",
        image: "/assets/images/Frame 60.png",
        description: "Continue the steep ascent, leaving the forest behind and entering the heath and moorland zones.",
      },
      {
        day: 3,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3960m - 4035m",
        distance: "5 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Navigate the famous Barranco Wall and continue to Karanga Camp for acclimatization.",
      },
      {
        day: 4,
        title: "Karanga Camp to Barafu Camp",
        altitude: "4035m - 4673m",
        distance: "4 Km",
        time: "4-5 hours",
        habitat: "Alpine Desert",
        image: "/assets/images/Frame 60.png",
        description: "Final approach to base camp. Rest and prepare for the summit attempt.",
      },
      {
        day: 5,
        title: "Barafu Camp to Summit to Mweka Camp",
        altitude: "4673m - 5895m - 3068m",
        distance: "17 Km",
        time: "12-16 hours",
        habitat: "Arctic",
        image: "/assets/images/Frame 60.png",
        description: "Summit day! Early morning start for the final push to Uhuru Peak, then descend to Mweka Camp.",
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3068m - 1640m",
        distance: "10 Km",
        time: "3-4 hours",
        habitat: "Rain Forest",
        image: "/assets/images/Frame 60.png",
        description:
          "Final descent through the rainforest to Mweka Gate where you'll receive your summit certificates.",
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

  // Check if this is the Lemosho route for special styling
  const isLemoshoRoute = id === "lemosho-route"

  return (
    <div className="bg-gray-50 min-h-screen md:px-4">
      {/* Header */}
      <div className="bg-gray-50 pt-8 pb-4">
        <div className="text-black mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-5 md:mt-0">{route.name}</h1>

              <div className="flex flex-wrap gap-4 mb-6">
                {isLemoshoRoute ? (
                  <>
                    <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                      8 Days route
                    </span>
                    <span className="border border-gray-300 bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                      7 Days route
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm">8 Days route</span>
                    <span className="border border-gray-300 px-6 py-2 rounded-full text-sm">7 Days route</span>
                  </>
                )}
              </div>

              <p className="text-black -600  leading-relaxed mb-8 max-w-4xl md:leading-[40px] md:text-lg">{route.description}</p>
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
                {isLemoshoRoute ? (
                  <>
                    <button className="flex-1 bg-[#78D8FF] text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors">
                      Pay Full Amount
                    </button>


                    <button className="flex-1 bg-[#F4A460] text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-[#f4b660] transition-colors">
                      Pay in Installments
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 border border-pink-500 text-pink-500 py-3 px-4 rounded-full text-sm font-medium hover:bg-pink-50 transition-colors">
                      Pay Full Amount
                    </button>
                    <button className="flex-1 bg-pink-500 text-white py-3 px-4 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
                      Pay in Installments
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}

          <div className="border-b border-gray-200 md:border-none  md:pt-2 md:bg-white md:shadow-xl md:rounded-full md:my-9 md:mt-16 pb-3 md:pb-2 mb-6 md:px-5 w-full">
            <div className="relative ">
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 md:hidden bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 md:hidden w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Scrollable container */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 md:justify-between  min-w-max px-2  py-1 md:items-center">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabChange(index)}
                      className={`px-6 md:px-14 py-1 text-base font-medium rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                        tabValue === index
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
        {tabValue === 0 && (
          <div className="py-4 sm:py-6">
            <p className="text-base sm:text-lg md:text-lg  text-gray-800 leading-relaxed md:leading-[40px] md:mb-16" >{route.description2}</p>
          </div>
        )}

        {/* Itinerary Tab */}
        {tabValue === 1 && (
          <div className="py-4 sm:py-6">
            {route.itinerary.map((day, index) => {
              // Define different background colors for each card
              const cardColors = [
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
                "#F3FFF2", // Light green
              ]

              const bgColor = cardColors[index % cardColors.length]

              return (
                <div
                  key={index}
                  className="relative min-h-[700px]  md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh]  overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 xl:p-10"
                  style={{
                    backgroundColor: bgColor,
                  }}
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
                          <p className="text-[#2E492E]  lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E]  lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E]  lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                          <p className="text-[#2E492E]  lg:text-base xl:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Image and Info */}
                    <div className="w-full  lg:w-[45%] xl:w-[50%] flex-shrink-0 ">
                      <div className="h-full  flex flex-col justify-center lg:justify-end">
                        {/* Image Container - Takes full available height */}
                        <div className="h-[320px]  sm:h-[320px] z-20 md:h-[400px] lg:h-[400px] xl:h-[400px] relative ">
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

                  {/* Decorative Circles - Bottom Right */}
                  {/* <div className="absolute bottom-3 z-30 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6">
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 opacity-50">
              {Array.from({ length: Math.min(day.day, 9) }, (_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full ${
                    i < day.day ? 'bg-[#2E492E]' : 'bg-green-200'
                  }`}
                />
              ))}
            </div>
          </div> */}
                </div>
              )
            })}
          </div>
        )}
        {/* Price Tab */}
        {tabValue === 2 && (
          <div className="py-4 sm:py-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 text-gray-900">
              The more you climb together, the more rewarding it becomes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              Our pricing is designed to encourage shared adventure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              {route.pricing.map((pricing, index) => (
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
                    <span className="text-gray-600 text-xs sm:text-sm">{pricing.group}</span>
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    ${pricing.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base md:my-16 text-gray-600 max-w-4xl mx-auto px-4">
              All prices quoted are per person in USD (US Dollars) and are negotiable according to the period of the
              year, includes and excludes and change of government policies. Please contact us for more information.
            </p>
          </div>
        )}

        {/* Inclusion Tab */}
        {tabValue === 3 && (
          <div className="py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">Package Includes</h2>

            <div className="space-y-4 sm:space-y-6">
              {route.inclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 flex items-center justify-center min-w-10 h-10 sm:min-w-12 sm:h-12 flex-shrink-0">
                    {index === 0 && <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />}
                    {index === 1 && <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />}
                    {index === 2 && <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />}
                    {index === 3 && <Home className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exclusion Tab */}
        {tabValue === 4 && (
          <div className="py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">Package Excludes</h2>

            <div className="space-y-4 sm:space-y-6">
              {route.exclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-red-100 rounded-full p-2 sm:p-3 flex items-center justify-center min-w-10 h-10 sm:min-w-12 sm:h-12 flex-shrink-0">
                    {index === 0 && <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />}
                    {index === 1 && <Home className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />}
                    {index === 2 && <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />}
                    {index === 3 && <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
