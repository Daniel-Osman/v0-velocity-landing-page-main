import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about how VELOCITY uses cookies and similar technologies to improve your browsing experience.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://velocity.tech/cookies",
  },
}

export default function CookiesPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="Cookie Policy" description="Last updated: November 26, 2025" badge="Legal" />

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              What Are Cookies?
            </h2>
            <p className="text-[#888888] font-light leading-relaxed">
              Cookies are small text files stored on your device when you visit websites. They help sites remember your
              preferences, understand how you use the site, and deliver personalized content and advertisements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              How We Use Cookies
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">
              VELOCITY uses the following types of cookies:
            </p>

            <div className="space-y-6">
              <div className="p-4 bg-[#0F0F11] border border-[#262626]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  Essential Cookies
                </h3>
                <p className="text-[#888888] font-light text-sm">
                  Required for the site to function properly. These cannot be disabled. They include cookies for
                  security, network management, and accessibility.
                </p>
              </div>

              <div className="p-4 bg-[#0F0F11] border border-[#262626]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-[#888888] font-light text-sm">
                  Help us understand how visitors interact with our site. We use this data to improve content and user
                  experience. These cookies collect anonymous statistical information.
                </p>
              </div>

              <div className="p-4 bg-[#0F0F11] border border-[#262626]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  Advertising Cookies
                </h3>
                <p className="text-[#888888] font-light text-sm">
                  Used to deliver relevant advertisements and track ad campaign performance. These may be set by our
                  advertising partners.
                </p>
              </div>

              <div className="p-4 bg-[#0F0F11] border border-[#262626]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA] mb-2">
                  Preference Cookies
                </h3>
                <p className="text-[#888888] font-light text-sm">
                  Remember your settings and preferences, such as theme choice (if available) and newsletter
                  subscription status.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">
              Managing Cookies
            </h2>
            <p className="text-[#888888] font-light leading-relaxed mb-4">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="space-y-2 text-[#888888] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>View what cookies are stored and delete them individually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Block third-party cookies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Block all cookies from specific sites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1.5">•</span>
                <span>Delete all cookies when you close your browser</span>
              </li>
            </ul>
            <p className="text-[#888888] font-light leading-relaxed mt-4">
              Note that blocking certain cookies may affect your experience on our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#EAEAEA] mb-4">Contact Us</h2>
            <p className="text-[#888888] font-light leading-relaxed">
              If you have questions about our use of cookies, please contact us at{" "}
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
