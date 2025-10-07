"use client";

import Image from "next/image";
import { useState } from "react";
import InitialPage from "@/components/pages/initial-page";
import { TOP_STARTUPS_20 } from "@/constant/top-startup";

export default function Top20StartupsPage() {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (startup) => {
    setSelectedStartup(startup);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedStartup(null);
  };
  return (
    <InitialPage> 
    
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
        
          
          {/* Glowing 50 Circle */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
           <Image src="/top-20.webp" alt="Top 50 Startup of NTT Startup Challenge 2025" width={1000} height={1000} className="mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50%" />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
          Top 20 Startups of NTT Startup Challenge 2025
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
          We extend our heartfelt congratulations to the Top 20 startups of the NTT Startup
          Challenge 2025. Your innovation, passion, and perseverance have brought you this far,
          and we truly commend your outstanding progress. This milestone reflects your dedication
          to creating meaningful impact and shaping the future of technology and business.
          </p>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {TOP_STARTUPS_20.map((startup) => (
            <a
              key={startup.slug}
              href={startup.url.startsWith('http') ? startup.url : `https://${startup.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col">
                <div className="w-full flex items-center justify-center mb-5 md:mb-6">
                  <Image
                    src={`/top-50-startup/${startup.slug}.png`}
                    alt={startup.name}
                    width={140}
                    height={140}
                    className="h-16 w-auto md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                  {startup.name}
                </h3>
                <p
                  className="text-blue-100 text-xs md:text-sm leading-relaxed"
                  style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                >
                  {startup.description}
                </p>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); openModal(startup); }}
                  className="mt-3 text-blue-300 hover:text-white text-xs md:text-sm inline-flex items-center gap-1"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </a>
          ))}
        </div>
        {isOpen && selectedStartup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
            <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-slate-900 border border-white/10 p-6 md:p-8 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src={`/top-50-startup/${selectedStartup.slug}.png`} alt={selectedStartup.name} width={80} height={80} className="h-12 w-auto object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{selectedStartup.name}</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed">{selectedStartup.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <a
                  href={selectedStartup.url.startsWith('http') ? selectedStartup.url : `https://${selectedStartup.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/10 transition"
                >
                  Visit website
                </a>
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      </InitialPage>
  );
}
