"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"

const categories = ["All", "Graphic Design", "Video Editing", "UI"]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding px-4 md:px-0 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-gray-900">
            Selected Works
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            A curated showcase of brand identities, motion graphics, video post-production, and digital interfaces.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-pink-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-pink-50/60 bg-gray-50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200/80 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {category}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-pink-200/70 text-pink-800" : "bg-gray-200/70 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}