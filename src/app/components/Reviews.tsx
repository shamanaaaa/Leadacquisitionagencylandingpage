const reviews = [
  {
    quote:
      "Excellent communication and professional approach. Exactly what we were looking for — fast, clear, and without complications.",
    name: "Zuzana K.",
    company: "Zuzu Photo (Photographic studio)",
    initials: "ZK",
  },
  {
    quote:
      "His strategy completely changed our results. Within two weeks, we doubled our ad clicks and attracted more serious clients.",
    name: "Imrich B.",
    company: "Gooddentist (Dental clinic)",
    initials: "IB",
  },
  {
    quote:
      "We generated over €3,000 in revenue from a €300–400 ad spend in just one month. Very satisfied and would work with him again.",
    name: "Slavka R.",
    company: "VITAJTE-DOMA (Home design studio)",
    initials: "SR",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#2563EB">
          <path d="M8 1.5L9.8 6H14.5L10.7 8.6L12.1 13.5L8 10.8L3.9 13.5L5.3 8.6L1.5 6H6.2L8 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-[#EFF6FF] py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
          >
            Testimonials
          </p>
          <h2
            className="text-[#111827]"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px" }}
          >
            What our partners say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 16px rgba(37,99,235,0.07)",
              }}
            >
              {/* Blue top accent */}
              <div className="h-[3px] bg-[#2563EB]" />

              <div className="p-6 flex flex-col gap-5 flex-1">
                <StarRow />

                <blockquote
                  className="text-[#374151] italic flex-1"
                  style={{ fontSize: 15, lineHeight: 1.75 }}
                >
                  "{r.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-2 border-t border-[#F3F4F6]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#EFF6FF" }}
                  >
                    <span className="text-[#2563EB]" style={{ fontSize: 13, fontWeight: 700 }}>
                      {r.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#111827]" style={{ fontSize: 14, fontWeight: 700 }}>
                      {r.name}
                    </p>
                    <p className="text-[#9CA3AF]" style={{ fontSize: 12 }}>
                      — {r.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
