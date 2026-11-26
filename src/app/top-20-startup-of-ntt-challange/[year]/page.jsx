import { notFound } from "next/navigation";
import { TopStartupsGridPage } from "@/components/pages/top-startups-grid-page";
import { TOP_20_STARTUPS_BY_YEAR } from "@/constant/top-startup";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TOP_20_STARTUPS_BY_YEAR).map((year) => ({ year }));
}

export async function generateMetadata({ params }) {
  const { year } = await params;
  const finalists = TOP_20_STARTUPS_BY_YEAR[year];

  if (!finalists) return {};

  return {
    title: finalists.title,
    description: finalists.description,
    alternates: {
      canonical: `/top-20-startup-of-ntt-challange/${year}`,
    },
  };
}

export default async function Top20StartupsByYearPage({ params }) {
  const { year } = await params;
  const finalists = TOP_20_STARTUPS_BY_YEAR[year];

  if (!finalists) notFound();

  return <TopStartupsGridPage finalists={finalists} />;
}
