"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadingText from "./heading-text";

const awards = [
  {
    place: 1,
    thorpy: "/awards/trophy-1.svg",
    company: "ProfilePrint",
    logo: "/awards/winner-1.avif?height=50&width=150",
    url: "https://profileprint.com",
  },
  {
    place: 2,
    thorpy: "/awards/trophy-2.svg",
    company: "DAGANGAN",
    logo: "/awards/winner-2.avif?height=50&width=150",
    url: "https://dagangan.com",
  },
  {
    place: 3,
    thorpy: "/awards/trophy-3.svg",
    company: "ACCREDIFY",
    logo: "/awards/winner-3.avif?height=50&width=150",
    url: "https://accredify.io",
  },
];

export function AwardsSection() {
  return (
    <section className=" text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={"Awards"} />

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <AwardCard key={award.place} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }) {
  const [_, setIsHovered] = useState(false);

  return (
    <Link href={award.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="bg-linear-to-tl from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 flex flex-col items-center justify-center h-full cursor-pointer"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Trophy icon */}
        <div className="mb-8 relative">
          <Image
            src={award.thorpy}
            alt={`${award.company} logo`}
            width={150}
            height={50}
          />
        </div>

        <div className="mt-4">
          <Image
            src={award.logo}
            alt={`${award.company} logo`}
            width={150}
            height={50}
          />
        </div>
      </motion.div>
    </Link>
  );
}
