"use client";

import { motion } from "framer-motion";
import { Shield, Code, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Engineering-First",
    description:
      "We approach every problem with an engineer's mindset — systematic, thorough, and focused on long-term quality.",
  },
  {
    icon: Users,
    title: "Founder-Led",
    description:
      "Our leadership is hands-on. You work directly with people who understand both tech and business.",
  },
  {
    icon: Shield,
    title: "Real-World Solutions",
    description:
      "No theoretical frameworks that don't work in practice. We build things that solve actual problems.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Focused",
    description:
      "We don't push solutions looking for problems. We start with your challenges and work from there.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Built on Trust, <br />
              <span className="text-primary">Driven by Quality</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              We're not a massive agency with layers of account managers. 
              We're a focused team that takes pride in understanding your 
              business and delivering work that actually makes a difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Engineering-Driven</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Founder-Led</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Problem-Focused</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <value.icon size={20} />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
