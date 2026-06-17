"use client";

import { MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function MapSection() {
  return (
    <section className="bg-[#EFE6D6] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#680424] md:text-5xl">
            Visit Spa Planet Ghaziabad
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Find us at Shop No. 201, Second Floor, D-30 Building, Opposite Gaur Mall,
            Above Starbucks, Rajnagar, Ghaziabad, Uttar Pradesh 201001.
          </p>
        </div>

        {/* Map Card */}
        <div
          className="overflow-hidden rounded-[32px] bg-white shadow-xl"
          style={{
            border: `1px solid ${SITE.brand}20`,
          }}
        >
          

          {/* Google Map */}
          <div className="h-[350px] md:h-[500px]">
  <iframe
    title="Spa Planet Ghaziabad Location"
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56026.34067486719!2d77.39364310057205!3d28.64036124958267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No.%20201%2C%20Second%20Floor%2C%20D-30%20Building%2C%20Opposite%20Gaur%20Mall%2C%20Above%20Starbucks%20Rajnagar%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1781680334587!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
    </section>
  );
}