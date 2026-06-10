"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";
import {
  ArrowRight,
  MessageCircle,
  Target,
  Compass,
  Lightbulb,
  Users,
  CheckCircle,
  Heart,
  Zap,
  Building
} from "lucide-react";
import Link from "next/link";

const problems = [
  { icon: MessageCircle, title: "Unclear Messaging", description: "You know your product is valuable, but you struggle to explain it clearly to prospects and customers." },
  { icon: Target, title: "Inconsistent Branding", description: "Different touchpoints tell different stories. There's no unified identity guiding your communications." },
  { icon: Compass, title: "Trying Too Many Channels", description: "You're everywhere — LinkedIn, Instagram, email, ads — but nothing seems to stick or build momentum." },
  { icon: Lightbulb, title: "Spending Without Results", description: "You've invested in marketing, but the returns don't match the effort or the budget." },
];

const process = [
  { step: "01", title: "Understand Your Business", description: "We dig into your goals, your customers, and your current situation. No assumptions." },
  { step: "02", title: "Identify What's Unclear", description: "We find the gaps in messaging, positioning, or strategy that are holding you back." },
  { step: "03", title: "Define a Clear Direction", description: "We create a narrative and strategic framework you can actually use." },
  { step: "04", title: "Recommend What Matters", description: "We tell you what to focus on — and what to ignore. No fluff, no busywork." },
];

const whyAngaNova = [
  { icon: Users, title: "Founder-Focused", description: "We work directly with founders and decision-makers. No account managers, no layers." },
  { icon: Lightbulb, title: "Strategy Before Execution", description: "We help you think before you act. Execution without strategy is just noise." },
  { icon: Heart, title: "Honest Recommendations", description: "We tell you what you need to hear, not what's easy to sell." },
  { icon: Building, title: "Part of AngaCore Labs", description: "We bring an engineering mindset to branding and growth. Systems thinking, not guesswork." },
];

const AngaNova = () => {
  const handleScrollToWork = () => {
    const element = document.getElementById('how-we-work');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AngaNova | Brand Strategy & Growth Systems"
        description="Strategic branding and growth systems for businesses ready to scale. Clarity before execution. Position your brand, define your strategy, and build systems that drive growth."
        canonical="https://angacorelabs.com/anganova"
        keywords="brand strategy, growth systems, branding, market positioning, business growth, strategic planning, Kenya"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden min-h-[70vh] flex items-center">
          <ParticleNetwork />
          <div className="absolute inset-0 -z-5 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />
          <div className="container mx-auto container-padding relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">AngaNova</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Clarity Before{" "}<span className="text-accent">Growth</span></h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">AngaNova helps founders understand their brand, message, and direction before spending time or money on execution.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link href="/contact">Start a Conversation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></Link>
                </Button>
                <Button variant="outline" size="lg" onClick={handleScrollToWork}>How AngaNova Works</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Real Problem */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">The Real Problem</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Most founders don't have a marketing problem. They have a clarity problem.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <motion.div key={problem.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6"><problem.icon size={24} /></div>
                  <h3 className="font-display text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We combine creative strategy with technical execution to build brands that grow.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Growth Intelligence", desc: "Data-driven insights to understand your market, customers, and growth opportunities.", items: ["Market Analysis", "Customer Segmentation", "Trend Forecasting"] },
                { icon: Zap, title: "AI Performance Marketing", desc: "Machine learning-powered campaigns that optimize in real-time for maximum ROI.", items: ["Automated Bidding", "Audience Targeting", "Attribution Modeling"] },
                { icon: Users, title: "Adaptive Branding", desc: "Dynamic brand systems that evolve with your business while maintaining consistency.", items: ["Brand Strategy", "Visual Identity", "Brand Monitoring"] },
              ].map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6"><service.icon size={24} /></div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground/80">
                    {service.items.map(item => <li key={item} className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> {item}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how-we-work" className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A simple, focused process that respects your time and gets to clarity quickly.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                  <div className="text-6xl font-display font-bold text-accent/10 mb-4">{step.step}</div>
                  <h3 className="font-display text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* First Engagement */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 lg:p-12">
                  <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                    <h3 className="font-display text-2xl font-bold mb-4">Brand & Growth Clarity Session</h3>
                    <p className="text-muted-foreground mb-6">A focused conversation to understand where you are, where you want to go, and what's getting in the way.</p>
                    <ul className="space-y-3 mb-8 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /><span>No long-term commitment required</span></li>
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /><span>Clear outcomes from the first session</span></li>
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /><span>Honest assessment of your situation</span></li>
                    </ul>
                    <Button variant="hero" size="lg" className="w-full group" asChild>
                      <Link href="/contact">Book a Session <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Getting Started</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">A Low-Commitment Starting Point</h2>
                <p className="text-muted-foreground text-lg mb-6">We don't ask for long contracts or large upfront investments. Start with a single clarity session and see if it's a good fit.</p>
                <p className="text-muted-foreground">If clarity helps, we'll talk about next steps. If not, you'll still leave with insights you can use. No pressure either way.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why AngaNova */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Why AngaNova</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We're not for everyone. Here's what makes us different.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {whyAngaNova.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0"><item.icon size={24} /></div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="section-padding">
          <div className="container mx-auto container-padding text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">If Clarity Would Help, Let's Talk</h2>
              <p className="text-muted-foreground text-lg mb-8">No pitch, no pressure. Just a conversation to see if AngaNova can help you move forward with more confidence.</p>
              <Button variant="hero" size="xl" className="group" asChild>
                <Link href="/contact">Book a Conversation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AngaNova;
