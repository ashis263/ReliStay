import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent className="rounded-none border-0">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="rounded-none">
              <Card className="rounded-none h-64 p-0 border-none">
                <CardContent className="flex aspect-square items-center justify-center h-64 !p-0">
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    alt="Homestay Image"
                  />
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-xs text-gray-500 py-1 w-11/12 mx-auto">
              Image {index+1} of {images.length} images
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
