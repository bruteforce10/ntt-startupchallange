import Image from "next/image";
import HeadingText from "./heading-text";
import { SPEAKERS_CONTENT } from "@/constant/speaks-content";

export function SpeakersSection() {
  return (
    <section className=" text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <HeadingText text={"Speakers, Judges & VIPs"} />

        {/* Speakers grid */}
        <Image
          src={"/coming-soon.png"}
          width={500}
          height={500}
          className="w-full h-auto"
          alt="coming-soon"
          quality={100}
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {SPEAKERS_CONTENT.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

// Speaker card component
function SpeakerCard({ speaker }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Profile image */}
      <div className="mb-4 rounded-full overflow-hidden w-48 h-48 relative">
        <Image
          src={`/speakers/${speaker.id}.webp`}
          alt={speaker.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name and organization */}
      <h3 className="text-2xl font-bold mt-2">{speaker.name}</h3>
      <p className="text-blue-400 mb-4">{speaker.organization}</p>

      {/* Bio */}
      <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
        {speaker.bio}
      </p>
    </div>
  );
}
