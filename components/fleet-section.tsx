"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Camera,
  FileText,
  GraduationCap,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const services = [
  {
    name: "Technical Security",
    type: "Pillar 01",
    detail: "Advanced CCTV/NVR installation, smart hardware monitoring, and basic sensor protection for homes, offices, and shops.",
    href: "/security",
    icon: Camera,
    accentIcon: ShieldCheck,
    features: ["CCTV and NVR installation", "Smart hardware monitoring", "Basic sensor security"],
  },
  {
    name: "Digital Infrastructure",
    type: "Pillar 02",
    detail: "Custom web systems, enterprise networking support, and professional domain email for growing teams.",
    href: "/web",
    icon: ServerCog,
    accentIcon: Mail,
    features: ["Custom web development", "Professional enterprise email", "Enterprise networking support"],
  },
  {
    name: "Academic Development",
    type: "Pillar 03",
    detail: "Final-year technical project support, system design thinking, and clear documentation for student delivery.",
    href: "/academic",
    icon: GraduationCap,
    accentIcon: FileText,
    features: ["Final-year project support", "System design guidance", "Documentation assistance"],
  },
];

export function FleetSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  return (
    <section ref={containerRef} id="fleet" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-400 mb-3 md:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Solutions
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Core Technology Pillars
          </h2>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-7">
            Moniq Technologies now centers on practical security, dependable infrastructure,
            and academic technical support for businesses, institutions, and student builders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card p-5 md:p-7"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_38%)]" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                    <service.icon size={28} />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground">
                    <service.accentIcon size={18} />
                  </div>
                </div>

                <span className="text-xs uppercase tracking-wider text-sky-400">
                  {service.type}
                </span>
                <h3 className="mt-2 text-2xl font-serif font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-muted-foreground">
                  {service.detail}
                </p>

                <div className="mt-6 space-y-3 border-t border-border/70 pt-5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-sky-400">
                        <Network size={14} />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-foreground py-3 text-sm font-medium text-background transition-colors group/btn md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </motion.a>
                <a
                  href={service.href}
                  className="mt-3 inline-flex text-sm text-sky-400 transition-colors hover:text-sky-300"
                >
                  Learn more about {service.name.toLowerCase()}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-sky-400 transition-colors group"
            whileHover={{ x: 5 }}
          >
            Need a tailored security, infrastructure, or academic package?
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
