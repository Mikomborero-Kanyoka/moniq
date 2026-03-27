"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="top"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale }}>
        <img
          src="/images/hero.png"
          alt="Printing and branding showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-24 md:pt-28"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs md:text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
            Printing and Branding Studio
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-5xl text-[clamp(2.4rem,6vw,4.75rem)] font-sans font-extrabold tracking-[-0.06em] text-balance leading-[0.95] mb-5 md:mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-foreground">If You Can Name It,</span>
          <span className="block text-foreground/35">We Can Brand It</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground mb-8 md:mb-12 px-4 md:px-0 text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Custom printing, branding, website development, and app builds for businesses, events, startups, and school projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#fleet"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          <motion.a
            href="https://wa.me/263785234975?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20printing%20and%20branding"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-border rounded-full text-foreground font-medium hover:bg-card/50 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <MessageCircle size={14} className="text-green-500 sm:hidden" />
              <MessageCircle size={16} className="text-green-500 hidden sm:block" />
            </span>
            Quote on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 max-w-xl mx-auto px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: "$2", label: "Plain tees" },
            { value: "6+", label: "Core services" },
            { value: "Dev", label: "Web + apps" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
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

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-8 bg-border"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-8 bg-border"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}
