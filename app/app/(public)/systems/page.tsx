"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";
import {
  Truck,
  BarChart3,
  Settings,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Check,
  Eye,
  ClipboardList,
  Fuel,
  AlertTriangle,
  Wrench,
  Users,
  Target,
  Layers
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Truck, title: "Fleet & Logistics", description: "End-to-end fleet management, fuel monitoring, and driver analytics." },
  { icon: Users, title: "EdTech Platforms", description: "Comprehensive school management, grade reporting, and finance portals." },
  { icon: Layers, title: "Enterprise ERPs", description: "Custom internal tools for inventory, HR, and business process automation." },
  { icon: Zap, title: "Web & Mobile Apps", description: "High-performance customer-facing applications for iOS, Android, and Web." },
  { icon: Shield, title: "App Store Deployment", description: "Full handling of Apple & Google Play store submission and compliance." },
  { icon: Globe, title: "API & Integrations", description: "Seamless connection between your payment gateways, CRMs, and custom tools." },
];

const problems = [
  { icon: Eye, title: "Limited Visibility", description: "You don't know where your vehicles are, what they're doing, or whether operations are running as expected." },
  { icon: ClipboardList, title: "Manual Tracking", description: "Spreadsheets, paper logs, and WhatsApp messages. Information is scattered and often outdated." },
  { icon: Fuel, title: "Fuel Loss & Misuse", description: "Fuel costs keep climbing, but you can't pinpoint where the money is going or why." },
  { icon: AlertTriangle, title: "Reactive Decision-Making", description: "Problems are discovered after they've already caused damage. There's no early warning system." },
];

const approach = [
  { step: "01", title: "Understand the Operation", description: "We start by learning how your business actually runs — not how software vendors think it should run." },
  { step: "02", title: "Design the Right System", description: "We design around your workflows, not the other way around. No forcing you into pre-built templates." },
  { step: "03", title: "Build with Real-World Constraints", description: "We account for unreliable networks, varying user skills, and the unpredictable nature of field operations." },
  { step: "04", title: "Support Iteration & Growth", description: "Your business will change. Our systems are built to evolve with you, not lock you in." },
];

const fleetFeatures = [
  { icon: Truck, title: "Vehicle Tracking", description: "Know where every vehicle is, where it's been, and where it's going." },
  { icon: Eye, title: "Trip Visibility", description: "See complete trip histories with routes, stops, and timing information." },
  { icon: Fuel, title: "Fuel Usage Monitoring", description: "Track consumption patterns and identify unusual fuel behavior early." },
  { icon: AlertTriangle, title: "Abnormal Behavior Flagging", description: "Get alerts for unauthorized trips, unusual stops, or route deviations." },
  { icon: BarChart3, title: "Operational Dashboards", description: "Clear, actionable views of your fleet's performance and status." },
];

const whyAngaCore = [
  { icon: Wrench, title: "Built by Engineers", description: "Our team has built systems for real operations. We understand the difference between demo software and production software." },
  { icon: Target, title: "Designed Around Real Operations", description: "We've worked with logistics companies, fleet operators, and field teams. We know what actually matters." },
  { icon: Layers, title: "Adaptable to Your Size", description: "Whether you have 5 vehicles or 500, our systems scale with your business without overcomplicating things." },
  { icon: Users, title: "Focused on Clarity & Control", description: "We don't add features for the sake of it. Every screen, every report exists because it helps you make better decisions." },
];

const benefits = [
  "Real-time visibility into all operations",
  "Reduced operational costs by up to 30%",
  "Faster decision-making with live data",
  "Scalable architecture that grows with you",
  "Custom-built for your specific workflows",
  "Ongoing support and improvements",
];

const Systems = () => {
  const handleScrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AngaCore Systems | Fleet Management & Operational Software"
        description="Custom-built operational systems for fleet management, resource tracking, and business operations. Technology that gives you visibility and control over your operations."
        canonical="https://angacorelabs.com/systems"
        keywords="fleet management software, operational systems, business operations, resource tracking, logistics software, Kenya"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden min-h-[70vh] flex items-center">
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
                AngaCore Systems
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                We Build The Engines That{" "}
                <span className="text-primary">Run Your Business</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                From logistics platforms to school management systems. We architect,
                build, and deploy the software that powers your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" onClick={handleScrollToFeatures}>
                  Explore Capabilities
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">The Problem</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Many businesses run on guesswork and outdated information. These are the realities we see every day.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <motion.div key={problem.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-6"><problem.icon size={24} /></div>
                  <h3 className="font-display text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't sell one-size-fits-all software. Every system we build starts with understanding your specific operation.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                  <div className="text-6xl font-display font-bold text-primary/10 mb-4">{step.step}</div>
                  <h3 className="font-display text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">What Our Systems Do</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to run and scale your operations efficiently.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"><feature.icon size={24} /></div>
                  <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship: Fleet & Logistics */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Case Study: Logistics</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Fleet & Logistics Systems</h2>
                <p className="text-muted-foreground text-lg mb-8">One example of our deep engineering capabilities. We built a system that tracks 500+ vehicles, monitors fuel in real-time, and predicts maintenance needs.</p>
                <div className="space-y-6">
                  {fleetFeatures.map((feature, index) => (
                    <motion.div key={feature.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><feature.icon size={20} /></div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
                <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                  <h3 className="font-display text-2xl font-bold mb-4">We Build What You Need</h3>
                  <p className="text-muted-foreground mb-6">Whether it's a fleet system, a school portal, or a custom mobile app — we handle the entire lifecycle from design to app store launch.</p>
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <Link href="/contact">Discuss Your System <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why AngaCore Systems */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Why AngaCore Systems</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We're not trying to be everything to everyone. Here's what makes us different.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {whyAngaCore.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><item.icon size={24} /></div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Built for Businesses That Need{" "}<span className="text-primary">Real Results</span></h2>
                <p className="text-muted-foreground text-lg mb-8">Our systems aren't generic software packages. Each one is designed around your specific operations, challenges, and goals.</p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div key={benefit} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Check size={14} /></div>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
                <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                  <h3 className="font-display text-2xl font-bold mb-4">Let's Talk About Your Operation</h3>
                  <p className="text-muted-foreground mb-6">We'll listen first. If there's a fit, we'll explain how we can help. No pressure, no obligations.</p>
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <Link href="/contact">Talk to Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Systems;
