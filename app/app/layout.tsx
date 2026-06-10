import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AngaCore Labs",
    template: "%s | AngaCore Labs",
  },
  description:
    "We build custom software and AI-powered automation for businesses that have outgrown their current tools.",
  keywords: ["software development", "AI automation", "custom software", "Kenya", "Nairobi"],
  authors: [{ name: "AngaCore Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angacorelabs.com",
    siteName: "AngaCore Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll="smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}