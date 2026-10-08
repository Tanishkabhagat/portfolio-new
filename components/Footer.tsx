import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-pink-100/80 bg-white/80 px-4 md:px-0 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-playfair font-bold text-pink-600">
              Tanishka Bhagat
            </Link>
            <p className="text-sm text-gray-500 mt-0.5">
              Graphic Designer & Video Editor · Crafting Dreamy Visuals
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 flex items-center">
              Designed & Built with <Heart size={14} className="mx-1 text-pink-500 fill-pink-500" /> © {currentYear}
            </p>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <a
                href="https://www.instagram.com/tanishkaverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href="https://x.com/Tanishkaverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                X / Twitter
              </a>
              <span>·</span>
              <a
                href="https://github.com/Tanishkabhagat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

