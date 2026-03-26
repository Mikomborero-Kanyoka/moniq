"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#top"
              className="flex flex-col"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-bold tracking-[0.2em] text-foreground font-serif">
                LUXE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Car Rentals
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <motion.a
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
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
        </nav>
      </motion.div>
    </>
  );
}
