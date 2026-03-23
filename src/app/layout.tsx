import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050810",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Volo — Pilot Companion",
  description:
    "Aviation assistant for airline pilots. Calculators, weather suitability, crew rest planning, and cabin briefings — all in one app.",
  metadataBase: new URL("https://voloapp.co"),
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192x192.png",
  },
  openGraph: {
    title: "Volo — Pilot Companion",
    description:
      "Aviation assistant for airline pilots. Calculators, weather suitability, crew rest planning, and cabin briefings — all in one app.",
    url: "https://voloapp.co",
    siteName: "Volo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volo — Aviation Pilot Companion App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volo — Pilot Companion",
    description:
      "Aviation assistant for airline pilots. Calculators, weather suitability, crew rest planning, and cabin briefings.",
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Volo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased grain`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
