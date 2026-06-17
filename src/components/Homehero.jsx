"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { SITE } from "@/lib/siteConfig";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero/hero1.png",
    title: "Best Spa Available in Ghaziabad",
    description:
      "Experience luxury wellness therapies, professional massage services, and complete relaxation at Spa Planet Ghaziabad.",
  },
  {
    image: "/hero/hero2.png",
    title: "Expert Staff Available",
    description:
      "Refresh your body, calm your mind, and restore your energy with our premium spa treatments and expert therapists.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-[450px] overflow-hidden sm:h-[500px] md:h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px] overflow-hidden sm:h-[500px] md:h-[600px]">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6 -mt-20 md:-mt-16">
                <div className="max-w-4xl text-center text-white">
                  {/* Badge */}
                  <span
                    className="inline-flex rounded-full border px-5 py-2 -mt-100 text-sm font-medium uppercase tracking-[0.25em] backdrop-blur-md"
                    style={{
                      borderColor: SITE.brand,
                      color: "white",
                      backgroundColor: "rgba(6, 7, 6, 0.25)",
                    }}
                  >
                    Spa Planet Ghaziabad
                  </span>

                  {/* Heading */}
                  <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  {/* Orange Line */}
                  <div
                    className="mx-auto mt-8 h-1 w-24 rounded-full"
                    style={{ backgroundColor: SITE.brand }}
                  />

  

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={`tel:${SITE.phoneCall}`}
                      className="rounded-full px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
                      style={{
                        backgroundColor: SITE.brand,
                      }}
                    >
                      📞 Call Now
                    </a>

                    <a
                      href={`https://wa.me/${SITE.phoneWhatsApp.replace(
                        "+",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}