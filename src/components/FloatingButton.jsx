"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { SITE } from "../lib/siteConfig";

export default function FloatingButton() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Call Button */}
        <a
          href={`tel:${SITE.phoneCall}`}
          aria-label="Call Us"
          className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: SITE.brand,
          }}
        >
          <Phone size={24} className="text-white" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={28} className="text-white" />
        </a>
      </div>
    </>
  );
}