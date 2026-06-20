"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaEnvelope,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EFE6D6] text-black">
      {/* Top Accent Border */}
      <div className="h-1 w-full bg-[#680424]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-[#680424]">
              Spa Planet
            </h3>

            <p className="leading-8 text-black">
              Premium spa and wellness experience in Rajnagar Ghaziabad UP.
              Enjoy luxury massage therapies, peaceful ambience, professional
              care, and complete relaxation.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.pinterest.com/spaplanetg/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 bg-orange-700 hover:text-white"
              >
                <FaPinterestP />
              </a>


             <a
                href="https://www.instagram.com/spaplanet.ghaziabad/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 bg-orange-700 hover:text-white"
              >
                <FaInstagram />
              </a>
              {/* <a
                href="https://www.facebook.com/profile.php?id=61588027945170"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300  hover:from-pink-500 bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </a> */}

              <a
                href="https://wa.me/919152885986"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@SpaPlanetGhaziabad"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 bg-[#FF0000] hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#680424]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-black">
              <li>
                <Link href="/" className="transition hover:text-[#680424]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#680424]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-[#680424]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="transition hover:text-[#680424]"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#680424]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#680424]">
              Our Services
            </h4>

             <ul className="space-y-4 text-black">
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Jacuzzi Massage
                </Link>
             </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Four Hand Massage 
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Thai Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Deep Tissue Massage 
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Hot Oil Massage 
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#680424]"
                >
                  Swedish Massage 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#680424]">
              Contact Info
            </h4>

            <div className="space-y-5 text-black">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#680424]" />
                <p>
                 Shop No. 201, Second Floor, D-30 Building, Opposite Gaur Mall, Above Starbucks Rajnagar Ghaziabad, Uttar Pradesh 201001
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#680424]" />
                <a
                  href="tel:+919371000458"
                  className="transition hover:text-[#680424]"
                >
                  +91 9152885922
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#680424]" />
                <a
                  href="mailto:delightspa.Ghaziabad@gmail.com"
                  className="transition hover:text-[#680424]"
                >
                 spaplanet.ghaziabad@gmail.com 
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-[#680424]" />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-black md:flex-row">
          <p>
            © {new Date().getFullYear()} Spa Planet. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition text-black hover:text-[#680424]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition text-black hover:text-[#680424]">
                Terms & Conditions
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}