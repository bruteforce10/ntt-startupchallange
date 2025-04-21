import Hero from "@/components/hero";
import { ContentHero2025 } from "@/components/modules/content-hero-2025";
import CtaHero from "@/components/modules/cta-hero";
import { ListSection } from "@/components/modules/list-section";
import { NewsSection } from "@/components/news-section";
import InitialPage from "@/components/pages/initial-page";
import { SpeakersSection } from "@/components/section-awards";
import { CountdownSection } from "@/components/section-countdown";
import { FeedbackSection } from "@/components/section-feedback";
import { HistorySectionNew } from "@/components/section-history-new";
import NominateSectionSection from "@/components/section-nominate-award";
import SpeaksSection from "@/components/section-speaks";
import {
  COMUNITY_PARTNER_CONTENT,
  MAIN_PARTNER_CONTENT,
} from "@/constant/finalist-content";

export default function Home() {
  return (
    <InitialPage>
      <Hero
        videoUrl={"/bg-video-2025.webm"}
        classNameContainer={"sm:h-[calc(100vh-3.5rem)] max-sm:h-screen"}
        className={
          "flex-col flex items-center sm:h-[360px] max-sm:h-[255px]  mb-24 justify-between "
        }
      >
        <ContentHero2025 />
        <CtaHero />
      </Hero>
      <CountdownSection
        newEvent={"2025-05-19T00:00:00"}
        title={"Official Application Open in"}
      />
      <HistorySectionNew />
      <FeedbackSection />
      <NominateSectionSection />
      <SpeakersSection />
      <SpeaksSection />
      <ListSection
        title={"Partners"}
        items={Array.from(
          new Set([...Array(3)].map((_, i) => ({ id: i + 1, url: "" })))
        )}
        pathImg={"main-partner"}
      />
      <ListSection
        title={"Community Partners"}
        items={COMUNITY_PARTNER_CONTENT}
        pathImg={"community-partner"}
      />
      <NewsSection />
    </InitialPage>
  );
}
