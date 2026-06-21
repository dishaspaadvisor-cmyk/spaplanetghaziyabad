import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import { SITE } from "../lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: SITE.title || "Spa Planet",
  description: "Spa Planet Ghaziabad - Relaxation & Wellness",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "N2nbfZs4-tQNAQfsIf2j5W_5CDfj-IJgm3nS1SUHqO8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >



      <body className="min-h-full flex flex-col">
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18259304293"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18259304293');
          `}
        </Script>
        <Script id="google-conversion" strategy="afterInteractive">
          {`
    gtag('event', 'conversion', {
      'send_to': 'AW-18259304293/mhxmCNz9g8McEOW-24JE',
      'value': 1.0,
      'currency': 'INR',
      'transaction_id': ''
    });
  `}
        </Script>


        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}