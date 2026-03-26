"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const carCategories = [
  { value: "", label: "Select car category" },
  { value: "suv", label: "SUV / 4x4" },
  { value: "sedan", label: "Luxury Sedan" },
  { value: "hatchback", label: "Compact / Hatchback" },
  { value: "electric", label: "Electric" },
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column - Info */}
          <div>
            <motion.span
              className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-accent mb-3 md:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Ride
              <br />
              <span className="text-accent">in Style?</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base md:text-lg mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Send us a message and our team will set up your luxury car experience in under 10 minutes. We&apos;re available 24/7.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: MapPin, label: "Location", value: "Harare, Zimbabwe" },
                { icon: Phone, label: "Phone", value: "+263 77 123 4567" },
                { icon: Mail, label: "Email", value: "hello@luxecar.co.zw" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-sm md:text-base text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-6 pt-6 md:mt-10 md:pt-10 border-t border-border"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Follow us</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Instagram", "Twitter", "Facebook"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-card border border-border rounded-full text-xs md:text-sm text-foreground hover:border-accent/50 transition-colors flex items-center gap-1 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                    <ArrowUpRight size={12} className="md:hidden group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <ArrowUpRight size={14} className="hidden md:block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 md:px-4 py-3 md:py-3.5 bg-background border border-border rounded-lg md:rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 md:px-4 py-3 md:py-3.5 bg-background border border-border rounded-lg md:rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 md:px-4 py-3 md:py-3.5 bg-background border border-border rounded-lg md:rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="sr-only">Car Category</label>
                  <select
                    id="category"
                    className="w-full px-3 md:px-4 py-3 md:py-3.5 bg-background border border-border rounded-lg md:rounded-xl text-sm md:text-base text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                    required
                  >
                    {carCategories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
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
                  placeholder="Tell us about your trip..."
                  className="w-full px-3 md:px-4 py-3 md:py-3.5 bg-background border border-border rounded-lg md:rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 md:py-4 bg-foreground text-background text-sm md:text-base font-medium rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/90 disabled:opacity-70 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Request Quote
                    <Send size={16} className="md:hidden" />
                    <Send size={18} className="hidden md:block" />
                  </>
                )}
              </motion.button>
              <p className="mt-3 md:mt-4 text-center text-xs md:text-sm text-muted-foreground">
                {"We'll respond within 10 minutes during business hours"}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
