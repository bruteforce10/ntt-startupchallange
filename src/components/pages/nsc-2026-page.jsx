import Image from "next/image";
import Link from "next/link";
import InitialPage from "@/components/pages/initial-page";
import Hero from "@/components/hero";
import { HeroContent2026 } from "@/components/nsc-2026/hero-content";
import { HistorySection2026 } from "@/components/nsc-2026/history-section";
import { ComingSoonSection2026 } from "@/components/nsc-2026/coming-soon-section";
import { FeedbackSection2026 } from "@/components/nsc-2026/feedback-section";
import { AwardsSection2026 } from "@/components/nsc-2026/awards-section";
import { PersonCarouselSection2026 } from "@/components/nsc-2026/person-carousel-section";
import { InfoSessionSection2026 } from "@/components/nsc-2026/info-session-section";
import SpeaksSection from "@/components/section-speaks";
import {
  SPEAKERS_JUDGES_CONTENT,
  SPEAKER_JUDGES_CONTENT_2026,
} from "@/constant/speaks-content";
import { NewsSection } from "@/components/news-section";
import { ListSection } from "@/components/modules/list-section";
import { PARTNER_CONTENT_2026 } from "@/constant/finalist-content";
import SectionCoverLink from "@/components/section-cover-link";
import { PastSpeakersJudgesDialog } from "@/components/nsc-2026/past-speakers-judges-dialog";
import { VenuePartner } from "@/components/nsc-2026/venue-partner";

export function Nsc2026PageContent() {
  return (
    <InitialPage>
      <Hero
        videoUrl={"/bg-video-2025.webm"}
        classNameContainer={"min-h-screen pb-8"}
        className={"flex-col flex items-center justify-between"}
      >
        <HeroContent2026 />
      </Hero>
      <ComingSoonSection2026 />
      <section className="container mx-auto px-4">
        <Link
          href="/top-20-startup-of-ntt-challange/2026"
          aria-label="View the Top 20 Startups of NTT Startup Challenge 2026"
          className="block rounded-2xl transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-ntt-200"
        >
          <Image
            src="/cover-startup-20-2026.webp"
            alt="Top 20 Startups of NTT Startup Challenge 2026"
            width={1000}
            height={1000}
            className="mx-auto h-auto w-[94.4%] max-w-[60.4rem]"
          />
        </Link>
        <Link
          href="/top-50-startup-of-ntt-challange/2026"
          aria-label="View the Top 50 Finalists of NTT Startup Challenge 2026"
          className="block rounded-2xl transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-ntt-200"
        >
          <Image
            src="/cover-startup-50-2026.webp"
            alt="Top 50 Finalists of NTT Startup Challenge 2026"
            width={1000}
            height={1000}
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </Link>
      </section>
      <HistorySection2026 />
      <FeedbackSection2026 />
      <AwardsSection2026 />
      <PersonCarouselSection2026
        title="Meet the Speakers & Judges of 2026"
        items={SPEAKER_JUDGES_CONTENT_2026}
      />
      {/* <PersonCarouselSection2026
        title="Past Speakers And Judges"
        items={SPEAKERS_JUDGES_CONTENT}
      /> */}
      <PastSpeakersJudgesDialog />
      <InfoSessionSection2026 />
      <ListSection
        title={"Partners & Community Partners"}
        items={PARTNER_CONTENT_2026}
        pathImg={"community-partner/2026"}
        is2026
      />
      <VenuePartner />
      <SpeaksSection is2026={true} />
      <NewsSection is2026 />
      <SectionCoverLink
        title={"Watch The NTT Startup Challenge 2025 Recap Video"}
        subtitle={"VIDEO RECAP"}
        is2026
      />
    </InitialPage>
  );
}
