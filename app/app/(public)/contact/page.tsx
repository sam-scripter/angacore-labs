"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ParticleNetwork } from "@/components/three/ParticleNetwork";

export const metadata = {
  title: "Contact Us | AngaCore Labs",
  description: "Get in touch with AngaCore Labs. Let's discuss your project.",
};

const Contact = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        setFormData({
          user_name: "",
          user_lastname: "",
          user_email: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please email us directly at hello@angacorelabs.com");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please email us directly at hello@angacorelabs.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | AngaCore Labs"
        description="Get in touch with AngaCore Labs. Let's discuss your operational systems, fleet management needs, or growth strategy. Based in Nairobi, Kenya."
        canonical="https://angacorelabs.com/contact"
        keywords="contact, AngaCore Labs contact, Nairobi technology company, fleet management Kenya, business software Kenya"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <ParticleNetwork />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Let's Talk
              </h1>
              <p className="text-muted-foreground text-lg">
                Whether you have a specific project in mind or just want to explore
                possibilities — we're happy to listen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="user_name">First Name</Label>
                      <Input
                        id="user_name"
                        name="user_name"
                        placeholder="John"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user_lastname">Last Name</Label>
                      <Input
                        id="user_lastname"
                        name="user_lastname"
                        placeholder="Doe"
                        value={formData.user_lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="user_email">Email Address</Label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="systems">AngaCore Systems (Fleet/Apps)</option>
                          <option value="anganova">AngaNova (Brand/Growth)</option>
                          <option value="other">Other/General Inquiry</option>
                        </select>
                        <ArrowRight className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, challenge, or question..."
                      className="min-h-[160px] resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="group-hover:translate-x-1 transition-transform ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-secondary/50 rounded-2xl p-8 h-full">
                  <h2 className="font-display text-xl font-bold mb-6">
                    Other Ways to Reach Us
                  </h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:hello@angacorelabs.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@angacorelabs.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+254791050491"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +254 791 050 491
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-3">What Happens Next?</h3>
                    <p className="text-muted-foreground">
                      We'll review your message and get back to you within 24 hours to discuss your needs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl font-bold mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-muted-foreground">
                Learn more about what we do before reaching out.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => router.push("/systems")}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group h-full cursor-pointer"
              >
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  AngaCore Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Operational systems for fleet management and business operations.
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                onClick={() => router.push("/anganova")}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all group h-full cursor-pointer"
              >
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  AngaNova
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Brand clarity and growth strategy for founders and businesses.
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
