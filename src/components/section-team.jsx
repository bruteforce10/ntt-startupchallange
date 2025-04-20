import Image from "next/image";
import HeadingText from "./heading-text";
import { nameToSlug } from "@/utils/name-to-slug";

export function TeamSection({ data, title, pathImg }) {
  return (
    <section className=" text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {data.map((speaker) => (
            <TeamCard
              key={speaker.fullName}
              speaker={speaker}
              pathImg={pathImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ speaker, pathImg }) {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <div className=" rounded-full overflow-hidden w-48 h-48 relative">
        <Image
          src={`/team/${pathImg}/${nameToSlug(speaker.fullName)}.webp`}
          alt={speaker.fullName}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold mt-2">{speaker.fullName}</h3>

      <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
        {speaker.profile}
      </p>
    </div>
  );
}
