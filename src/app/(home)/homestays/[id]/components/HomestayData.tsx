import { Bath, CircleUserRound, MapPin, Star, User } from "lucide-react";
// import Image from "next/image";

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

const HomestayData: React.FC<{ homestay: Homestay }> = ({ homestay }) => {
  const {
    title,
    description,
    homestaysType,
    location,
    bedrooms,
    maxGuests,
    amenities,
    bookingCount,
  } = homestay;
  return (
    <div className="max-sm:w-11/12 mx-auto mb-3 sm:my-5">
      <div className="flex justify-between gap-5 flex-1">
        <div className="sm:w-[48%] flex-1 flex flex-col justify-between max-sm:w-full gap-1">
          <div className="flex flex-col justify-between gap-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-justify">
              {title}
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-mono font-bold text-primary uppercase max-lg:text-xs">
                {homestaysType}
              </p>
              <p className="font-mono font-bold max-lg:text-xs">
                ({bedrooms} Bedrooms)
              </p>
            </div>
          </div>
          <h4 className="flex gap-1 items-center text-gray-600 max-lg:text-xs">
            <MapPin className="w-3 text-primary" />
            {`${location.address}, ${location.city}, ${location.country}`}
          </h4>
        </div>
        <div className="w-1/4 text-end sm:flex flex-col justify-between max-sm:space-y-5">
          {/* static data for card design, will modify */}
          <div className="space-y-[2px]">
            <h4 className="font-medium text-primary max-lg:text-xs">
              Excellent
            </h4>
            <div className="flex justify-end">
              <h3 className="lg:text-xl font-medium px-3 py-[2px] rounded-md bg-gray-200 flex gap-1">
                <Star className="w-4 text-yellow-400 fill-yellow-400" />
                4.2
              </h3>
            </div>
            <p className="text-gray-600 text-xs">(100 Ratings)</p>
          </div>
        </div>
      </div>
      <hr className="my-3 lg:my-5" />
      <div className="text-justify">
        <p>{description}</p>
      </div>
      <hr className="my-3 lg:my-5" />
      <div>
        <p className="text-lg font-medium flex items-center gap-2"><Bath className="text-primary w-4" />Amenities:</p>
        <div className="flex gap-10 flex-wrap max-sm:justify-between my-1">
          {amenities.map((item, index) => (
            <span
              key={index}
              className="text-xs text-primary"
            >
                {/* < */}
              {item}
            </span>
          ))}
        </div>
      </div>
      <hr className="my-3 lg:my-5" />
      <div className="flex justify-between">
        <div>
          <h4 className="text-xs flex gap-1 items-center"><User className="w-4 text-primary" />Hosted by</h4>
          <p className="text-lg font-extrabold font-mono">Owner Name</p>
        </div>
        <div className="h-12 w-12 border rounded-full self-end flex justify-center items-center text-red-300">
          {/* <Image src="" width={100} height={100} alt="Owner" /> */}
          <CircleUserRound className="w-12" />
        </div>
      </div>
      <hr className="my-3 lg:my-5" />
      <div className="flex justify-between">
        <p className="font-medium">Maximum Guest: <span className="font-bold text-primary">{maxGuests}</span></p>
        <p className="font-medium">Booked: <span className="font-bold text-primary">{bookingCount}</span> times</p>
      </div>
    </div>
  );
};

export default HomestayData;
