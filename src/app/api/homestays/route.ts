import HomestayModel from "@/app/models/Homestay";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const POST = async () => {
  const demoData = {
    title: "Cozy Apartment with City View",
    description:
      "Enjoy a comfortable stay in our modern apartment located in the heart of Dhaka. Perfect for couples or solo travelers.",
    homestaysType: "apartment",
    // homeowner: "645a3e21b789c34a12345678",
    location: {
      address: "Mirpur Road, Dhanmondi",
      city: "Dhaka",
      country: "Bangladesh",
    },
    pricePerNight: 75,
    bedrooms: 1,
    maxGuests: 2,
    amenities: ["WIFI", "Air Conditioning", "Kitchen", "TV", "Elevator"],
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    availability: true,
    bathrooms: 3,
  };

  console.log("before sending data");

  await dbConnect();

  const newHomestay = await HomestayModel.insertOne(demoData);
  await newHomestay.save();

  console.log("data has been posted!");

  return NextResponse.json({ message: "data has been posted" });
};

const GET = async () => {
  await dbConnect();
  const result = await HomestayModel.find();

  // console.log(result);

  return NextResponse.json(result);
};

export { POST, GET };
