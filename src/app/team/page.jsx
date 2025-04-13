import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import { SpeakersSection } from "@/components/section-awards";
import React from "react";

const TeamPage = () => {
  return (
    <InitialPage>
      <ContentHeroInfoPage
        title={
          "Expand Your Network, Capitalize on Unique Opportunities with NTT Startup Challenge"
        }
      />
      <SpeakersSection />
    </InitialPage>
  );
};

export default TeamPage;
