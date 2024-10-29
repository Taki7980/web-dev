"use client";

import { useRef, useEffect } from "react";

export default function Marketing() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.error("Video playback failed:", error);
			});
		}
	}, []);

	return (
		<section className="max-w-6xl mx-auto px-4 lg:px-0 py-12 md:py-24">
			<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
				<div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
						Consolidate your enrichment tools for better data
						quality at lower costs
					</h2>
					<p className="text-base sm:text-lg text-gray-600">
						Our marketplace of 75+ integrations and our AI research
						agent can drastically improve your data foundation—and
						cut the time SDRs spend on manual work.
					</p>
				</div>
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
					<div className="relative aspect-video w-full h-full mx-auto lg:max-w-5xl overflow-hidden rounded-lg shadow-lg">
						<video
							ref={videoRef}
							className="w-full h-full object-cover"
							autoPlay
							loop
							muted
							playsInline
						>
							<source src="/video.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
}
