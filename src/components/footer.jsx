import Link from "next/link";
import Image from "next/image";
import EachUtils from "@/utils/eachUtils";
import { LIST_NAVBAR } from "@/constant/listNavbar";

export function Footer() {
  return (
    <footer className=" text-white pt-28 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
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
      </div>
    </footer>
  );
}
