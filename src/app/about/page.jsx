import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import { AboutNttVideoSection } from "./_components/about-ntt-video";
import NttGroup from "./_components/ntt-group";
import { NttStatsGrid } from "./_components/ntt-stats-grid";
import { InnovationTabs } from "./_components/innovation-tabs";

export default function About() {
  return (
    <InitialPage>
      <ContentHeroInfoPage
        title={
          "Expand Your Network, Capitalize on Unique Opportunities with NTT Startup Challenge"
        }
      />
      <AboutNttVideoSection />
      <NttGroup />
      <NttStatsGrid />
      <InnovationTabs />
    </InitialPage>
  );
}
