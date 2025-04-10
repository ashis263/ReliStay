import useSearch from "@/app/(home)/homestays/hooks/use-search";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { redirect } from "next/navigation";

const Item: React.FC<{ destination: string }> = ({ destination }) => {
  const {selectedFilters, setSelectedFilters} = useSearch()
  const handleClick = () => {
    setSelectedFilters([...selectedFilters, {location: destination.toLowerCase()}]);
    redirect('/homestays');
  }
  return (
    <CarouselItem onClick={handleClick} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
      <div className="!p-0">
        <Card className="!p-0">
          <CardContent className="flex aspect-square items-center justify-center !p-0">
            <Image
              src={`/${destination}.jpg`}
              className="h-full w-full object-cover rounded-lg"
              width={100}
              height={100}
              alt={destination}
              quality={100}
            />
            <span className="text-3xl outline-1 backdrop-blur-xs sm:text-4xl lg:text-5xl text-white font-semibold absolute p-3 rounded bottom-2">
              {destination}
            </span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default Item;
