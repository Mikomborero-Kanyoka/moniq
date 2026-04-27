"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale }}>
        <img
          src="/images/hero.png"
          alt="Moniq Technologies security and infrastructure showcase"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-5 text-center pt-24 md:px-6 md:pt-28 lg:px-8"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm md:px-4 md:py-2 md:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse md:h-2 md:w-2" />
            Infrastructure, Security, and Academic Systems
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto mb-5 max-w-5xl text-[clamp(2.4rem,6vw,4.75rem)] font-sans font-extrabold leading-[0.95] tracking-[-0.06em] text-balance md:mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-foreground">Engineering Security,</span>
          <span className="block text-foreground/35">Infrastructure, and Innovation.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-3xl px-2 text-sm text-muted-foreground text-pretty md:mb-12 md:px-0 md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          High-end CCTV Surveillance, Enterprise Networking, Professional Web Systems,
          and Technical Academic Support.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#fleet"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 font-medium text-background transition-all hover:bg-foreground/90 sm:w-auto sm:px-8 sm:py-4"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium text-foreground transition-all hover:bg-card/50 group sm:w-auto sm:px-8 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 transition-colors group-hover:bg-green-500/30 sm:h-10 sm:w-10">
              <MessageCircle size={14} className="text-green-500 sm:hidden" />
              <MessageCircle size={16} className="hidden text-green-500 sm:block" />
            </span>
            Quote on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 px-2 md:mt-20 md:gap-8 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: "$50", label: "Starting rate" },
            { value: "3", label: "Core pillars" },
            { value: "Mobile", label: "Quote-first UX" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="text-2xl font-serif font-bold text-foreground sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-8 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-8 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}
