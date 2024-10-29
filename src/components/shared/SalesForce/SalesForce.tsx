import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const SalesForce = () => {
	return (
		<div className="space-y-4 max-w-6xl mx-auto my-10 px-4 md:px-0">
			<div className="flex flex-col lg:flex-row justify-between gap-5 min-h-[60vh] lg:h-[80vh]">
				<Card className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden order-2 lg:order-1 aspect-video lg:aspect-auto">
					<Image
						src="/sales.avif"
						alt="Background"
						fill
						className="object-cover"
					/>
				</Card>
				<Card className="w-auto lg:w-1/2 rounded-lg flex flex-col justify-center px-2 sm:px-10 lg:px-16 py-8 lg:py-0 order-1 lg:order-2">
					<CardHeader>
						<Button
							variant="outline"
							className="text-xs sm:text-sm w-fit font-semibold text-violet-800 bg-violet-400 mb-4"
						>
							Salesforce package
						</Button>
						<CardTitle className="text-2xl sm:text-3xl lg:text-4xl mb-4">
							Automate prospecting and data enrichment—without
							leaving Salesforce
						</CardTitle>
						<CardDescription className="text-sm sm:text-md font-medium">
							Grow pipeline faster by helping sellers find,
							enrich, and draft messages to any contact
							on-demand—without ever leaving Salesforce.
						</CardDescription>
					</CardHeader>
					<CardFooter className="mt-6">
						<Button size={"sm"} className=" bg-transparent text-black hover:bg-slate-200 border border-gray-300">
							Learn more about our Salesforce package{" "}
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default SalesForce;
