"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { ValuesSection } from "@/components/values-section"
import { StatsSection } from "@/components/stats-section"
import { AiConsultationSection } from "@/components/ai-consultation-section"
import { DocumentPrepSection } from "@/components/document-prep-section"
import { ContinuousLearningSection } from "@/components/continuous-learning-section"
import { TechnologySection } from "@/components/technology-section"
import { PostInsuranceSection } from "@/components/post-insurance-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ObjectiveSection } from "@/components/objective-section"
import { PricingSection } from "@/components/pricing-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <TargetAudienceSection />
        <ObjectiveSection />
        <AiConsultationSection />
        <DocumentPrepSection />
        <ContinuousLearningSection />
        <StatsSection />
        <TechnologySection />
        <PostInsuranceSection />
        <ComparisonSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
