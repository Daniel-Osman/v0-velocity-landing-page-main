import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VELOCITY's privacy policy explains how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://velocity.tech/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="Privacy Policy" description="Last updated: November 26, 2025" badge="Legal" />

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              1. Information We Collect
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">
              VELOCITY Media ("we," "us," or "our") collects information you provide directly, such as when you
              subscribe to our newsletter, create an account, or contact us. This may include:
            </p>
            <ul className="space-y-2 text-[#888888] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Email address and name (for newsletter subscriptions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Contact information (when you reach out to us)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Usage data collected through cookies and similar technologies</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-[#888888] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Send you our newsletter and updates (with your consent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Improve our website and content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Analyze traffic and usage patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Respond to your inquiries</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              3. Data Sharing
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              We do not sell your personal information. We may share data with trusted service providers who help us
              operate our website and send communications, subject to confidentiality agreements. We may also disclose
              information when required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              4. Your Rights
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">
              Depending on your location, you may have rights including:
            </p>
            <ul className="space-y-2 text-[#888888] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Access to your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Correction of inaccurate data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Deletion of your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Opting out of marketing communications</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              5. Contact Us
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              For privacy-related inquiries, please contact us at{" "}
              <a href="mailto:privacy@velocity.tech" className="text-[#00F0FF] hover:underline">
                privacy@velocity.tech
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
