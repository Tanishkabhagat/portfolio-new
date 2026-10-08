"use client";
 
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Wrench, User } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGallery from "@/components/ProjectGallery";
import type { Project } from "@/types";
 
interface ProjectClientPageProps {
  project: Project;
}

export default function ProjectClientPage({ project }: ProjectClientPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto my-6 px-4 sm:px-6 md:px-12 lg:px-20 py-8"
    >
      <Link
        href="/#portfolio"
        className="inline-flex items-center text-pink-600 mb-8 hover:text-pink-800 transition-colors font-medium group"
      >
        <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all projects
      </Link>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Category tag */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-100 text-pink-700">
            <Tag size={12} />
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-gray-900 font-playfair">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Project Meta Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 bg-pink-50/40 p-6 rounded-2xl border border-pink-100">
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2.5 rounded-xl text-pink-700">
              <User size={20} />
            </div>
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-pink-700 mb-1">Role</h3>
              <p className="text-gray-800 font-medium">{project.role}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2.5 rounded-xl text-pink-700">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-pink-700 mb-1">Timeline</h3>
              <p className="text-gray-800 font-medium">{project.timeline}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2.5 rounded-xl text-pink-700">
              <Wrench size={20} />
            </div>
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-pink-700 mb-1">Tools</h3>
              <p className="text-gray-800 font-medium">{project.tools}</p>
            </div>
          </div>
        </div>

        {/* Gallery and Videos */}
        <ProjectGallery images={project.gallery} videos={project.video} />

        {/* Project Overview (only rendered when content exists) */}
        {project.content && project.content.trim().length > 0 && (
          <div className="prose prose-lg max-w-3xl mb-16 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700 font-playfair">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {project.content}
            </p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="border-t border-gray-100 pt-8 mt-12 flex justify-between items-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors font-semibold"
          >
            <ArrowLeft size={18} className="mr-2" />
            View other projects
          </Link>
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow hover:opacity-90 transition-opacity"
          >
            Work with me
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}