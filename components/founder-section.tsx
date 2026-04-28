"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FounderSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <blockquote className="mx-auto max-w-4xl">
            <p className="mb-10 text-xl font-serif italic text-foreground md:text-2xl leading-relaxed">
              {`"Engineering security, infrastructure, and innovation for Zimbabwean businesses and organizations who need dependable delivery."`}
            </p>
            <footer className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
              <div className="flex items-center gap-4 text-left">
                <img
                  src="/images/miko.jpg"
                  alt="Mikomborero Kanyoka"
                  className="h-14 w-14 rounded-full object-cover border-2 border-sky-400/20"
                />
                <div>
                  <cite className="not-italic font-bold text-foreground">
                    Mikomborero Kanyoka
                  </cite>
                  <p className="text-sm text-muted-foreground font-medium">Co-founder, CEO & Software Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <img
                  src="/images/solomon.jpg"
                  alt="Solomon M. Moyo"
                  className="h-14 w-14 rounded-full object-cover border-2 border-sky-400/20"
                />
                <div>
                  <cite className="not-italic font-bold text-foreground">
                    Solomon M. Moyo
                  </cite>
                  <p className="text-sm text-muted-foreground font-medium">Co-founder, COO & Network Engineer</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
