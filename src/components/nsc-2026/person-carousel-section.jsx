"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading2026 } from "./section-heading";

function PersonCard({ person }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors text-left">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border border-white/10 mb-6">
        <Image
          src={`/speakers/${person.id}.webp`}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-bold text-2xl text-white mb-2">{person.name}</h3>
      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
        {person.organization}
      </p>
      
      <div className="relative flex-grow">
        <p
          className={`text-gray-400 text-sm leading-relaxed font-light tracking-wide ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {person.bio}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-ntt-200 hover:text-white mt-4 text-sm font-semibold transition-colors focus:outline-none"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export function PersonCarouselSection2026({ title, subtitle, items }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="container mx-auto px-4 py-16 text-white text-center">
      <SectionHeading2026 title={title} subtitle={subtitle} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12">
        {items.length <= 4 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((person) => (
              <div
                key={person.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] text-left"
              >
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        ) : (
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {items.map((person) => (
                <CarouselItem
                  key={person.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <PersonCard person={person} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Controls visible only on sm and up since mobile relies on swipe */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
}
