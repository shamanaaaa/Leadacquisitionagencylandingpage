import { CheckCircle2 } from "lucide-react";

function GeometricIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background soft blue wash */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 40%, #EFF6FF 0%, #DBEAFE 40%, #BFDBFE 100%)",
        }}
      />

      {/* Dot grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#93C5FD" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Main dashboard card */}
      <div className="relative z-10 w-[340px] flex flex-col gap-3">
        {/* Header bar */}
        <div
          className="rounded-xl overflow-hidden shadow-xl"
          style={{ background: "#fff", border: "1px solid #E5E7EB" }}
        >
          <div className="bg-[#2563EB] px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white/70" style={{ fontSize: 11, fontWeight: 500 }}>
                INQUIRY SYSTEM
              </p>
              <p className="text-white" style={{ fontSize: 15, fontWeight: 700 }}>
                Kitchen Studio Pro
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-[#E5E7EB] px-0 py-0">
            {[
              { label: "Inquiries", value: "47" },
              { label: "Qualified", value: "31" },
              { label: "Closed", value: "12" },
            ].map((s) => (
              <div key={s.label} className="py-4 flex flex-col items-center">
                <span className="text-[#2563EB]" style={{ fontSize: 22, fontWeight: 700 }}>
                  {s.value}
                </span>
                <span className="text-[#6B7280]" style={{ fontSize: 11, fontWeight: 500 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead cards */}
        {[
          { name: "Petra Kovářová", project: "Full kitchen remodel", status: "Hot lead", dot: "#22C55E" },
          { name: "Martin Šimek", project: "Cabinet upgrade + island", status: "Scheduled call", dot: "#2563EB" },
          { name: "Lucia Blaho", project: "Open-plan kitchen design", status: "New inquiry", dot: "#F59E0B" },
        ].map((lead) => (
          <div
            key={lead.name}
            className="rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm"
            style={{ background: "#fff", border: "1px solid #E5E7EB" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#EFF6FF" }}
            >
              <span className="text-[#2563EB]" style={{ fontSize: 13, fontWeight: 700 }}>
                {lead.name[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#111827] truncate" style={{ fontSize: 13, fontWeight: 600 }}>
                {lead.name}
              </p>
              <p className="text-[#6B7280] truncate" style={{ fontSize: 11 }}>
                {lead.project}
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: lead.dot }} />
              <span style={{ fontSize: 11, fontWeight: 500, color: "#6B7280" }}>{lead.status}</span>
            </div>
          </div>
        ))}

        {/* Bottom tag */}
        <div
          className="rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm"
          style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}
        >
          <div className="w-7 h-7 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[#15803D]" style={{ fontSize: 12, fontWeight: 600 }}>
            System running — 3 new inquiries today
          </p>
        </div>
      </div>

      {/* Floating accent circles */}
      <div
        className="absolute top-8 right-8 w-16 h-16 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #BFDBFE, transparent)" }}
      />
      <div
        className="absolute bottom-12 left-8 w-24 h-24 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #93C5FD, transparent)" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-white pt-24 pb-20"
    >
      {/* Subtle dot grid background across full width */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.35,
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[560px] py-10">
            {/* Left — Content */}
            <div className="flex flex-col gap-7">
              {/* Badge pill */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-sm">
                <CheckCircle2 size={15} className="text-[#2563EB]" strokeWidth={2.5} />
                <span className="text-[#6B7280]" style={{ fontSize: 13, fontWeight: 500 }}>
                  Trusted by 12+ companies&nbsp;·&nbsp;3+ years experience
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-[#111827] leading-tight"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-1.2px" }}
              >
                We help local kitchen remodelers get more{" "}
                <span className="text-[#2563EB]">consistent, high-quality</span> inquiries.
              </h1>

              {/* Subheadline */}
              <p className="text-[#6B7280]" style={{ fontSize: 18, lineHeight: 1.65 }}>
                Book a short, no-obligation call to get an analysis of your current situation and discover what's holding your pipeline back.
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-7 rounded-lg hover:bg-[#1d4ed8] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontSize: 16, fontWeight: 600, height: 52 }}
                >
                  Book a Strategy Call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <p className="text-[#6B7280]" style={{ fontSize: 13 }}>
                  Free · No commitment · 20 min
                </p>
              </div>

              {/* Social proof mini row */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["#BFDBFE", "#A5F3FC", "#BBF7D0"].map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                      style={{ background: bg }}
                    >
                      <span className="text-[#1e3a8a]" style={{ fontSize: 11, fontWeight: 700 }}>
                        {["Z", "I", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#2563EB">
                        <path d="M6 1L7.3 4.3H11L8.4 6.3L9.3 9.7L6 7.8L2.7 9.7L3.6 6.3L1 4.3H4.7L6 1Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#6B7280]" style={{ fontSize: 12 }}>
                    Trusted by 12+ kitchen studios across Europe
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Geometric Illustration */}
            <div className="relative h-[480px] lg:h-[520px]">
              <GeometricIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
