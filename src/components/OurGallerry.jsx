"use client";

import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

const galleryImages = [
  "/gallary/1.jpg",
  "/gallary/2.jpg",
  "/gallary/3.jpg",
  "/gallary/4.jpg",
  "/gallary/5.jpg",
  "/gallary/6.jpg",
];

export default function GallerySection() {
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
            Our Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Spa Planet
          </h2>

          <div
            className="mx-auto mt-5 h-1 w-24 rounded-full"
            style={{ backgroundColor: SITE.brand }}
          />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Discover our luxury spa ambience, premium therapy rooms,
            wellness treatments, and relaxing spaces designed to
            rejuvenate your mind and body.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={image}
                  alt={`Spa Planet Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.6), transparent)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}