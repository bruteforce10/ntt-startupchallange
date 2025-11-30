"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeadingText from "./heading-text";

const SectionCoverLink = ({ title, image, link }) => {
  return (
    <section className="pt-16 md:pt-28 px-4 container mx-auto">
      <HeadingText text={title} className="text-center" />
      <Link href={link}>
        <Image
          src={image}
          alt={title}
          width={280}
          className="sm:max-w-[2000px] min-w-[1000px] h-auto mx-auto rounded-lg"
          height={280}
        />
      </Link>
    </section>
  );
};

export default SectionCoverLink;
