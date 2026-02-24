import { CheckCircle2 } from "lucide-react";

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
          <div className="max-w-[760px] py-14 flex flex-col gap-7">
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
              Book a short, no-obligation call to get a free analysis of your current situation with concrete ideas to help you solve your biggest issue in lead acquisition.
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
                  Trusted by 12+ companies across EU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
