"use client";

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/public/Header';
import { Footer } from '@/components/public/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getCaseStudy } from '@/lib/data/caseStudies';
import { ParticleNetwork } from '@/components/three/ParticleNetwork';
import Link from 'next/link';

const WorkDetail = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;
    const study = getCaseStudy(slug || '');

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center pt-24">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
                        <Button onClick={() => router.push('/work')} variant="hero">
                            Back to Work
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title={`${study.title} | AngaCore Labs Portfolio`}
                description={study.summary}
                canonical={`https://angacorelabs.com/work/${slug}`}
                keywords={`${study.category}, case study, ${study.title}, portfolio, AngaCore Labs`}
            />
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-center">
                    <ParticleNetwork />
                    <div className={`absolute inset-0 -z-10 ${study.heroImage} opacity-10`} />
                    <div className="absolute inset-0 -z-5 bg-gradient-to-b from-background/80 via-background/40 to-background pointer-events-none" />

                    <div className="container mx-auto container-padding relative z-10">
                        <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 border ${study.theme === 'primary'
                                ? 'bg-primary/10 text-primary border-primary/20'
                                : study.theme === 'accent'
                                    ? 'bg-accent/10 text-accent border-accent/20'
                                    : 'bg-secondary text-secondary-foreground border-border'
                                }`}>
                                {study.category}
                            </span>
                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
                                {study.title}: <span className={
                                    study.theme === 'primary' ? 'text-primary' :
                                        study.theme === 'accent' ? 'text-accent' :
                                            'text-foreground'
                                }>{study.subtitle}</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{study.summary}</p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 -mt-10 relative z-20">
                    <div className="container mx-auto container-padding">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {study.stats.map((stat, index) => (
                                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border flex items-center gap-4 hover:border-primary/30 transition-colors">
                                        <div className={`p-3 rounded-xl bg-background/50 ${study.theme === 'primary' ? 'text-primary' : study.theme === 'accent' ? 'text-accent' : 'text-foreground'}`}>
                                            <stat.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                                            <p className="text-muted-foreground text-sm">{stat.label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="section-padding">
                    <div className="container mx-auto container-padding">
                        <div className="grid lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4">
                                <div className="sticky top-32">
                                    <h2 className="font-display text-2xl font-bold mb-6">The Challenge</h2>
                                    <div className="space-y-4">
                                        {study.challenges.map((challenge, index) => (
                                            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-3">
                                                <div className="min-w-6 mt-1"><div className="w-1.5 h-1.5 rounded-full bg-destructive/80 mt-2" /></div>
                                                <p className="text-muted-foreground leading-relaxed text-sm">{challenge}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <h2 className="font-display text-2xl font-bold mb-8">The Solution</h2>
                                <div className="space-y-8">
                                    {study.solutions.map((solution, index) => (
                                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                            <div className="bg-card p-8 rounded-2xl border border-border group hover:border-primary/30 transition-colors">
                                                <div className="flex items-start gap-6">
                                                    <div className={`p-4 rounded-2xl bg-secondary group-hover:bg-primary/10 transition-colors ${study.theme === 'primary' ? 'text-primary' : study.theme === 'accent' ? 'text-accent' : 'text-foreground'}`}>
                                                        <solution.icon size={32} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-display text-xl font-bold mb-3">{solution.title}</h3>
                                                        <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="section-padding bg-secondary/30">
                    <div className="container mx-auto container-padding text-center">
                        <h2 className="font-display text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
                        <Button size="lg" variant="hero" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WorkDetail;
