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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="N2nbfZs4-tQNAQfsIf2j5W_5CDfj-IJgm3nS1SUHqO8"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Ads Global Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18253308770"
          strategy="afterInteractive"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'AW-18253308770');
          `}
        </Script>

        {/* Purchase Conversion Event */}
        <Script id="purchase-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-18253308770/_nsOCID9gcIcEOLG7f9D',
              'value': 1.0,
              'currency': 'INR',
              'transaction_id': ''
            });
          `}
        </Script>

        {/* Global Conversion Function */}
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function() {
                if (typeof(url) !== 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                'send_to': 'AW-18253308770/_nsOCID9gcIcEOLG7f9D',
                'value': 1.0,
                'currency': 'INR',
                'transaction_id': '',
                'event_callback': callback
              });

              return false;
            };
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