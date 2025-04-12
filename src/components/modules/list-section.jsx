import EachUtils from "@/utils/eachUtils";
import Image from "next/image";
import Link from "next/link";
import HeadingText from "../heading-text";

export function ListSection({ title, items, pathImg }) {
  return (
    <section className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={title} />

        <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">
          <EachUtils
            of={items}
            render={(item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={`/${pathImg}/${item.id}.webp`}
                  width={180}
                  height={180}
                  alt={`${item.name} logo`}
                  className="object-contain brightness-100 filter"
                />
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  );
}
