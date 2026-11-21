import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "CricFy TV APK Download Latest Version Free for Android 2026",
  description:
    "Download CricFy TV APK latest version (v7.4) for Android free. Stream live cricket, IPL 2026, T20 World Cup, and 600+ HD sports channels with zero buffering and no subscription. Safe & verified direct APK downloads.",
  keywords: [
    "cricfy tv apk",
    "cricfy apk download",
    "cricfy tv 2026",
    "live cricket streaming app",
    "cricfy app for android",
    "watch ipl live free",
    "cricfy tv mod apk",
    "cricfy latest version",
  ],
  authors: [{ name: "CricFyHub" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  metadataBase: new URL("https://cricfyhub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CricFy TV APK Download Latest Version Free for Android 2026",
    description:
      "Download CricFy TV APK latest version (v7.4) for Android free. Stream live cricket, IPL 2026, and 600+ HD sports channels. Direct and safe APK download links.",
    url: "https://cricfyhub.com",
    siteName: "CricFyHub",
    images: [
      {
        url: "/images/cricfy-og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "CricFy TV APK Live Cricket Streaming",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CricFy TV APK Download Latest Version Free for Android 2026",
    description:
      "Stream live cricket, IPL 2026, and HD sports free. Download CricFy TV APK official and stable versions.",
    images: ["/images/cricfy-og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://cricfyhub.com/#software",
                  "name": "CricFy TV",
                  "operatingSystem": "Android 5.0 and above",
                  "applicationCategory": "EntertainmentApplication, SportsApplication",
                  "softwareVersion": "7.4 (2026 Build)",
                  "fileSize": "18.3 MB",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "128450",
                    "bestRating": "5",
                    "worstRating": "1",
                  },
                  "description":
                    "CricFy TV APK offers HD live cricket streaming, IPL matches, international sports, and 600+ TV channels on Android devices without fees.",
                  "downloadUrl": "https://cricfyhub.com/#download-zone",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://cricfyhub.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Is CricFy TV APK completely free to download and use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes, CricFy TV APK is 100% free with no monthly subscription fees, sign-up requirements, or hidden in-app paywalls.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Is CricFy TV APK safe to install on Android?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "All APK packages hosted on CricFyHub are verified via VirusTotal and Google Play Protect scanners, ensuring clean, virus-free, and malware-free installation.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Can I install CricFy TV on Android Smart TV or FireStick?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes! CricFy TV features native Android TV and Fire OS remote control support, allowing you to sideload and stream matches on larger screens in 1080p full HD.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if a live stream is buffering?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "CricFy TV provides multiple server links (Server 1, 2, and 3) for each match. Simply toggle to an alternate server or lower the playback resolution to 720p or 480p.",
                      },
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cricfyhub.com/#website",
                  "url": "https://cricfyhub.com/",
                  "name": "CricFyHub",
                  "description":
                    "The dedicated portal for safe, direct downloads of CricFy TV APK for Android.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
