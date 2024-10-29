import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      items: ["Login", "University", "Integrations", "Pricing", "Changelog"],
    },
    {
      title: "Blog",
      items: [
        "AI for sale Prospecting",
        "Why good CRM data matters",
        "Google maps lead generation in 5 easy steps",
        "Outbound sales Automation",
        "AI lead Generation",
      ],
    },
    {
      title: "Tools",
      items: [
        "Email Finder",
        "Headcounter Finder",
        "Credits Calculator",
        "Chrome extension",
        "Lookup WHOIS info",
        "CPM calculator",
        "Headcount Directory",
        "Glossary",
        "Dossir",
        "Job board",
      ],
    },
    {
      title: "Support",
      items: ["Send us an Email", "Join Stack", "FAQ", "Status"],
    },
    {
      title: "Company",
      items: [
        "Customer Stories",
        "Wall of love",
        "Careers",
        "Creators Program",
        "Integrate With Clay",
      ],
    },
    {
      title: "Legal",
      items: [
        "Privacy Policy",
        "Terms of Service",
        "Do not sell my data",
        "Cookie preferences",
      ],
    },
  ]

  return (
    <footer className="bg-[#0A0A0A] text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12 sm:mb-16">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-8 sm:mb-0">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href="#"
                      className="text-sm sm:text-base text-gray-400 hover:text-white hover:underline transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-800 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-0 text-center sm:text-left">
            <Image
              src="/logo.webp"
              alt="logo"
              width={80}
              height={80}
              className="mx-auto sm:mx-0 mb-4"
            />
            © Clay 2024 / Uplevel your data enrichment. Scale personalized
            outreach.
          </div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}