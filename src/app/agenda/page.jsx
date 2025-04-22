import ContentHeroInfoPage from "@/components/modules/content-hero-info-page";
import InitialPage from "@/components/pages/initial-page";
import { EventPromotion } from "./_components/event-promotion";
import { EventSchedule } from "./_components/event-schedule";
import { ListSection } from "@/components/modules/list-section";
import { COMUNITY_PARTNER_CONTENT } from "@/constant/finalist-content";
import { NttGroupCompanies } from "./_components/ntt-group-companies";
import { FaqSection } from "./_components/faq-content";

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
      <EventPromotion />
      <EventSchedule />
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
      <NttGroupCompanies />
      <FaqSection />
    </InitialPage>
  );
}
