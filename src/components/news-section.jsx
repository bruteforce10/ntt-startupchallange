"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsItems = [
  {
    id: 1,
    month: "November",
    title: "Throwback a Remarkable Moment",
    url: "/news/final-day-2024",
  },
  {
    id: 2,
    month: "November",
    title: "CONGRATULATIONS!",
    url: "/news/winners-2024",
  },
  {
    id: 3,
    month: "October",
    title: "An exciting event at Echelon Philippines 2024",
    url: "/news/echelon-philippines-2024",
  },
  {
    id: 4,
    month: "September",
    title: "NTT workshop at QUINTBRIDGE innovation facility in Osaka",
    url: "/news/osaka-workshop",
  },
  {
    id: 5,
    month: "July 24-25",
    title: "Join NTT at Tech in Asia Kuala Lumpur",
    url: "/news/applications-open",
  },
];

export function NewsSection() {
  return (
    <section className=" text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            News & Activity
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {newsItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Link href={item.url} className="space-y-4 px-4 block">
                    <Image
                      src={`/news/${item.id}.avif`}
                      width={1000}
                      height={1000}
                      alt={item.title}
                      className="rounded-xl"
                    />
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">{item.month}</p>
                      <div>{item.title}</div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-16">
              <CarouselPrevious className="relative size-12 bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white" />
              <CarouselNext className="relative size-12 bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
