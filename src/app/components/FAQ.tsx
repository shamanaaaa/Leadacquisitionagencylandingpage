import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we expect to see results?",
    answer:
      "Most clients start seeing qualified inquiries within the first 2–4 weeks of launch. The first week focuses on setup and campaign calibration, and by week two you should see initial traffic and form submissions.",
  },
  {
    question: "What if I already have an agency running my ads?",
    answer:
      "We're happy to audit what's currently running and provide an honest assessment. Many clients come to us after underwhelming results elsewhere. We can take over existing campaigns or start fresh.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "We work on a monthly rolling basis with a minimum commitment of 3 months to allow sufficient time to optimise the system properly. After that, you can continue month-to-month with 30 days' notice.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-[#F9FAFB] py-20"
    >
      <div className="max-w-[760px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-[#2563EB] uppercase tracking-widest mb-3"
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
          >
            FAQ
          </p>
          <h2
            className="text-[#111827]"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={i < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
                <button
                  className="w-full flex items-center justify-between px-6 text-left hover:bg-[#F9FAFB] transition-colors"
                  style={{ minHeight: 64 }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    className="text-[#111827] pr-6"
                    style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: isOpen ? "#2563EB" : "#EFF6FF",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} className="text-white" strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} className="text-[#2563EB]" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <div className="px-6 pb-5">
                    <p className="text-[#6B7280]" style={{ fontSize: 15, lineHeight: 1.75 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-10">
          <p className="text-[#6B7280]" style={{ fontSize: 15 }}>
            Still have questions?{" "}
            <a href="#cta" className="text-[#2563EB] hover:underline" style={{ fontWeight: 600 }}>
              Book a free call
            </a>{" "}
            and ask us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
