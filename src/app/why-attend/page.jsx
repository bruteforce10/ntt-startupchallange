import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import NominateSectionSection from "@/components/section-nominate-award";
import React from "react";
import { IndustryCarousel } from "./_components/industry-courosel";
import { StartupBenefitsSection } from "./_components/startup-benefit-section";

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
    </InitialPage>
  );
};

export default WhyAttendPage;
