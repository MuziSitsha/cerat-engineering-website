"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const galleryItems = [
    {
      id: 1,
      title: "Project Phase 1",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-57.jpg",
    },
    {
      id: 2,
      title: "Project Phase 2",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-58.jpg",
    },
    {
      id: 3,
      title: "Project Inspection",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-58_1.jpg",
    },
    {
      id: 4,
      title: "Detail Work",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-58_2.jpg",
    },
    {
      id: 5,
      title: "Installation Work",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-59.jpg",
    },
    {
      id: 6,
      title: "Final Stage",
      category: "Recent Work",
      type: "image",
      imageUrl: "/time/PHOTO-2026-01-15-11-33-59_1.jpg",
    },
    {
      id: 7,
      title: "Processing Plant",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-29.jpg",
    },
    {
      id: 8,
      title: "Equipment Setup",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-31.jpg",
    },
    {
      id: 9,
      title: "Handling System",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-40.jpg",
    },
    {
      id: 10,
      title: "Conveyor System",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-40_1.jpg",
    },
    {
      id: 11,
      title: "Mobile Operation",
      category: "Crushing",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-44.jpg",
    },
    {
      id: 12,
      title: "Main Unit",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45.jpg",
    },
    {
      id: 13,
      title: "Framework",
      category: "Building",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45_1.jpg",
    },
    {
      id: 14,
      title: "Assembly Process",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45_2.jpg",
    },
    {
      id: 15,
      title: "Installation",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45_3.jpg",
    },
    {
      id: 16,
      title: "Quality Control",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45_4.jpg",
    },
    {
      id: 17,
      title: "Field Operations",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-46.jpg",
    },
    {
      id: 18,
      title: "Site Management",
      category: "Building",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-46_1.jpg",
    },
    {
      id: 19,
      title: "Technical Inspection",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-46_2.jpg",
    },
    {
      id: 20,
      title: "Safety Protocol",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-46_3.jpg",
    },
    {
      id: 21,
      title: "Plant Configuration",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-47.jpg",
    },
    {
      id: 22,
      title: "Mechanical Systems",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-47_1.jpg",
    },
    {
      id: 23,
      title: "Final Assembly",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-47_2.jpg",
    },
    {
      id: 24,
      title: "Testing & Validation",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-47_3.jpg",
    },
    {
      id: 25,
      title: "Production Unit",
      category: "Mining",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-48.jpg",
    },
    {
      id: 26,
      title: "Industrial Setup",
      category: "Building",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-48_1.jpg",
    },
    {
      id: 27,
      title: "Operational System",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-48_2.jpg",
    },
    {
      id: 28,
      title: "System Integration",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-48_3.jpg",
    },
    {
      id: 29,
      title: "Maintenance Access",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-50.jpg",
    },
    {
      id: 30,
      title: "Equipment Specifications",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-50_1.jpg",
    },
    {
      id: 31,
      title: "Installation Complete",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-50_2.jpg",
    },
    {
      id: 32,
      title: "Commissioning Phase",
      category: "Engineering",
      type: "image",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-50_3.jpg",
    },
    {
      id: 33,
      title: "Site Overview",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-29.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-26.mp4",
    },
    {
      id: 34,
      title: "Equipment Operations",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-31.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-29.mp4",
    },
    {
      id: 35,
      title: "Processing Demonstration",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-40.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-31.mp4",
    },
    {
      id: 36,
      title: "Installation Process",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-44.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-33.mp4",
    },
    {
      id: 37,
      title: "System Testing",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-45.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-34.mp4",
    },
    {
      id: 38,
      title: "Operational Overview",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-46.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-37.mp4",
    },
    {
      id: 39,
      title: "Site Performance",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-47.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-40.mp4",
    },
    {
      id: 40,
      title: "Quality Assurance",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-48.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-42.mp4",
    },
    {
      id: 41,
      title: "Final Inspection",
      category: "Video",
      type: "video",
      imageUrl: "/gallery/PHOTO-2026-01-15-11-30-49.jpg",
      videoUrl: "/gallery/VIDEO-2026-01-15-11-30-44.mp4",
    },
  ];

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(galleryItems.map((item) => item.category))];
    return cats;
  }, []);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <section className="min-h-[40vh] pt-32 pb-20 flex items-center" style={{backgroundColor: '#255849'}}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-lg md:text-xl text-gray-100">Explore our portfolio of engineering excellence</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat
                    ? "text-white shadow-lg"
                    : "text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-400"
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? '#255849' : 'transparent',
                  boxShadow: activeCategory === cat ? '0 4px 15px rgba(37, 88, 73, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  borderTop: `4px solid ${item.category === "Crushing" || item.category === "Video" ? "#ff7500" : "#255849"}`,
                  animation: `fadeInUp 0.5s ease-out ${index * 50}ms both`,
                }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {item.type === "video" && (
                    <div className="absolute top-2 right-2 z-10 animate-pulse">
                      <div className="text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{backgroundColor: '#ff7500'}}>
                        <span>▶</span> VIDEO
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white">
                  <span className="inline-block text-gray-600 font-semibold px-3 py-1 text-xs">
                    {item.type === "video" ? "Video" : "Image"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems.find((item) => item.id === selectedId)?.type === "video" ? (
              <div className="relative w-full bg-black h-96">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={galleryItems.find((item) => item.id === selectedId)?.videoUrl} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative w-full h-96 bg-gray-200">
                <Image
                  src={galleryItems.find((item) => item.id === selectedId)?.imageUrl || ""}
                  alt={galleryItems.find((item) => item.id === selectedId)?.title || ""}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="inline-block px-4 py-2 rounded-full font-semibold" style={{backgroundColor: '#f0f0f0', color: '#666'}}>
                  {galleryItems.find((item) => item.id === selectedId)?.type === "video" ? "Video" : "Image"}
                </span>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
