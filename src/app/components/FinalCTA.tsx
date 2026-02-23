export function FinalCTA() {
  return (
    <section
      id="cta"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="relative overflow-hidden bg-[#111827] py-24"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Soft blue radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Second smaller glow top-right */}
      <div
        className="absolute -top-20 right-1/4 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-white/60" style={{ fontSize: 13, fontWeight: 500 }}>
            Now accepting new clients
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-white mb-5"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.2 }}
        >
          Book a Strategy Call
        </h2>

        {/* Subtext */}
        <p
          className="text-[#9CA3AF] mb-10 max-w-lg mx-auto"
          style={{ fontSize: 17, lineHeight: 1.75 }}
        >
          We'll review your current situation and see if we can help. No pressure. No obligation. Just a clear picture of where you stand.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:lukas@siteleveled.com?subject=Strategy Call Request"
          className="inline-flex items-center gap-3 border-2 border-white text-white px-10 rounded-xl hover:bg-white hover:text-[#111827] transition-all duration-300 group"
          style={{ fontSize: 16, fontWeight: 700, height: 58 }}
        >
          Book a Strategy Call
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="group-hover:translate-x-0.5 transition-transform"
          >
            <path
              d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Reassurance row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {["Free · 20 minutes", "No sales pressure", "Get a real assessment"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#6B7280]" style={{ fontSize: 13, fontWeight: 500 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
