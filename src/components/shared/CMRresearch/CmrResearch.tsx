"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Lock, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
	{
		icon: <Zap className="w-6 h-6" />,
		title: "Flexibility for any campaign",
		description:
			"Program our core components (account/lead lists, data enrichment, and messaging) into end-to-end campaigns for any outreach use case.",
	},
	{
		icon: <Database className="w-6 h-6" />,
		title: "Best data coverage",
		description:
			"Clay consolidates 75+ major enrichment tools into one credit-based marketplace. Our waterfall enrichment feature helps you query multiple tools at once to get the data you need.",
	},
	{
		icon: <Lock className="w-6 h-6" />,
		title: "One data cleanroom",
		description:
			"Use Clay to access any enrichment tool and integrate with your CRM and email sending tool. Never deal with multiple contracts or points of security risk again.",
	},
	{
		icon: <Bot className="w-6 h-6" />,
		title: "Powerful AI research agent",
		description:
			"Automate complex, creative, and manual GTM research with our AI research agent—and generate a list of domains and full profiles for each.",
	},
];

const dataPoints = [
	{
		title: "Contact information",
		description:
			"Search dozens of providers at once to get the best coverage on work email, mobile numbers, and more.",
		image: "/cmr1.png",
		bg: "yellow-500",
	},
	{
		title: "Intent Data",
		description:
			"Continuously monitor buying signals across social media and the web and be alerted for key events like job changes and major news.",
		image: "/cmr2.webp",
		bg: "blue-500",
	},
	{
		title: "Filmographic Data",
		description:
			"Get the best coverage on standard firmographics and technographics like employee count by role and location, plus custom data points that our agents can find for your unique business.",
		image: "/cmr3.webp",
		bg: "red-500",
	},
	{
		title: "Any Point on the Internet",
		description:
			"Find most data points you can imagine with our AI research agent. That includes categorizing companies as B2B vs. B2C, checking SOC-II compliance, finding the number of franchise locations of a restaurant, etc. See examples of questions that are easy to ask with Claygent, our AI web scraper.",
		image: "/cmr1.png",
		bg: "green-500",
	},
];

export default function CrmResearch() {
	const [selectedDataPoint, setSelectedDataPoint] = useState(dataPoints[0]);

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex flex-col  items-center justify-center space-y-12">
				<div className="space-y-6 w-full">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
						<div className="lg:w-2/3">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
								Fill your CRM with deep, clean customer research
							</h1>
							<p className="mt-4 text-lg sm:text-xl text-gray-600">
								Get deep research on any customer, from contact
								information, firmographics, or any custom
								research query. Then, use it to craft the
								perfect outreach.
							</p>
						</div>
						<Button className="bg-black text-white w-full lg:w-auto">
							Talk to a GTM Engineer{" "}
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-10 w-full">
					<div
						className={`w-full lg:w-1/2 aspect-square relative overflow-hidden rounded-lg shadow-lg bg-${selectedDataPoint.bg}`}
					>
						<Image
							src={selectedDataPoint.image}
							alt={selectedDataPoint.title}
							objectFit="cover"
							height={500}
							width={600}
							quality={100}
						/>
					</div>
					<div className="w-full lg:w-1/2 space-y-6">
						<div className="space-y-4">
							{dataPoints.map((point, index) => (
								<button
									key={index}
									className={`block w-full text-left p-3 rounded transition-colors ${
										selectedDataPoint.title === point.title
											? "bg-gray-100"
											: "hover:bg-gray-50"
									}`}
									onClick={() => setSelectedDataPoint(point)}
								>
									{point.title}
								</button>
							))}
						</div>
						<div className="p-4 bg-gray-100 rounded-lg">
							<h3 className="font-semibold mb-2">
								{selectedDataPoint.title}
							</h3>
							<p>{selectedDataPoint.description}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map((feature, index) => (
					<Card
						key={index}
						className="flex flex-col items-center text-center p-6"
					>
						<div className="mb-4 p-3 bg-gray-100 rounded-full">
							{feature.icon}
						</div>
						<h3 className="font-semibold mb-2">{feature.title}</h3>
						<p className="text-sm text-gray-600">
							{feature.description}
						</p>
					</Card>
				))}
			</div>
		</div>
	);
}
