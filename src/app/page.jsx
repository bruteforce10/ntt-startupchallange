import { AwardsSection } from "@/components/award-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { ContentHero2025 } from "@/components/modules/content-hero-2025";
import CtaHero from "@/components/modules/cta-hero";
import { ListSection } from "@/components/modules/list-section";
import { Navbar } from "@/components/navbar";
import { NewsSection } from "@/components/news-section";
import { SpeakersSection } from "@/components/section-awards";
import { CountdownSection } from "@/components/section-countdown";
import { FeedbackSection } from "@/components/section-feedback";
import { HistorySectionNew } from "@/components/section-history-new";
import SpeaksSection from "@/components/section-speaks";
import {
  COMUNITY_PARTNER_CONTENT,
  FINALIST_CONTENT,
  MAIN_PARTNER_CONTENT,
} from "@/constant/finalist-content";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute -right-[100px] -top-[300px] h-[800px] w-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[400px] -left-[100px] h-[800px] w-[800px] bg-blue-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
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
          title={"Official Application Close in"}
        />
        <HistorySectionNew />
        <FeedbackSection />
        <ListSection
          title={"Top Finalist NSC 2024"}
          items={FINALIST_CONTENT}
          pathImg={"top-finalist"}
        />
        <SpeakersSection />
        <SpeaksSection />
        <ListSection
          title={"Partners"}
          items={MAIN_PARTNER_CONTENT}
          pathImg={"main-partner"}
        />
        <ListSection
          title={"Community Partners"}
          items={COMUNITY_PARTNER_CONTENT}
          pathImg={"community-partner"}
        />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
}
