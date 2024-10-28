"use client";

import { useState, useEffect } from "react";
import CardDesignForTestimonial from "@/components/ui/cardDesignForTestimonial";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerReview = () => {
	const [itemsPerView, setItemsPerView] = useState(2);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setItemsPerView(1);
			} else if (window.innerWidth < 1024) {
				setItemsPerView(1.5);
			} else {
				setItemsPerView(2);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="px-4 sm:px-6 lg:px-8 my-12 sm:my-16 md:my-20">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="max-w-6xl mx-auto"
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
							className={`pl-4 md:pl-6 basis-2/${Math.ceil(
								itemsPerView
							)}`}
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
