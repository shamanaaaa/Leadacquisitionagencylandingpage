export function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-[#111827]"
    >
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
                AgSiteLeveled
              </span>
            </div>
            <p className="text-[#6B7280] max-w-xs" style={{ fontSize: 14, lineHeight: 1.7 }}>
              Inquiry-acquisition systems for kitchen remodelers and kitchen studios across Europe.
            </p>

            {/* Contact */}
            <a
              href="mailto:hello@agsiteleveled.com"
              className="text-[#9CA3AF] hover:text-white transition-colors"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              hello@agsiteleveled.com
            </a>
          </div>

          {/* Right — Nav */}
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-[#6B7280] uppercase tracking-widest" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}>
              Navigation
            </p>
            <nav className="flex flex-col md:items-end gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                  style={{ fontSize: 14, fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280]" style={{ fontSize: 12 }}>
            © 2026 Ag.Siteleveled.com – DOMAN s.r.o.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#6B7280] hover:text-[#9CA3AF] transition-colors" style={{ fontSize: 12 }}>
              Privacy Policy
            </a>
            <span className="text-[#374151]">·</span>
            <a href="#" className="text-[#6B7280] hover:text-[#9CA3AF] transition-colors" style={{ fontSize: 12 }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
