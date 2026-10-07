"use client";

import Image from "next/image";
import { useState } from "react";
import InitialPage from "@/components/pages/initial-page";

function normalizeUrl(url) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function TopStartupsGridPage({ finalists }) {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const logoSrc = (startup) =>
    startup.image || `${finalists.imageDirectory}/${startup.slug}.png`;

  return (
    <InitialPage>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src={finalists.heroImage}
              alt={finalists.title}
              width={1000}
              height={1000}
              priority
              className="mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50%"
            />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
            {finalists.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
            {finalists.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {finalists.startups.map((startup) => (
            <a
              key={`${finalists.year}-${startup.slug}`}
              href={normalizeUrl(startup.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col">
                <div className="w-full flex items-center justify-center mb-5 md:mb-6">
                  <Image
                    src={logoSrc(startup)}
                    alt={startup.name}
                    width={140}
                    height={140}
                    className="h-16 w-auto md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                  {startup.name}
                </h3>
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {startup.description}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedStartup(startup);
                  }}
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

        {selectedStartup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedStartup(null)}></div>
            <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-2xl mx-4 max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/10 p-6 md:p-8 shadow-2xl">
              <div className="flex items-start gap-4 max-sm:flex-col">
                <div className="flex-shrink-0">
                  <Image src={logoSrc(selectedStartup)} alt={selectedStartup.name} width={80} height={80} className="h-12 w-auto object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{selectedStartup.name}</h3>
                  <p className="whitespace-pre-line text-blue-100 text-sm md:text-base leading-relaxed">{selectedStartup.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <a
                  href={normalizeUrl(selectedStartup.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/10 transition"
                >
                  Visit website
                </a>
                <button type="button" onClick={() => setSelectedStartup(null)} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
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
