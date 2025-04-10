'use client';

import * as React from "react";


import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Item from "./Item";


export const CarouselSize: React.FC = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2500 })]}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        <Item destination="Dhaka" />
        <Item destination="Chattagram" />
        <Item destination="Sylhet" />
        <Item destination="Rajshahi" />
        <Item destination="Khulna" />
        <Item destination="Barishal" />
        <Item destination="Rangpur" />
        <Item destination="Mymensing" />
      </CarouselContent>
    </Carousel>
  );
};
