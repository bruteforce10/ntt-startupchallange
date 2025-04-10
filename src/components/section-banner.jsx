"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function BannerSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bannerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section className="relative  px-4 pt-16 md:pt-28">
      <Link
        href={"/about"}
        ref={bannerRef}
        className="relative container mx-auto block h-[400px] cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="absolute z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden pointer-events-none"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/cursor-banner.svg?height=200&width=200"
                alt="Hover detail"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Image
          src="/banner.avif?height=500&width=1200"
          alt="NTT Startup Challenge Event"
          fill
          className="object-cover w-fit h-auto rounded-xl"
          priority
        />
      </Link>
    </section>
  );
}
