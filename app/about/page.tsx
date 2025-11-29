import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { PageHeader } from "@/components/page-header"
import { Zap, Target, Users, Award } from "lucide-react"
import type { Metadata } from "next"

const team = [
  {
    name: "Sarah Chen",
    role: "Editor-in-Chief",
    bio: "Former MIT AI researcher turned tech journalist. Leading VELOCITY's coverage of artificial intelligence and emerging technologies.",
    avatar: "/female-tech-journalist-professional-headshot.jpg",
  },
  {
    name: "James Liu",
    role: "Hardware Editor",
    bio: "15 years of experience testing and reviewing processors, graphics cards, and high-performance computing systems.",
    avatar: "/male-hardware-reviewer-professional-headshot.jpg",
  },
  {
    name: "Rachel Wong",
    role: "Camera & Imaging Editor",
    bio: "Professional photographer and imaging specialist with deep expertise in camera technology and computational photography.",
    avatar: "/female-camera-reviewer-professional-headshot.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Science Editor",
    bio: "PhD in Physics from Stanford. Covers quantum computing, breakthrough scientific discoveries, and space technology.",
    avatar: "/male-science-editor-professional-headshot.jpg",
  },
]

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "We fact-check everything. Our reputation depends on getting the details right.",
  },
  {
    icon: Users,
    title: "Reader-Focused",
    description: "We write for engineers, developers, and tech enthusiasts who demand depth.",
  },
  {
    icon: Award,
    title: "Independence",
    description: "Our reviews are never influenced by advertisers. We buy most products we test.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Breaking news matters. We move fast without sacrificing quality.",
  },
]

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VELOCITY is a high-speed tech publication covering AI, hardware, and the future of computing. Meet our team and learn about our mission.",
  openGraph: {
    title: "About VELOCITY | Tech Publication",
    description:
      "High-speed tech journalism for the modern engineer. Founded in 2023, covering AI, hardware, and the future of computing.",
    url: "https://velocity.tech/about",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/about",
  },
}

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="About VELOCITY"
          description="High-speed tech journalism for the modern engineer. Founded in 2023, we cover AI, hardware, and the future of computing."
          badge="About Us"
        />

        {/* Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-4">
                Our Mission
              </h2>
              <p className="text-[#888888] font-light leading-relaxed mb-4">
                VELOCITY was founded with a simple premise: tech journalism should be as sophisticated as the technology
                it covers. We write for engineers, developers, and enthusiasts who want to understand not just what's
                new, but why it matters.
              </p>
              <p className="text-[#888888] font-light leading-relaxed">
                In an era of clickbait and superficial coverage, we go deep. Our articles explain the architecture
                behind new AI models, benchmark hardware with scientific rigor, and analyze market trends with
                data-driven insight.
              </p>
            </div>
            <div className="relative h-64 md:h-80 border border-[#262626] overflow-hidden">
              <Image
                src="/modern-tech-newsroom-dark-minimalist.jpg"
                alt="VELOCITY Newsroom"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-[#0F0F11] border border-[#262626] hover:border-[#00F0FF] transition-colors duration-100"
              >
                <value.icon className="w-8 h-8 text-[#00F0FF] mb-4" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#888888] text-sm font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-8">
            Editorial Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-6 bg-[#0F0F11] border border-[#262626] hover:border-[#00F0FF] transition-colors duration-100"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 border border-[#262626] overflow-hidden">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-100"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] text-center mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#00F0FF] text-center mb-3">
                  {member.role}
                </p>
                <p className="text-[#888888] text-sm font-light text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 p-8 bg-[#0F0F11] border border-[#262626]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">2.5M+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">500+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Reviews Published</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">15</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Team Members</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl font-medium text-[#00F0FF] mb-2">2023</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">Founded</div>
            </div>
          </div>
        </section>

        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
