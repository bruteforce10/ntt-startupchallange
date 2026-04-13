import { Nsc2026PageContent } from "@/components/pages/nsc-2026-page";

export const metadata = {
  title: "NTT Startup Challenge 2026",
  description: "Join the NTT Startup Challenge 2026 - Your next leap starts here.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <Nsc2026PageContent />;
}
