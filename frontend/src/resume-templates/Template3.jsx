import React from "react";

/**
 * ResumeTemplate
 * - Tailwind-based React component sized to w-[595px] h-[842px]
 * - Uses hex colors (no built-in Tailwind color names)
 * - Accepts an optional `data` prop to populate fields; falls back to placeholder content
 *
 * Usage:
 * <ResumeTemplate data={myResumeData} />
 *
 * Note: this component uses Tailwind utility classes (including arbitrary sizing and color brackets).
 * Ensure your Tailwind config allows arbitrary value support (default Tailwind v2.2+/v3+ does).
 */

export default function Template3({ data = {} }) {
  const d = {
    name: data.name ?? "Alex Morgan",
    title: data.title ?? "Product Designer",
    location: data.location ?? "San Francisco, CA",
    email: data.email ?? "alex.morgan@example.com",
    phone: data.phone ?? "(555) 123-4567",
    website: data.website ?? "alexmorgan.design",
    linkedin: data.linkedin ?? "linkedin.com/in/alexmorgan",
    summary:
      data.summary ??
      "Design-driven product designer with 6+ years building delightful, accessible interfaces and systems. Focused on user research, cross-functional collaboration, and scalable design systems.",
    skills: data.skills ?? [
      "Product Design",
      "UI/UX",
      "Figma",
      "Design Systems",
      "Accessibility (WCAG)",
      "Prototyping",
    ],
    experience: data.experience ?? [
      {
        company: "Aurora Labs",
        role: "Senior Product Designer",
        period: "2022 — Present",
        bullets: [
          "Led redesign of onboarding flow, increasing activation by 28%.",
          "Built component library and tokens that reduced dev time by 18%.",
        ],
      },
      {
        company: "Brightlane",
        role: "Product Designer",
        period: "2019 — 2022",
        bullets: [
          "Owned end-to-end feature design for mobile and web.",
          "Conducted mixed-methods research to prioritize roadmap.",
        ],
      },
    ],
    education: data.education ?? [
      {
        school: "State University",
        degree: "B.A. Interaction Design",
        period: "2015 — 2019",
      },
    ],
  };

  return (
    <div
      className="w-[595px] h-[842px] "
      style={{
        // backgroundColor: "#FFFFFF", // page background (white)
        // fontFamily:
        //   "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      {/* Outer padding / card */}
      <div className="w-full h-full p-6 box-border">
        <div
          className="w-full h-full rounded-sm overflow-hidden border"
          style={{ borderColor: "#E6E8EE" }}
        >
          <div className="flex w-full h-full">
            {/* LEFT SIDEBAR */}
            <aside
              className="w-[190px] px-5 py-6 flex-shrink-0"
              style={{ backgroundColor: "#F6F8FB" }}
            >
              {/* Avatar */}
              <div className="flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-semibold"
                  style={{ backgroundColor: "#DDE6FF", color: "#0F172A" }}
                >
                  {d.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              </div>

              {/* Name & Title (repeat small in sidebar) */}
              <div className="mt-4 text-center">
                <div
                  className="text-[16px] font-semibold"
                  style={{ color: "#0F172A" }}
                >
                  {d.name}
                </div>
                <div className="text-[12px] mt-1" style={{ color: "#374151" }}>
                  {d.title}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6">
                <div
                  className="text-[11px] font-semibold mb-3"
                  style={{ color: "#0F172A" }}
                >
                  Contact
                </div>
                <div
                  className="text-[11px] leading-5"
                  style={{ color: "#374151" }}
                >
                  <div>{d.email}</div>
                  <div>{d.phone}</div>
                  <div>{d.location}</div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-4">
                <div
                  className="text-[11px] font-semibold mb-3"
                  style={{ color: "#0F172A" }}
                >
                  Links
                </div>
                <div
                  className="text-[11px] leading-5 break-all"
                  style={{ color: "#2563EB" }}
                >
                  <div>{d.website}</div>
                  <div>{d.linkedin}</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6">
                <div
                  className="text-[11px] font-semibold mb-3"
                  style={{ color: "#0F172A" }}
                >
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 rounded"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E6E8EE",
                        color: "#0F172A",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div
                className="mt-6 h-[1px]"
                style={{ backgroundColor: "#E6E8EE" }}
              />

              {/* Small footer / allow quick note */}
              <div className="mt-4 text-[10px]" style={{ color: "#6B7280" }}>
                Portfolio and case studies available on request.
              </div>
            </aside>

            {/* RIGHT MAIN */}
            <main className="flex-1 px-8 py-6">
              {/* Header: Name + Title */}
              <header className="flex items-start justify-between">
                <div>
                  <h1
                    className="text-[22px] font-extrabold leading-tight"
                    style={{ color: "#0B1220" }}
                  >
                    {d.name}
                  </h1>
                  <p
                    className="mt-1 text-[13px] font-medium"
                    style={{ color: "#0F172A" }}
                  >
                    {d.title}
                  </p>
                </div>

                {/* Quick summary stats or date */}
                <div className="text-right">
                  <div className="text-[11px]" style={{ color: "#6B7280" }}>
                    {new Date().getFullYear()}
                  </div>
                </div>
              </header>

              {/* Summary */}
              <section className="mt-4">
                <h2
                  className="text-[12px] font-semibold mb-2"
                  style={{ color: "#0F172A" }}
                >
                  Summary
                </h2>
                <p
                  className="text-[12px] leading-6"
                  style={{ color: "#374151" }}
                >
                  {d.summary}
                </p>
              </section>

              {/* Experience */}
              <section className="mt-6">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-[12px] font-semibold"
                    style={{ color: "#0F172A" }}
                  >
                    Experience
                  </h2>
                </div>

                <div className="mt-3 space-y-4">
                  {d.experience.map((exp, idx) => (
                    <article key={idx} className="flex">
                      <div
                        className="w-[110px] text-[11px] text-right pr-4"
                        style={{ color: "#6B7280" }}
                      >
                        {exp.period}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between">
                          <h3
                            className="text-[13px] font-semibold"
                            style={{ color: "#0B1220" }}
                          >
                            {exp.role}
                          </h3>
                          <div
                            className="ml-4 text-[11px]"
                            style={{ color: "#374151" }}
                          >
                            {exp.company}
                          </div>
                        </div>
                        <ul
                          className="mt-2 list-disc list-inside text-[12px] leading-6"
                          style={{ color: "#374151" }}
                        >
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mt-6">
                <h2
                  className="text-[12px] font-semibold"
                  style={{ color: "#0F172A" }}
                >
                  Education
                </h2>
                <div className="mt-3 space-y-3">
                  {d.education.map((edu, i) => (
                    <div key={i} className="flex items-start">
                      <div
                        className="w-[110px] text-[11px] text-right pr-4"
                        style={{ color: "#6B7280" }}
                      >
                        {edu.period}
                      </div>
                      <div className="flex-1">
                        <div
                          className="text-[13px] font-semibold"
                          style={{ color: "#0B1220" }}
                        >
                          {edu.school}
                        </div>
                        <div
                          className="text-[12px]"
                          style={{ color: "#374151" }}
                        >
                          {edu.degree}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer: small notes / languages */}
              <footer className="mt-8">
                <div className="flex gap-6">
                  <div>
                    <div
                      className="text-[11px] font-semibold"
                      style={{ color: "#0F172A" }}
                    >
                      Languages
                    </div>
                    <div className="text-[11px]" style={{ color: "#374151" }}>
                      English (Native), Spanish (Professional)
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-semibold"
                      style={{ color: "#0F172A" }}
                    >
                      Tools
                    </div>
                    <div className="text-[11px]" style={{ color: "#374151" }}>
                      Figma · React · Notion · Miro
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
