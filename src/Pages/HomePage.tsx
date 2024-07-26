import HeroSection from "../components/home_sections/HeroSection";
import AboutSection from "../components/home_sections/AboutSection";
import CTASection from "../components/home_sections/CTASection";
import TestimonialsSection from "../components/home_sections/TestimonialsSection";
import ServicesSection from "../components/home_sections/ServicesSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default HomePage;
