import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

const ClayInTeam = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        <div className="space-y-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col max-w-3xl gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Clay in your team
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              We are the backend data enrichment and orchestration
              layer that sets up your sales team for success.
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base whitespace-nowrap mt-4 md:mt-0">
            Talk to a GTM Engineer
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="/item1.webp"
            alt="Clay integration diagram"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default ClayInTeam