import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroContent2026() {
  return (
    <div className="text-center space-y-8 h-full">
      <h1 className="text-4xl md:text-7xl text-shadow-lg font-black text-white uppercase leading-tight">
        YOUR NEXT LEAP <br />
        STARTS AT <span className="text-blue-ntt-200">NTT STARTUP</span>
      </h1>
      <Button
        asChild
        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all px-8 py-3 h-auto rounded-full text-lg tracking-widest font-semibold inline-flex items-center gap-2"
      >
        <Link href="/">VIEW 2025 RECAP</Link>
      </Button>
    </div>
  );
}
