import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guides & How-Tos",
  description:
    "Expert buying guides, tutorials, and how-to articles to help you make informed tech decisions and get the most from your devices.",
  keywords: ["buying guides", "tech tutorials", "how-to guides", "best products", "tech advice", "product comparisons"],
  openGraph: {
    title: "Guides & How-Tos | VELOCITY",
    description: "Expert buying guides, tutorials, and how-to articles for informed tech decisions.",
    url: "https://velocity.tech/guides",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/guides",
  },
}

export default function GuidesPage() {
  const guideArticles = articles.filter((article) => article.category === "Guides")
  const featuredArticle = guideArticles[0]
  const restArticles = guideArticles.slice(1)

  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Guides & How-Tos"
          description="Expert buying guides, tutorials, and how-to articles to help you make informed tech decisions."
          badge="Guides"
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
