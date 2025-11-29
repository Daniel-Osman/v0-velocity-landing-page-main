import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import type { Article } from "@/lib/articles"

interface ArticleCardProps {
  article: Article
  index?: number
  featured?: boolean
}

export function ArticleCard({ article, index = 0, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="group md:col-span-2 bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full scanline-hover">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] via-transparent to-transparent md:bg-gradient-to-l" />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 border border-dashed border-[#00F0FF] text-[#00F0FF] font-mono text-[10px] uppercase tracking-wider">
                {article.category}
              </span>
              <span className="font-mono text-[10px] text-[#888888]">{article.date}</span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-3 group-hover:text-[#00F0FF] transition-colors duration-100">
              {article.title}
            </h3>
            <p className="text-[#888888] text-sm font-light mb-4 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center gap-1 text-[#888888] font-mono text-[10px]">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              {article.readTime} read
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal"
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
  )
}
