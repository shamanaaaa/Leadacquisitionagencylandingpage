import lukasPhoto from "../../images/Lukas D..jpeg";
import marioPhoto from "../../images/Mario D..jpg";

const teamMembers = [
  {
    name: "Lukas D.",
    role: "Project Management & Co-owner",
    initials: "LD",
    photo: lukasPhoto,
  },
  {
    name: "Mario D.",
    role: "Developer & Co-owner",
    initials: "MD",
    photo: marioPhoto,
  },
];

export function About() {
  const stats = [
    { value: "12+", label: "Companies Served" },
    { value: "3+", label: "Years of Experience" },
    { value: "2–4 wks", label: "Avg. Project Finished" },
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
            <h2
              className="text-[#111827]"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.6px", lineHeight: 1.25 }}
            >
              About Us
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: 16, lineHeight: 1.75 }}>
              We understand the challenge of growing a local service business. That's why we don't do one-size-fits-all marketing.
            </p>
            <p className="text-[#6B7280]" style={{ fontSize: 16, lineHeight: 1.75 }}>
              With more than 12 EU projects behind us, we have the experience of building tailored systems that match your market and the type of projects you actually want to take on.
            </p>
          </div>

          {/* Right — Card */}
          <div className="flex flex-col gap-6">
            {/* Team card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              <p
                className="text-[#2563EB] uppercase tracking-widest mb-5"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em" }}
              >
                Our Team
              </p>

              <div className="flex flex-col gap-5">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #DBEAFE, #BFDBFE)" }}
                    >
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[#2563EB]" style={{ fontSize: 16, fontWeight: 700 }}>
                          {member.initials}
                        </span>
                      )}
                    </div>
                    {/* Info */}
                    <div>
                      <p className="text-[#111827]" style={{ fontSize: 15, fontWeight: 700 }}>
                        {member.name}
                      </p>
                      <p className="text-[#6B7280]" style={{ fontSize: 13, fontWeight: 500 }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
