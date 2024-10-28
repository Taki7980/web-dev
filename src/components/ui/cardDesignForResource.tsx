import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CardDesignForResource = () => {
	return (
		<Card className="w-full max-w-sm overflow-hidden">
			<CardHeader className="p-0">
				<div className="relative h-40 bg-cyan-100">
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="grid grid-cols-5 gap-1">
							{[...Array(25)].map((_, i) => (
								<div
									key={i}
									className={`h-6 w-6 ${
										i % 2 === 0 ? "bg-white" : "bg-cyan-300"
									}`}
								/>
							))}
						</div>
					</div>
					<div className="absolute bottom-0 left-0 h-16 w-16 bg-red-500 rounded-tr-full" />
					<div className="absolute top-0 right-0 h-16 w-16 bg-yellow-400 rounded-bl-full" />
					<div className="absolute top-4 left-4 h-8 w-8 bg-green-500 rounded-full" />
					<div className="absolute bottom-4 right-4 h-8 w-8 bg-blue-500 rounded-full" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800">
						ABCDE
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-6">
				<h2 className="text-2xl font-bold mb-2">Integrations</h2>
				<p className="text-gray-600">
					Browse through all the integrations you can connect to Clay
					in seconds and discover what you can do!
				</p>
			</CardContent>
			<CardFooter>
				<Button variant="ghost" className="w-full justify-between">
					Button text
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CardDesignForResource;
