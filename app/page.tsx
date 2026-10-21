import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProductsSection from "@/components/products-section";
import Hero2Section from "@/components/hero2-section";
import LocationsSection from "@/components/locations-section";
import ContactSection from "@/components/contact-section";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Hero2Section />
      <LocationsSection />
      <ContactSection />
    </>
  );
}
