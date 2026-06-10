import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  featuredWork: [
    { name: "Fleet Command", href: "/work/fleet-command" },
    { name: "Anga Nova", href: "/work/anga-nova-launch" },
    { name: "EduPortal", href: "/work/edu-portal" },
  ],
};

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-xl">
                <span className="text-primary">Anga</span><span className="text-accent">Core</span><span className="text-background font-normal"> Labs</span>
              </span>
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              Building the systems that run businesses — and the engines that grow them.
              Engineering-driven, human-focused solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@angacorelabs.com"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/company/angacorelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://x.com/AngacoreLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="X (Twitter)"
              >
                <XIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/angacorelabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Featured Work</h4>
            <ul className="space-y-3">
              {footerLinks.featuredWork.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-background/70">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hello@angacorelabs.com" className="hover:text-primary transition-colors">
                  hello@angacorelabs.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+254791050491" className="hover:text-primary transition-colors">
                  +254 791 050 491
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Nairobi, Kenya</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 py-8 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <p className="text-background/50 text-sm">
          © 2026 AngaCore Labs. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-background/50 hover:text-background transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-background/50 hover:text-background transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
