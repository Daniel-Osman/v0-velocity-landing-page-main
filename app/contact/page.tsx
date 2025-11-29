import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Mail, MapPin, MessageSquare } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with VELOCITY. Submit news tips, feedback, business inquiries, or partnership proposals.",
  openGraph: {
    title: "Contact VELOCITY",
    description: "Get in touch with VELOCITY. Submit news tips, feedback, or business inquiries.",
    url: "https://velocity.tech/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://velocity.tech/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Contact Us"
          description="Have a tip, feedback, or business inquiry? We'd love to hear from you."
          badge="Contact"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="p-8 bg-[#0F0F11] border border-[#262626]">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#262626] text-[#EAEAEA] font-light focus:border-[#00F0FF] focus:outline-none transition-colors duration-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#262626] text-[#EAEAEA] font-light focus:border-[#00F0FF] focus:outline-none transition-colors duration-100"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#262626] text-[#EAEAEA] font-light focus:border-[#00F0FF] focus:outline-none transition-colors duration-100">
                  <option value="">Select a topic</option>
                  <option value="news-tip">News Tip</option>
                  <option value="feedback">Feedback</option>
                  <option value="advertising">Advertising Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0A0B] border border-[#262626] text-[#EAEAEA] font-light focus:border-[#00F0FF] focus:outline-none transition-colors duration-100 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-fill w-full py-3 border border-[#00F0FF] text-[#00F0FF] font-mono text-sm uppercase tracking-wider hover:bg-[#00F0FF] hover:text-[#050505] transition-colors duration-100"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-[#0F0F11] border border-[#262626]">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#00F0FF] shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                    Email Us
                  </h3>
                  <p className="text-[#888888] font-light text-sm mb-2">For general inquiries:</p>
                  <a href="mailto:hello@velocity.tech" className="text-[#00F0FF] font-mono text-sm hover:underline">
                    hello@velocity.tech
                  </a>
                  <p className="text-[#888888] font-light text-sm mt-4 mb-2">For press and media:</p>
                  <a href="mailto:press@velocity.tech" className="text-[#00F0FF] font-mono text-sm hover:underline">
                    press@velocity.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0F0F11] border border-[#262626]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#00F0FF] shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                    Office
                  </h3>
                  <p className="text-[#888888] font-light text-sm">
                    548 Market Street, Suite 12345
                    <br />
                    San Francisco, CA 94104
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0F0F11] border border-[#262626]">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-[#00F0FF] shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                    Tips & Stories
                  </h3>
                  <p className="text-[#888888] font-light text-sm mb-2">
                    Have a news tip or story lead? We protect our sources.
                  </p>
                  <a href="mailto:tips@velocity.tech" className="text-[#00F0FF] font-mono text-sm hover:underline">
                    tips@velocity.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 border border-dashed border-[#262626] bg-[#0A0A0B]">
              <p className="text-[#888888] text-sm font-light">
                <span className="text-[#00F0FF] font-mono text-xs">NOTE:</span> We typically respond to inquiries within
                24-48 hours during business days. For urgent matters, please indicate so in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
