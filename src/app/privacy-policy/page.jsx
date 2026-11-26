import InitialPage from "@/components/pages/initial-page";
import { FaEnvelope } from "react-icons/fa6";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How NTT Startup Challenge collects, uses, stores, and protects your personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "October 14th 2026";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "NTT Startup Challenge respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect personal data in connection with all NTT Startup Challenge activities, including startup applications, program participation, event registration and attendance, networking activities, and related communications.",
    ],
  },
  {
    id: "personal-data-we-collect",
    title: "Personal Data We Collect",
    paragraphs: [
      "When you complete and submit the event registration form, we may collect the following information:",
    ],
    list: [
      "Full name",
      "Email address",
      "Company or organization name",
      "Job title or professional role",
      "Country or region",
      "Startup profile and business information submitted as part of an application",
      "Pitch decks and other application materials",
      "Event registration and participation details",
      "Other information specifically requested through official NTT Startup Challenge forms or registration channels",
    ],
    columns: true,
    note: "Please only provide information requested for event registration and participation.",
  },
  {
    id: "how-we-use-your-personal-data",
    title: "How We Use Your Personal Data",
    paragraphs: [
      "We collect and process your personal data for the following purposes:",
    ],
    list: [
      "To receive, review, and manage startup applications.",
      "To administer and coordinate NTT Startup Challenge activities, including selection processes, program participation, and events.",
      "To manage event registrations, attendance, and related communications.",
      "To facilitate networking and potential connections among startups, NTT Group Companies, corporate venture capital firms, and relevant ecosystem stakeholders.",
      "To provide updates about NTT Startup Challenge activities, opportunities, and related programs.",
      "To support program evaluation, reporting, and improvement.",
      "To fulfill applicable legal and administrative obligations.",
    ],
    note: "Your personal data will not be used for unrelated marketing communications unless we have obtained the appropriate consent or otherwise have a valid legal basis to do so.",
  },
  {
    id: "how-we-collect-your-personal-data",
    title: "How We Collect Your Personal Data",
    paragraphs: [
      "We collect personal data directly from you when you complete and submit the registration form linked through our website or other official NTT Startup Challenge registration channels.",
    ],
  },
  {
    id: "data-sharing-and-disclosure",
    title: "Data Sharing and Disclosure",
    paragraphs: [
      "Your personal data may be accessed by authorized members of the NTT Startup Challenge team and relevant service providers who support event registration, communications, data management, and event operations.",
      "We will only share personal data when necessary for the purposes described in this policy, with appropriate safeguards, or when required or permitted by applicable law.",
    ],
    note: "We do not sell your personal data to third parties.",
  },
  {
    id: "data-storage-and-retention",
    title: "Data Storage and Retention",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or misuse.",
      "Your personal data will be retained in our database to manage your participation across all NTT Startup Challenge activities and for future updates, networking, and program communications. We do not sell or share your data with unauthorized third parties. You may request the review, update, or removal of your personal data at any time by contacting us.",
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    paragraphs: ["Subject to applicable laws, you may have the right to:"],
    list: [
      "Request access to your personal data.",
      "Request corrections to inaccurate or incomplete information.",
      "Request deletion of your personal data or restriction of its processing, where applicable.",
      "Withdraw consent where processing is based on consent.",
      "Raise questions or concerns about how your personal data is handled.",
    ],
    after:
      "To exercise these rights, please contact us using the details provided below. We may need to verify your identity before processing your request.",
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in NTT Startup Challenge activities, data processing practices, or applicable legal requirements. Any updates will be published on this page, together with the revised “Last Updated” date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <InitialPage>
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Legal
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-4 h-1 w-24 bg-blue-500" />
        <p className="mt-6 text-sm text-gray-400">
          Last Updated: <span className="text-gray-200">{LAST_UPDATED}</span>
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 rounded-lg bg-[#0A1428] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                On this page
              </p>
              <ol className="space-y-3 text-sm">
                {[...SECTIONS, { id: "contact-us", title: "Contact Us" }].map(
                  (section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-3 text-gray-300 transition-colors hover:text-blue-400"
                      >
                        <span className="w-5 shrink-0 tabular-nums text-blue-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  )
                )}
              </ol>
            </nav>
          </aside>

          <div className="max-w-3xl space-y-12">
            {SECTIONS.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-white/10 pb-12"
              >
                <div className="mb-5 flex items-baseline gap-4">
                  <span className="text-sm font-semibold tabular-nums text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 leading-relaxed text-gray-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.list && (
                    <ul
                      className={
                        section.columns
                          ? "grid gap-3 sm:grid-cols-2"
                          : "space-y-3"
                      }
                    >
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-lg bg-[#0A1428] px-4 py-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after && <p>{section.after}</p>}

                  {section.note && (
                    <p className="border-l-2 border-blue-500 pl-4 text-gray-200">
                      {section.note}
                    </p>
                  )}
                </div>
              </article>
            ))}

            <article id="contact-us" className="scroll-mt-28">
              <div className="mb-5 flex items-baseline gap-4">
                <span className="text-sm font-semibold tabular-nums text-blue-400">
                  {String(SECTIONS.length + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-bold md:text-3xl">Contact Us</h2>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                If you have any questions, requests, or concerns regarding this
                Privacy Policy or the handling of your personal data, please
                contact:
              </p>
              <div className="rounded-lg border border-blue-500/30 bg-[#0A1428] p-6">
                <p className="text-lg font-semibold">NTT Startup Challenge Team</p>
                <a
                  href="mailto:info@ntt-startupchallenge.com"
                  className="mt-3 inline-flex items-center gap-3 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <FaEnvelope className="h-5 w-5 shrink-0" />
                  info@ntt-startupchallenge.com
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </InitialPage>
  );
}
