import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import EachUtils from "@/utils/eachUtils";
import { LIST_NAVBAR } from "@/constant/listNavbar";

const WHATSAPP_CONTACTS = [
  { label: "Customer Service 1", url: "https://wa.me/6281130804004" },
  { label: "Customer Service 2", url: "https://wa.me/85256954391" },
];

const EMAIL_CONTACTS = [
  { label: "info@ntt-startupchallenge.com", url: "mailto:info@ntt-startupchallenge.com" },
  { label: "partner@ntt-startupchallenge.com", url: "mailto:partner@ntt-startupchallenge.com" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/1HQU5URiCg/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/nttstartupchallenge",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/nttstartupchallenge",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@NTTStartupChallenge",
    Icon: FaYoutube,
  },
];

export function Footer() {
  return (
    <footer className=" text-white pt-28 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Image
            src="/logo-footer.webp"
            alt="NTT Logo"
            width={500}
            height={500}
            className="h-28 w-auto"
          />

          <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <EachUtils
              of={LIST_NAVBAR}
              render={(item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </Link>
              )}
            />
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-start gap-3">
              <FaWhatsapp className="h-6 w-6 shrink-0 text-blue-400" />
              <div className="flex flex-col gap-1">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="h-6 w-6 shrink-0 text-blue-400" />
              <div className="flex flex-col gap-1">
                {EMAIL_CONTACTS.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.url}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center rounded-full border border-white/20 p-2.5 text-white transition hover:border-white hover:bg-white/10 hover:text-blue-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
