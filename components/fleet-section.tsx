"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Package, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Marketing Automation (Moniq Pulse)",
    type: "Digital Growth",
    detail: "24/7 AI-driven lead generation",
    price: "From $5",
    period: "week",
    image: "/images/pulse.png",
    features: ["Social group posting", "Lead generation", "24/7 AI-driven"],
  },
  {
    name: "Digital Infrastructure",
    type: "Enterprise Solutions",
    detail: "Custom web and email systems",
    price: "Custom",
    period: "quote",
    image: "/images/web.png",
    features: ["Web development", "Enterprise email", "Management systems"],
  },
  {
    name: "Technical Security",
    type: "Technical Systems",
    detail: "Advanced surveillance & mesh",
    price: "Custom",
    period: "quote",
    image: "/images/security.png",
    features: ["CCTV/NVR systems", "Network mesh", "Smart monitoring"],
  },
];

export function FleetSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      id="fleet"
      className="relative py-32 bg-background"
    >
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
          <p className="max-w-xl text-muted-foreground text-base md:text-lg">
            Scalable automation, robust digital infrastructure, and advanced technical security tailored for corporate excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-card border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 sm:h-56 md:h-80 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <motion.div
                  className="absolute top-3 right-3 md:top-4 md:right-4 px-3 md:px-4 py-1.5 md:py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15 }}
                >
                  <span className="text-lg md:text-xl font-bold text-foreground">{service.price}</span>
                  <span className="text-muted-foreground text-xs md:text-sm">/{service.period}</span>
                </motion.div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-sky-400">
                      {service.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-1">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-muted-foreground text-sm mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <Package size={14} className="md:hidden" />
                    <Package size={16} className="hidden md:block" />
                    <span className="text-xs md:text-sm">{service.detail}</span>
                  </div>
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  <span className="hidden sm:inline-flex px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {service.features[2]}
                  </span>
                </div>

                <motion.a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-foreground text-background font-medium rounded-lg md:rounded-xl text-sm md:text-base group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </motion.a>
              </div>

              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? "inset 0 0 100px rgba(59, 130, 246, 0.14)"
                      : "inset 0 0 0px rgba(59, 130, 246, 0)",
                }}
                transition={{ duration: 0.3 }}
              />
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
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-sky-400 transition-colors group"
            whileHover={{ x: 5 }}
          >
            Need custom automation or security?
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
