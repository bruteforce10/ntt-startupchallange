import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import HeadingText from "./heading-text";
import { nameToSlug } from "@/utils/name-to-slug";

const LINKEDIN_URLS = {
  "Yasunori Kinebuchi": "https://www.linkedin.com/in/yasunorikinebuchi/",
  "Kazuhiro Mori": "https://www.linkedin.com/in/kzr-mori-2004i04/",
  "Yasuhiro Nishino": "https://www.linkedin.com/in/yasuhiro-nishino-35a0259b/",
  "Makiko Yamada": "https://www.linkedin.com/in/makikoyamada/",
};

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

      {LINKEDIN_URLS[speaker.fullName] ? (
        <a
          href={LINKEDIN_URLS[speaker.fullName]}
          target="_blank"
          rel="noreferrer"
          aria-label={`${speaker.fullName} LinkedIn profile`}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-white hover:bg-white/10"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
      ) : null}

      {speaker.profile ? (
        <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
          {speaker.profile}
        </p>
      ) : null}
    </div>
  );
}
