// ProcessSection.tsx

"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand",
    description:
      "We start by listening. Understanding your challenges, goals, and the real problems you're trying to solve.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We design the right system or strategy — no bloat, no unnecessary complexity. Just what works.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description:
      "We build and refine iteratively, keeping you involved and ensuring quality at every step.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Support",
    description:
      "We don't disappear after launch. We support your growth and help you adapt as you scale.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A straightforward process focused on understanding your needs 
            and delivering real results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border h-full relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-display font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <step.icon size={24} />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
