import { Bath, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const HomestayCard: React.FC<{ homestay: Homestay }> = ({ homestay }) => {
  const {
    _id: id,
    title,
    homestaysType,
    location,
    pricePerNight,
    amenities,
    images,
  } = homestay;
  return (
    <Link href={`/homestays/${id}`} className="block">
      <div className="flex max-sm:flex-col justify-between bg-white shadow rounded-md p-2 lg:p-5 gap-5 hover:shadow-md duration-500 cursor-pointer">
        <div className="w-1/4 grid grid-cols-3 gap-[2px] max-sm:w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? "col-span-3 w-full h-48 sm:h-24 lg:h-32" : "h-20 sm:h-10 lg:h-12"
              } ${index > 3 ? "hidden" : ""}`}
            >
              <p className={`font-bold z-10 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-[10px] lg:text-sm text-center ${index === 3 ? "" : "hidden"}`}>{images.length-3} More</p>
              <Image
                width={100}
                height={100}
                src={image}
                className={`w-full h-full object-cover rounded  ${index === 3 ? "opacity-40" : ""}`}
                alt={title}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-5 flex-1">
          <div className="sm:w-[48%] flex-1 flex flex-col justify-between max-sm:w-full">
            <div className="flex flex-col justify-between sm:gap-3">
              <div className="sm:space-y-2">
                <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                  {title}
                </h2>
                <p className="font-mono font-bold text-primary uppercase max-lg:text-xs">
                  {homestaysType}
                </p>
              </div>
              <h4 className="flex gap-1 items-center text-gray-600 max-lg:text-xs">
                <MapPin className="w-3 text-primary" />
                {`${location.address}, ${location.city}`}
              </h4>
            </div>
            <div>
              <p className="text-lg font-medium flex items-center gap-2">
                <Bath className="text-primary w-4" />
                Amenities:
              </p>
              <div className="flex gap-2 sm:gap-2 flex-wrap max-sm:justify-between my-1">
                {amenities.map((item, index) => (
                  <span key={index} className="text-xs text-primary">
                    {/* < */}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/4 text-end sm:flex flex-col justify-between max-sm:space-y-5">
            {/* static data for card design, will modify */}
            <div className="space-y-[2px]">
              <h4 className="font-medium text-primary max-lg:text-xs">
                Excellent
              </h4>
              <div className="flex justify-end">
                <h3 className="lg:text-xl font-medium px-3 py-[2px] rounded-md bg-gray-200">
                  4.2
                </h3>
              </div>
              <p className="text-gray-600 text-xs">(100 Ratings)</p>
            </div>
            <h3 className="sm:text-2xl lg:text-3xl font-bold">
              <span className=" text-primary">৳</span> {pricePerNight}
              <span className="text-[10px] lg:text-xs font-normal">
                /Per Night
              </span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomestayCard;
