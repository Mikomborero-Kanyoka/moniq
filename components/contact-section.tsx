"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildQuoteWhatsAppUrl } from "@/lib/quote-whatsapp";
import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

const serviceCategories = [
  { value: "", label: "Select service" },
  { value: "Technical Security", label: "Technical Security" },
  { value: "Digital Infrastructure", label: "Digital Infrastructure" },
  { value: "Academic Development", label: "Academic Development" },
  { value: "Other Inquiry", label: "Other Inquiry" },
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { href: quickWhatsAppHref, number: quoteWhatsAppNumber } = useQuoteWhatsApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const composedMessage = [
      "Hi Moniq Technologies, I'd like a quote.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.category || "Not specified"}`,
      `Project details: ${formData.message || "Please contact me with available options."}`,
    ].join("\n");

    window.open(
      buildQuoteWhatsAppUrl(quoteWhatsAppNumber, composedMessage),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section ref={containerRef} id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 md:gap-16">
          <div>
            <motion.span
              className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-sky-400 sm:text-sm md:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl font-serif font-bold text-foreground sm:text-4xl md:mb-6 md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s Design
              <br />
              <span className="text-sky-400">or Secure Your Next Build</span>
            </motion.h2>
            <motion.p
              className="mb-6 text-base text-muted-foreground md:mb-10 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell us about your security, infrastructure, or academic support needs and
              we&apos;ll move the conversation straight into WhatsApp with the right context.
            </motion.p>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: MapPin, label: "Location", value: "Harare, Zimbabwe" },
                { icon: Phone, label: "Phone", value: "0711 942 294" },
                { icon: Mail, label: "Email", value: "info@moniq.co.zw" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-card md:h-12 md:w-12 md:rounded-xl">
                    <item.icon size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground md:text-sm">{item.label}</p>
                    <p className="text-sm font-medium text-foreground md:text-base">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 border-t border-border pt-6 md:mt-10 md:pt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-3 text-xs text-muted-foreground md:mb-4 md:text-sm">Reach us fast</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  { label: "WhatsApp", href: quickWhatsAppHref },
                  { label: "Email", href: "mailto:info@moniq.co.zw" },
                  { label: "Call", href: "tel:0711942294" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition-colors hover:border-sky-400/50 md:px-4 md:py-2 md:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.label}
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:hidden"
                    />
                    <ArrowUpRight
                      size={14}
                      className="hidden transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-5 md:rounded-3xl md:p-8"
            >
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mb-4 md:gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 md:rounded-xl md:px-4 md:py-3.5 md:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 md:rounded-xl md:px-4 md:py-3.5 md:text-base"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mb-4 md:gap-4">
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData((current) => ({ ...current, phone: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 md:rounded-xl md:px-4 md:py-3.5 md:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="sr-only">Service Type</label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData((current) => ({ ...current, category: e.target.value }))}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground transition-all focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 md:rounded-xl md:px-4 md:py-3.5 md:text-base"
                    required
                  >
                    {serviceCategories.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))}
                  placeholder="Tell us about your site, camera setup, network, or academic project..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 md:rounded-xl md:px-4 md:py-3.5 md:text-base"
                />
              </div>

              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-foreground py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 md:rounded-xl md:py-4 md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Quote on WhatsApp
                <MessageCircle size={16} className="md:hidden" />
                <MessageCircle size={18} className="hidden md:block" />
              </motion.button>

              <p className="mt-3 text-center text-xs text-muted-foreground md:mt-4 md:text-sm">
                {"This opens WhatsApp with your enquiry details so the team can respond faster during business hours."}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
