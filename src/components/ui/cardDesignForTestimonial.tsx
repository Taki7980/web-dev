import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import React from "react";

const CardDesignForTestimonial = () => {
	return (
		<Card className="max-w-sm md:max-w-2xl border-4 border-orange-500 rounded-lg overflow-hidden">
			<CardContent className="p-6">
				<blockquote className="text-sm md:text-lg text-gray-700 mb-4">
					&ldquo;Clay is a game changer for marketing, data, and
					operations. We have tripled our enrichment rate with Clay&apos;s
					combination of data providers vs. our previous solution.
					We&apos;re using the best aggregate results across a waterfall of
					data sources, and implementing complex workflow logic even
					beyond enrichment—of course powered by AI. Clay makes it
					easy to use AI for GTM initiatives, unlocking new workflows
					that were infeasible before.&rdquo;
				</blockquote>
				<hr className="border-t border-gray-200 my-4" />
			</CardContent>
			<CardFooter className="px-6 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<Avatar className="h-12 w-12">
						<AvatarImage
							src="/placeholder.svg?height=48&width=48"
							alt="Adam Wall"
						/>
						<AvatarFallback>AW</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold text-gray-900">Adam Wall</p>
						<p className="text-sm text-gray-600">
							Head of Sales Operations, Anthropic
						</p>
					</div>
				</div>
				<div className="text-gray-600 font-semibold">ANTHROPIC</div>
			</CardFooter>
		</Card>
	);
};

export default CardDesignForTestimonial;
