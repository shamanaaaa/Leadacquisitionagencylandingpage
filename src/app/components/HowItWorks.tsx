const steps = [
  {
    number: "01",
    title: "Analysis",
    description:
      "We review your current situation — your market, competitors, past campaigns, and ideal project type — to identify exactly where the gaps are.",
  },
  {
    number: "02",
    title: "System Build",
    description:
      "We build your custom inquiry system: ad campaigns, a dedicated landing page, and conversion-focused messaging tailored to your studio.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Your system goes live. We monitor, optimise, and report results clearly — so you always know what's working and what's coming in.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-white py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
          >
            Process
          </p>
          <h2
            className="text-[#111827]"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px" }}
          >
            How the system is built
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            A focused, three-phase process that takes you from inconsistent leads to a reliable inquiry pipeline.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-[44px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] border-t-2 border-dashed border-[#BFDBFE]"
            style={{ zIndex: 0 }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-5 items-center md:items-start text-center md:text-left"
              style={{ zIndex: 1 }}
            >
              {/* Number badge */}
              <div className="relative flex items-center justify-center">
                {/* Large background number */}
                <div
                  className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center"
                  style={{ background: "#DBEAFE" }}
                >
                  <span
                    className="text-[#BFDBFE] select-none"
                    style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-2px", lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Overlay small step indicator */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center"
                  style={{ boxShadow: "0 0 0 3px #EFF6FF" }}
                >
                  <span className="text-white" style={{ fontSize: 11, fontWeight: 700 }}>
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <p
                  className="text-[#111827]"
                  style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}
                >
                  {step.title}
                </p>
                <p className="text-[#6B7280]" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="flex justify-center mt-14">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] px-6 py-3 rounded-xl hover:bg-[#DBEAFE] transition-colors"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Start the process with a free call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
