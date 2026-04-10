import Image from "next/image";
import Link from "next/link";
import { SectionHeading2026 } from "./section-heading";

const INFO_SESSIONS = [
  {
    title: "Malaysia Info Session",
    href: "https://www.eventbrite.com/e/1986789688441?aff=oddtdtcreator",
    image: "/info-session/Infosession%20Malaysia.webp",
    alt: "NTT Startup Challenge Malaysia Info Session poster",
  },
  {
    title: "Vietnam Info Session",
    href: "https://www.eventbrite.com/e/1986785057590?aff=oddtdtcreator",
    image: "/info-session/Infosession%20Vietnam.webp",
    alt: "NTT Startup Challenge Vietnam Info Session poster",
  },
];

export function InfoSessionSection2026() {
  return (
    <section
      id="infosession"
      className="container mx-auto px-4 py-16 md:py-20 text-white"
    >
      <SectionHeading2026 title="Meet NTT Startup Challenge Team at Our Info Session" />

      <div className="grid gap-8 lg:grid-cols-2">
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
