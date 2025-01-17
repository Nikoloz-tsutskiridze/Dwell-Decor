import React from "react";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarouser() {
  return (
    <Carousel>
      <CarouselContent>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-1">
                  <Image
                    src={image}
                    alt="hero"
                    className="w-full h-[24rem] object-cover rounded-sm"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-[-15px]" />
      <CarouselNext className="right-[-15px]" />
    </Carousel>
  );
}

export default HeroCarouser;
