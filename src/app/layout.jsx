import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/providers";
import Script from "next/script";
import { GA_TRACKING_ID, GOOGLE_ADS_TRACKING_ID } from "@/lib/gtag";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.ntt-startupchallenge.com"),
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
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                send_page_view: false,
              });
              gtag('config', '${GOOGLE_ADS_TRACKING_ID}');
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
