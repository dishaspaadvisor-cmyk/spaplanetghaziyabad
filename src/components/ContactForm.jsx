"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = `
*Spa Planet Ghaziabad Enquiry*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}

💬 Message:
${form.message}
`;

    window.open(
      `https://wa.me/${SITE.phoneWhatsApp.replace(
        "+",
        ""
      )}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-[#FFF7ED] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "#FFE7D6",
                color: SITE.brand,
              }}
            >
              Contact Us
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Visit{" "}
              <span style={{ color: SITE.brand }}>
                Spa Planet
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Experience premium spa therapies, wellness treatments,
              and complete relaxation in a luxurious environment.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-6">
              {/* Address */}
              <div
                className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
                style={{
                  border: `1px solid ${SITE.brand}30`,
                }}
              >
                <div className="flex gap-4">
                  <MapPin
                    size={28}
                    className="mt-1"
                    style={{ color: SITE.brand }}
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Address
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Spa Planet Ghaziabad
                      <br />
                      Premium Wellness & Spa Center
                      <br />
                      Ghaziabad, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
                style={{
                  border: `1px solid ${SITE.brand}30`,
                }}
              >
                <div className="flex gap-4">
                  <Phone
                    size={28}
                    style={{ color: SITE.brand }}
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Phone
                    </h3>

                    <a
                      href={`tel:${SITE.phoneCall}`}
                      className="mt-2 block text-slate-600 hover:text-black"
                    >
                      {SITE.phoneCall}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
                style={{
                  border: `1px solid ${SITE.brand}30`,
                }}
              >
                <div className="flex gap-4">
                  <Mail
                    size={28}
                    style={{ color: SITE.brand }}
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email
                    </h3>

                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-2 block text-slate-600 hover:text-black"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Timing */}
              <div
                className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
                style={{
                  border: `1px solid ${SITE.brand}30`,
                }}
              >
                <div className="flex gap-4">
                  <Clock
                    size={28}
                    style={{ color: SITE.brand }}
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Opening Hours
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Monday - Sunday
                      <br />
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE.phoneCall}`}
                className="rounded-full px-8 py-4 font-semibold text-white transition hover:opacity-90"
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
                className="flex items-center gap-2 rounded-full border border-[#25D366] px-8 py-4 font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="rounded-[32px] bg-white p-8 shadow-xl"
            style={{
              border: `1px solid ${SITE.brand}30`,
            }}
          >
            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Book Appointment
            </h3>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97519] focus:ring-2 focus:ring-[#F97519]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97519] focus:ring-2 focus:ring-[#F97519]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Email
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97519] focus:ring-2 focus:ring-[#F97519]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97519] focus:ring-2 focus:ring-[#F97519]/20"
                />
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-lg font-semibold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: SITE.brand,
                }}
              >
                <MessageCircle size={22} />
                Enquiry on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}