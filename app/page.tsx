import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionVision } from "@/components/mission-vision"
import { ValuesSection } from "@/components/values-section"
import { StrategicObjectives } from "@/components/strategic-objectives"
import { ValueProposition } from "@/components/value-proposition"
import { SuccessCases } from "@/components/success-cases"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionVision />
      <ValuesSection />
      <StrategicObjectives />
      <ValueProposition />
      <SuccessCases />
      <Footer />
    </main>
  )
}
