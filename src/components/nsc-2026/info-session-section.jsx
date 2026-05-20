import Image from "next/image";
import Link from "next/link";
import { SectionHeading2026 } from "./section-heading";

const INFO_SESSIONS = [
  {
    title: "Vietnam Info Session",
    href: "https://www.eventbrite.hk/e/ntt-startup-challenge-2026-info-session-hcmc-tickets-1986785057590?aff=oddtdtcreator",
    image: "/info-session/infosession-vietnam.webp",
    alt: "NTT Startup Challenge Vietnam Info Session poster",
  },
  {
    title: "Final Day NTT Startup Challenge 2026",
    href: "https://www.eventbrite.hk/e/final-day-ntt-startup-challenge-2026-tickets-1986790310301?aff=oddtdtcreator",
    image: "/info-session/final-day-ntt-startup-challange-day.webp",
    alt: "NTT Startup Challenge 2026 Final Day poster",
  },
];

export function InfoSessionSection2026() {
  return (
    <section
      id="infosession"
      className="container mx-auto px-4 py-16 md:py-20 text-white"
    >
      <SectionHeading2026 title="Meet Us at NTT Startup Challenge Offline Events" />

      <div className="grid gap-8 md:grid-cols-2">
        {INFO_SESSIONS.map((session) => (
          <Link
            key={session.title}
            href={session.href}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#050C1F] shadow-[0_30px_80px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ntt-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={session.image}
                alt={session.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={session.title.includes("Vietnam")}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/45" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 to-transparent" />
          </Link>
        ))}
      </div>
    </section>
  );
}
