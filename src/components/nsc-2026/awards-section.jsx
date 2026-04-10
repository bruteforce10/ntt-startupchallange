import Link from "next/link";
import Image from "next/image";
import { SectionHeading2026 } from "./section-heading";

export function AwardsSection2026() {
  const awards = [
    {
      place: "2nd Place Winner",
      image: "trophy-new-2.svg",
      order: 1, // Visual order (left)
    },
    {
      place: "1st PLACE",
      subtext: "",
      image: "trophy-new-1.svg",
      order: 2, // Visual order (center)
      isFirst: true,
    },
    {
      place: "3rd Place Winner",
      image: "trophy-new-3.svg",
      order: 3, // Visual order (right)
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 text-white text-center">
      <SectionHeading2026 title="Awards" />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-26 gap-8 items-end max-w-5xl mx-auto">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center p-8 rounded-3xl border ${
              award.isFirst
                ? "bg-gradient-to-b from-[#131E37] to-[#050C1F] border-blue-ntt-200/50 shadow-2xl relative order-first md:order-none z-10 scale-105 md:-translate-y-6"
                : "bg-[#050C1F]/60 border-white/5 order-none hover:bg-[#0A132C] transition-colors"
            }`}
          >
            {award.isFirst && (
              <div className="absolute -top-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                Winners
              </div>
            )}
            <div className="relative w-40 h-48 md:w-56 md:h-64 mb-8">
              <Image
                src={`/awards/${award.image}`}
                alt={award.place}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              />
            </div>
            <h3
              className={`${
                award.isFirst
                  ? "text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2"
                  : "text-xl font-bold text-gray-300"
              }`}
            >
              {award.place}
            </h3>
            {award.subtext && (
              <p className="text-4xl font-black text-yellow-500 mt-2">
                {award.subtext}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end mx-auto max-w-5xl">
        <Link
          href="/nsc-2025#winner"
          className="text-sm font-semibold text-blue-ntt-200 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ntt-200/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Check Last Year&apos;s Winners
        </Link>
      </div>
    </section>
  );
}
