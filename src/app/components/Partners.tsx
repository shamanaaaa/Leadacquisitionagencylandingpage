const partners = [
  { name: "ADOMA", weight: 800 },
  { name: "KABANO", weight: 600 },
  { name: "Cottonblush", weight: 500 },
  { name: "SZABO", weight: 700 },
  { name: "KUCH-MAREK", weight: 600 },
  { name: "VITAJTE-DOMA", weight: 500 },
  { name: "Zendaya Luxury", weight: 700 },
];

export function Partners() {
  return (
    <section
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="bg-white py-16 border-y border-[#E5E7EB]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p
          className="text-center text-[#9CA3AF] uppercase tracking-widest mb-10"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" }}
        >
          Our Partners
        </p>

        {/* Desktop grid */}
        <div className="hidden md:flex items-center justify-between gap-6 flex-wrap">
          {partners.map((p, i) => (
            <span
              key={i}
              className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors cursor-default select-none"
              style={{ fontSize: 15, fontWeight: p.weight, letterSpacing: p.weight >= 700 ? "0.06em" : "0.02em" }}
            >
              {p.name}
            </span>
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden flex gap-8 overflow-x-auto pb-2 scrollbar-hide">
          {partners.map((p, i) => (
            <span
              key={i}
              className="text-[#9CA3AF] whitespace-nowrap shrink-0"
              style={{ fontSize: 14, fontWeight: p.weight }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
