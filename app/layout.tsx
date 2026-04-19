import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: "RS.Media — Advanced Media Buyer & Performance Marketer",
    template: "%s | RS.Media",
  },
  description:
    "Full-funnel paid acquisition systems for brands in USA, Australia, UK & Europe. Meta Ads, Google Ads, TikTok Ads, GoHighLevel.",
  keywords: [
    "media buyer",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "GoHighLevel",
    "performance marketing",
    "lead generation",
    "ROAS",
  ],
  openGraph: {
    title: "RS.Media — Advanced Media Buyer",
    description:
      "Full-funnel paid acquisition systems for brands in USA, Australia, UK & Europe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Outfit for body text — NeutralFace loaded via @font-face in globals.css */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink font-jakarta antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
