import type { Metadata } from "next"
import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Tanishka Bhagat | Graphic Designer & Video Editor",
    template: "%s | Tanishka Bhagat",
  },
  description: "Portfolio of Tanishka Bhagat — Crafting dreamy visual identities, brand graphics, and high-impact motion edits.",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-white text-gray-800 min-h-screen flex flex-col font-sans selection:bg-pink-200 selection:text-pink-900 antialiased">
        <Header />
        <div className="flex-1 pt-12 md:pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}


