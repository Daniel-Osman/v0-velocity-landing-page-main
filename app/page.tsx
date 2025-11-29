import type { Metadata } from "next"
import { Header } from "@/components/header"
import { BentoHero } from "@/components/bento-hero"
import { LatestArticles } from "@/components/latest-articles"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "VELOCITY | Tech Publication - AI, Hardware & Future Tech News",
  description:
    "Stay ahead with high-speed tech news, AI insights, hardware reviews, and the best tech deals. VELOCITY covers the future of technology.",
  alternates: {
    canonical: "https://velocity.tech",
  },
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BentoHero />
        <LatestArticles />
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
