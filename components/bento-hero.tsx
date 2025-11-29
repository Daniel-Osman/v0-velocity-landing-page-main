import Image from "next/image"
import { ArrowRight, TrendingUp, Star, Tag } from "lucide-react"
import Link from "next/link"

export function BentoHero() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-[#00F0FF] to-transparent" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">Featured Stories</span>
        <div className="h-px flex-1 bg-gradient-to-l from-[#00F0FF] to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
        {/* Slot 1: Featured AI Story (Large) */}
        <Link
          href="/article/gpt-5-announcement"
          className="md:col-span-4 lg:col-span-4 md:row-span-2 group relative bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal"
        >
          <div className="absolute inset-0 scanline-hover">
            <Image
              src="/futuristic-ai-neural-network-visualization-dark-cy.jpg"
              alt="GPT-5 Announcement"
              fill
              className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-100"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 border border-dashed border-[#00F0FF] text-[#00F0FF] font-mono text-[10px] uppercase tracking-wider">
                AI
              </span>
              <span className="font-mono text-[10px] text-[#888888]">2 hours ago</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-2 leading-tight">
              OpenAI Unveils GPT-5: The Architecture That Changes Everything
            </h2>
            <p className="text-[#888888] text-sm font-light line-clamp-2 mb-4">
              A deep dive into the revolutionary multimodal reasoning capabilities and what it means for the future of
              AI development.
            </p>
            <div className="flex items-center gap-2 text-[#00F0FF] font-mono text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-100">
              Read Analysis <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>
        </Link>

        {/* Slot 2: Best Deal of the Day (Tall) */}
        <Link
          href="/deals/rtx-5090"
          className="md:col-span-2 md:row-span-2 group relative bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal mask-reveal-delay-1"
        >
          <div className="absolute top-0 left-0 right-0 p-4 z-10">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#00F0FF]" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#00F0FF]">Deal of the Day</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center scanline-hover">
            <Image
              src="/nvidia-rtx-5090-graphics-card-dark-background.jpg"
              alt="RTX 5090"
              width={200}
              height={200}
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-100"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0F0F11] to-transparent">
            <span className="font-mono text-xs text-[#888888] line-through">$1,999</span>
            <div className="font-mono text-3xl font-medium text-[#00F0FF] mb-1">$1,649</div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA]">NVIDIA RTX 5090</h3>
            <p className="text-[#888888] text-xs font-light">Founders Edition • Limited Stock</p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-[#00F0FF] text-[#050505] font-mono text-[10px] font-medium uppercase">
              -18%
            </span>
          </div>
        </Link>

        {/* Slot 3: Top Trending Hardware (Small) */}
        <Link
          href="/hardware/m4-macbook-pro"
          className="md:col-span-2 lg:col-span-3 group relative bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal mask-reveal-delay-2"
        >
          <div className="absolute inset-0 scanline-hover">
            <Image
              src="/macbook-pro-m4-laptop-dark-minimal.jpg"
              alt="M4 MacBook Pro"
              fill
              className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-100"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] to-transparent" />
          <div className="relative p-5 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#00F0FF]" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#00F0FF]">Trending Hardware</span>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-1">
                M4 MacBook Pro First Look
              </h3>
              <p className="text-[#888888] text-xs font-light">Apple&apos;s most powerful laptop yet</p>
            </div>
          </div>
        </Link>

        {/* Slot 4: Latest Camera Review (Small) */}
        <Link
          href="/reviews/sony-a1-ii"
          className="md:col-span-2 lg:col-span-3 group relative bg-[#0F0F11] border border-[#262626] overflow-hidden hover:border-[#00F0FF] hover:-translate-y-0.5 transition-all duration-100 mask-reveal mask-reveal-delay-3"
        >
          <div className="absolute inset-0 scanline-hover">
            <Image
              src="/sony-a1-ii-mirrorless-camera-dark-studio.jpg"
              alt="Sony A1 II"
              fill
              className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-100"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] to-transparent" />
          <div className="relative p-5 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#00F0FF]" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#00F0FF]">Review</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-1">
                  Sony A1 II
                </h3>
                <p className="text-[#888888] text-xs font-light">The flagship redefined</p>
              </div>
              <div className="text-right">
                <div className="font-mono text-3xl font-medium text-[#00F0FF]">9.4</div>
                <div className="font-mono text-[10px] text-[#888888] uppercase">Score</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
