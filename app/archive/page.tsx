import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Article Archive",
  description:
    "Browse VELOCITY's complete collection of tech articles, hardware reviews, AI coverage, and buying guides.",
  openGraph: {
    title: "Article Archive | VELOCITY",
    description: "Browse our complete collection of articles, reviews, and guides.",
    url: "https://velocity.tech/archive",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/archive",
  },
}

export default function ArchivePage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Article Archive"
          description="Browse our complete collection of articles, reviews, and guides."
          badge="Archive"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
