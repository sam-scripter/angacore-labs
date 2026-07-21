// page.tsx

import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { WhatWeDoSection } from "@/components/public/sections/WhatWeDoSection";
import { SystemsSection } from "@/components/public/sections/SystemsSection";
import { AngaNovaSection } from "@/components/public/sections/AngaNovaSection";
import { ProcessSection } from "@/components/public/sections/ProcessSection";
import { TrustSection } from "@/components/public/sections/TrustSection";
import { CTASection } from "@/components/public/sections/CTASection";
import { SocialProofSection } from "@/components/public/sections/SocialProofSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <SocialProofSection />
        <SystemsSection />
        <ProcessSection />
        <TrustSection />
        <AngaNovaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
