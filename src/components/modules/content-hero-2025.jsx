import React from "react";
import { FlipWords } from "../ui/flip-words";

export function ContentHero2025() {
  const words = [
    "Build Connections That Matter",
    "Your Next Leap Starts at NTT Startup Challenge 2025",
  ];

  return (
    <div className="flex max-w-[980px] mx-auto justify-center items-center px-4">
      <div className="text-4xl  font-extrabold tracking-wide uppercase  leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
