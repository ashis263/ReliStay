import { Metadata } from "next";
import ImageCarousel from "./components/ImageCarousel";
import HomestayData from "./components/HomestayData";
import BottomBar from "./components/BottomBar";
import GoBack from "./components/GoBack";
import Image from "next/image";
import Container from "@/components/container";


type Props = {
  params: Promise<{ id: string }>;
};

const getHomestay = async (id: string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homestays/${id}`)
  const homestay = await data.json();
  return homestay;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const homestay = await getHomestay(id);
  return { title: homestay?.title };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const homestay = await getHomestay(id);
  if (!homestay) {
    throw new Error("Homestay not found!");
  }
  const { images, pricePerNight, maxGuests } = homestay;
  return (
    <div className="relative">
      <div className="">
        <div className="sm:hidden">
          <GoBack />
        </div>
        <div className="sm:hidden">
          <ImageCarousel images={images} />
        </div>
        <div className="hidden sm:block">
          <Container>
            <div className="grid grid-cols-4 gap-2 lg:gap-3">
              {images.map((img: string, index: number) => (
                <Image
                  key={index}
                  src={img}
                  width={100}
                  height={100}
                  className={`w-full h-full object-cover rounded ${
                    index === 0 ? "row-span-2 col-span-2" : ""
                  }`}
                  alt="Homestay Image"
                />
              ))}
            </div>
          </Container>
        </div>
        <div className="sm:flex sm:w-11/12 lg:w-4/5 mx-auto gap-5">
          <div className="sm:w-3/4 sm:bg-white sm:my-5 sm:rounded-md sm:px-5 sm:shadow">
            <HomestayData homestay={homestay} />
          </div>
          <div className="flex-1 sm:my-5">
            <div className="max-sm:fixed bottom-0 z-10 w-full">
              <BottomBar maxGuests={maxGuests} pricePerNight={pricePerNight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
