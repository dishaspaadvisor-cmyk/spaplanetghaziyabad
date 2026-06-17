"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function ServicesHeroSection() {
  return (
    <section className="relative h-[450px] overflow-hidden sm:h-[500px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/hero/hero1.png"
        alt="Spa Planet Services"
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
              color: "white",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          >
            Our Services
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:mt-8 md:text-6xl">
          Luxury Spa & Premium Services
          </h1>

          {/* Orange Line */}
          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full sm:mt-8 sm:w-24"
            style={{ backgroundColor: SITE.brand }}
          />

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="rounded-full px-8 py-4 text-center font-semibold text-white transition duration-300 hover:scale-105"
              style={{
                backgroundColor: SITE.brand,
              }}
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 text-center font-semibold text-white transition duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}