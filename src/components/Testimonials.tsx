import { Testimonial } from "@/lib/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialsCard } from "./TestimonialsCard";

interface Props {
  tData: Testimonial[];
}
export const Testimonials = (data: Props) => {
  return (
    <section className="bg-services-bg flex flex-col items-center justify-center px-10 md:px-52 py-10 md:py-20">
      <h1 className="text-white font-bold text-3xl md:text-5xl mb-10">
        Testimonials
      </h1>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {data.tData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <TestimonialsCard tData={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
