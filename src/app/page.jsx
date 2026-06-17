import Homehero from "@/components/Homehero";
import AboutPage from "@/components/About";
import Services from "@/components/Services";
import OurGallery from "@/components/OurGallerry";
import Testimonials from "@/components/Testimonial";
import FAQSection from "@/components/F&QSection";
import OfferCards from "@/components/OfferCard";
export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.98),_rgba(255,255,255,1))] text-slate-950 antialiased min-h-screen">
        <Homehero />
        <AboutPage />
        <Services />
        <OurGallery />
        <OfferCards />
        <FAQSection />
        <Testimonials />
      </main>
    </>
  );
}