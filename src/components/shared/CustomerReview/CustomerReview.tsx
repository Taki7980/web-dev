"use client";

import React from "react";
import CardDesignForTestimonial from "@/components/ui/cardDesignForTestimonial";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerReview = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className=" px-4 lg:px-0 my-12 sm:my-16 md:my-20"
			>
				<div className="flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center mb-6 sm:mb-8">
					<div className="space-y-4 max-w-3xl">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
							What our customers say about us...
						</h2>
					</div>
					<div className="flex gap-4 mt-4 sm:mt-0">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</div>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className={`pl-4 md:pl-6 ${
								index === 0 ? "ml-0" : ""
							} basis-full md:basis-1/2 lg:basis-1/2`}
						>
							<div className="p-1">
								<CardDesignForTestimonial />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default CustomerReview;
