import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Infrastructure & Networking",
  description:
    "Enterprise-grade networking, Fibre/Wi-Fi Mesh deployments, and server infrastructure management for modern organizations.",
  path: "/infrastructure",
  keywords: ["Enterprise Networking", "Wi-Fi Mesh Zimbabwe", "Server Management", "Digital Infrastructure"],
});

export default function InfrastructurePage() {
  return (
    <ServicePage
      eyebrow="Pillar 04"
      title="Digital Infrastructure & Networking"
      description="We Deploy enterprise-grade networking, Fibre/Wi-Fi Mesh deployments, and server infrastructure management to ensure high availability and performance."
      highlights={[
        "Enterprise-grade networking",
        "Fibre & Wi-Fi Mesh deployments",
        "Server infrastructure management",
        "High availability system design",
      ]}
      ctaLabel="Deploy Infrastructure"
      image="/asset-images/moniq-network-systems.png"
      showPricing={true}
    />
  );
}
