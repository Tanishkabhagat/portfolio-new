"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface GalleryImage {
  imageSrc: string;
  instagramUrl?: string;
}

interface ProjectGalleryProps {
  images?: GalleryImage[];
  videos?: string[];
}

function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";
  try {
    if (url.includes("/embed/")) {
      return url;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1]?.split("&")[0];
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (url.includes("/shorts/")) {
      const id = url.split("/shorts/")[1]?.split("?")[0]?.split("&")[0];
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
  } catch {
    return url;
  }
  return url;
}

export default function ProjectGallery({ images, videos }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox]);

  if (!images?.length && !videos?.length) return null;

  const isFewImages = images && images.length <= 2;

  return (
    <div className="w-full py-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pink-700 tracking-tight font-playfair">
          Project Visuals & Showcase
        </h2>

        {/* Dynamic Image Section */}
        {images && images.length > 0 && (
          <div
            className={
              isFewImages
                ? "flex flex-col gap-8"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {images.map((item, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 border border-pink-100/50 ${
                    isFewImages ? "w-full aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5]"
                  }`}
                  onClick={() => !item.instagramUrl && setSelectedImage(item.imageSrc)}
                >
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={`Project showcase ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    sizes={isFewImages ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  />

                  {item.instagramUrl ? (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <div className="bg-white/95 px-4 py-2 rounded-full flex items-center gap-2 text-pink-700 text-sm font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>View on Instagram / Live</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        Click to enlarge
                      </span>
                    </div>
                  )}
                </motion.div>
              );

              return item.instagramUrl ? (
                <Link
                  key={index}
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-2xl"
                >
                  {content}
                </Link>
              ) : (
                <div key={index} className="cursor-pointer">
                  {content}
                </div>
              );
            })}
          </div>
        )}

        {/* Videos Section */}
        {videos && videos.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-pink-700 font-playfair">
              Video Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((videoUrl, index) => {
                const embedUrl = getYouTubeEmbedUrl(videoUrl);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black border border-pink-100"
                  >
                    <iframe
                      src={embedUrl}
                      title={`Video showcase ${index + 1}`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 p-2.5 rounded-full transition-all z-10"
              aria-label="Close image preview"
            >
              <X size={26} />
            </button>
            <div
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full preview"
                width={1600}
                height={1200}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}