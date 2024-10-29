"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
	"/intercom.svg",
	"/verkada.svg",
	"/brex.svg",
	"/notion.svg",
	"/vanta.svg",
	"/replit.svg",
	"/anthropic.svg",
	"/ramp.svg",
	"/hightouch.svg",
	"/mercury.svg",
	"/dbt.svg",
	"/hex.svg",
	"/dropbox.svg",
	"/deel.svg",
	"/grafana.svg",
	"/sigma.svg",
	"/square.svg",
	"/launchdarkly.svg",
];

export default function Hero() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="bg-[#f8f8f8] min-h-screen flex flex-col justify-center">
			<div className="max-w-6xl mx-auto my-8 sm:my-12 px-4 sm:px-6 lg:px-8 relative">
				<div className="py-3 sm:py-5 flex items-center gap-3 mb-8 sm:mb-12">
					<Button
						variant="outline"
						className="text-xs sm:text-sm font-semibold"
					>
						Enterprise
					</Button>
					<div className="flex-grow">
						<div className="border-t-2 border-dotted border-gray-400"></div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-14 w-full">
					<div className="lg:w-2/3">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono leading-tight mb-6">
							The Data Foundation for Any GTM Workflow
						</h1>
					</div>
					<div className="space-y-4 sm:space-y-6 lg:w-1/3 lg:pt-14 relative">
						<p className="text-base sm:text-lg md:text-xl text-gray-600">
							Help your operations team power personalized
							outreach campaigns — with no manual effort.
						</p>
						<Button size="lg" className="group w-full sm:w-auto">
							<span>Talk to a GTM Engineer</span>
							<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
				</div>

				{!isMobile && (
					<div className="absolute top-0 right-0 w-full h-full pointer-events-none hidden md:block">
						<Image
							className="absolute hidden lg:block -right-[39rem] -bottom-[-17.2rem] max-w-[900px] w-auto h-auto object-contain"
							src="/rope.png"
							alt="Rope illustration"
							width={900}
							height={900}
						/>
					</div>
				)}

				<div className="mt-16 sm:mt-24 lg:mt-44 relative z-10">
					<p className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
						TRUSTED BY 100,000 LEADING GTM TEAMS:
					</p>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 sm:gap-6">
						{images.map((item, i) => (
							<HoverCard key={i}>
								<HoverCardTrigger asChild>
									<Image
										src={item}
										alt={`Company logo ${i + 1}`}
										height={100}
										width={100}
										className="h-auto w-full max-w-[100px] mx-auto rounded-md"
									/>
								</HoverCardTrigger>
								<HoverCardContent side="top" className="w-80">
									<Card className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
										<div className="flex mb-4">
											
											<div className="ml-2 mt-0.5">
												<span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
													Loyce Kuvalis
												</span>
												<span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
													16 December at 08:25
												</span>
											</div>
										</div>
										<p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
										
										</p>
										
									</Card>
								</HoverCardContent>
							</HoverCard>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
