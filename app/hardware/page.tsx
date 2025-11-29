import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hardware & Gaming News",
  description:
    "In-depth coverage of CPUs, GPUs, laptops, peripherals, and the latest gaming hardware pushing the boundaries of performance.",
  keywords: [
    "hardware news",
    "GPU reviews",
    "CPU reviews",
    "gaming hardware",
    "PC building",
    "tech reviews",
    "benchmarks",
  ],
  openGraph: {
    title: "Hardware & Gaming News | VELOCITY",
    description: "In-depth coverage of CPUs, GPUs, laptops, and gaming hardware.",
    url: "https://velocity.tech/hardware",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/hardware",
  },
}

export default function HardwarePage() {
  const hardwareArticles = articles.filter(
    (article) => article.category === "Hardware" || article.category === "Robotics",
  )
  const featuredArticle = hardwareArticles[0]
  const restArticles = hardwareArticles.slice(1)

  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Hardware & Gaming"
          description="In-depth coverage of CPUs, GPUs, laptops, peripherals, and the latest gaming hardware pushing the boundaries of performance."
          badge="Hardware"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {featuredArticle && <ArticleCard article={featuredArticle} featured />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {restArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
