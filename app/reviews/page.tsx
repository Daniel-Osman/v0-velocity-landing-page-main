import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Reviews",
  description:
    "Honest, in-depth reviews of the latest tech products. We test GPUs, CPUs, laptops, cameras, and more so you don't have to.",
  keywords: ["tech reviews", "product reviews", "GPU reviews", "laptop reviews", "camera reviews", "honest reviews"],
  openGraph: {
    title: "Tech Reviews | VELOCITY",
    description: "Honest, in-depth reviews of the latest tech products. We test everything so you don't have to.",
    url: "https://velocity.tech/reviews",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/reviews",
  },
}

export default function ReviewsPage() {
  const reviewArticles = articles.filter((article) => article.category === "Reviews")
  const featuredArticle = reviewArticles[0]
  const restArticles = reviewArticles.slice(1)

  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Reviews"
          description="Honest, in-depth reviews of the latest tech products. We test everything so you don't have to."
          badge="Reviews"
        />

        {featuredArticle && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ArticleCard article={featuredArticle} featured />
          </div>
        )}

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
