import InitialPage from "@/components/pages/initial-page";
import { TeamSection } from "@/components/section-team";
import { NTT_TEAM_PROFILE, TEAM_PROFILE } from "@/constant/team-profile";
import Image from "next/image";
import React from "react";

const TeamPage = () => {
  return (
    <InitialPage>
      <Image
        src="/team/ntt/ntt-team.webp"
        width="3500"
        height="3500"
        alt="ntt-team"
        className="w-full  h-auto"
        quality={100}
      />
      <TeamSection title={"NTT Team"} pathImg={"ntt"} data={NTT_TEAM_PROFILE} />
      <Image
        src="/team/artique/artique-team.webp"
        width="3500"
        height="3500"
        alt="artique-team"
        className="w-full pt-16 md:pt-28 h-auto"
        quality={100}
      />
      <TeamSection
        title={"ArtiqueTeam"}
        pathImg={"artique"}
        data={TEAM_PROFILE}
      />
    </InitialPage>
  );
};

export default TeamPage;
