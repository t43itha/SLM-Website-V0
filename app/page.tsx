import HeroSection from "@/components/hero-section"
import ServiceTimes from "@/components/service-times"
import WelcomeMessage from "@/components/welcome-message"
import MinistriesPreview from "@/components/ministries-preview"
import GivingImpact from "@/components/giving-impact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceTimes />
      <WelcomeMessage />
      <MinistriesPreview />
      <GivingImpact />
    </main>
  )
}
