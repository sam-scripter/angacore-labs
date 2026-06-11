// AngaNovaSection.tsx

"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lightbulb,
    title: "Clarity First",
    description: "We help you understand your position before making any moves.",
  },
  {
    icon: Target,
    title: "Strategic Positioning",
    description: "Find and own the space where your business can truly win.",
  },
  {
    icon: Rocket,
    title: "Growth Systems",
    description: "Build repeatable processes that drive sustainable growth.",
  },
];

export function AngaNovaSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="/assets/growth-branding.png"
                alt="Abstract growth and branding concept with upward flowing curves"
                className="w-full h-auto max-h-[500px] object-cover rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Growth Division
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Introducing <span className="text-accent">AngaNova</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              The growth and branding arm of AngaCore Labs. We help founders and
              businesses gain the clarity they need before scaling — focusing on
              strategy first, execution second.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link href="/anganova" className="group">
                Learn About AngaNova
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
