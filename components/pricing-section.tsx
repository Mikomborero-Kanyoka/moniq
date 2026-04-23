"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "The Starter Boost",
    price: "$5",
    period: "week",
    description: "Ideal for basic visibility and consistent group presence.",
    features: [
      "25 daily automated posts",
      "High-traffic group targeting",
      "Standard support",
    ],
  },
  {
    name: "The Professional Monitor",
    price: "$10",
    period: "week",
    description: "Advanced automation with real-time lead monitoring.",
    features: [
      "All Starter Boost features",
      "AI-powered comment monitoring",
      "Instant WhatsApp lead alerts",
    ],
    highlighted: true,
  },
  {
    name: "The Enterprise Engine",
    price: "$20",
    period: "week",
    description: "Complete hands-off sales and management solution.",
    features: [
      "Full 24/7 AI Sales Agent",
      "Complete Page Management",
      "Weekly Analytics Reports",
    ],
  },
];

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative py-32 bg-card overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-400 mb-3 md:mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Service Bundles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative p-8 rounded-3xl border ${
                tier.highlighted
                  ? "bg-background border-sky-400 shadow-2xl shadow-sky-500/10"
                  : "bg-background/50 border-border"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-400 text-background text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-serif font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground text-sm">/{tier.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                {tier.description}
              </p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
