// ResumeTemplate.jsx
import React from "react";

export default function Template5() {
  // Hex color palette (use these inline where needed)
  const colors = {
    background: "#FFFFFF", // page background
    canvas: "#FAFAFC", // subtle canvas background (if you want)
    primaryText: "#0B1220", // main text
    secondaryText: "#374151", // subtext / muted
    accent: "#2563EB", // accent (blue)
    accentDark: "#1E40AF", // darker accent
    mutedBorder: "#E6E7EA", // borders / lines
    chipBg: "#F3F4F6", // chips / pill bg
  };

  return (
    <div
      className="w-[595px] h-[842px] p-4 mx-auto"
      style={{
        backgroundColor: colors.background,
        boxShadow: "0 6px 20px rgba(2,6,23,0.08)",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      {/* Outer grid: left sidebar + main content */}
      <div className="h-full grid grid-cols-[170px_1fr] gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="flex flex-col">
          {/* Profile block */}
          <div
            className="flex flex-col items-center p-4 rounded"
            style={{ backgroundColor: colors.canvas }}
          >
            {/* Avatar circle */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
              style={{
                backgroundColor: colors.accent,
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              JD
            </div>

            <div className="text-center">
              <div
                className="text-lg font-semibold"
                style={{ color: colors.primaryText }}
              >
                John Doe
              </div>
              <div
                className="text-sm"
                style={{ color: colors.secondaryText, marginTop: 2 }}
              >
                Senior Product Designer
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h4
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Contact
            </h4>
            <div className="text-sm" style={{ color: colors.secondaryText }}>
              <div className="mb-2">
                <strong style={{ color: colors.primaryText }}>Phone:</strong>{" "}
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="mb-2">
                <strong style={{ color: colors.primaryText }}>Email:</strong>{" "}
                <span>john.doe@example.com</span>
              </div>
              <div className="mb-2">
                <strong style={{ color: colors.primaryText }}>Website:</strong>{" "}
                <span>johndoe.design</span>
              </div>
              <div>
                <strong style={{ color: colors.primaryText }}>Location:</strong>{" "}
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h4
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Product Design",
                "UX Research",
                "Figma",
                "Prototyping",
                "Design Systems",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: colors.chipBg,
                    color: colors.primaryText,
                    border: `1px solid ${colors.mutedBorder}`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h4
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Languages
            </h4>
            <div style={{ color: colors.secondaryText }}>
              <div className="mb-1">English — Native</div>
              <div className="mb-1">Spanish — Professional</div>
              <div>French — Conversational</div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-auto">
            <h4
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Education
            </h4>
            <div style={{ color: colors.secondaryText }}>
              <div style={{ color: colors.primaryText, fontWeight: 600 }}>
                B.Des, Design — Parsons
              </div>
              <div className="text-xs">2010 — 2014</div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex flex-col">
          {/* Header / Title + Summary */}
          <header className="flex items-start justify-between">
            <div>
              <h1
                className="text-2xl font-bold"
                style={{ color: colors.primaryText, letterSpacing: "-0.02em" }}
              >
                Johnathan Doe
              </h1>
              <div
                className="mt-1 text-sm"
                style={{ color: colors.secondaryText }}
              >
                Designer focused on product strategy, cross-functional
                leadership, and human-centered design.
              </div>
            </div>

            {/* Right-top accent block */}
            <div className="text-right">
              <div
                style={{
                  backgroundColor: colors.accent,
                  color: "#FFFFFF",
                  padding: "6px 12px",
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Open to work
              </div>
            </div>
          </header>

          {/* Divider */}
          <div
            className="my-4"
            style={{
              height: 1,
              backgroundColor: colors.mutedBorder,
              width: "100%",
            }}
          />

          {/* Experience */}
          <section>
            <h3
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Experience
            </h3>

            <div className="space-y-4">
              {/* Job item */}
              <article>
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      className="font-semibold"
                      style={{ color: colors.primaryText }}
                    >
                      Senior Product Designer
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.secondaryText }}
                    >
                      Acme Corp — 2020 — Present
                    </div>
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: colors.secondaryText }}
                  >
                    San Francisco, CA
                  </div>
                </div>

                <ul
                  className="mt-2 list-disc ml-5 text-sm"
                  style={{ color: colors.secondaryText }}
                >
                  <li>
                    Led design for core onboarding experience — increased
                    activation by{" "}
                    <strong style={{ color: colors.primaryText }}>28%</strong>.
                  </li>
                  <li>
                    Built a cross-platform design system used by 120+ engineers
                    and designers.
                  </li>
                </ul>
              </article>

              {/* Another job */}
              <article>
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      className="font-semibold"
                      style={{ color: colors.primaryText }}
                    >
                      Product Designer
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.secondaryText }}
                    >
                      Pixel Studio — 2016 — 2020
                    </div>
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: colors.secondaryText }}
                  >
                    Remote
                  </div>
                </div>

                <p
                  className="mt-2 text-sm"
                  style={{ color: colors.secondaryText }}
                >
                  Worked on end-to-end product features, conducted user
                  research, and collaborated with PMs to define product roadmap.
                </p>
              </article>
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-4"
            style={{
              height: 1,
              backgroundColor: colors.mutedBorder,
              width: "100%",
            }}
          />

          {/* Projects / Achievements */}
          <section>
            <h3
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Selected Projects
            </h3>

            <div
              className="grid grid-cols-2 gap-3 text-sm"
              style={{ color: colors.secondaryText }}
            >
              <div>
                <div style={{ color: colors.primaryText, fontWeight: 600 }}>
                  OnboardX
                </div>
                <div>
                  Redesigned onboarding, improved retention, analytics-led.
                </div>
              </div>
              <div>
                <div style={{ color: colors.primaryText, fontWeight: 600 }}>
                  Design System 2.0
                </div>
                <div>
                  Created tokens, components and documentation for adoption.
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-4"
            style={{
              height: 1,
              backgroundColor: colors.mutedBorder,
              width: "100%",
            }}
          />

          {/* Education / Footer quick items */}
          <section className="mt-auto">
            <div className="flex justify-between items-center">
              <div>
                <h4 style={{ color: colors.primaryText, fontWeight: 700 }}>
                  Certifications
                </h4>
                <div
                  className="text-sm"
                  style={{ color: colors.secondaryText }}
                >
                  UX Research — Nielsen Norman Group
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div
                  className="text-xs"
                  style={{ color: colors.secondaryText }}
                >
                  Portfolio:
                </div>
                <div style={{ color: colors.accent, fontWeight: 700 }}>
                  johndoe.design
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
