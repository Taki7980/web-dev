import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardDesignForResource from "@/components/ui/cardDesignForResource";

export function ResourcesLearn() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-10 md:my-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center mb-6 sm:mb-10">
          <div className="space-y-4 sm:space-y-6 w-full sm:w-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Learn with our resources
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
              Check out Clay University, read our GTM blog, or try out our top templates to transform your growth ideas into outreach in minutes.
            </p>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <CardDesignForResource />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}