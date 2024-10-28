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
		<div className="space-y-4 max-w-6xl mx-auto my-10">
			<div className="flex h-[80vh] justify-between gap-5">
				<Card className="w-1/2 flex items-center justify-center relative overflow-hidden">
					<Image
						src="/sales.avif"
						alt="Background"
						fill
						className="object-cover"
					/>
				</Card>
				<Card className="w-1/2 rounded-lg flex flex-col justify-center px-16">
					<CardHeader>
						<Button
							variant="outline"
							className="text-sm w-fit font-semibold text-violet-800 bg-violet-400"
						>
							Salesforce package
						</Button>
						<CardTitle className="text-4xl">
							Automate prospecting and data enrichment—without
							leaving Salesforce
						</CardTitle>
						<CardDescription className="text-md font-medium">
							Grow pipeline faster by helping sellers find,
							enrich, and draft messages to any contact
							on-demand—without ever leaving Salesforce.
						</CardDescription>
					</CardHeader>
					<CardFooter>
						<Button className="bg-transparent text-black hover:bg-slate-400">
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
