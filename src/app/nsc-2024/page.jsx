import { AwardsSection } from "@/components/award-section";
import Hero from "@/components/hero";
import { ListSection } from "@/components/modules/list-section";
import { NewsSection } from "@/components/news-section";
import InitialPage from "@/components/pages/initial-page";
import { SpeakersSection } from "@/components/section-awards";
import { BannerSection } from "@/components/section-banner";
import { CountdownSection } from "@/components/section-countdown";
import { FeedbackSection } from "@/components/section-feedback";
import { HistorySection } from "@/components/section-history";
import SpeaksSection from "@/components/section-speaks";
import { VideoSection } from "@/components/section-video";
import {
  COMUNITY_PARTNER_CONTENT,
  FINALIST_CONTENT,
  MAIN_PARTNER_CONTENT,
} from "@/constant/finalist-content";
import CtaHero from "@/components/modules/cta-hero";

export default function NSC2024Page() {
  return (
    <InitialPage>
      <Hero videoUrl={"/bg-video-alt.webm"}>
        <h1 className=" text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-6xl ">
          Build Connections That Matter – Your Next Leap Starts at NTT Startup
          Challenge
        </h1>
        <CtaHero />
      </Hero>
      <CountdownSection
        newEvent={true}
        title={"The Next NTT Startup Challenge is"}
      />
      <VideoSection />
      <HistorySection />
      <BannerSection />
      <FeedbackSection />
      <AwardsSection />
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
    </InitialPage>
  );
}
