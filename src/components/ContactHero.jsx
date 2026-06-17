"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function ContactHeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      <Image
        src="/hero/hero2.png"
        alt="Contact Spa Planet"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <span
            className="inline-flex rounded-full border px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] backdrop-blur-md"
            style={{
              borderColor: SITE.brand,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          >
            Contact Us
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Contact Our Spa & Wellness Center
          </h1>

          <div
            className="mx-auto mt-8 h-1 w-24 rounded-full"
            style={{ backgroundColor: SITE.brand }}
          />


          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="rounded-full px-8 py-4 font-semibold text-white"
              style={{ backgroundColor: SITE.brand }}
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}