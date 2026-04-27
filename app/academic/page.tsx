import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Student Tech Projects Chitungwiza Support",
  description:
    "Moniq Technologies supports student tech projects in Chitungwiza with system design, documentation guidance, and final-year technical project assistance.",
  path: "/academic",
  keywords: ["Student Tech Projects Chitungwiza", "Final year project support Zimbabwe", "Academic development Moniq Technologies"],
});

export default function AcademicPage() {
  return (
    <ServicePage
      eyebrow="Academic Development"
      title="Technical project support for students building final-year systems with real structure."
      description="We help students clarify project direction, strengthen system design choices, and produce cleaner technical documentation for more credible submissions."
      highlights={[
        "Final-year technical project support",
        "System design and architecture guidance",
        "Documentation structure and improvement support",
        "Scoping help for achievable and defendable student builds",
      ]}
      ctaLabel="Request Academic Quote"
    />
  );
}
