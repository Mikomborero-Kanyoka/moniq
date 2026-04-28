import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Intelligent Security & AI Surveillance",
  description:
    "Moniq Technologies provides AI-driven surveillance, custom anomaly detection, and smart hardware monitoring for industrial and residential sites across Zimbabwe.",
  path: "/security",
  keywords: ["AI Surveillance Zimbabwe", "Smart CCTV Harare", "Security Engineering"],
});

export default function SecurityPage() {
  return (
    <ServicePage
      eyebrow="Pillar 01"
      title="Intelligent Security & AI Surveillance"
      description="We deploy beyond standard recording. Our systems feature custom anomaly detection, AI-driven human/animal recognition, and smart hardware monitoring for industrial and residential sites."
      highlights={[
        "AI-enhanced human and vehicle recognition",
        "Industrial-grade anomaly detection systems",
        "Smart hardware health monitoring",
        "Remote operations and mobile alerts",
      ]}
      ctaLabel="Deploy Security Solution"
      image="/asset-images/moniq-smart-security.jpg"
      showPricing={true}
    />
  );
}
