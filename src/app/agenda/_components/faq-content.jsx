"use client";
import HeadingText from "@/components/heading-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqItems = [
    {
      question: "What will top 3 startup receive?",
      answer:
        "In addition to a cash prize, the top three startups will gain privileged access to collaboration opportunities with the NTT Group, including potential investment, joint business development, access to NTT’s extensive global network, and participation in the Venture Client model to accelerate growth and market validation.",
    },
    {
      question: "How many startups will be selected for the final stage?",
      answer: "We aim to choose the top 10 startups from all submissions.",
    },
    {
      question: "What type of startups can apply?",
      answer:
        "Any startup company operating a business in Southeast Asia, Taiwan, Hong Kong, South Korea, India, and Australia is eligible to apply. Please note that startup must be a legal entity, not just an idea.",
    },
    {
      question: "Who will evaluate the applications?",
      answer:
        "The evaluation committee, composed of venture capitalists, executives from NTT Group, and other industry experts, will assess the applications.",
    },
  ];

  return (
    <section id="faq" className=" py-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={"FAQ"} />

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-lg overflow-hidden bg-[#0A1428]"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#0d1b30] text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
