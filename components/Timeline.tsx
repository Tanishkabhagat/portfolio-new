"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Brand Strategist",
    company: "Adnitee Advertising (Nashik)",
    description: "Carried out brand research, rebranding campaigns, social media strategy, and packaging design for multiple commercial clients.",
  },
  {
    year: "2025",
    title: "Video Editor & Tech Content Specialist",
    company: "Aurbit Labs (Lucknow)",
    description: "Edited over 20+ long and short-form videos to promote emerging tech startups including Bhindi AI & Mogra AI.",
  },
  {
    year: "2025",
    title: "Content & Brand Designer",
    company: "Alekhya Design Studio (Pune)",
    description: "Led visual branding for the studio, including logo design, comprehensive brand identity systems, and social media creatives.",
  },
  {
    year: "2024",
    title: "Core Team Member (Content Creation)",
    company: "Friends of Figma (Indore)",
    description: "Created viral reels, handled live event videography, and contributed to design discussions and workshops during local community meetups.",
  },
  {
    year: "2024",
    title: "Social Media & Design Head",
    company: "Google Developer Groups On Campus (CDGI)",
    description: "Led the visual branding and social media strategy for campus tech events. Designed engaging promotional assets and reels to boost student outreach.",
  },
  {
    year: "2022-2026",
    title: "B.Tech in Artificial Intelligence & Data Science",
    company: "Chameli Devi Group of Institutions",
    description: "Specializing in Artificial Intelligence and Data Science with focus on machine learning, data visualization, and intelligent digital systems.",
  },
]

export default function Timeline() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-pink-700 font-playfair">
          My Journey & Experience
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          From hands-on brand leadership to motion design and community building.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        {/* Central timeline track */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 via-purple-200 to-pink-100" />

        {/* Timeline items */}
        <div className="space-y-10">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 mb-2 md:mb-0">
                <div
                  className={`bg-white p-6 rounded-2xl shadow-sm border border-pink-100/70 hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  <span className="inline-block md:hidden px-2.5 py-0.5 mb-2 rounded-full text-xs font-bold bg-pink-100 text-pink-700">
                    {item.year}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-pink-600 font-semibold text-sm mb-3">{item.company}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Timeline Center Badge */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-4 md:top-auto flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white tracking-tighter">
                    {item.year.includes("-") ? item.year.split("-")[0] : item.year}
                  </span>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

