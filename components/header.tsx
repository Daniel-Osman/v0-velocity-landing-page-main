"use client"

import { useState } from "react"
import { Search, Menu, X, Zap } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "AI", href: "/ai" },
  { name: "Hardware", href: "/hardware" },
  { name: "Deals", href: "/deals" },
  { name: "Reviews", href: "/reviews" },
  { name: "Guides", href: "/guides" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap
              className="w-6 h-6 text-[#00F0FF] transition-transform duration-100 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[#EAEAEA]">
              VELOCITY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-[#00F0FF] transition-colors duration-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#888888] hover:text-[#00F0FF] transition-colors duration-100">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hidden sm:block btn-fill px-4 py-2 border border-[#00F0FF] text-[#00F0FF] font-mono text-xs uppercase tracking-wider transition-colors duration-100">
              Subscribe
            </button>
            <button className="md:hidden p-2 text-[#888888]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#262626]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 font-mono text-sm uppercase tracking-wider text-[#888888] hover:text-[#00F0FF] transition-colors duration-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
