import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industrial IoT & Data Systems",
  description:
    "Custom software engineering for real-time monitoring, industrial sensor integration, and interactive data dashboards for enterprises.",
  path: "/iot",
  keywords: ["Industrial IoT Zimbabwe", "Data Dashboards", "Sensor Integration", "Real-time Monitoring"],
});

export default function IoTPage() {
  return (
    <ServicePage
      eyebrow="Pillar 03"
      title="Industrial IoT & Data Systems"
      description="We Engineer custom software for real-time monitoring (Medical vitals/Q-Systems), industrial sensor integration, and interactive data dashboards for actionable insights."
      highlights={[
        "Custom software engineering",
        "Real-time monitoring systems",
        "Industrial sensor integration",
        "Interactive data dashboards",
      ]}
      ctaLabel="Engineer IoT Solution"
      image="/asset-images/moniq-software-dev.png"
      showPricing={true}
    />
  );
}
