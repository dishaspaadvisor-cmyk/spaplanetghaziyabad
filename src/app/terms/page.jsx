import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Reva Wellness Spa",
  description: "Terms and conditions for Reva Wellness Spa services and website use.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-[#680424]">Terms & Conditions</h1>

        <p className="mt-4 text-gray-700 leading-7">
          Please read these terms carefully before using our website or booking any spa services.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#680424]">1. Acceptance of Terms</h2>
          <p className="mt-2 text-gray-700 leading-7">
            By accessing this website or booking services with Reva Wellness Spa, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our website or services.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">2. Spa Services</h2>
          <p className="mt-2 text-gray-700 leading-7">
            All spa services are provided subject to availability. We reserve the right to modify, suspend, or discontinue any service without prior notice.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">3. Appointment & Booking Policy</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-7">
            <li>Appointments should be scheduled in advance.</li>
            <li>Please arrive at least 10 minutes before your appointment.</li>
            <li>Late arrivals may result in reduced treatment time.</li>
            <li>We reserve the right to refuse service in certain situations.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">4. Cancellation Policy</h2>
          <p className="mt-2 text-gray-700 leading-7">Cancellations should be made at least 24 hours before the scheduled appointment. Failure to provide adequate notice may result in cancellation fees where applicable.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">5. Payments & Pricing</h2>
          <p className="mt-2 text-gray-700 leading-7">Prices displayed on the website are subject to change without notice. Full payment may be required at the time of service or booking depending on the selected treatment.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">6. Health & Safety</h2>
          <p className="mt-2 text-gray-700 leading-7">Clients must disclose any relevant medical conditions, allergies, injuries, or health concerns before receiving spa treatments. Reva Wellness Spa is not responsible for complications resulting from undisclosed health information.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">7. Website Usage</h2>
          <p className="mt-2 text-gray-700 leading-7">You agree not to misuse this website, attempt unauthorized access, distribute malicious software, or engage in activities that may disrupt website functionality.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">8. Intellectual Property</h2>
          <p className="mt-2 text-gray-700 leading-7">All website content, including text, images, logos, graphics, and design elements, is the property of Reva Wellness Spa and may not be copied, reproduced, or distributed without permission.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">9. Limitation of Liability</h2>
          <p className="mt-2 text-gray-700 leading-7">Reva Wellness Spa shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or spa services.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-[#680424]">10. Changes to Terms</h2>
          <p className="mt-2 text-gray-700 leading-7">We reserve the right to update these Terms & Conditions at any time. Updated versions will be posted on this page with immediate effect.</p>
        </section>

        <div className="mt-10 flex items-center gap-4">
          <Link href="/" className="text-[#680424] font-semibold hover:underline">Return to Home</Link>
        </div>
      </div>
    </main>
  );
}
