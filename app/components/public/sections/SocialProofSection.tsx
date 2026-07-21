// SocialProofSection.tsx
// Since AngaCore Labs doesn't yet have formal client testimonials, this section
// builds trust through verified project outcomes instead — concrete, checkable facts
// rather than quotes. This is more credible for a young company than vague claims.

"use client";

import { motion } from "framer-motion";
import { Building2, Truck, GraduationCap } from "lucide-react";

const outcomes = [
  {
    icon: Building2,
    stat: "1 Government Institution",
    description:
      "Replaced fully manual asset tracking and service desk processes for the Kenya School of Government with a live ICT platform.",
  },
  {
    icon: Truck,
    stat: "24+ Vehicles Tracked",
    description:
      "Built a county government fleet system replacing paper-based fuel and repair requisitions with route-based digital tracking.",
  },
  {
    icon: GraduationCap,
    stat: "6 Production Systems",
    description:
      "Shipped six live systems across logistics, education, and finance — each solving a real operational problem for real users.",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Proven in production, not just proposed
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.stat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <outcome.icon size={22} />
              </div>
              <p className="font-display text-xl font-bold mb-2">{outcome.stat}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}