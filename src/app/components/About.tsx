export function About() {
  const stats = [
    { value: "12+", label: "Companies Served" },
    { value: "3+", label: "Years of Experience" },
    { value: "€3,000+", label: "Revenue Generated" },
  ];

  return (
    <section
      id="about"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-[#F9FAFB] py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#2563EB] uppercase tracking-widest"
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
            >
              About Us
            </p>
            <h2
              className="text-[#111827]"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px", lineHeight: 1.25 }}
            >
              Behind every system is a real person.
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: 16, lineHeight: 1.75 }}>
              AgSiteLeveled was built by someone who understands the challenge of growing a local service business without a predictable source of quality inquiries. We don't do one-size-fits-all marketing. We build tailored inquiry-acquisition systems that match your studio, your market, and the type of projects you actually want to take on.
            </p>
            <p className="text-[#6B7280]" style={{ fontSize: 16, lineHeight: 1.75 }}>
              We operate with full transparency — you always know what's running, why it's running, and what results it's producing. No jargon, no fluff, just a working system that brings the right people to your door.
            </p>
          </div>

          {/* Right — Card */}
          <div className="flex flex-col gap-6">
            {/* Profile card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-5 mb-6">
                {/* Avatar circle */}
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #DBEAFE, #BFDBFE)" }}
                  >
                    <span className="text-[#2563EB]" style={{ fontSize: 24, fontWeight: 700 }}>
                      A
                    </span>
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22C55E] border-2 border-white flex items-center justify-center"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[#111827]" style={{ fontSize: 18, fontWeight: 700 }}>
                    Ag-SiteLeveled
                  </p>
                  <p className="text-[#6B7280]" style={{ fontSize: 14, fontWeight: 500 }}>
                    Inquiry Acquisition Specialist
                  </p>
                  {/* Blue accent underline */}
                  <div className="mt-2 w-12 h-0.5 bg-[#2563EB] rounded-full" />
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="text-[#374151] italic border-l-2 border-[#2563EB] pl-4"
                style={{ fontSize: 15, lineHeight: 1.7 }}
              >
                "We focus entirely on one thing: filling your calendar with real, high-intent kitchen inquiries. Everything else is noise."
              </blockquote>
            </div>

            {/* Stats row */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              <div className="grid grid-cols-3 divide-x divide-[#E5E7EB]">
                {stats.map((stat, i) => (
                  <div key={i} className="py-6 flex flex-col items-center gap-1 px-2">
                    <span
                      className="text-[#2563EB]"
                      style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[#6B7280] text-center"
                      style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.4 }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
