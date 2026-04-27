"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Camera, Code2, GraduationCap, ShieldCheck } from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const pricingTiers = [
  {
    name: "Websites",
    price: "$50",
    period: "starting",
    description: "Professional 1-page landing and branded email setup.",
    icon: Code2,
    features: [
      "Business-ready landing page",
      "Mobile-first layout",
      "Professional email onboarding",
    ],
  },
  {
    name: "Camera Settings/Maintenance",
    price: "$50",
    period: "starting",
    description: "System optimization, setup, and maintenance for installed cameras.",
    icon: Camera,
    features: [
      "Camera and recorder setup",
      "Fault checks and tuning",
      "Performance optimization",
    ],
    highlighted: true,
  },
  {
    name: "Basic Sensor Security",
    price: "$120",
    period: "starting",
    description: "Smart security and intrusion detection for smaller properties.",
    icon: ShieldCheck,
    features: [
      "Entry-level sensor package",
      "Intrusion detection setup",
      "Basic smart alert configuration",
    ],
  },
  {
    name: "Academic Projects",
    price: "Custom",
    period: "quote",
    description: "Quoted according to complexity, scope, and technical depth.",
    icon: GraduationCap,
    features: [
      "Project planning support",
      "System design guidance",
      "Technical documentation help",
    ],
  },
];

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  return (
    <section ref={containerRef} id="pricing" className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-sky-400 sm:text-sm md:mb-4">
            Transparent Pricing
          </span>
          <h2 className="mb-4 text-3xl font-serif font-bold text-foreground sm:text-4xl md:mb-6 md:text-5xl">
            Transparent Starting Rates
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Straightforward entry pricing for common requests, with tailored quotes for
            bigger deployments and more advanced academic work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-3xl border p-8 ${
                tier.highlighted
                  ? "border-sky-400 bg-background shadow-2xl shadow-sky-500/10"
                  : "border-border bg-background/50"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-background">
                  Popular Starting Point
                </div>
              )}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                <tier.icon size={22} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-foreground">{tier.name}</h3>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-serif font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mb-8 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mb-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sky-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
