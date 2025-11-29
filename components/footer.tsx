import Link from "next/link"
import { Zap, Github, Twitter } from "lucide-react"

const footerLinks = {
  content: [
    { name: "AI", href: "/ai" },
    { name: "Hardware", href: "/hardware" },
    { name: "Reviews", href: "/reviews" },
    { name: "Guides", href: "/guides" },
    { name: "Deals", href: "/deals" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Advertise", href: "/advertise" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0F0F11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#00F0FF]" strokeWidth={1.5} />
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#EAEAEA]">VELOCITY</span>
            </Link>
            <p className="text-[#888888] text-sm font-light mb-4">
              High-speed tech journalism for the modern engineer.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                className="text-[#888888] hover:text-[#00F0FF] transition-colors duration-100"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com"
                className="text-[#888888] hover:text-[#00F0FF] transition-colors duration-100"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#888888] mb-4">Content</h4>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#EAEAEA] text-sm font-light hover:text-[#00F0FF] transition-colors duration-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#888888] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#EAEAEA] text-sm font-light hover:text-[#00F0FF] transition-colors duration-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#888888] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#EAEAEA] text-sm font-light hover:text-[#00F0FF] transition-colors duration-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">
            © 2025 Velocity Media. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-[#888888]">Built with precision. Delivered at speed.</p>
        </div>
      </div>
    </footer>
  )
}
