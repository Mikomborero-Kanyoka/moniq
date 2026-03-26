"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Roadside Assistance", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Insurance", href: "#" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="inline-block mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-foreground font-serif">
                LUXE
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Car Rentals
              </span>
            </a>
            <p className="text-sm md:text-base text-muted-foreground max-w-xs mb-4 md:mb-6">
              Premium car rentals in Zimbabwe. Experience luxury, comfort, and exceptional service on every journey.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">Available 24/7</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-3 md:mb-4">
              Support
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-3 md:mb-4">
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Luxe Car Rentals. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors group"
              whileHover={{ y: -2 }}
            >
              Back to top
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
