"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Technology Pillars", href: "/#services" },
    { label: "Regional Operations", href: "/#services" },
    { label: "Our Team", href: "/#contact" },
  ],
  contact: [
    { label: "Enterprise Enquiries", href: "/#contact" },
    { label: "Consultation", href: "/#contact" },
    { label: "Technical Support", href: "/#contact" },
  ],
  support: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Security", href: "/#services" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-[#050709]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-14">
          <div className="mb-10 md:hidden">
            <a href="/#top" className="inline-block overflow-visible">
              <img
                src="/images/logo.png"
                alt="Moniq Technologies logo"
                className="h-16 origin-left scale-[1.7] object-contain object-left"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Engineering AI-enhanced security, industrial IoT, and enterprise infrastructure 
              solutions for businesses across Zimbabwe.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">Open for custom jobs</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:hidden">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                About
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Contact
              </h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-xs transition-colors ${
                        link.label === "Contact"
                          ? "text-foreground underline underline-offset-4"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-12">
            <div>
              <a href="/#top" className="mb-5 inline-block overflow-visible">
                <img
                  src="/images/logo.png"
                  alt="Moniq Technologies logo"
                  className="h-18 w-36 origin-left scale-[1.7] object-contain"
                />
              </a>
              <p className="max-w-sm text-base leading-9 text-muted-foreground">
                Engineering AI-enhanced security, industrial IoT, and enterprise infrastructure 
                solutions for businesses across Zimbabwe.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Open for custom jobs</span>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                About Us
              </h3>
              <ul className="space-y-5">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Contact
              </h3>
              <ul className="space-y-5">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-base transition-colors ${
                        link.label === "Contact"
                          ? "text-foreground underline underline-offset-4"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Support
              </h3>
              <ul className="space-y-5">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 md:py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row md:gap-4">
            <p className="text-center text-xs text-muted-foreground sm:text-left md:text-sm">
              © 2026 Moniq Technologies. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
              whileHover={{ y: -2 }}
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
