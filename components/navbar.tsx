"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const navItems = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#fleet" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { href: whatsappHref } = useQuoteWhatsApp(
    "Hi, I'd like a quote for Moniq Technologies."
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <motion.a
              href="/#top"
              className="flex items-center overflow-visible"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/images/logo.png"
                alt="Moniq Technologies logo"
                className="h-20 w-40 origin-left scale-[1.9] object-contain object-left"
              />
            </motion.a>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <motion.a
                      href={item.href}
                      className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.a>
            </div>

            <button
              className="p-2 text-foreground md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-3xl font-serif text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: 0.45 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}
