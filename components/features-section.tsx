"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Camera,
  CheckCircle2,
  FileCode2,
  GraduationCap,
  Network,
  Server,
} from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const features = [
  {
    icon: Camera,
    title: "Technical Security",
    description: "Advanced CCTV/NVR deployment, high-visibility surveillance, and basic sensor-based protection.",
  },
  {
    icon: Server,
    title: "Digital Infrastructure",
    description: "Professional web systems, business email, and dependable infrastructure support for serious operations.",
  },
  {
    icon: GraduationCap,
    title: "Academic Development",
    description: "Technical project support, system design guidance, and clean documentation for student delivery.",
  },
];

const benefits = [
  "CCTV and NVR rollouts",
  "Network and hardware oversight",
  "Landing pages and business websites",
  "Professional domain email",
  "System design for student projects",
  "Clear technical documentation",
];

const capabilityIcons = [Network, Camera, FileCode2];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  return (
    <section ref={containerRef} id="features" className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 md:gap-16">
          <div>
            <motion.span
              className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-sky-400 sm:text-sm md:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl font-serif font-bold text-foreground sm:text-4xl md:mb-6 md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Secure Operations, Stronger Systems
            </motion.h2>
            <motion.p
              className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Moniq Technologies is built for organizations and students who need
              dependable security, clean digital systems, and grounded technical execution.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
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
                  <CheckCircle2 size={16} className="flex-shrink-0 text-sky-400" />
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
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-foreground px-8 py-4 font-medium text-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative rounded-xl border border-border bg-background p-4 transition-colors hover:border-sky-400/50 md:rounded-2xl md:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 transition-colors group-hover:bg-sky-500/20 md:mb-4 md:h-12 md:w-12 md:rounded-xl">
                  <feature.icon size={20} className="text-sky-400 md:hidden" />
                  <feature.icon size={24} className="hidden text-sky-400 md:block" />
                </div>

                <h3 className="mb-1 text-sm font-semibold text-foreground md:mb-2 md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-sky-400 md:left-6 md:right-6"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            <motion.div
              className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-4 sm:col-span-2 xl:col-span-3 md:rounded-2xl md:p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-300">What We Deliver</p>
                  <h3 className="mt-2 text-xl font-serif font-bold text-foreground md:text-2xl">
                    One partner for field hardware, online systems, and technical project execution.
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {capabilityIcons.map((Icon, iconIndex) => (
                    <span
                      key={iconIndex}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/20 bg-background/70 text-sky-300"
                    >
                      <Icon size={18} />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <blockquote className="mx-auto max-w-4xl">
            <p className="mb-10 text-2xl font-serif italic text-foreground md:text-3xl">
              {`"Engineering security, infrastructure, and innovation for businesses and builders who need dependable delivery."`}
            </p>
            <footer className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
              <div className="flex items-center gap-4 text-left">
                <img
                  src="/images/miko.jpg"
                  alt="Mikomborero Kanyoka"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-medium text-foreground">
                    Mikomborero Kanyoka
                  </cite>
                  <p className="text-sm text-muted-foreground">Co-founder, CEO & Software Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <img
                  src="/images/solomon.jpg"
                  alt="Solomon M. Moyo"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-medium text-foreground">
                    Solomon M. Moyo
                  </cite>
                  <p className="text-sm text-muted-foreground">Co-founder, COO & Network Engineer</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
