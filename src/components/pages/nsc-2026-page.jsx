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
import { SPEAKERS_CONTENT, JUDGES_CONTENT } from "@/constant/speaks-content";
import { NewsSection } from "@/components/news-section";

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
      <HistorySection2026 />
      <FeedbackSection2026 />
      <AwardsSection2026 />
      <PersonCarouselSection2026
        title="Past Speakers"
        subtitle="CURRENT PANEL"
        items={SPEAKERS_CONTENT}
      />
      <PersonCarouselSection2026
        title="Past Judges"
        subtitle="EXPERT PANEL"
        items={JUDGES_CONTENT}
      />
      <InfoSessionSection2026 />
      <SpeaksSection is2026={true} />
      <NewsSection is2026 />
    </InitialPage>
  );
}
