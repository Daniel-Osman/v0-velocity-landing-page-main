import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ArrowRight, BarChart3, Users, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Advertise",
  description:
    "Reach 2.5M+ tech professionals through VELOCITY. Sponsored content, display ads, newsletter sponsorships, and product reviews.",
  openGraph: {
    title: "Advertise with VELOCITY",
    description: "Reach millions of tech professionals, developers, and enthusiasts through our trusted platform.",
    url: "https://velocity.tech/advertise",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/advertise",
  },
}

const adFormats = [
  {
    name: "Sponsored Articles",
    description: "In-depth content created by our editorial team showcasing your product or service.",
    price: "From $15,000",
  },
  {
    name: "Display Advertising",
    description: "Premium banner placements across our site with targeting options.",
    price: "CPM from $25",
  },
  {
    name: "Newsletter Sponsorship",
    description: "Exclusive sponsorship of our weekly newsletter reaching 250K+ subscribers.",
    price: "From $8,000/week",
  },
  {
    name: "Product Reviews",
    description: "Independent review of your product by our expert team.",
    price: "Contact for pricing",
  },
]

export default function AdvertisePage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Advertise with VELOCITY"
          description="Reach millions of tech professionals, developers, and enthusiasts through our trusted platform."
          badge="Advertising"
        />

        {/* Stats */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-[#0F0F11] border border-[#262626] text-center">
            <Users className="w-6 h-6 text-[#00F0FF] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-mono text-3xl font-medium text-[#00F0FF] mb-1">2.5M+</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Monthly Readers</div>
          </div>
          <div className="p-6 bg-[#0F0F11] border border-[#262626] text-center">
            <BarChart3 className="w-6 h-6 text-[#00F0FF] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-mono text-3xl font-medium text-[#00F0FF] mb-1">8M+</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Monthly Pageviews</div>
          </div>
          <div className="p-6 bg-[#0F0F11] border border-[#262626] text-center">
            <Target className="w-6 h-6 text-[#00F0FF] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-mono text-3xl font-medium text-[#00F0FF] mb-1">72%</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Tech Professionals</div>
          </div>
          <div className="p-6 bg-[#0F0F11] border border-[#262626] text-center">
            <Zap className="w-6 h-6 text-[#00F0FF] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-mono text-3xl font-medium text-[#00F0FF] mb-1">4.2min</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Avg. Time on Site</div>
          </div>
        </section>

        {/* Why Advertise */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 border border-[#262626] overflow-hidden">
              <Image
                src="/tech-audience-data-visualization-dark.jpg"
                alt="Audience Analytics"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-4">
                Why VELOCITY?
              </h2>
              <p className="text-[#888888] font-light leading-relaxed mb-6">
                Our audience isn't just tech-curious—they're tech-fluent. Engineers, developers, IT decision-makers, and
                power users who influence billions in annual tech spending.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00F0FF] mt-2 shrink-0" />
                  <span className="text-[#888888] font-light">
                    85% of readers have purchasing authority at their organization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00F0FF] mt-2 shrink-0" />
                  <span className="text-[#888888] font-light">Average household income of $175K+</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00F0FF] mt-2 shrink-0" />
                  <span className="text-[#888888] font-light">43% work in software development or engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00F0FF] mt-2 shrink-0" />
                  <span className="text-[#888888] font-light">
                    Industry-leading engagement rates (3x industry average)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ad Formats */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-8">
            Advertising Options
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {adFormats.map((format) => (
              <div
                key={format.name}
                className="p-6 bg-[#0F0F11] border border-[#262626] hover:border-[#00F0FF] transition-colors duration-100"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  {format.name}
                </h3>
                <p className="text-[#888888] text-sm font-light mb-4">{format.description}</p>
                <span className="font-mono text-sm text-[#00F0FF]">{format.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 p-8 bg-[#0F0F11] border border-[#262626] text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-[#888888] font-light max-w-xl mx-auto mb-6">
            Ready to reach the most engaged tech audience on the web? Our partnerships team will work with you to create
            a custom campaign that delivers results.
          </p>
          <a
            href="mailto:advertising@velocity.tech"
            className="inline-flex items-center gap-2 btn-fill px-6 py-3 border border-[#00F0FF] text-[#00F0FF] font-mono text-sm uppercase tracking-wider"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </section>
      </div>
      <Footer />
    </main>
  )
}
