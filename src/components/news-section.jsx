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
import HeadingText from "./heading-text";
import { SectionHeading2026 } from "./nsc-2026/section-heading";

const NEWS_BASE_URL = "https://pb.ntt-startupchallenge.com/api/files";

function formatNewsDate(value) {
  if (!value) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function stripHtml(value) {
  if (!value) return "";

  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function getNewsImageSrc(item) {
  const imageField = item?.image || item?.field;

  if (!item?.collectionId || !item?.id || !imageField) {
    return null;
  }

  return `${NEWS_BASE_URL}/${item.collectionId}/${item.id}/${imageField}`;
}

function NewsCard({ item }) {
  const imageSrc = getNewsImageSrc(item);
  const description = stripHtml(item?.description);
  const formattedDate = formatNewsDate(item?.created);

  return (
    <Link
      href={item?.url || "#"}
      target="_blank"
      rel="noreferrer"
      className="block h-full space-y-4 px-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            fill
            alt={item?.title || "News image"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white/5 text-sm text-white/50">
            Image unavailable
          </div>
        )}
      </div>

      <div className="space-y-2">
        {formattedDate ? (
          <p className="text-sm font-medium text-white/80">{formattedDate}</p>
        ) : null}
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white md:text-xl">
          {item?.title}
        </h3>
        {description ? (
          <p className="line-clamp-3 text-sm leading-6 text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

function NewsCarouselBlock({ title, items, isLoading, emptyLabel }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
          {title}
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-wrap justify-center gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={`${title}-${index}`} />
          ))}
        </div>
      ) : items.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: items.length > 1,
          }}
          className="w-full"
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item?.id}
                className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <NewsCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {items.length > 1 ? (
            <div className="mt-10 flex justify-center gap-4">
              <CarouselPrevious className="relative left-auto top-auto size-12 translate-y-0 bg-[#0A1428] text-white hover:bg-blue-900 hover:text-white" />
              <CarouselNext className="relative right-auto top-auto size-12 translate-y-0 bg-[#0A1428] text-white hover:bg-blue-900 hover:text-white" />
            </div>
          ) : null}
        </Carousel>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-sm text-white/70">
          {emptyLabel}
        </div>
      )}
    </div>
  );
}

export function NewsSection({ is2026 = false }) {
  const { data, error, isLoading } = useSWR(`/api/get-news`, fetcher);
  const newsArticles = data?.newsArticles ?? [];
  const newsActivities = data?.newsActivities ?? [];
  const errors = data?.errors ?? [];
  const hasNewsArticleError = errors.some((message) =>
    message.includes("news_article")
  );
  const hasNewsActivityError = errors.some((message) =>
    message.includes("news_activity")
  );

  const Heading = is2026 ? (
    <SectionHeading2026 title="News & Activity" subtitle={"news"} />
  ) : (
    <HeadingText text={"News & Activity"} />
  );

  return (
    <section className="text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {Heading}
        {error ? (
          <div className="mx-auto max-w-4xl rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-10 text-center text-sm text-red-100">
            Failed to load the latest news. Please try again in a moment.
          </div>
        ) : (
          <div className="mx-auto max-w-7xl space-y-16">
            <NewsCarouselBlock
              title="News Articles"
              items={newsArticles}
              isLoading={isLoading}
              emptyLabel={
                hasNewsArticleError
                  ? "News articles couldn't be loaded right now."
                  : "No news articles available yet."
              }
            />
            <NewsCarouselBlock
              title="News Activities"
              items={newsActivities}
              isLoading={isLoading}
              emptyLabel={
                hasNewsActivityError
                  ? "News activities couldn't be loaded right now."
                  : "No news activities available yet."
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
