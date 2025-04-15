import HomestayModel from "@/app/models/Homestay";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

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

const GET = async (request: NextRequest) => {
  const queries = request.nextUrl.searchParams;
  await dbConnect();
  let result;
  let sort = queries.get("sort");
  let search = queries.get("search");
  let locations = queries.getAll("location");
  let types = queries.getAll("type");
  let prices = queries.getAll("price");

  if(!sort){
    sort = '';
  }
  if(!search){
    search = ''
  }
  if (!locations.length){
    locations = ['dhaka', 'chattagram','sylhet','khulna','barishal', 'rajshahi', 'mymensing']
  }
  if (!types.length){
    types = ['apartment', 'house', 'cottage', 'cabin']
  }
  let minimum, maximum;
  if (!prices.length){
    prices = ['0 - 99999999']
    minimum = parseInt(prices[0].split(' - ')[0]);
    maximum = parseInt(prices[0].split(' - ')[1]);
  }else{
    if(prices[prices.length-1].split(' - ')[1] === '1000'){
      minimum = 0;
      maximum = 1000
    }
    else if(prices[prices.length-1].split(' - ')[1] === '2000'){
      minimum = 1001;
      maximum = 2000
    }
    else if(prices[prices.length-1].split(' - ')[1] === '3000'){
      minimum = 2001;
      maximum = 3000
    }else{
      minimum = 3001;
      maximum = 99999999
    }
  }
  const query = {
    $or: [
      { title: { $regex: search, $options: "i" } },
      { "location.city": { $regex: search, $options: "i" } },
      { "location.country": { $regex: search, $options: "i" } },
    ],
    $and: [
      { homestaysType: { $in: types } },
      // { "location.city": { $in: locations } }, //commented cause no matching city
      { pricePerNight: {$gte: minimum, $lte: maximum} }

    ]
  };
  if (sort === "priceHigh") {
    result = await HomestayModel.find(query).sort({ pricePerNight: -1 });
  } else if (sort === "priceLow") {
    result = await HomestayModel.find(query).sort({ pricePerNight: 1 });
  } else {
    result = await HomestayModel.find(query);
  }

  return NextResponse.json(result);
};

export { POST, GET };
