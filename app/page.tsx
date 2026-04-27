import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FleetSection } from "@/components/fleet-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Web Development Zimbabwe and Smart CCTV Harare",
  description:
    "Moniq Technologies provides web development in Zimbabwe, smart CCTV installation in Harare, and technical project support for students in Chitungwiza.",
  keywords: [
    "Web Development Zimbabwe",
    "CCTV Installation Harare",
    "Student Tech Projects Chitungwiza",
    "Moniq Technologies",
  ],
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <HeroSection />
        <FleetSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
