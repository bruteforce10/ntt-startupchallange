import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import NominateSectionSection from "@/components/section-nominate-award";
import React from "react";
import { IndustryCarousel } from "./_components/industry-courosel";
import { StartupBenefitsSection } from "./_components/startup-benefit-section";
import { WhyAttendSection } from "./_components/why-attend-section";

export const metadata = {
  title: "Why Attend",
  description:
    "Generate valuable leads: Utilize the event to connect with startups, government entities, and enterprises for potential lead generation. ntt startup challenge.",
};

const WhyAttendPage = () => {
  return (
    <InitialPage>
      <ContentHeroInfoPage
        title={
          "Expand Your Network, Capitalize on Unique Opportunities with NTT Startup Challenge"
        }
      />
      <IndustryCarousel />
      <NominateSectionSection />
      <StartupBenefitsSection />
      <WhyAttendSection />
    </InitialPage>
  );
};

export default WhyAttendPage;
