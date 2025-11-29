"use client"

import type React from "react"

import { useState } from "react"
import { Zap, ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <section className="mb-16">
      <div className="relative bg-[#0F0F11] border border-[#262626] p-8 md:p-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00F0FF] to-[#7000FF] opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7000FF] to-[#00F0FF] opacity-5 blur-3xl" />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#00F0FF]" strokeWidth={1.5} />
            <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF]">Stay Updated</span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3">
            Get the Latest Tech Insights
          </h2>
          <p className="text-[#888888] text-sm font-light mb-6">
            Join 50,000+ engineers and tech enthusiasts. Weekly deep dives into AI, hardware, and the future of
            technology.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="engineer@company.com"
              className="flex-1 px-4 py-3 bg-[#050505] border border-[#262626] text-[#EAEAEA] font-mono text-sm placeholder:text-[#888888] focus:border-[#00F0FF] focus:outline-none transition-colors duration-100"
              required
            />
            <button
              type="submit"
              className="btn-fill px-6 py-3 bg-transparent border border-[#00F0FF] text-[#00F0FF] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-100"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>

          <p className="mt-4 font-mono text-[10px] text-[#888888]">
            No spam. Unsubscribe anytime. By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
