"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const articles: Record<string, {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
  publishedDate: string;
  author?: string;
  relatedSlugs?: string[];
}> = {
  "reducing-fuel-theft-logistics": {
    title: "How We Reduced Fuel Theft by 30% in a Small Logistics Fleet",
    summary: "A real case study on identifying fuel loss patterns and implementing accountability systems that actually work.",
    category: "Fuel Accountability",
    readTime: "8 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["gps-tracking-fuel-loss", "fleet-management-african-logistics"],
    content: (
      <>
        <h2>The Problem</h2>
        <p>A logistics company with a fleet of 15 trucks noticed their fuel costs were climbing faster than their distance traveled. Monthly fuel spending had increased by 40% over a year, but routes and loads hadn't changed significantly.</p>
        <p>They had GPS tracking, but it only told them where vehicles were — not what was happening to the fuel. The gap between fuel purchased and distance covered kept growing.</p>
        <h2>What We Found</h2>
        <p>After installing fuel monitoring and analyzing three months of data, we identified several patterns:</p>
        <ul>
          <li>Fuel purchases that didn't match tank capacity</li>
          <li>Sudden drops in fuel levels during extended stops</li>
          <li>Consumption rates that varied widely for the same routes</li>
          <li>Refueling at stations far from planned routes</li>
        </ul>
        <h2>The Solution</h2>
        <p>We implemented a comprehensive fuel accountability system:</p>
        <ul>
          <li><strong>Real-time fuel monitoring:</strong> Track levels continuously, not just at fill-ups</li>
          <li><strong>Automated alerts:</strong> Flag unusual consumption or sudden level drops</li>
          <li><strong>Trip-level analysis:</strong> Compare fuel used vs. expected for each journey</li>
          <li><strong>Driver accountability:</strong> Clear records of who was driving when</li>
        </ul>
        <h2>Results</h2>
        <ul>
          <li>Fuel costs reduced by 30%</li>
          <li>Unexplained losses dropped to near zero</li>
          <li>Driver behavior improved with visibility</li>
          <li>Monthly fuel variance became predictable</li>
        </ul>
        <h2>Key Takeaway</h2>
        <p>GPS tracking tells you where your vehicles are. Fuel monitoring tells you where your money is going.</p>
      </>
    ),
  },
  "flutter-app-four-weeks": {
    title: "Building a Production-Ready Flutter App in 4 Weeks: What Actually Worked",
    summary: "Lessons from shipping a cross-platform mobile app under tight timelines without cutting corners.",
    category: "Product Engineering",
    readTime: "12 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["choosing-tech-stack", "real-time-dashboards"],
    content: (
      <>
        <h2>The Context</h2>
        <p>A client needed a mobile app for their field operations team. The requirements were clear: offline capability, real-time sync, and cross-platform deployment (iOS and Android). The timeline: four weeks.</p>
        <h2>Week 1: Foundation</h2>
        <ul>
          <li>State management setup (we used Riverpod)</li>
          <li>Offline-first data layer with local database</li>
          <li>API client with retry logic and queue</li>
          <li>Authentication flow and secure storage</li>
        </ul>
        <h2>Week 2-3: Core Features</h2>
        <p>With the foundation solid, features came together quickly. Every feature request went through a simple filter: "Will the app be unusable without this on day one?" If not, it went to the backlog.</p>
        <h2>Week 4: Polish and Deploy</h2>
        <p>The final week was about hardening. Edge cases, error handling, loading states, and the dozen small things that separate a prototype from production software.</p>
        <h2>What Actually Worked</h2>
        <ul>
          <li><strong>Offline-first design:</strong> Don't bolt it on later</li>
          <li><strong>Feature discipline:</strong> Say no to almost everything</li>
          <li><strong>Early device testing:</strong> Simulators lie</li>
          <li><strong>Error handling from day one:</strong> Things will fail</li>
        </ul>
        <h2>The Result</h2>
        <p>The app shipped on time. More importantly, it worked in the field — with poor connectivity, on older devices, in the hands of users who didn't read the manual.</p>
      </>
    ),
  },
  "gps-tracking-fuel-loss": {
    title: "Why GPS Tracking Alone Doesn't Solve Fuel Loss",
    summary: "Many logistics companies invest heavily in GPS tracking, only to find their fuel costs remain high.",
    category: "Fleet Operations",
    readTime: "5 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["reducing-fuel-theft-logistics", "fleet-management-african-logistics"],
    content: (
      <>
        <h2>The GPS Promise</h2>
        <p>When fleet managers first adopt GPS tracking, they expect visibility to solve everything. So why do fuel costs stay high? Because location answers "where." It does not answer "how much fuel went in" or "how much fuel was consumed."</p>
        <h2>What GPS Cannot See</h2>
        <ul>
          <li><strong>Diversion:</strong> Fuel taken during a stop; GPS only shows the stop</li>
          <li><strong>Fake receipts:</strong> Invoices for fuel never put in the tank</li>
          <li><strong>Route skimming:</strong> Extra "refuel" stops off the planned route</li>
        </ul>
        <h2>Fuel Auditing: Closing the Loop</h2>
        <p>Fuel auditing means tying every liter to a source and a consumption model. Digital fuel sensors give you real tank levels. Consumption algorithms use distance, load, and route profile to predict expected use.</p>
        <h2>Key Takeaway</h2>
        <p>GPS is essential for operations. But for fuel accountability, it's only one input. Add fuel monitoring and consumption logic, and you move from "we think we have a problem" to "we know exactly where the loss is."</p>
      </>
    ),
  },
  "fleet-management-african-logistics": {
    title: "What Most Fleet Management Systems Miss in African Logistics",
    summary: "Silicon Valley solutions often assume reliable connectivity, paved roads, and formal addresses. African logistics is different.",
    category: "Fleet Operations",
    readTime: "7 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["gps-tracking-fuel-loss", "reducing-fuel-theft-logistics"],
    content: (
      <>
        <h2>Built for Another Context</h2>
        <p>Most fleet management software is built for markets where connectivity is assumed, addresses are standardized, and payments flow through formal channels. African logistics often runs on different rules.</p>
        <h2>Offline-First Is Non-Negotiable</h2>
        <ul>
          <li>Capture trips, fuel, and expenses on the device first</li>
          <li>Queue sync and retry with clear success/failure feedback</li>
          <li>Design for "sync when you're back in range" as the normal case</li>
        </ul>
        <h2>Informal Expenses and Mobile Money</h2>
        <p>"Kitu kidogo," tolls, informal parking, and ad-hoc repairs are part of real operations. Mobile money integration (M-Pesa, etc.) lets you tie disbursements and reimbursements to actual transactions.</p>
        <h2>Key Takeaway</h2>
        <p>A fleet system that works in African logistics isn't a generic product with a new skin. It's designed for offline-first, informal expenses, mobile money, and real-world addressing from the ground up.</p>
      </>
    ),
  },
  "systems-before-growth": {
    title: "Systems Before Growth: Why Marketing Fails Without Infrastructure",
    summary: "Businesses pour money into ads, get a flood of leads, and then collapse under the weight of their own success.",
    category: "Growth Infrastructure",
    readTime: "6 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["real-time-dashboards", "choosing-tech-stack"],
    content: (
      <>
        <h2>The Lead Flood That Sinks You</h2>
        <p>A great campaign can fill the funnel overnight. But if you can't quote accurately, schedule reliably, or deliver on time, every new lead becomes a reputation risk.</p>
        <h2>The Growth Infrastructure Hierarchy</h2>
        <ul>
          <li><strong>Quote-to-cash:</strong> Can you turn a request into a clear quote, order, and payment without chaos?</li>
          <li><strong>Operations visibility:</strong> Do you know capacity, backlog, and bottlenecks in something like real time?</li>
          <li><strong>Customer communication:</strong> Can you confirm orders, update status, and handle issues without everything going through one person's inbox?</li>
          <li><strong>Data you can trust:</strong> Basic reporting on orders, revenue, and fulfillment.</li>
        </ul>
        <h2>Key Takeaway</h2>
        <p>Build the minimal operational backbone first. Then turn on the demand tap. Growth without infrastructure is just organized failure at scale.</p>
      </>
    ),
  },
  "real-time-dashboards": {
    title: "Building Real-Time Dashboards That People Actually Use",
    summary: "Data overload is real. Most executive dashboards are so cluttered with metrics that they become invisible.",
    category: "System Architecture",
    readTime: "9 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["systems-before-growth", "choosing-tech-stack"],
    content: (
      <>
        <h2>Why Most Dashboards Get Ignored</h2>
        <p>Dashboards that show everything end up showing nothing. The goal isn't to display data—it's to answer "what should I do next?" in seconds.</p>
        <h2>The 3-Second Rule</h2>
        <p>If a user can't grasp the main message in three seconds, the layout has failed. Put the one thing that matters most front and center.</p>
        <h2>Anomaly Detection Over Raw Reporting</h2>
        <ul>
          <li>Define baselines (e.g., expected fuel per km, typical lead time)</li>
          <li>Surface deviations with clear severity and context</li>
          <li>Link each alert to a concrete next step where possible</li>
        </ul>
        <h2>Key Takeaway</h2>
        <p>The best real-time dashboards are sparse by design. They answer one question fast, highlight what's wrong, and make the next action obvious.</p>
      </>
    ),
  },
  "choosing-tech-stack": {
    title: "How We Choose Tech Stacks for Client Projects",
    summary: "React vs. Vue? Node vs. Python? The debate is endless, but the business answer is usually simple.",
    category: "Product Engineering",
    readTime: "6 min read",
    publishedDate: "2026-02-09",
    relatedSlugs: ["flutter-app-four-weeks", "real-time-dashboards"],
    content: (
      <>
        <h2>Hype vs. Fit</h2>
        <p>New frameworks get attention because they're new. But client projects need to ship, scale, and be maintainable for years. Our default is to choose boring, proven technology unless there's a clear reason to do otherwise.</p>
        <h2>What We Optimize For</h2>
        <ul>
          <li><strong>Ecosystem maturity:</strong> Can we find libraries, docs, and solutions for common problems?</li>
          <li><strong>Developer availability:</strong> Can the client hire people who already know this stack?</li>
          <li><strong>Long-term maintainability:</strong> Will this still be supportable in 5 years?</li>
        </ul>
        <h2>Key Takeaway</h2>
        <p>Tech stack is a product decision. Choose for ecosystem, talent, and long-term maintainability first.</p>
      </>
    ),
  },
};

