import React from "react";

export function ComingSoonSection2026() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold  leading-tight">
          The NTT Startup Challenge 2026 is
        </h2>

        <div className="relative inline-block group">
          {/* Animated glow effect behind the box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-ntt-200 to-blue-ntt-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative py-8 px-12 md:px-20 border border-white/10 rounded-2xl bg-[#0B1221]/80 backdrop-blur-sm shadow-2xl">
            <p className="text-4xl md:text-7xl font-black text-blue-ntt-200 uppercase tracking-[0.2em] animate-pulse">
              Coming <br className="md:hidden" /> Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
