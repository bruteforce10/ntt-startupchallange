import { FEEDBACK_CONTENT_2026 } from "@/constant/feedback-content";
import Image from "next/image";
import React from "react";

export function FeedbackSection2026() {
  // Using the '-new.png' files in public/feedback
  const newImages = ["1-new.png", "2-new.png", "3-new.png"];

  return (
    <section className="container mx-auto px-4 py-20 text-white space-y-32">
      {FEEDBACK_CONTENT_2026.map((item, idx) => {
        const isEven = idx % 2 !== 0;

        return (
          <div
            key={idx}
            className={`flex flex-col gap-12 lg:gap-32 items-center ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
          >
            {/* Text side */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-blue-ntt-200 font-bold text-sm tracking-tighter">
                  0{idx + 1}
                </div>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg font-light tracking-wide max-w-xl">
                {item.desc}
              </p>
            </div>

            {/* Image side with premium border */}
            <div className={`lg:w-1/2 w-full `}>
              <div className="relative h-[300px] md:h-[450px] rounded-[1.8rem] overflow-hidden group">
                <Image
                  src={`/feedback/${newImages[idx]}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
