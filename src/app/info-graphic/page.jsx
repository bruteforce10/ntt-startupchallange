import InitialPage from "@/components/pages/initial-page";
import Image from "next/image";
import React from "react";

export default function InfoGraphicPage() {
  return (
    <InitialPage>
      <Image
        src={"/info-graphic.webp"}
        alt="Info Graphic"
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        quality={100}
      />
    </InitialPage>
  );
}
