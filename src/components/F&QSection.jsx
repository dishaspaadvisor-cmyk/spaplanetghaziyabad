"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const faqs = [
  {
    question: "What massage services do you offer?",
    answer:
      "We offer Full Body Massage, Thai Massage, Deep Tissue Massage, Hot Oil Massage, Swedish Massage, Aroma Therapy, and other premium wellness treatments.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "While walk-ins are welcome, we recommend booking your appointment in advance to ensure your preferred time slot is available.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Spa Planet Ghaziabad is open every day from 10:00 AM to 10:00 PM, including weekends and holidays.",
  },
  {
    question: "Are your spa rooms private and hygienic?",
    answer:
      "Yes. We maintain high standards of cleanliness and provide private, comfortable treatment rooms for a relaxing experience.",
  },
  {
    question: "How long does a massage session usually last?",
    answer:
      "Massage sessions typically range from 60 to 90 minutes depending on the therapy selected and your personal preference.",
  },
  {
    question: "Do you provide couple spa sessions?",
    answer:
      "Yes. We offer relaxing couple spa experiences designed for comfort, wellness, and shared relaxation.",
  },
  {
    question: "How can I book a spa session?",
    answer:
      "You can book your appointment by calling us directly or contacting us through WhatsApp for quick assistance.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span
            className="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Find answers to common questions about our spa therapies,
            appointments, facilities, and wellness services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] bg-[#FFF7ED] shadow-sm transition-all"
              style={{
                border: `1px solid ${SITE.brand}25`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                  style={{ color: SITE.brand }}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}