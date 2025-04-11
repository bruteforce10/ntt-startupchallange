import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { BannerSection } from "@/components/section-banner";
import { CountdownSection } from "@/components/section-countdown";
import { FeedbackSection } from "@/components/section-feedback";
import { HistorySection } from "@/components/section-history";
import { VideoSection } from "@/components/section-video";

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
        <Hero />
        <CountdownSection />
        <VideoSection />
        <HistorySection />
        <BannerSection />
        <FeedbackSection />
        <Footer />
      </div>
    </div>
  );
}
