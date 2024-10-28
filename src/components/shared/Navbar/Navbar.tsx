"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div className="sticky top-0 bg-white z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="flex items-center justify-between py-4 border-b">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.webp"
							alt="Clay"
							width={120}
							height={32}
							className="h-8 w-auto"
						/>
					</Link>
					<nav className="hidden md:flex space-x-8">
						<Link
							href="#"
							className="text-sm font-medium hover:text-gray-900"
						>
							Product
						</Link>
						<Link
							href="#"
							className="text-sm font-medium hover:text-gray-900"
						>
							Solutions
						</Link>
						<Link
							href="#"
							className="text-sm font-medium hover:text-gray-900"
						>
							Pricing
						</Link>
						<Link
							href="#"
							className="text-sm font-medium hover:text-gray-900"
						>
							Resources
						</Link>
					</nav>
					<div className="hidden md:flex items-center space-x-4">
						<Button variant="link" className="font-bold">
							Log in
						</Button>
						<Button className="whitespace-nowrap">
							Talk to a GTM Engineer
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
					<button
						className="md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</header>
			</div>
			{isMenuOpen && (
				<div className="md:hidden">
					<nav className="px-2 pt-2 pb-4 space-y-1">
						<Link
							href="#"
							className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
						>
							Product
						</Link>
						<Link
							href="#"
							className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
						>
							Solutions
						</Link>
						<Link
							href="#"
							className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
						>
							Pricing
						</Link>
						<Link
							href="#"
							className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
						>
							Resources
						</Link>
					</nav>
					<div className="px-4 py-4 border-t border-gray-200">
						<Button
							variant="link"
							className="w-full justify-center mb-2"
						>
							Log in
						</Button>
						<Button className="w-full justify-center">
							Talk to a GTM Engineer
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
