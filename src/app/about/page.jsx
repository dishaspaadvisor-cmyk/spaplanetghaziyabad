import ABoutHero from "@/components/AboutHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonial";
export default function AboutPage() {
  return (
    <>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.98),_rgba(255,255,255,1))] text-slate-950 antialiased min-h-screen">
       <ABoutHero />
       <About />
       <Testimonials />
      </main>
    </>
  );
}