import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import type { Metadata } from "next"

const openings = [
  {
    title: "Senior AI/ML Writer",
    department: "Editorial",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Cover the rapidly evolving AI landscape with technical depth and clarity. Requires strong understanding of ML architectures and industry trends.",
  },
  {
    title: "Hardware Test Engineer",
    department: "Labs",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Design and execute benchmark tests for CPUs, GPUs, and consumer electronics. Experience with test automation and statistical analysis required.",
  },
  {
    title: "Video Producer",
    department: "Media",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Create engaging video content for YouTube and social platforms. Expert-level video editing and motion graphics skills required.",
  },
  {
    title: "Freelance Reviewer",
    department: "Editorial",
    location: "Remote (Worldwide)",
    type: "Contract",
    description:
      "Write in-depth reviews of tech products. Looking for specialists in cameras, audio equipment, and smart home devices.",
  },
]

const benefits = [
  "Competitive salary + equity",
  "Unlimited PTO",
  "Full health, dental, and vision coverage",
  "Home office budget",
  "Conference attendance",
  "Access to latest tech for testing",
]

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the VELOCITY team. We're hiring writers, engineers, and creators passionate about technology and journalism.",
  openGraph: {
    title: "Careers at VELOCITY",
    description: "Join our team. We're hiring writers, engineers, and creators passionate about technology.",
    url: "https://velocity.tech/careers",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/careers",
  },
}

export default function CareersPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Join Our Team"
          description="Help us build the future of tech journalism. We're always looking for talented writers, engineers, and creators."
          badge="Careers"
        />

        {/* Why Join */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-4">
                Why VELOCITY?
              </h2>
              <p className="text-[#888888] font-light leading-relaxed mb-6">
                We're building a new kind of tech publication—one that treats readers like the intelligent, curious
                people they are. If you're passionate about technology and believe journalism can be both rigorous and
                engaging, we want to talk to you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00F0FF]" />
                    <span className="text-[#888888] text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-[#0F0F11] border border-[#262626]">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">15</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">8</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Countries</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">95%</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Remote Work</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">4</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Open Roles</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-8">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <Link
                key={job.title}
                href="/contact"
                className="group block p-6 bg-[#0F0F11] border border-[#262626] hover:border-[#00F0FF] transition-all duration-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] group-hover:text-[#00F0FF] transition-colors duration-100 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-[#888888] text-sm font-light mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1 font-mono text-[10px] text-[#888888]">
                        <Briefcase className="w-3 h-3" strokeWidth={1.5} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-[#888888]">
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-[#888888]">
                        <Clock className="w-3 h-3" strokeWidth={1.5} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#00F0FF] font-mono text-xs uppercase tracking-wider shrink-0">
                    Apply{" "}
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-100"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* General Application */}
        <section className="mb-16 p-8 bg-[#0F0F11] border border-dashed border-[#262626]">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-3">
            Don't see the right role?
          </h3>
          <p className="text-[#888888] font-light mb-4">
            We're always interested in hearing from talented individuals. Send us your resume and a brief note about
            what you'd bring to VELOCITY.
          </p>
          <a
            href="mailto:careers@velocity.tech"
            className="inline-flex items-center gap-2 text-[#00F0FF] font-mono text-sm hover:underline"
          >
            careers@velocity.tech <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </section>

        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
