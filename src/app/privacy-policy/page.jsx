import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Reva Wellness Spa",
  description: "Privacy practices and how Reva Wellness Spa handles personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-[#680424]">Privacy Policy</h1>

        <p className="mt-4 text-gray-700 leading-7">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#680424]">1. Introduction</h2>
          <p className="mt-2 text-gray-700 leading-7">Reva Wellness Spa values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information obtained through our website and services.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">2. Information We Collect</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-7">
            <li>Name and contact information.</li>
            <li>Email address and phone number.</li>
            <li>Appointment and booking details.</li>
            <li>Information submitted through contact forms.</li>
            <li>Website usage and analytics data.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">3. How We Use Your Information</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-7">
            <li>To schedule and manage appointments.</li>
            <li>To communicate regarding services and bookings.</li>
            <li>To improve our website and customer experience.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">4. Data Security</h2>
          <p className="mt-2 text-gray-700 leading-7">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission can be guaranteed to be completely secure.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">5. Cookies & Analytics</h2>
          <p className="mt-2 text-gray-700 leading-7">Our website may use cookies and analytics tools to improve user experience, monitor website performance, and understand visitor behavior. You may disable cookies through your browser settings.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">6. Third-Party Services</h2>
          <p className="mt-2 text-gray-700 leading-7">We may use trusted third-party providers for website hosting, analytics, booking systems, and communication services. These providers are required to handle your information responsibly.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">7. Information Sharing</h2>
          <p className="mt-2 text-gray-700 leading-7">We do not sell, rent, or trade your personal information to third parties. Information may only be shared when required by law or necessary to provide requested services.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">8. Your Rights</h2>
          <p className="mt-2 text-gray-700 leading-7">You may request access to, correction of, or deletion of your personal information by contacting us directly. We will respond to reasonable requests in accordance with applicable laws.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">9. Changes to This Policy</h2>
          <p className="mt-2 text-gray-700 leading-7">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page and become effective immediately upon publication.</p>
        </section>

        <div className="mt-10 flex items-center gap-4">
          <Link href="/contact" className="text-[#680424] font-semibold hover:underline">Contact Us</Link>
          <Link href="/" className="text-gray-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    </main>
  );
}
