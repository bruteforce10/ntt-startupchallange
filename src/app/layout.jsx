import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/providers";
import Script from "next/script";

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
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <head>
          <meta name="robots" content="noindex" />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-Y3F146ER46`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y3F146ER46', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </head>
        <body
          className={`${plusJakartaSans.className} antialiased scroll-smooth`}
          suppressHydrationWarning
        >
          <MouseMoveEffect />
          <Providers>{children}</Providers>
        </body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
