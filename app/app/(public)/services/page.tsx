"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";
import Link from "next/link";
import {
  Code,
  Truck,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    category: "Development",
    title: "Web & App Development",
    description: "Custom web applications and mobile solutions built with modern technologies. From MVPs to enterprise platforms.",
    features: ["React & TypeScript", "Mobile-first design", "API development", "Cloud deployment"],
    color: "primary",
    link: "/services/web-development",
  },
  {
    icon: Truck,
    category: "Operations",
    title: "Fleet & Operational Systems",
    description: "End-to-end systems for fleet management, logistics, and operational control. Real-time tracking and analytics.",
    features: ["Vehicle tracking", "Route optimization", "Maintenance scheduling", "Compliance management"],
    color: "primary",
    link: "/services/fleet-systems",
  },
  {
    icon: TrendingUp,
    category: "AngaNova",
    title: "Branding & Growth Strategy",
    description: "Strategic positioning, brand development, and growth systems. Clarity before execution.",
    features: ["Brand strategy", "Market positioning", "Growth frameworks", "Visual identity"],
    color: "accent",
    link: "/services/branding-growth",
  },
  {
    icon: Sparkles,
    category: "Innovation",
    title: "Design & AI Solutions",
    description: "Product design, intelligent automation, and AI-powered tools that make your operations smarter.",
    features: ["UX/UI design", "AI integration", "Process automation", "Data analytics"],
    color: "primary",
    link: "/services/design-ai",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services | AngaCore Labs"
        description="Web & app development, fleet management systems, branding & growth strategy, and AI solutions. Services that build systems and drive growth for modern businesses."
        canonical="https://angacorelabs.com/services"
        keywords="web development, app development, fleet management, branding services, AI solutions, business software, Kenya"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-center">
          <ParticleNetwork />
          <div className="absolute inset-0 -z-5 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />

          <div className="container mx-auto container-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Services
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Services That Build{" "}
                <span className="text-primary">Systems</span> and Drive{" "}
                <span className="text-accent">Growth</span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                From technology platforms to brand strategy, we offer focused
                services that solve real problems for growing businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 lg:p-10 border border-border hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary"
                      }`}>
                      <service.icon size={28} />
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${service.color === "accent" ? "text-accent" : "text-primary"
                        }`}>
                        {service.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant={service.color === "accent" ? "accent" : "default"}
                    className="group"
                    asChild
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 lg:p-16 text-center"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Let's have a conversation about your challenges. We'll help you
                figure out what you need — no obligations.
              </p>
              <Button variant="hero" size="xl" className="group" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
