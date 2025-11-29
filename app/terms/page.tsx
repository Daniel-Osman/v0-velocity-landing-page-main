import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read VELOCITY's terms of service governing the use of our website, content, and services.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://velocity.tech/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="Terms of Service" description="Last updated: November 26, 2025" badge="Legal" />

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              By accessing and using VELOCITY ("the Site"), you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              2. Use of Content
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">
              All content on VELOCITY, including articles, images, graphics, and other materials, is owned by VELOCITY
              Media or its licensors and is protected by copyright laws. You may:
            </p>
            <ul className="space-y-2 text-[#888888] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>View and read content for personal, non-commercial use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Share links to our content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Quote brief excerpts with proper attribution</span>
              </li>
            </ul>
            <p className="text-[#888888] font-light leading-relaxed mt-4">
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              3. User Conduct
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, or impair
              the Site. You agree not to attempt to gain unauthorized access to any part of the Site or its systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              4. Affiliate Links and Deals
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              VELOCITY may include affiliate links to products and services. We may earn a commission when you make
              purchases through these links. This does not affect our editorial independence or the prices you pay. Deal
              prices and availability are subject to change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              5. Disclaimer
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              Content on VELOCITY is provided "as is" without warranties of any kind. While we strive for accuracy, we
              do not guarantee that all information is complete, accurate, or current. Reviews and opinions expressed
              are those of our editorial team and should not be taken as professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the Site after changes
              constitutes acceptance of the new terms. We will make reasonable efforts to notify users of significant
              changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">7. Contact</h2>
            <p className="text-[#888888] font-light leading-relaxed">
              Questions about these Terms should be directed to{" "}
              <a href="mailto:legal@velocity.tech" className="text-[#00F0FF] hover:underline">
                legal@velocity.tech
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
