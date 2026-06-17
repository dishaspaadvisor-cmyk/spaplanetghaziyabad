"use client";

import { Star } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Ghaziabad",
    review:
      "One of the best spa experiences I've had. The ambience is peaceful, the therapists are highly professional, and the massage was incredibly relaxing. Highly recommended.",
  },
  {
    name: "Priya Verma",
    location: "Ghaziabad",
    review:
      "Spa Planet exceeded my expectations. The rooms were clean, the staff was courteous, and the therapy helped me completely relax after a stressful week.",
  },
  {
    name: "Amit Patel",
    location: "Wardha",
    review:
      "Excellent service and premium facilities. The deep tissue massage was exactly what I needed. I felt refreshed and rejuvenated after the session.",
  },
  {
    name: "Sneha Kulkarni",
    location: "Ghaziabad",
    review:
      "Beautiful interiors, professional therapists, and amazing hospitality. The entire experience felt luxurious and worth every minute.",
  },
  {
    name: "Vikas Mehta",
    location: "Ghaziabad",
    review:
      "Very hygienic environment and great customer service. The hot oil massage was extremely relaxing. I will definitely visit again.",
  },
  {
    name: "Neha Joshi",
    location: "Ghaziabad",
    review:
      "The atmosphere is calm and soothing. Every detail is thoughtfully managed, making it one of the finest wellness destinations in Ghaziabad.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FFF7ED] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span
            className="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Discover why clients choose Spa Planet Ghaziabad for
            relaxation, wellness, and premium massage therapies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-[30px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                border: `1px solid ${SITE.brand}25`,
              }}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={SITE.brand}
                    color={SITE.brand}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* Divider */}
              <div
                className="mt-6 h-1 w-16 rounded-full"
                style={{
                  backgroundColor: SITE.brand,
                }}
              />

              {/* User */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: SITE.brand }}
                >
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}