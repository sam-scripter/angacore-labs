"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";

const projects = [
    {
        id: 1,
        title: 'KSG ICT Platform',
        description: 'Full internal ICT management system for Kenya School of Government — asset lifecycle, service desk with SLA tracking, and AI-assisted recruitment.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
        theme: 'primary',
        slug: 'ksg-ict-platform'
    },
    {
        id: 2,
        title: 'Uasin Gishu Fleet System',
        description: 'Integrated Vehicle Management System replacing paper-based fuel and repair requisition for a county government fleet. Route-based fuel quotas via Google Maps API.',
        tags: ['Flutter', 'Django', 'Python', 'PostgreSQL', 'Google Maps API'],
        theme: 'primary',
        slug: 'uasin-gishu-fleet'
    },
    {
        id: 3,
        title: 'IVY Community Wardrobe',
        description: 'Cross-platform vendor management with real-time inventory tracking and a Computer Vision Measurement API using OpenPose for virtual fashion fitting.',
        tags: ['Flutter', 'Django', 'Python', 'OpenPose', 'Firebase'],
        theme: 'primary',
        slug: 'ivy-wardrobe'
    },
    {
        id: 4,
        title: 'Stratum',
        description: 'AI-powered personal finance tracker for Android. Automatically reads M-Pesa SMS notifications, parses every transaction, and generates monthly AI financial analysis.',
        tags: ['Flutter', 'Dart', 'OpenAI', 'Android', 'M-Pesa'],
        theme: 'accent',
        slug: 'stratum'
    },
    {
        id: 5,
        title: 'Number Your Days',
        description: 'Journaling app with tiered AI analysis. Daily insights via Gemini Flash, monthly and yearly synthesis via Gemini Pro. 98% token reduction via summarisation chaining.',
        tags: ['Flutter', 'Firebase', 'Gemini AI', 'Android'],
        theme: 'primary',
        slug: 'number-your-days'
    },
    {
        id: 6,
        title: 'mydrop',
        description: 'Real-time delivery tracking platform for Kenyan SMEs. Manager to rider to customer tracking flow with PIN confirmation on delivery.',
        tags: ['Node.js', 'PostgreSQL', 'React', 'Real-time'],
        theme: 'accent',
        slug: 'mydrop'
    },
];

const getThemeClasses = (theme: string) => {
    switch (theme) {
        case 'primary':
            return {
                border: 'border-primary/20 hover:border-primary/50',
                tag: 'bg-primary/10 text-primary',
                icon: 'text-primary bg-primary/10',
            };
        case 'accent':
            return {
                border: 'border-accent/20 hover:border-accent/50',
                tag: 'bg-accent/10 text-accent',
                icon: 'text-accent bg-accent/10',
            };
        default:
            return {
                border: 'border-border hover:border-foreground/20',
                tag: 'bg-secondary text-secondary-foreground',
                icon: 'text-foreground bg-secondary',
            };
    }
};


const Work = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Our Work | AngaCore Labs Portfolio"
                description="Explore our portfolio of fleet management systems, operational software, and branding projects. Real solutions for real businesses."
                canonical="https://angacorelabs.com/work"
                keywords="portfolio, case studies, fleet management projects, software development, branding work, Kenya"
            />
            <Header />
            <main className="flex-grow pt-24">
                {/* Hero */}
                <section className="pt-24 pb-24 relative overflow-hidden border-b border-border/50">
                    <ParticleNetwork />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

                    <div className="container mx-auto container-padding text-center flex flex-col items-center justify-center min-h-[25vh]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                                Portfolio
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                                Our <span className="text-primary">Work</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Production systems built for real institutions and real users.
                                Every project is live, shipped, and solving an actual problem.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-24">
                    <div className="container mx-auto container-padding">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => {
                                const theme = getThemeClasses(project.theme);

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Link href={`/work/${project.slug}`} className="block h-full group">
                                            <div className={`h-full bg-card rounded-2xl p-6 border ${theme.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col`}>
                                                <div className={`w-16 h-16 rounded-2xl ${theme.icon} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                                    <ExternalLink size={28} />
                                                </div>

                                                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="text-muted-foreground mb-6 flex-grow">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`text-xs px-3 py-1 rounded-full font-medium ${theme.tag}`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="mt-auto">
                                                    <Button variant="outline" className={`w-full group ${theme.border} hover:bg-transparent bg-transparent`} asChild>
                                                        <div className="flex items-center justify-center gap-2">
                                                            View Project
                                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-secondary/30">
                    <div className="container mx-auto container-padding text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Have a System to Build?
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Tell us about your operational challenge. We'll tell you how we'd build the system to fix it.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Start a Conversation
                                    <ArrowRight className="ml-2 w-5 h-5" />
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


export default Work;
