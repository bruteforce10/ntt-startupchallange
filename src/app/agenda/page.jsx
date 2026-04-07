import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import { ListSection } from "@/components/modules/list-section";
import { PARTNER_CONTENT_2026 } from "@/constant/finalist-content";
import { NttGroupCompanies } from "./_components/ntt-group-companies";
import { FaqSection } from "./_components/faq-content";
import { ComingSoonSection2026 } from "@/components/nsc-2026/coming-soon-section";

export const metadata = {
  title: "Agenda",
  description:
    "Expand Your Network, Capitalize on Unique Opportunities with NTT Startup Challenge",
};

export default function About() {
  return (
    <InitialPage>
      <ContentHeroInfoPage
        title={
          <span>
            Navigate Success: <br />
            Explore Our Comprehensive Agenda
          </span>
        }
      />
      <ComingSoonSection2026 />
      {/* <EventPromotion />
      <EventSchedule /> */}
      <ListSection
        title={"Sponsors"}
        subtitle={"PARTNERSHIP"}
        items={[]}
        is2026
        emptyLabel={"COMING SOON"}
      />
      <ListSection
        title={"Community Partners"}
        subtitle={"ECOSYSTEM"}
        items={PARTNER_CONTENT_2026}
        pathImg={"community-partner/2026"}
        is2026
      />
      <NttGroupCompanies />
      <FaqSection />
    </InitialPage>
  );
}
