"use client";

import { motion } from "framer-motion";
import { Cog, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Cog,
    title: "Systems & Software",
    description:
      "We engineer robust, scalable foundations for your enterprise.",
    items: [
      "Web & mobile applications",
      "Backend systems",
      "Logistics & education platforms",
      "Custom enterprise software",
    ],
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    subtitle: "AngaNova",
    description:
      "We amplify your voice with data-driven creativity.",
    items: [
      "Branding & positioning",
      "Performance marketing",
      "Content & growth systems",
      "AI-powered campaigns",
    ],
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Design & AI",
    description:
      "We streamline operations with intelligent automation.",
    items: [
      "AI assistants & chatbots",
      "Workflow automation",
      "Internal intelligence tools",
      "Data analytics integration",
    ],
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technology, design, and strategic thinking to build
            solutions that actually work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group"
            >
              <Link href="/services" className="block h-full">
                <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${pillar.color === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                      }`}
                  >
                    <pillar.icon size={28} />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  {pillar.subtitle && (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md mb-3">
                      {pillar.subtitle}
                    </span>
                  )}

                  <p className="text-muted-foreground mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 size={16} className={`mt-0.5 ${pillar.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
