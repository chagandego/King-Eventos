import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import QuoteCTA from "@/components/QuoteCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <Differentials />
        <Testimonials />
        <Gallery />
        <QuoteCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
