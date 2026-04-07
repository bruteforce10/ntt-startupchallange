"use client";
import Image from "next/image";
import Link from "next/link";
import { ListSection } from "./modules/list-section";
import { TOP_STARTUPS_10 } from "@/constant/top-startup";
import { CountdownTimer } from "./ui/countdown-timer";

export function CountdownSection({ newEvent, title }) {
  const countdownDate = new Date(newEvent);

  return (
    <section className="pt-16 md:pt-28">
      <div className="container mx-auto px-4 space-y-8 lg:space-y-12">
        {/* <h2 className="text-3xl lg:text-5xl max-w-5xl leading-relaxed mx-auto font-medium text-center bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text">
          {title}
        </h2>
        <div className="bg-linear-to-bl from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
          <CountdownTimer date={countdownDate} />
        </div> */}

        <ListSection
          title={"Top 10 Finalists of NTT Startup Challenge 2025"}
          items={TOP_STARTUPS_10}
          pathImg={"top-50-startup"}
          formatImg={".png"}
        />

        <Link
          href="/top-20-startup-of-ntt-challange"
          className="block mt-32 w-full "
        >
          <Image
            src="/cover-startup-20.webp"
            alt="Top 20 Startup of NTT Startup Challenge 2025"
            width={1000}
            height={1000}
            className="mx-auto"
          />
        </Link>

        <Link href="/top-50-startup-of-ntt-challange" className="block w-full ">
          <Image
            src="/cover-startup-50.webp"
            alt="Top 50 Startup of NTT Startup Challenge 2025"
            width={1000}
            height={1000}
            className="mx-auto"
          />
        </Link>
      </div>
    </section>
  );
}
