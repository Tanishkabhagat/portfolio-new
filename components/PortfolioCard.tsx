"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"
import type { Project } from "@/types"

interface PortfolioCardProps {
  project: Project
  index: number
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-2xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-pink-100/50">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Category Badge Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-pink-700 shadow-sm">
              <Sparkles size={11} />
              {project.category}
            </span>
          </div>

          {/* Bottom Gradient and Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent p-5 flex flex-col justify-end transition-opacity duration-300">
            <motion.div
              animate={{ y: isHovered ? 0 : 4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-200 transition-colors font-playfair">
                {project.title}
              </h3>
              <p className="text-white/80 text-xs line-clamp-1 mb-3">
                {project.description}
              </p>

              <div className="flex items-center text-xs font-semibold text-pink-300 group-hover:text-white transition-colors">
                <span className="mr-1.5">Explore Case Study</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

