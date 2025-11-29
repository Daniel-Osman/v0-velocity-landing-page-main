import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Clock, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealCard } from "@/components/deal-card"
import { getDealBySlug, deals } from "@/lib/articles"

export function generateStaticParams() {
  return deals.map((deal) => ({
    slug: deal.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const deal = getDealBySlug(slug)

  if (!deal) {
    return { title: "Deal Not Found" }
  }

  return {
    title: `${deal.title} - ${deal.discount}% Off`,
    description: `${deal.description} Save $${deal.originalPrice - deal.salePrice} at ${deal.store}. Deal ends ${deal.endDate}.`,
    openGraph: {
      title: `${deal.title} - ${deal.discount}% Off | VELOCITY Deals`,
      description: deal.description,
      type: "website",
      images: [{ url: deal.image, width: 1200, height: 630, alt: deal.title }],
    },
    alternates: {
      canonical: `https://velocity.tech/deals/${slug}`,
    },
  }
}

export default async function DealPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const deal = getDealBySlug(slug)

  if (!deal) {
    notFound()
  }

  const relatedDeals = deals.filter((d) => d.id !== deal.id).slice(0, 3)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: deal.title,
    description: deal.description,
    image: `https://velocity.tech${deal.image}`,
    brand: { "@type": "Brand", name: deal.store },
    offers: {
      "@type": "Offer",
      price: deal.salePrice,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: deal.endDate,
      seller: { "@type": "Organization", name: deal.store },
    },
  }

  return (
    <main className="relative z-10 min-h-screen">
      {/* Inject product schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/deals"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-mono text-xs uppercase tracking-wider mb-8 transition-colors duration-100"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to Deals
        </Link>

        <div className="bg-card border border-border overflow-hidden mb-8">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-96 flex items-center justify-center bg-background">
              <Image
                src={deal.image || "/placeholder.svg"}
                alt={deal.title}
                width={350}
                height={350}
                className="object-contain"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-accent text-accent-foreground font-mono text-sm font-medium uppercase">
                  -{deal.discount}% OFF
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {deal.category} • {deal.store}
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-foreground mb-4">
                {deal.title}
              </h1>
              <p className="text-muted-foreground font-light mb-6">{deal.description}</p>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-4xl font-medium text-accent">${deal.salePrice}</span>
                <span className="font-mono text-lg text-muted-foreground line-through">${deal.originalPrice}</span>
                <span className="px-2 py-1 bg-secondary text-accent font-mono text-xs">
                  Save ${deal.originalPrice - deal.salePrice}
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mb-6 p-3 border border-dashed border-border">
                <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span>Deal ends {deal.endDate}</span>
              </div>

              <a
                href={deal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill w-full py-3 border border-accent text-accent font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-100"
              >
                Get This Deal at {deal.store} <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 border border-dashed border-border bg-background mb-12 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-muted-foreground text-sm font-light">
            Prices and availability are subject to change. VELOCITY may earn a commission on purchases made through
            affiliate links. We only recommend products we believe provide genuine value.
          </p>
        </div>

        {relatedDeals.length > 0 && (
          <section aria-labelledby="more-deals">
            <h2
              id="more-deals"
              className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground mb-6"
            >
              More Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedDeals.map((related, index) => (
                <DealCard key={related.id} deal={related} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  )
}
