import type { Metadata } from "next"
import Hero from "@/components/Hero"
import PortfolioGrid from "@/components/PortfolioGrid"
import About from "@/components/About"
import Contact from "@/components/Contact"
import LogoLoop from "@/components/LogoLoop"

export const metadata: Metadata = {
  title: "Tanishka Bhagat | Graphic Designer & Video Editor",
  description: "Portfolio of Tanishka Bhagat — Crafting dreamy visual identities, brand graphics, and high-impact motion edits.",
}

export default function Home() {
  const brandLogos = [
    { src: "/1.png", alt: "Alekhya Design Studio", title: "Alekhya Design Studio" },
    { src: "/2.png", alt: "Adnitee Advertising", title: "Adnitee Advertising" },
    { src: "/3.png", alt: "Aurbit Labs", title: "Aurbit Labs" },
    { src: "/4.png", alt: "Friends of Figma", title: "Friends of Figma" },
    { src: "/5.png", alt: "Google Developer Groups", title: "GDG on Campus" },
    { src: "/6.png", alt: "Bhindi AI", title: "Bhindi AI" },
  ]

  return (
    <main className="relative overflow-hidden">
      <Hero />

      {/* Brand & Collaboration Loop Banner */}
      <section className="py-14 border-y border-pink-100/60 bg-gradient-to-r from-pink-50/40 via-white to-purple-50/40 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">
            Brands, Teams & Communities I've Created With
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <LogoLoop
            logos={brandLogos}
            speed={30}
            logoHeight={90}
            gap={56}
            fadeOut={true}
            scaleOnHover={true}
            pauseOnHover={true}
          />
        </div>
      </section>

      <PortfolioGrid />
      <About />
      <Contact />
    </main>
  )
}

