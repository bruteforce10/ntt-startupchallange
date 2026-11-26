import { notFound } from "next/navigation";
import { TopStartupsPage } from "@/components/pages/top-startups-page";
import { TOP_STARTUP_FINALISTS_BY_YEAR } from "@/constant/top-startup";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TOP_STARTUP_FINALISTS_BY_YEAR).map((year) => ({ year }));
}

export async function generateMetadata({ params }) {
  const { year } = await params;
  const finalists = TOP_STARTUP_FINALISTS_BY_YEAR[year];

  if (!finalists) return {};

  return {
    title: finalists.title,
    description: finalists.description,
    alternates: {
      canonical: `/top-50-startup-of-ntt-challange/${year}`,
    },
  };
}

export default async function Top50StartupsByYearPage({ params }) {
  const { year } = await params;
  const finalists = TOP_STARTUP_FINALISTS_BY_YEAR[year];

  if (!finalists) notFound();

  return <TopStartupsPage finalists={finalists} />;
}
