"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Code2,
  Cpu,
  Network,
  Truck,
  ArrowRight,
} from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const pillars = [
  {
    id: "01",
    title: "Intelligent Security & AI Surveillance",
    service: "Beyond standard recording. Custom anomaly detection, AI-driven human/animal recognition, and smart hardware monitoring for industrial and residential sites.",
    image: "/asset-images/moniq-smart-security.jpg",
    icon: ShieldCheck,
    href: "/security",
  },
  {
    id: "02",
    title: "Enterprise Web & Application Development",
    service: "Scalable web applications, high-performance business websites, and managed professional email hosting (Google Workspace/Microsoft 365/Private Server) for corporate identity.",
    image: "/asset-images/moniq-premium-web.png",
    icon: Code2,
    href: "/web",
  },
  {
    id: "03",
    title: "Industrial IoT & Data Systems",
    service: "Custom software engineering for real-time monitoring (Medical vitals/Q-Systems), industrial sensor integration, and interactive data dashboards.",
    image: "/asset-images/moniq-software-dev.png",
    icon: Cpu,
    href: "/iot",
  },
  {
    id: "04",
    title: "Digital Infrastructure & Networking",
    service: "Enterprise-grade networking, Fibre/Wi-Fi Mesh deployments, and server infrastructure management.",
    image: "/asset-images/moniq-network-systems.png",
    icon: Network,
    href: "/infrastructure",
  },
  {
    id: "05",
    title: "Smart Logistics & Asset Tracking",
    service: "Advanced GPS tracking solutions and fleet management systems with custom reporting and real-time mapping.",
    image: "/asset-images/moniq-gps-tracking.png",
    icon: Truck,
    href: "/logistics",
  },
];

export function ServicePillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for your Enterprise Tech solutions."
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-400 mb-3 md:mb-4 font-semibold">
            Engineering Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Core Technology Pillars
          </h2>
          <p className="max-w-3xl text-muted-foreground text-base md:text-lg leading-relaxed">
            We deploy high-performance engineering solutions designed for scale, 
            security, and operational intelligence for organizations across Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-sky-400/50 ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <pillar.icon size={24} />
                  </div>
                  <span className="text-4xl font-serif font-black text-foreground/5 select-none">
                    {pillar.id}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                  {pillar.service}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <motion.a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
                  >
                    Deploy Solution
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                  <a
                    href={pillar.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Technical Specs
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Nationwide Operations Card */}
          <div
            className="lg:col-span-1 flex flex-col justify-center p-8 rounded-2xl border border-sky-400/20 bg-sky-500/5"
          >
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
              Nationwide Operations
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Moniq Technologies provides nationwide deployment across Zimbabwe, serving major cities and industrial hubs with consistent engineering excellence.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Harare", "Bulawayo", "Mutare", "Gweru", "Kwekwe"].map((loc) => (
                <span key={loc} className="px-3 py-1 text-xs rounded-full bg-background border border-border text-foreground">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
