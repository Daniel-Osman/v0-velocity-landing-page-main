import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { ArticleCard } from "@/components/article-card"
import { getArticleBySlug, getRelatedArticles, articles } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author.name }],
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://velocity.tech/article/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `https://velocity.tech${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "VELOCITY",
      logo: {
        "@type": "ImageObject",
        url: "https://velocity.tech/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://velocity.tech/article/${slug}`,
    },
    keywords: article.tags.join(", "),
  }

  return (
    <main className="relative z-10 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-mono text-xs uppercase tracking-wider mb-8 transition-colors duration-100"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to Home
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 border border-dashed border-accent text-accent font-mono text-[10px] uppercase tracking-wider">
              {article.category}
            </span>
            <time dateTime={article.date} className="font-mono text-[10px] text-muted-foreground">
              {article.date}
            </time>
            <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              {article.readTime} read
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
            {article.title}
          </h1>
          <p className="text-muted-foreground text-lg font-light">{article.excerpt}</p>
        </header>

        {/* Author & Actions */}
        <div className="flex items-center justify-between py-4 border-y border-border mb-8">
          <div className="flex items-center gap-3">
            <Image
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              width={40}
              height={40}
              className="rounded-full border border-border"
            />
            <div>
              <div className="text-foreground text-sm font-medium">{article.author.name}</div>
              <div className="text-muted-foreground font-mono text-[10px] uppercase">{article.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Share article"
              className="p-2 border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-100"
            >
              <Share2 className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Bookmark article"
              className="p-2 border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-100"
            >
              <Bookmark className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 border border-border overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3
                  key={index}
                  className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground mt-6 mb-2"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              )
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
              return (
                <ul key={index} className="list-none space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={index} className="text-muted-foreground font-light leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Tags */}
        <nav aria-label="Article tags" className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/archive?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1 border border-border text-muted-foreground font-mono text-[10px] uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-100"
            >
              {tag}
            </Link>
          ))}
        </nav>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section aria-labelledby="related-articles" className="mb-12">
            <h2
              id="related-articles"
              className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground mb-6"
            >
              Related Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((related, index) => (
                <ArticleCard key={related.id} article={related} index={index} />
              ))}
            </div>
          </section>
        )}

        <Newsletter />
      </article>
      <Footer />
    </main>
  )
}
