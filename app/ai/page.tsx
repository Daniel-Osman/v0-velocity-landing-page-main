import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Future Tech News",
  description:
    "Cutting-edge coverage of artificial intelligence, machine learning, quantum computing, and emerging technologies shaping tomorrow.",
  keywords: [
    "AI news",
    "artificial intelligence",
    "machine learning",
    "quantum computing",
    "future tech",
    "GPT",
    "neural networks",
  ],
  openGraph: {
    title: "AI & Future Tech News | VELOCITY",
    description:
      "Cutting-edge coverage of artificial intelligence, machine learning, quantum computing, and emerging technologies.",
    url: "https://velocity.tech/ai",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/ai",
  },
}

export default function AIPage() {
  const aiArticles = articles.filter((article) => article.category === "AI" || article.category === "Quantum")
  const featuredArticle = aiArticles[0]
  const restArticles = aiArticles.slice(1)

  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="AI & Future Tech"
          description="Cutting-edge coverage of artificial intelligence, machine learning, quantum computing, and the technologies shaping tomorrow."
          badge="AI & Future"
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
