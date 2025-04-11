import { MapPin, Star } from "lucide-react";
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

const RecommendedHomestay: React.FC<{ homestay: Homestay }> = ({
  homestay,
}) => {
  return (
    <Link href={`/homestays/${homestay._id}`}>
      <div className="bg-white rounded-sm shadow-xs">
        <Image
          src={homestay.images[0]}
          className="w-full rounded-t-md h-60"
          width={100}
          height={100}
          alt={homestay.title}
        />
        <div className="p-3 md:p-5 h-36 sm:h-48 lg:h-44 flex flex-col justify-between">
          <p className="text-lg font-medium text-center">{homestay.title}</p>
          <div className="flex justify-between">
            <div className="w-3/5 self-end space-y-2">
              <p className="font-mono font-bold text-primary uppercase lg:text-lg">
                {homestay.homestaysType}
              </p>
              <h4 className="flex gap-1 items-center text-gray-600 max-lg:text-xs ">
                <MapPin className="w-3 text-primary" />
                {`${homestay.location.city}, ${homestay.location.country}`}
              </h4>
            </div>
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
      </div>
    </Link>
  );
};

export default RecommendedHomestay;
