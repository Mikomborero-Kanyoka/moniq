import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Smart Logistics & Asset Tracking",
  description:
    "Advanced GPS tracking solutions and fleet management systems with custom reporting and real-time mapping for logistics enterprises.",
  path: "/logistics",
  keywords: ["GPS Tracking Zimbabwe", "Fleet Management", "Asset Tracking", "Smart Logistics"],
});

export default function LogisticsPage() {
  return (
    <ServicePage
      eyebrow="Pillar 05"
      title="Smart Logistics & Asset Tracking"
      description="We Deploy advanced GPS tracking solutions and fleet management systems with custom reporting and real-time mapping for complete operational visibility."
      highlights={[
        "Advanced GPS tracking solutions",
        "Comprehensive fleet management",
        "Real-time asset mapping",
        "Customized reporting & analytics",
      ]}
      ctaLabel="Deploy Tracking Solution"
      image="/asset-images/moniq-gps-tracking.png"
      showPricing={true}
    />
  );
}
