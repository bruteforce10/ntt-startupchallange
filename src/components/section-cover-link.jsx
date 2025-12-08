"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeadingText from "./heading-text";

const SectionCoverLink = ({
  title,
  image = "/cover-gallery-fix.webp",
  link,
}) => {
  return (
    <section className="pt-16 md:pt-28 px-4 container mx-auto">
      <HeadingText text={title} className="text-center" />
      <Link href={link} className="block w-full">
        <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
            priority
            unoptimized={image.startsWith("/")}
          />
        </div>
      </Link>
    </section>
  );
};

export default SectionCoverLink;
