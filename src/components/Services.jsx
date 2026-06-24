"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

const services = [
  {
    title: "Jacuzzi Massage",
    image: "/services/ser1.png",
    description:
      "Complete body relaxation therapy designed to reduce stress and improve circulation.",
  },
  {
    title: "Thai Massage",
    image: "/services/ser2.png",
    description:
      "Traditional Thai techniques to improve flexibility and restore body balance.",
  },
  {
    title: "Deep Tissue Massage",
    image: "/services/ser3.png",
    description:
      "Focused pressure therapy that targets deep muscle tension and soreness.",
  },
  {
    title: "Hot Oil Massage",
    image: "/services/ser4.png",
    description:
      "Warm aromatic oils nourish the skin while providing complete relaxation.",
  },
  {
    title: "Swedish Massage",
    image: "/services/ser5.png",
    description:
      "Gentle and soothing massage that improves circulation and wellness.",
  },
  {
    title: "Couple Massage",
    image: "/services/ser6.png",
    description:
      "Luxury spa experience designed for couples seeking relaxation together.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Premium Spa Treatments
          </h2>

          <div
            className="mx-auto mt-5 h-1 w-24 rounded-full"
            style={{ backgroundColor: SITE.brand }}
          />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Discover luxurious spa therapies and professional wellness
            treatments designed to relax your body, refresh your mind,
            and restore your energy.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <div
                  className="mt-3 h-1 w-14 rounded-full"
                  style={{ backgroundColor: SITE.brand }}
                />

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <a
                    href={`tel:${SITE.phoneCall}`}
                    className="flex-1 rounded-xl py-3 text-center font-semibold text-white transition duration-300 hover:opacity-90"
                    style={{
                      backgroundColor: SITE.brand,
                    }}
                  >
                    Call Now
                  </a>

                  <a
                    href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                      "+",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-[#25D366] py-3 text-center font-semibold text-white transition duration-300 hover:opacity-90"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}