import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "NTT Startup Challenge",
    template: "%s | NTT Startup Challenge",
  },
  description:
    "Build Connections That Matter – Your Next Leap Starts at NTT Startup Challenge",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body
          className={`${plusJakartaSans.className} antialiased scroll-smooth`}
          suppressHydrationWarning
        >
          <MouseMoveEffect />
          {children}
        </body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
