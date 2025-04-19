"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";

const sections = [
  {
    id: "startup",
    title: "Startup",
    image: "/why-attend/startup.avif",
    points: [
      {
        title: "Established in 2016 by NTT Communications:",
        description:
          "NSC is dedicated to nurturing the Startup Ecosystem in Southeast Asia.",
      },
      {
        title: "Join a network of success:",
        description:
          "Over 4,000 startups have applied to collaborate with us, and more than 50 have embarked on journeys of business development and commercialization.",
      },
      {
        title: "An unparalleled opportunity:",
        description:
          "This year, NTT Holdings, along with NTT Group companies, are hosting the event to intensify our contributions to the ecosystem.",
      },
      {
        title: "Unlock potential collaborations:",
        description:
          "NTT is ready to share its vast assets to foster collaboration within SEA and/or Japan.",
      },
    ],
  },
  {
    id: "investors",
    title: "Investors",
    image: "/why-attend/investors.avif",
    points: [
      {
        title: "Exclusive access to top talent:",
        description:
          "Select from 10 finalists out of hundreds startup applications across SEA.",
      },
      {
        title: "Investor Booth:",
        description: "A dedicated space for meaningful meetings with startups.",
      },
      {
        title: "Strategic connections:",
        description:
          "Engage with executives from NTT Group companies for potential collaborations.",
      },
    ],
  },
  {
    id: "attendees",
    title: "Attendees",
    image: "/why-attend/attendees.avif",
    points: [
      {
        title: "A landmark event:",
        description:
          "NSC stands as one of the most historic startup events in SEA, hosted by an enterprise, attracting over 7,000 participants since 2016.",
      },
      {
        title: "Discover transformative startups:",
        description: "Encounter startups from SEA poised to reshape the world.",
      },
      {
        title: "Network with key players:",
        description:
          "Seize the chance to connect with startups, investors, government officials, and NTT during our networking sessions.",
      },
    ],
  },
  {
    id: "media",
    title: "Media",
    image: "/why-attend/media.avif",
    points: [
      {
        title: "A historic gathering:",
        description:
          "NSC, hosted by NTT Communications and NTT Group companies since 2016, has consistently drawn an audience of 2,800, marking it as a key event for startups in SEA.",
      },
      {
        title: "A pioneering initiative:",
        description:
          "NSC 2024 represents the first event co-hosted by NTT Communications and NTT Group companies, aiming to significantly enhance our presence.",
      },
      {
        title: "Spotlight on innovation:",
        description:
          "NTT Group companies are set to focus on forging new businesses with startups across various sectors in SEA, including smart city, fintech, agritech, and more.",
      },
    ],
  },
  {
    id: "partners",
    title: "Partners",
    image: "/why-attend/partners.avif",
    points: [
      {
        title: "Collaborate with industry leaders:",
        description:
          "Since 2016, we have worked with over 300 partners to foster the Startup Ecosystem in SEA.",
      },
      {
        title: "Elevate your brand:",
        description:
          "The Partner Booth offers a prime opportunity to boost your business's visibility within the ecosystem.",
      },
      {
        title: "Generate valuable leads:",
        description:
          "Utilize the event to connect with startups, government entities, and enterprises for potential lead generation.",
      },
    ],
  },
];

export function WhyAttendSection() {
  const [activeSection, setActiveSection] = useState("startup");

  const sectionRefs = useRef(sections.map(() => useRef(null)));

  const sectionInView = sectionRefs.current.map((ref) => {
    const { inView } = useInView({
      ref: ref,
      threshold: 0.3,
      triggerOnce: false,
    });
    return inView;
  });

  useEffect(() => {
    const visibleSectionIndex = sectionInView.findIndex((inView) => inView);
    if (visibleSectionIndex !== -1) {
      setActiveSection(sections[visibleSectionIndex].id);
    }
  }, [sectionInView]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Attend
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sticky sidebar navigation */}
          <div className="md:w-1/4 md:pr-8 max-lg:hidden">
            <div className="sticky top-20 pt-20">
              <nav className="space-y-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left block w-full py-2 transition-all duration-200 ${
                      activeSection === section.id || sectionInView
                        ? "text-white font-bold"
                        : "text-gray-400 hover:text-white hover:font-bold"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4 space-y-24">
            {sections.map((section, index) => {
              return (
                <div
                  key={section.id}
                  id={section.id}
                  ref={sectionRefs.current[index]}
                  className="scroll-mt-32"
                >
                  <div className="relative h-32 sm:h-[200px] md:h-[200px] mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={section.image}
                      alt={`${section.title} section`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-blue-600 rounded-sm p-1">
                            <Plus className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-white">
                            {point.title}
                          </span>{" "}
                          <span className="text-gray-300">
                            {point.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
