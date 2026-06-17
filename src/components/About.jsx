"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{
                backgroundColor: `${SITE.brand}15`,
                color: SITE.brand,
              }}
            >
              About Spa Planet
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Premium Spa & Wellness
              <br />
              Experience in Ghaziabad
            </h2>

            <div
              className="mt-5 h-1 w-24 rounded-full"
              style={{ backgroundColor: SITE.brand }}
            />

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Spa Planet Ghaziabad offers a luxurious escape from the
              stress of everyday life. Our professional therapists
              provide personalized massage therapies and wellness
              treatments designed to relax your body, refresh your
              mind, and restore your energy.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              With elegant interiors, hygienic rooms, and premium
              spa services, we create a peaceful environment where
              every visit becomes a memorable wellness experience.
              From Full Body Massage and Deep Tissue Therapy to
              Swedish and Hot Oil Massage, every treatment is
              crafted for complete relaxation.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
              >
                WhatsApp
              </a>

              <a
                href={`tel:${SITE.phoneCall}`}
                className="rounded-full px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: SITE.brand,
                }}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className="absolute -left-6 -top-6 h-full w-full rounded-[32px]"
              style={{
                backgroundColor: `${SITE.brand}25`,
              }}
            />

            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl">
              <div className="relative h-[420px] md:h-[520px]">
                <Image
                  src="/services/6.jpg"
                  alt="Spa Planet Ghaziabad"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3
                className="text-2xl font-bold"
                style={{ color: SITE.brand }}
              >
                Spa Planet Ghaziabad
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}