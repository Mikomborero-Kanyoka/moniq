"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Gauge, Fuel, ArrowRight } from "lucide-react";

// Car fleet data - images are stored in public/images/
const cars = [
  {
    name: "Toyota Fortuner GD6",
    type: "SUV",
    seats: 7,
    price: "$160",
    period: "day",
    image: "/images/fortuna-gd6.png",
    features: ["4x4", "Automatic", "Diesel"],
  },
  {
    name: "Toyota Fortuner D4D",
    type: "SUV",
    seats: 7,
    price: "$120",
    period: "day",
    image: "/images/fortuna-d4d.png",
    features: ["4x4", "Manual", "Diesel"],
  },
  {
    name: "Nissan Note",
    type: "Hatchback",
    seats: 5,
    price: "$40",
    period: "day",
    image: "/images/nissan-note.png",
    features: ["Compact", "Automatic", "Petrol"],
  },
  {
    name: "Mazda CX-5",
    type: "SUV",
    seats: 5,
    price: "$70",
    period: "day",
    image: "/images/mazda-cx5.png",
    features: ["AWD", "Automatic", "Petrol"],
  },
];

export function FleetSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      id="fleet"
      className="relative py-32 bg-background"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-accent mb-3 md:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Collection
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Premium Fleet
          </h2>
          <p className="max-w-xl text-muted-foreground text-base md:text-lg">
            Discover our handpicked selection of luxury vehicles, each maintained to perfection for your comfort and style.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cars.map((car, index) => (
            <motion.article
              key={car.name}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-card border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-80 overflow-hidden">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Price Tag */}
                <motion.div
                  className="absolute top-3 right-3 md:top-4 md:right-4 px-3 md:px-4 py-1.5 md:py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15 }}
                >
                  <span className="text-lg md:text-xl font-bold text-foreground">{car.price}</span>
                  <span className="text-muted-foreground text-xs md:text-sm">/{car.period}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent">
                      {car.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-1">
                      {car.name}
                    </h3>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-muted-foreground text-sm mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="md:hidden" />
                    <Users size={16} className="hidden md:block" />
                    <span className="text-xs md:text-sm">{car.seats} seats</span>
                  </div>
                  {car.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  <span className="hidden sm:inline-flex px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {car.features[2]}
                  </span>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-foreground text-background font-medium rounded-lg md:rounded-xl text-sm md:text-base group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reserve Now
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? "inset 0 0 100px rgba(200, 150, 80, 0.1)"
                      : "inset 0 0 0px rgba(200, 150, 80, 0)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
            whileHover={{ x: 5 }}
          >
            View All Vehicles
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
