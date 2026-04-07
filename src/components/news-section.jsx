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
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { SkeletonCard } from "./skeleton-card";
import EachUtils from "@/utils/eachUtils";
import HeadingText from "./heading-text";
import { SectionHeading2026 } from "./nsc-2026/section-heading";

export function NewsSection({ is2026 = false }) {
  const { data, error, isLoading } = useSWR(`/api/get-news`, fetcher);

  const Heading = is2026 ? (
    <SectionHeading2026 title="News & Activity" subtitle={"news"} />
  ) : (
    <HeadingText text={"News & Activity"} />
  );

  return (
    <section className="text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {Heading}
        {isLoading ? (
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <EachUtils
                  of={data}
                  render={(item) => (
                    <CarouselItem
                      key={item?.id}
                      className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <Link href={item?.url} className="space-y-4 px-4 block">
                        <Image
                          src={`https://pb.ntt-startupchallenge.com/api/files/pbc_209622906/${item?.id}/${item?.field}`}
                          width={1000}
                          height={1000}
                          alt={item?.title}
                          className="rounded-xl"
                        />
                        <div className="space-y-2">
                          <p className="text-2xl font-bold">{item?.title}</p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </div>
                      </Link>
                    </CarouselItem>
                  )}
                />
              </CarouselContent>
              <div className="flex justify-center mt-16">
                <CarouselPrevious className="relative size-12 bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white" />
                <CarouselNext className="relative size-12 bg-[#0A1428] border-none text-white hover:bg-blue-900 hover:text-white" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
