import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ServicePillars } from "@/components/service-pillars";
import { FounderSection } from "@/components/founder-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engineering, Security & Enterprise Software Solutions Zimbabwe",
  description:
    "Moniq Technologies is a premier tech agency specializing in AI-enhanced security, custom IoT development, professional web applications, and enterprise networking.",
  keywords: [
    "Enterprise Software Zimbabwe",
    "AI Surveillance Harare",
    "Industrial IoT Zimbabwe",
    "Network Infrastructure Zimbabwe",
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
        <ServicePillars />
        <FounderSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
