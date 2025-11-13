import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductShowcase from "../components/home/ProductShowcase";
import InnovationSection from "../components/home/InnovationSection";
// import PartnersSection from '../components/home/PartnersSection';
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <InnovationSection />
      {/* <PartnersSection /> */}
      <ContactSection />
    </div>
  );
}
