import { HeroSection } from "@/components/hero-section"
import { FeaturedEpisodes } from "@/components/featured-episodes"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedEpisodes />
      <AboutSection />
    </div>
  )
}
