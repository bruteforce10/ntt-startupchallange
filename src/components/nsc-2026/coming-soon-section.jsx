import React from "react";
import { CountdownTimer } from "../ui/countdown-timer";

export function ComingSoonSection2026() {
  // Target date for the countdown: May 21, 2026
  const targetDate = new Date("2026-05-01T00:00:00").getTime();

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold leading-tight tracking-[0.12em]">
          The NTT Startup Challenge 2026 <br /> Registration Opens in
        </h2>

        <div className="relative inline-block group w-full max-w-4xl">
          {/* Animated glow effect behind the box */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-ntt-200 to-blue-ntt-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative py-8 px-4 md:px-12 border border-white/10 rounded-2xl bg-[#0B1221]/80 backdrop-blur-sm shadow-2xl text-blue-ntt-200">
            <CountdownTimer
              date={targetDate}
              completedNode={
                <p className="text-2xl md:text-5xl font-black text-blue-ntt-200 uppercase tracking-[0.2em] animate-pulse">
                  11th November 2026
                </p>
              }
            />
            <p className="text-xl md:text-2xl mt-12 text-white/60 font-black uppercase tracking-[0.21em] animate-pulse">
              1th Mei 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
