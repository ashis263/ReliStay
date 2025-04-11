"use client";

import SectionTitle from "@/components/SectionTitle";
import RecommendedHomestay from "./components/RecommendedHomestay";
import { useEffect, useState } from "react";

interface Homestay {
  _id: string;
  title: string;
  description: string;
  homestaysType: string;
  homeowner: string;
  location: {
    address: string;
    city: string;
    country: string;
  };
  pricePerNight: number;
  bedrooms: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  availability: boolean;
  bookingCount: number;
  createdAt: string;
  updatedAt: string;
}

const Recommended: React.FC = () => {
  const [recommended, setRecommended] = useState<Homestay[]>([]);
  useEffect(() => {
    //will  add a dedicated enpoint later
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homestays`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.slice(0, 3);
        setRecommended(filtered);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        title="Recommended Homestays"
        subtitle="Recommended by Travelers Like You"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5">
        {recommended.map((item) => (
          <RecommendedHomestay key={item._id} homestay={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
