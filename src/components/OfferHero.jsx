"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function OffersHeroSection() {
  return (
    <section className="relative h-[450px] overflow-hidden sm:h-[500px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/hero/hero3.png"
        alt="Spa Planet Offers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl text-center text-white">
          {/* Badge */}
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md sm:px-5 sm:text-sm sm:tracking-[0.25em]"
            style={{
              borderColor: SITE.brand,
              color: SITE.brand,
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          >
            Special Offers
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:mt-8 md:text-6xl">
            Exclusive Spa Deals
            <br />
            & Wellness Packages
          </h1>

          {/* Line */}
          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full sm:mt-8 sm:w-24"
            style={{ backgroundColor: SITE.brand }}
          />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-7 text-gray-200 sm:text-base sm:leading-8 md:mt-8 md:text-xl md:leading-9">
            Enjoy exclusive discounts on premium massage therapies,
            wellness treatments, and luxury spa experiences at
            Spa Planet Ghaziabad.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="rounded-full px-8 py-4 text-center font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: SITE.brand }}
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 text-center font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}