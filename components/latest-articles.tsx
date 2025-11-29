import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { articles } from "@/lib/articles"

export function LatestArticles() {
  // Filter out the featured article (ID 1) and take the next 6
  const latestArticles = articles.slice(1, 7)

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA]">Latest Stories</h2>
        <Link
          href="/archive"
          className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-[#00F0FF] transition-colors duration-100"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestArticles.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className={`group bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal`}
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <div className="relative h-48 scanline-hover">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 border border-dashed border-[#888888] text-[#888888] font-mono text-[10px] uppercase tracking-wider group-hover:border-[#00F0FF] group-hover:text-[#00F0FF] transition-colors duration-100">
                  {article.category}
                </span>
                <span className="font-mono text-[10px] text-[#888888]">{article.date}</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#EAEAEA] mb-2 line-clamp-2 group-hover:text-[#00F0FF] transition-colors duration-100">
                {article.title}
              </h3>
              <p className="text-[#888888] text-sm font-light line-clamp-2 mb-3">{article.excerpt}</p>
              <div className="flex items-center gap-1 text-[#888888] font-mono text-[10px]">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                {article.readTime} read
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
