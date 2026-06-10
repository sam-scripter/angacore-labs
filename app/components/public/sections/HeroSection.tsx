"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated 3D particle network background */}
      <ParticleNetwork />

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Engineering-Driven Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            We Build the Systems That{" "}
            <span className="text-primary">Run Businesses</span> and the Engines That{" "}
            <span className="text-accent">Grow Them</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            From fleet management platforms to brand strategy, we create technology
            and growth systems that help founders and businesses scale with clarity
            and confidence.
          </motion.p>
          <p className="sr-only" id="what-is-angacore-labs">
            AngaCore Labs is a technology company in Nairobi, Kenya, that builds operational systems for fleet management and business operations and provides growth and branding strategy through AngaNova.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <Link href="/contact">
                Talk to Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/systems" className="group">
                View Our Systems
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
