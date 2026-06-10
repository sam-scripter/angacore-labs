"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";

const featuredInsights = [
  {
    slug: "reducing-fuel-theft-logistics",
    title: "How We Reduced Fuel Theft by 30% in a Small Logistics Fleet",
    summary: "A real case study on identifying fuel loss patterns and implementing accountability systems that actually work.",
    category: "Fuel Accountability",
    readTime: "8 min read",
  },
  {
    slug: "flutter-app-four-weeks",
    title: "Building a Production-Ready Flutter App in 4 Weeks: What Actually Worked",
    summary: "Lessons from shipping a cross-platform mobile app under tight timelines without cutting corners.",
    category: "Product Engineering",
    readTime: "12 min read",
  },
];

const insights = [
  {
    slug: "gps-tracking-fuel-loss",
    title: "Why GPS Tracking Alone Doesn't Solve Fuel Loss",
    summary: "Many logistics companies invest heavily in GPS tracking, only to find their fuel costs remain high. The reality is that knowing *where* a truck is doesn't tell you *what* is happening to the fuel tank.",
    category: "Fleet Operations",
    readTime: "5 min read",
  },
  {
    slug: "fleet-management-african-logistics",
    title: "What Most Fleet Management Systems Miss in African Logistics",
    summary: "Silicon Valley solutions often assume reliable connectivity, paved roads, and formal addresses. African logistics is different.",
    category: "Fleet Operations",
    readTime: "7 min read",
  },
  {
    slug: "systems-before-growth",
    title: "Systems Before Growth: Why Marketing Fails Without Infrastructure",
    summary: "We see it constantly: businesses pour money into ads, get a flood of leads, and then collapse under the weight of their own success.",
    category: "Growth Infrastructure",
    readTime: "6 min read",
  },
  {
    slug: "real-time-dashboards",
    title: "Building Real-Time Dashboards That People Actually Use",
    summary: "Data overload is real. Most executive dashboards are so cluttered with metrics that they become invisible.",
    category: "System Architecture",
    readTime: "9 min read",
  },
  {
    slug: "choosing-tech-stack",
    title: "How We Choose Tech Stacks for Client Projects",
    summary: "React vs. Vue? Node vs. Python? The debate is endless, but the business answer is usually simple.",
    category: "Product Engineering",
    readTime: "6 min read",
  },
];

const Insights = () => {
  const allInsights = [...featuredInsights, ...insights];

  return (
    <div className="min-h-screen">
      <SEO
        title="Insights | AngaCore Labs Blog"
        description="Articles on technology, business operations, fleet management, branding, and growth strategy. Practical insights for modern businesses."
        canonical="https://angacorelabs.com/insights"
        keywords="technology blog, business insights, fleet management articles, branding tips, growth strategy, Kenya tech"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AngaCore Labs Insights",
          "description": "Articles on technology, business operations, fleet management, branding, and growth strategy.",
          "url": "https://angacorelabs.com/insights",
          "blogPost": allInsights.map(insight => ({
            "@type": "BlogPosting",
            "headline": insight.title,
            "description": insight.summary,
            "url": `https://angacorelabs.com/insights/${insight.slug}`,
            "articleSection": insight.category
          }))
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 border-b border-border">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Insights</h1>
              <p className="text-muted-foreground text-lg">Field notes from building systems that run and grow businesses.</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="font-display text-xl font-bold text-muted-foreground">Featured</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredInsights.map((insight, index) => (
                <motion.article key={insight.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link href={`/insights/${insight.slug}`} className="block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group h-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">{insight.category}</span>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{insight.title}</h3>
                    <p className="text-muted-foreground mb-6">{insight.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2"><Clock size={14} />{insight.readTime}</span>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Insight <ArrowRight size={16} /></span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Insights */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="font-display text-xl font-bold text-muted-foreground">All Insights</h2>
            </motion.div>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.article key={insight.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Link href={`/insights/${insight.slug}`} className="block bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">{insight.category}</span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} />{insight.readTime}</span>
                        </div>
                        <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{insight.summary}</p>
                      </div>
                      <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle CTA */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto container-padding text-center">
            <p className="text-muted-foreground mb-4">
              If any of these problems sound familiar,{" "}
              <Link href="/contact" className="text-primary hover:underline">feel free to reach out</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
