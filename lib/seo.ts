import type { Metadata } from "next";

export const siteConfig = {
  name: "Moniq Technologies",
  url: "https://moniq.co.zw",
  description:
    "Moniq Technologies delivers web development, CCTV installation, digital infrastructure, and academic technical support across Harare, Chitungwiza, and Zimbabwe.",
  ogImage: "/images/logo.png",
  keywords: [
    "Web Development Zimbabwe",
    "CCTV Installation Harare",
    "Student Tech Projects Chitungwiza",
    "Moniq Technologies",
    "Web design starting at $50",
    "Smart CCTV Harare",
  ],
} as const;

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} logo`,
        },
      ],
      locale: "en_ZW",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Moniq Technologies",
  priceRange: "$50 - $1500",
  telephone: "+263 785 234 975",
  url: "https://moniq.co.zw",
  areaServed: ["Harare", "Chitungwiza", "Zimbabwe"],
  image: "https://moniq.co.zw/images/logo.png",
};
