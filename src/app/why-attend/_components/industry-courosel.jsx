"use client";
import HeadingText from "@/components/heading-text";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { INDUSTRIES } from "@/constant/why-attend-content";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export function IndustryCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className=" pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={"Focused Industry"} />
        <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
          <p className="text-xl text-white leading-relaxed">
            Empowering Innovation Across All Industries: NTT Group's diverse
            operations span sectors from retail to healthcare and finance,
            offering limitless collaboration opportunities for every field.
          </p>
        </div>

        {/* Industry cards carousel using shadcn/ui */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {INDUSTRIES.map((industry) => (
              <CarouselItem
                key={industry.id}
                className="pl-2 md:pl-4 sm:basis-4/5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="bg-[#0A1428] border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <Image
                        src={`/industries/${industry.iconSrc}`}
                        alt={industry.title}
                        width={70}
                        height={70}
                        className=" mb-4"
                      />
                      <h3 className="text-blue-400 text-xl md:text-2xl font-medium mb-4">
                        {industry.title}
                      </h3>
                      <ul className="text-white space-y-2 list-disc pl-5 mt-auto">
                        {industry.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white translate-y-0" />
            <CarouselNext className="static bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
