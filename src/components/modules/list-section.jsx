import EachUtils from "@/utils/eachUtils";
import Image from "next/image";
import Link from "next/link";
import HeadingText from "../heading-text";
import { SectionHeading2026 } from "../nsc-2026/section-heading";

export function ListSection({
  title,
  items = [],
  pathImg,
  id,
  formatImg = ".webp",
  is2026 = false,
  subtitle,
  emptyLabel,
}) {
  return (
    <section id={id} className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {is2026 ? (
          <SectionHeading2026 title={title} subtitle={subtitle} />
        ) : (
          <HeadingText text={title} />
        )}

        {items.length > 0 ? (
          <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">
            <EachUtils
              of={items}
              render={(item) => (
                <Link
                  key={item.id}
                  href={item.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center group transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={item.image || `/${pathImg}/${item.id}${formatImg}`}
                    width={150}
                    height={150}
                    alt={`${item.name} logo`}
                    className="object-contain brightness-100 filter"
                  />
                </Link>
              )}
            />
          </div>
        ) : (
          <div className="flex min-h-40 items-center justify-center w-fit px-8 mx-auto rounded-3xl border border-white/8 bg-white/[0.02]">
            <p className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase tracking-[0.18em] text-blue-ntt-200">
              {emptyLabel || "COMING SOON"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
