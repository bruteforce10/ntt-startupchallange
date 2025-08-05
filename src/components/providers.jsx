// app/providers.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "../lib/gtag";

export default function Providers({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return children;
}
