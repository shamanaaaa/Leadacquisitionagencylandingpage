import { Target, Layout, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Google Ads & Meta Ads",
    description: "Precision-targeted ad campaigns that reach homeowners actively planning kitchen renovations in your area.",
  },
  {
    icon: Layout,
    title: "Conversion-focused landing pages",
    description: "Bespoke pages built to convert ad traffic into genuine, qualified inquiries — not just clicks.",
  },
  {
    icon: MessageSquare,
    title: "Tailored messaging",
    description: "Copy and positioning crafted around your studio's strengths, style, and ideal project type.",
  },
];

function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl"
      style={{ background: "#fff", border: "1px solid #E5E7EB" }}
    >
      {/* Blue header */}
      <div className="bg-[#2563EB] px-6 py-5">
        <p className="text-white/70" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em" }}>
          INQUIRY ACQUISITION SYSTEM
        </p>
        <p className="text-white mt-0.5" style={{ fontSize: 17, fontWeight: 700 }}>
          Live Campaign Overview
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-white/80" style={{ fontSize: 12 }}>Active · Updated now</span>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#F3F4F6]">
        {[
          { label: "Ad Impressions", value: "24,810", change: "+12%", up: true },
          { label: "Landing Page Clicks", value: "1,043", change: "+8%", up: true },
          { label: "Form Completions", value: "89", change: "+23%", up: true },
          { label: "Qualified Inquiries", value: "47", change: "+31%", up: true },
          { label: "Cost per Inquiry", value: "€14.20", change: "-6%", up: false },
        ].map((row) => (
          <div key={row.label} className="px-6 py-4 flex items-center justify-between">
            <span className="text-[#6B7280]" style={{ fontSize: 13, fontWeight: 500 }}>
              {row.label}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[#111827]" style={{ fontSize: 14, fontWeight: 700 }}>
                {row.value}
              </span>
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: row.up ? "#F0FDF4" : "#FFF7ED",
                  color: row.up ? "#15803D" : "#C2410C",
                }}
              >
                {row.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="px-6 py-4 bg-[#F9FAFB] flex items-center justify-between border-t border-[#E5E7EB]">
        <span className="text-[#9CA3AF]" style={{ fontSize: 12 }}>
          Last 30 days
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[#2563EB]" style={{ fontSize: 12, fontWeight: 600 }}>
            View full report →
          </span>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-white py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#111827]"
                style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px", lineHeight: 1.25 }}
              >
                Tailored inquiry-acquisition systems
              </h2>
              <p className="text-[#6B7280]" style={{ fontSize: 16, lineHeight: 1.75 }}>
                Each system is designed specifically for your kitchen studio, target market, and ideal projects. No cookie-cutter campaigns — everything is built from scratch.
              </p>
            </div>

            {/* Feature rows */}
            <div className="flex flex-col gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#EFF6FF" }}
                    >
                      <Icon size={20} className="text-[#2563EB]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[#111827]" style={{ fontSize: 15, fontWeight: 700 }}>
                        {f.title}
                      </p>
                      <p className="text-[#6B7280] mt-1" style={{ fontSize: 14, lineHeight: 1.65 }}>
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 self-start text-[#2563EB] border border-[#2563EB] px-6 rounded-lg hover:bg-[#2563EB] hover:text-white transition-all"
              style={{ fontSize: 15, fontWeight: 600, height: 48 }}
            >
              Learn how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right — Dashboard Mockup */}
          <div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
