import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeading2026 } from "./section-heading";

// DOM order = rank (mobile stacks 1st, 2nd, 3rd); sm:order-* lays out the 2-1-3 podium.
const TOP_3_FINALISTS = [
  {
    place: "1st",
    name: "SatSure",
    src: "/top-3-2026/1st-satsure.webp",
    podiumOrder: "sm:order-2",
  },
  {
    place: "2nd",
    name: "Neurowyzr",
    src: "/top-3-2026/2nd-neurowyzr.webp",
    podiumOrder: "sm:order-1",
  },
  {
    place: "3rd",
    name: "OmniCard",
    src: "/top-3-2026/3rd-omnicard.webp",
    podiumOrder: "sm:order-3",
  },
];

export function Top3FinalistsSection2026() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeading2026
        subtitle="Grand Final Winners"
        title="Top 3 Finalists of NTT Startup Challenge 2026"
      />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#050C1F] px-5 py-10 shadow-2xl sm:px-6 md:px-10 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-3/4 w-2/3 -translate-x-1/2 rounded-full bg-blue-ntt/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-ntt-200/60 to-transparent"
        />

        <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 md:gap-4">
          {TOP_3_FINALISTS.map(({ place, name, src, podiumOrder }) => (
            <li
              key={place}
              className={cn("mx-auto w-full max-w-[260px] sm:max-w-none", podiumOrder)}
            >
              <Image
                src={src}
                alt={`${place} place: ${name}`}
                width={620}
                height={660}
                sizes="(min-width: 1152px) 360px, (min-width: 640px) 32vw, 260px"
                className="h-auto w-full transition-transform duration-500 ease-out hover:-translate-y-1.5"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
