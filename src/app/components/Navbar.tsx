export function Navbar() {
  return (
    <nav
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[#111827]" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px" }}>
            AgSiteLeveled
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Services", "Reviews", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#6B7280] hover:text-[#111827] transition-colors"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-lg hover:bg-[#1d4ed8] transition-colors"
          style={{ fontSize: 14, fontWeight: 600 }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
