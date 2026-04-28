"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

export function HeroSection() {
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#050709]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero.png"
          alt="Moniq Technologies security and infrastructure showcase"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-[#050709]/20 to-transparent" />
      </div>

      <div
        className="relative z-10 mx-auto max-w-7xl px-5 text-center pt-24 md:px-6 md:pt-28 lg:px-8"
      >
        <div className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm md:px-4 md:py-2 md:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse md:h-2 md:w-2" />
            Nationwide Enterprise Technology & Engineering
          </span>
        </div>

        <h1 className="mx-auto mb-5 max-w-5xl text-[clamp(1.8rem,4vw,3.2rem)] font-sans font-extrabold leading-[1.1] tracking-[-0.04em] text-balance md:mb-7">
          <span className="block text-foreground">We Engineer Security,</span>
          <span className="block text-foreground/35">Deploy Infrastructure & Scale Systems.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl px-2 text-sm text-muted-foreground text-pretty md:mb-12 md:px-0 md:text-base leading-relaxed">
          AI-Enhanced Security, Industrial IoT, Enterprise Software Development,
          and Scalable Digital Infrastructure across Zimbabwe.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4 md:px-0">
          <motion.a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 font-medium text-background transition-all hover:bg-foreground/90 sm:w-auto sm:px-8 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Pillars
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
        </div>

        <div
          className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 px-2 md:mt-20 md:gap-8 md:px-0"
        >
          {[
            { value: "Zimbabwe", label: "Nationwide Reach" },
            { value: "5", label: "Core pillars" },
            { value: "AI-Driven", label: "Technology" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-2xl font-serif font-bold text-foreground sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>

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
