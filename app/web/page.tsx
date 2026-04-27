import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Web Development Zimbabwe Starting at $50",
  description:
    "Moniq Technologies offers web development in Zimbabwe, landing pages starting at $50, professional email setup, and digital infrastructure for local businesses.",
  path: "/web",
  keywords: ["Web Development Zimbabwe", "Web design starting at $50", "Business websites Harare"],
});

export default function WebPage() {
  return (
    <ServicePage
      eyebrow="Digital Infrastructure"
      title="Professional web systems for Zimbabwean businesses that need to look credible online."
      description="From one-page launches to business-ready web experiences, Moniq builds pages that communicate clearly, work on mobile, and support faster enquiry conversion."
      highlights={[
        "Landing pages starting at $50",
        "Business websites tailored for local service providers",
        "Professional domain email setup",
        "Clean mobile-first design for WhatsApp-heavy customer journeys",
      ]}
      ctaLabel="Request Web Quote"
    />
  );
}
