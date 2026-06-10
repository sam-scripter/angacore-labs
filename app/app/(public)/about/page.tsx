"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";
import { ArrowRight, Code, Users, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

const aboutFaq = [
  {
    question: "What is AngaCore Labs?",
    answer: "AngaCore Labs is an engineering-driven technology company based in Nairobi, Kenya. We build operational systems for fleet management and business operations, and provide growth and branding strategy through our AngaNova division. We help businesses scale with clarity and confidence."
  },
  {
    question: "Where is AngaCore Labs located?",
    answer: "AngaCore Labs is based in Nairobi, Kenya. We work with clients locally and internationally."
  },
  {
    question: "What services does AngaCore Labs offer?",
    answer: "We offer two main areas: AngaCore Systems (custom operational systems for fleet management, resource tracking, and business operations) and AngaNova (growth strategy, branding, and brand development for founders and businesses)."
  },
  {
    question: "What is AngaNova?",
    answer: "AngaNova is the growth and branding division of AngaCore Labs. It provides strategic positioning, brand development, and growth systems that create clarity before execution."
  },
  {
    question: "How do I contact AngaCore Labs?",
    answer: "You can reach AngaCore Labs by email at hello@angacorelabs.com or through the contact form at angacorelabs.com/contact."
  }
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": aboutFaq.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer
    }
  }))
};

const values = [
  {
    icon: Code,
    title: "Engineering-First",
    description: "We approach problems with an engineer's mindset. Systematic, thorough, and focused on building things that last.",
  },
  {
    icon: Users,
    title: "Founder-Led",
    description: "Our leadership stays hands-on. You work directly with people who understand both technology and business.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Focused",
    description: "We don't push solutions looking for problems. We start with your challenges and work from there.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the outcomes we create for our clients, not by the hours we bill.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | AngaCore Labs"
        description="AngaCore Labs is an engineering-driven company that builds operational systems and growth strategies for businesses ready to scale. Learn about our story, values, and mission."
        canonical="https://angacorelabs.com/about"
        structuredData={faqStructuredData}
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
                About Us
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Building Things That <span className="text-primary">Actually Work</span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                AngaCore Labs is an engineering-driven company that builds
                operational systems and growth strategies for businesses ready
                to scale.
              </p>
              <p className="sr-only" id="what-is-angacore-labs">
                AngaCore Labs is a technology company in Nairobi, Kenya. We build the systems that run businesses—such as fleet management and operations platforms—and the engines that grow them through our AngaNova division, which provides branding and growth strategy for founders and scaling companies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AngaCore Labs was founded with a simple observation: too many
                    businesses struggle with systems that don't work and strategies
                    that don't connect to reality.
                  </p>
                  <p>
                    We saw fleet operators buried in spreadsheets, founders confused
                    by conflicting advice, and teams using tools that created more
                    problems than they solved.
                  </p>
                  <p>
                    So we decided to build something different. A company that
                    combines engineering precision with strategic thinking. That
                    builds systems people actually want to use. That focuses on
                    solving real problems, not selling generic solutions.
                  </p>
                  <p className="font-medium text-foreground">
                    Today, we help businesses gain the visibility, control, and
                    clarity they need to grow with confidence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <value.icon size={20} />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divisions */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Two Divisions, One Mission
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We help businesses through both technology and strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-2xl p-8 lg:p-10 border border-primary/20"
              >
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">
                  AngaCore Systems
                </h3>
                <p className="text-muted-foreground mb-6">
                  Custom-built operational systems for fleet management, resource
                  tracking, and business operations. Technology that gives you
                  visibility and control.
                </p>
                <Button variant="default" className="group" asChild>
                  <Link href="/systems">
                    Explore Systems
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-accent/5 rounded-2xl p-8 lg:p-10 border border-accent/20"
              >
                <h3 className="font-display text-2xl font-bold mb-4 text-accent">
                  AngaNova
                </h3>
                <p className="text-muted-foreground mb-6">
                  Growth and branding for founders and businesses. Strategic
                  positioning, brand development, and growth systems that
                  create clarity before execution.
                </p>
                <Button variant="accent" className="group" asChild>
                  <Link href="/anganova">
                    Learn About AngaNova
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary/30" aria-label="Frequently asked questions about AngaCore Labs">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick answers about AngaCore Labs, our services, and how to reach us.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {aboutFaq.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display text-lg font-bold mb-2 text-foreground">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Whether you need a system that runs your operations or a strategy
                that drives your growth — we're here to help.
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

export default About;
