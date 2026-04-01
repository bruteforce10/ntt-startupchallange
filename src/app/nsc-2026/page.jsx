import InitialPage from "@/components/pages/initial-page";
import Hero from "@/components/hero";
import { HeroContent2026 } from "@/components/nsc-2026/hero-content";
import { HistorySection2026 } from "@/components/nsc-2026/history-section";
import { ComingSoonSection2026 } from "@/components/nsc-2026/coming-soon-section";
import { FeedbackSection2026 } from "@/components/nsc-2026/feedback-section";
import { AwardsSection2026 } from "@/components/nsc-2026/awards-section";
import { PersonCarouselSection2026 } from "@/components/nsc-2026/person-carousel-section";
import SpeaksSection from "@/components/section-speaks";
import { SPEAKERS_CONTENT, JUDGES_CONTENT } from "@/constant/speaks-content";
import { NewsSection } from "@/components/news-section";

export const metadata = {
  title: "NTT Startup Challenge 2026",
  description: "Join the NTT Startup Challenge 2026 - Your next leap starts here.",
};

export default function Nsc2026Page() {
  return (
    <InitialPage>
      <Hero
        videoUrl={"/bg-video-2026.mp4"}
        classNameContainer={"min-h-screen pb-8"}
        className={"flex-col flex items-center justify-between"}
      >
        <HeroContent2026 />
      </Hero>
      <ComingSoonSection2026 />
      <HistorySection2026 />
      <FeedbackSection2026 />
      <AwardsSection2026 />
      <PersonCarouselSection2026
        title="Speakers"
        subtitle="CURRENT PANEL"
        items={SPEAKERS_CONTENT}
      />
      <PersonCarouselSection2026
        title="Judges"
        subtitle="EXPERT PANEL"
        items={JUDGES_CONTENT}
      />
      <SpeaksSection is2026={true} />
      <NewsSection />
    </InitialPage>
  );
}
