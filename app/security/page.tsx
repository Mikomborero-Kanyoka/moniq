import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CCTV Installation Harare and Smart Security",
  description:
    "Moniq Technologies handles CCTV installation in Harare, NVR setup, smart monitoring, and sensor-based protection for homes, offices, and shops.",
  path: "/security",
  keywords: ["CCTV Installation Harare", "Smart CCTV Harare", "Security Systems Zimbabwe"],
});

export default function SecurityPage() {
  return (
    <ServicePage
      eyebrow="Technical Security"
      title="Smart CCTV and security systems for Harare, Chitungwiza, and beyond."
      description="We design and install surveillance systems that help businesses and households monitor sites with confidence, stronger visibility, and practical remote oversight."
      highlights={[
        "CCTV and NVR installation for offices, shops, and homes",
        "Smart camera positioning and monitoring guidance",
        "Sensor-based intrusion support for smaller premises",
        "Maintenance, optimization, and troubleshooting for existing setups",
      ]}
      ctaLabel="Request Security Quote"
    />
  );
}
