"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-pink-100/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 md:h-12 w-32 md:w-40 transition-transform group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Tanishka Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm lg:text-base relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm hover:shadow-md hover:opacity-95 transition-all"
          >
            <Sparkles size={14} />
            Let's Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-xl hover:bg-pink-50 focus:outline-none transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-pink-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-pink-600 transition-colors py-2 text-lg font-medium border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 py-3 mt-2 rounded-xl text-center font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles size={16} />
                Let's Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}