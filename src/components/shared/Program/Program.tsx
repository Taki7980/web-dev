"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Program = () => {
	return (
		<div className="min-h-screen py-10 md:py-20 px-4 max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 justify-center">
			<div className="space-y-6 flex items-center justify-center w-full text-center">
				<div className="flex flex-col max-w-3xl gap-4">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Program our components for any outreach use case
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground">
						Once your data is solid, use it with our AI message
						writer to help generate personalized copy for any
						campaign: inbound, outbound, expansion, retention.
					</p>
				</div>
			</div>
			<Tabs defaultValue="Inbound" className="space-y-8 md:space-y-10">
				<TabsList className="grid w-full grid-cols-2 gap-2 md:gap-5">
					<TabsTrigger
						value="Inbound"
						className="py-3 md:py-5 font-bold"
					>
						Inbound
					</TabsTrigger>
					<TabsTrigger
						value="Outbound"
						className="py-3 md:py-5 font-bold"
					>
						Outbound
					</TabsTrigger>
				</TabsList>
				<TabsContent value="Inbound" className="space-y-4">
					<div className="flex flex-col lg:flex-row justify-between gap-5">
						<Card className="w-full lg:w-1/2 rounded-lg flex flex-col justify-center p-6 md:p-8 lg:px-16">
							<CardHeader>
								<CardTitle className="text-2xl md:text-3xl lg:text-4xl">
									Enrich & filter your inbound leads to reach
									the best prospects
								</CardTitle>
								<CardDescription className="text-sm md:text-md font-medium mt-4">
									When you have thousands of inbound leads,
									you need to quickly prioritize the best fits
									for your team. Enrich leads with contact
									info, firmographics, and more — then use AI
									to draft the perfect outreach. Get to your
									leads faster.
								</CardDescription>
							</CardHeader>
							<CardFooter className="mt-6">
								<Button className="bg-black w-full md:w-auto">
									Talk to a GTM Engineer{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden aspect-video lg:aspect-auto">
							<Image
								src="/bg.jpg"
								alt="Background"
								fill
								className="object-cover"
							/>
							<div className="relative z-10 w-full p-4">
								<Image
									src="/inbound.webp"
									alt="Inbound"
									width={900}
									height={700}
									className="w-full h-auto"
								/>
							</div>
						</Card>
					</div>
				</TabsContent>
				<TabsContent value="Outbound" className="space-y-4">
					<div className="flex flex-col lg:flex-row justify-between gap-5">
						<Card className="w-full lg:w-1/2 rounded-lg flex flex-col justify-center p-6 md:p-8 lg:px-16">
							<CardHeader>
								<CardTitle className="text-2xl md:text-3xl lg:text-4xl">
									Build lists, enrich, and message leads in
									seconds
								</CardTitle>
								<CardDescription className="text-sm md:text-md font-medium mt-4">
									Are you targeting large customers? Use a
									white glove approach and leverage Clay to
									keep your CRM updated and automate the
									prospecting part of going after enterprises.
								</CardDescription>
							</CardHeader>
							<CardFooter className="mt-6">
								<Button className="bg-black w-full md:w-auto">
									Talk to a GTM Engineer{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden aspect-video lg:aspect-auto">
							<Image
								src="/bg2.jpg"
								alt="Background"
								fill
								className="object-cover"
							/>
							<div className="relative z-10 w-full p-4">
								<Image
									src="/outbound.webp"
									alt="Outbound"
									width={900}
									height={700}
									className="w-full h-auto"
								/>
							</div>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Program;
