import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="font-mono text-8xl font-medium text-[#00F0FF] mb-4">404</div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#EAEAEA] mb-2">
            Page Not Found
          </h1>
          <p className="text-[#888888] font-light mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-fill px-6 py-3 border border-[#00F0FF] text-[#00F0FF] font-mono text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
