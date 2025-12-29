import InitialPage from "@/components/pages/initial-page";
import Image from "next/image";

export default async function InfographicsPage({ searchParams }) {
  const year = searchParams?.year || "2025";
  const imagePath = `/infographic/${year}.webp`;

  return (
    <InitialPage>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Image
          src={imagePath}
          alt={`Infographics ${year}`}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
          unoptimized
        />
      </div>
    </InitialPage>
  );
}
