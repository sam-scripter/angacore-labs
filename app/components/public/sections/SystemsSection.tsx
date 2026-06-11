// SystemsSection.tsx

"use client";

import { motion } from "framer-motion";
import { Eye, Settings, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    description: "See everything happening across your operations in real-time.",
  },
  {
    icon: Settings,
    title: "Control",
    description: "Manage resources, assets, and workflows from a single dashboard.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Automate repetitive tasks and eliminate operational bottlenecks.",
  },
  {
    icon: TrendingUp,
    title: "Growth Ready",
    description: "Systems built to scale as your business grows.",
  },
];

export function SystemsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Featured
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              AngaCore <span className="text-primary">Systems</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Custom-built operational systems for businesses that need more than
              spreadsheets. From recruitment platforms to asset management systems,
              we build software that gives your team complete visibility and control.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <benefit.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link href="/systems" className="group">
                Explore Systems
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/fleet-management.png"
                  alt="Fleet management dashboard showing connected vehicles and real-time tracking"
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Active</div>
                    <div className="font-semibold">24 Vehicles</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