const InsightArticle = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-padding">
          <div className="container mx-auto container-padding text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Insight Not Found</h1>
            <p className="text-muted-foreground mb-8">This insight doesn't exist or may have been moved.</p>
            <Link href="/insights" className="text-primary hover:underline inline-flex items-center gap-2">
              <ArrowLeft size={16} />Back to Insights
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = article.relatedSlugs
    ? article.relatedSlugs.map(s => ({ slug: s, ...articles[s] })).filter(a => a.title)
    : [];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${article.title} | AngaCore Labs Insights`}
        description={article.summary}
        canonical={`https://angacorelabs.com/insights/${slug}`}
        keywords={`${article.category}, ${article.title}, insights, blog, AngaCore Labs`}
        ogType="article"
        article={{ publishedTime: article.publishedDate, modifiedTime: article.publishedDate, section: article.category, tags: [article.category] }}
      />
      <Header />
      <main>
        {/* Article Header */}
        <section className="pt-32 pb-12 border-b border-border">
          <div className="container mx-auto container-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
              <Link href="/insights" className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 mb-8 transition-colors">
                <ArrowLeft size={16} />Back to Insights
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{article.category}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock size={14} />{article.readTime}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
              <p className="text-xl text-muted-foreground">{article.summary}</p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto prose prose-lg prose-gray dark:prose-invert"
            >
              <style>{`
                .prose h2 { font-family: 'Manrope', sans-serif; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: hsl(var(--foreground)); }
                .prose p { color: hsl(var(--muted-foreground)); line-height: 1.8; }
                .prose ul { color: hsl(var(--muted-foreground)); }
                .prose li { margin-bottom: 0.5rem; }
                .prose strong { color: hsl(var(--foreground)); }
              `}</style>
              {article.content}
            </motion.article>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="section-padding border-t border-border bg-secondary/30">
            <div className="container mx-auto container-padding">
              <h2 className="font-display text-2xl font-bold mb-8">Related Insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/insights/${related.slug}`} className="block bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">{related.category}</span>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{related.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{related.summary}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">Read more <ArrowRight size={14} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Subtle CTA */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto container-padding text-center">
            <p className="text-muted-foreground">
              If this problem sounds familiar,{" "}
              <Link href="/contact" className="text-primary hover:underline">feel free to reach out</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsightArticle;
