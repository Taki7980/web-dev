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
		<Carousel
			opts={{
				align: "start",
			}}
			className="max-w-6xl mx-auto my-20"
		>
			<div className="flex gap-5 justify-between items-center my-5">
				<div className="space-y-6 flex items-center justify-between">
					<div className="flex flex-col max-w-3xl gap-4">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
							Learn with our resources
						</h1>
						<p className="text-xl text-gray-600">
							Check out Clay University, read our GTM blog, or try
							out our top templates to transform your growth ideas
							into outreach in minutes.
						</p>
					</div>
				</div>
				<div className="flex gap-4">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</div>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem
						key={index}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-1">
							<CardDesignForResource/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
