import Image from "next/image";
import { SectionHeading2026 } from "@/components/nsc-2026/section-heading";

export function VenuePartner() {
  return (
    <section id="venue-partner" className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <SectionHeading2026
          title="Venue & Program Partner – EXEO Global"
          subtitle="Partnership Day"
          className="text-balance"
        />

        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[9fr_16fr] md:gap-4">
            {/* Speaker */}
            <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs md:max-w-none">
              <div className="relative aspect-[7/10] overflow-hidden">
                <Image
                  src="/swee-young.webp"
                  alt="Mr Lim Swee Yong"
                  width={1269}
                  height={1692}
                  sizes="500px"
                  className="absolute left-[-19.6%] top-0 h-auto w-[132.5%] max-w-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_80%)]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 text-center md:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Mr Lim Swee Yong
                </h3>
                <p className="mt-2 text-sm lg:mt-3 lg:text-lg leading-snug text-blue-400">
                  Chief Executive Officer
                  <br />
                  EXEO Innovation Fund Management
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="order-first mx-auto w-full max-w-[16rem] sm:max-w-xs md:order-none md:max-w-none">
              <Image
                src="/main-partner/7.webp"
                alt="EXEO Global logo"
                width={2640}
                height={1485}
                sizes="(min-width: 768px) 660px, 384px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-white md:mt-8 md:text-justify md:leading-snug">
            Mr Lim Swee Yong is the Chief Executive Officer of EXEO Innovation
            Fund Management Pte. Ltd., the corporate venture capital and fund
            management arm of EXEO Global. With a legal background and over a
            decade of experience in investment management, and corporate
            strategy, he previously held senior leadership roles across
            institutional asset management and corporate offices—including
            Fullerton Fund Management Company and DeClout—alongside holding
            various directorships and advisory positions across early-stage and
            growth technology entities.
          </p>
        </div>
      </div>
    </section>
  );
}
