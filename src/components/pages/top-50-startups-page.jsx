import Image from "next/image";
import InitialPage from "@/components/pages/initial-page";

function normalizeUrl(url) {
  if (!url) return null;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function Top50StartupsPage({ finalists }) {
  return (
    <InitialPage>
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center md:mb-16">
          <div className="mb-6 flex justify-center md:mb-8">
            <Image
              src="/top-50.webp"
              alt={`Top 50 Startups of NTT Startup Challenge ${finalists.year}`}
              width={1000}
              height={1000}
              priority
              className="mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50%"
            />
          </div>

          <h1 className="mb-4 px-4 text-xl font-bold text-white sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
            {finalists.title}
          </h1>
          <p className="mx-auto max-w-4xl px-4 text-base leading-relaxed text-blue-100 sm:text-lg md:text-xl">
            {finalists.description}
          </p>
        </header>

        <div className="mb-16 space-y-12">
          {finalists.startups.map((startup) => {
            const websiteUrl = normalizeUrl(startup.url);
            const logo = (
              <Image
                src={
                  startup.image ||
                  `${finalists.imageDirectory}/${startup.slug}.png`
                }
                alt={`${startup.name} logo`}
                width={260}
                height={260}
                className="rounded-lg object-contain"
              />
            );

            return (
              <article key={`${finalists.year}-${startup.slug}`}>
                <div className="flex gap-4 max-md:flex-col max-md:items-center max-md:justify-center md:items-start md:gap-12">
                  <div className="flex-shrink-0">
                    {websiteUrl ? (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${startup.name} website`}
                        className="block rounded-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-ntt-200"
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </div>

                  <div className="min-w-0 flex-1 max-md:text-center">
                    <h2 className="mb-2 text-xl font-bold text-white md:mb-3 md:text-2xl">
                      {startup.name}
                    </h2>
                    <div className="mb-4 h-1 w-12 bg-blue-400 max-md:mx-auto md:mb-5" />
                    <p className="whitespace-pre-line text-sm leading-relaxed text-blue-100 md:text-base">
                      {startup.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </InitialPage>
  );
}
