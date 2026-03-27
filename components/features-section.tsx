"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, CarFront, Scissors, Globe, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "T-Shirts, Hoodies and Plain Tees",
    description: "Branded apparel plus plain t-shirts from $2 for teams, events, resale, uniforms, and everyday wear.",
  },
  {
    icon: CarFront,
    title: "Caps, Cars and Glass Branding",
    description: "Brand caps, vehicles, shopfront glass, doors, and windows with clean, durable graphics that stand out.",
  },
  {
    icon: Scissors,
    title: "Precision Vinyl Cutting",
    description: "Sharp-cut decals, lettering, stickers, and signage pieces prepared to fit your surface or project.",
  },
  {
    icon: Globe,
    title: "Websites and Custom Apps",
    description: "We also build websites, custom apps, and school project solutions for clients who need digital work too.",
  },
];

const benefits = [
  "Plain tees from $2",
  "Caps and promo wear",
  "Vehicle branding",
  "Glass decals",
  "Websites and apps",
  "School projects too",
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative py-32 bg-card overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <motion.span
              className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-accent mb-3 md:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Why Print Here
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Print, Brand and Build
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From single shirts to full storefront branding and digital builds, we keep the process simple and the final result clean, useful, and ready to represent your brand well.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-foreground text-background font-medium rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border hover:border-accent/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={20} className="md:hidden text-accent" />
                  <feature.icon size={24} className="hidden md:block text-accent" />
                </div>

                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6 h-0.5 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif text-foreground mb-6 italic">
              {`"We help brands show up properly in print and online, from plain tees and vinyl cutting to custom websites and apps built with care."`}
            </p>
            <footer className="flex items-center justify-center gap-4">
              <img
                src="/images/miko.jpg"
                alt="Owner portrait"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <cite className="not-italic font-medium text-foreground">
                  Mikomborero Kanyoka
                </cite>
                <p className="text-sm text-muted-foreground">Owner, Software Engineer</p>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
