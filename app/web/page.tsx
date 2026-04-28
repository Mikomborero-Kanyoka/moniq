import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise Web & Application Development",
  description:
    "Scalable web applications, high-performance business websites, and managed professional email hosting for corporate identity across Zimbabwe.",
  path: "/web",
  keywords: ["Enterprise Web Development", "Business Applications Zimbabwe", "Google Workspace Hosting"],
});

export default function WebPage() {
  return (
    <ServicePage
      eyebrow="Pillar 02"
      title="Enterprise Web & Application Development"
      description="We engineer scalable web applications, high-performance business websites, and provide managed professional email hosting (Google Workspace/Microsoft 365/Private Server) for corporate identity."
      highlights={[
        "Scalable custom web applications",
        "High-performance business platforms",
        "Managed Google Workspace & Microsoft 365",
        "Private server email hosting",
      ]}
      ctaLabel="Deploy Web Solution"
      image="/asset-images/moniq-premium-web.png"
      showPricing={true}
    />
  );
}
