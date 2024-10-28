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
		<div className="h-full py-20 max-w-6xl mx-auto flex flex-col gap-12 justify-center">
			<div className="space-y-6 flex items-center justify-center w-full text-center">
				<div className="flex flex-col max-w-3xl gap-4">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						Program our components for any outreach use case
					</h1>
					<p className="text-xl text-muted-foreground">
						Once your data is solid, use it with our AI message
						writer to help generate personalized copy for any
						campaign: inbound, outbound, expansion, retention.
					</p>
				</div>
			</div>
			<Tabs defaultValue="Inbound" className="space-y-10">
				<TabsList className="grid w-full grid-cols-2 gap-5">
					<TabsTrigger value="Inbound" className="py-5 font-bold">
						Inbound
					</TabsTrigger>
					<TabsTrigger value="Outbound" className="py-5 font-bold">
						Outbound
					</TabsTrigger>
				</TabsList>
				<TabsContent value="Inbound" className="space-y-4">
					<div className="flex h-[80vh] justify-between gap-5">
						<Card className="w-1/2 rounded-lg flex flex-col justify-center px-16">
							<CardHeader>
								<CardTitle className="text-4xl">
									Enrich & filter your inbound leads to reach
									the best prospects
								</CardTitle>
								<CardDescription className="text-md font-medium">
									When you have thousands of inbound leads,
									you need to quickly prioritize the best fits
									for your team. Enrich leads with contact
									info, firmographics, and more — then use AI
									to draft the perfect outreach. Get to your
									leads faster.
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Button className="bg-black">
									Talk to a GTM Engineer{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="w-1/2 flex items-center justify-center relative overflow-hidden">
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
					<div className="flex h-[80vh] justify-between gap-5">
						<Card className="w-1/2 rounded-lg flex flex-col justify-center px-16">
							<CardHeader>
								<CardTitle className="text-4xl">
									Build lists, enrich, and message leads in
									seconds
								</CardTitle>
								<CardDescription className="text-md font-medium">
									Are you targeting large customers? Use a
									white glove approach and leverage Clay to
									keep your CRM updated and automate the
									prospecting part of going after enterprises.
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Button className="bg-black">
									Talk to a GTM Engineer{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</CardFooter>
						</Card>
						<Card className="w-1/2 flex items-center justify-center relative overflow-hidden">
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
