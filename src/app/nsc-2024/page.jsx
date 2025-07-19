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
import HeadingText from "@/components/heading-text";
import Image from "next/image";

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
      <SpeakersSection comingSoon={false} />
      <SpeaksSection />
      <section className="pt-16 md:pt-28">
        <div className="container mx-auto px-4 space-y-8">
          <HeadingText text={"Partners"} />
          <Image
            src={"/partner-nsc-2024.png"}
            width={1920}
            height={1080}
            alt="Partners"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="pt-16 md:pt-28">
        <div className="container mx-auto px-4 space-y-8">
          <HeadingText text={"Community Partners"} />
          <Image
            src={"/community-nsc-2024.png"}
            width={1920}
            height={1080}
            alt="Partners"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <NewsSection />
    </InitialPage>
  );
}
