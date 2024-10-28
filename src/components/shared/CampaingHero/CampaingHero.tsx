'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function CampaignHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] overflow-hidden bg-gradient-to-t from-[#0A0A0A] to-slate-700">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-slate-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-slate-700">
          {[...Array(20)].map((_, i) => (
            <div
              key={`yellow-${i}`}
              className="absolute w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-yellow-400 rounded-full opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 0.5})`,
              }}
            ></div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`slate-${i}`}
              className="absolute w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-slate-700 rounded opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${
                  Math.random() * 2 + 0.5
                })`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
          Start molding your dream campaigns today
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl">
          Start your 14-day Pro trial today. No credit card required.
        </p>
        <Button className="bg-white text-blue-900 hover:bg-blue-100">
          Try it - it&apos;s free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}