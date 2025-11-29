import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { DealCard } from "@/components/deal-card"
import { deals } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Today's Best Tech Deals",
  description:
    "Hand-picked tech deals updated daily. Find the best prices on GPUs, laptops, monitors, and more from trusted retailers.",
  keywords: ["tech deals", "hardware deals", "GPU deals", "laptop deals", "electronics sales", "discount tech"],
  openGraph: {
    title: "Today's Best Tech Deals | VELOCITY",
    description: "Hand-picked tech deals updated daily. Find the best prices on hardware and electronics.",
    url: "https://velocity.tech/deals",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/deals",
  },
}

export default function DealsPage() {
  const featuredDeal = deals[0]
  const restDeals = deals.slice(1)

  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Today's Best Deals"
          description="Hand-picked tech deals from across the web. Updated daily with the best prices on hardware, software, and accessories."
          badge="Deals"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {featuredDeal && <DealCard deal={featuredDeal} featured />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {restDeals.map((deal, index) => (
            <DealCard key={deal.id} deal={deal} index={index} />
          ))}
        </div>

        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
