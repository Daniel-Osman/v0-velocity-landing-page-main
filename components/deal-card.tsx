import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Deal } from "@/lib/articles"

interface DealCardProps {
  deal: Deal
  index?: number
  featured?: boolean
}

export function DealCard({ deal, index = 0, featured = false }: DealCardProps) {
  if (featured) {
    return (
      <div className="group md:col-span-2 bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] transition-all duration-100">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-80 scanline-hover flex items-center justify-center bg-[#0A0A0B]">
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.title}
              width={300}
              height={300}
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-100"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-[#00F0FF] text-[#050505] font-mono text-xs font-medium uppercase">
                -{deal.discount}%
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
              {deal.category} • {deal.store}
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-3">
              {deal.title}
            </h3>
            <p className="text-[#888888] text-sm font-light mb-4">{deal.description}</p>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-3xl font-medium text-[#00F0FF]">${deal.salePrice}</span>
              <span className="font-mono text-sm text-[#888888] line-through">${deal.originalPrice}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#888888]">Ends {deal.endDate}</span>
              <a
                href={deal.link}
                className="btn-fill px-4 py-2 border border-[#00F0FF] text-[#00F0FF] font-mono text-xs uppercase tracking-wider flex items-center gap-2"
              >
                Get Deal <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] transition-all duration-100 mask-reveal"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="relative h-48 scanline-hover flex items-center justify-center bg-[#0A0A0B]">
        <Image
          src={deal.image || "/placeholder.svg"}
          alt={deal.title}
          width={180}
          height={180}
          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-100"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-[#00F0FF] text-[#050505] font-mono text-[10px] font-medium uppercase">
            -{deal.discount}%
          </span>
        </div>
      </div>
      <div className="p-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
          {deal.category} • {deal.store}
        </span>
        <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#EAEAEA] mt-2 mb-2 line-clamp-2">
          {deal.title}
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-mono text-xl font-medium text-[#00F0FF]">${deal.salePrice}</span>
          <span className="font-mono text-xs text-[#888888] line-through">${deal.originalPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#888888]">Ends {deal.endDate}</span>
          <a
            href={deal.link}
            className="text-[#00F0FF] hover:underline font-mono text-[10px] uppercase flex items-center gap-1"
          >
            View <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  )
}
