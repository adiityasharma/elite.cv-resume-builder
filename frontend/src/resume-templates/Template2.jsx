// ResumeTemplate2.jsx
import React from "react";

export default function Template2() {
  const color = {
    bg: "#FFFFFF",
    sidebar: "#F4F6F8",
    primary: "#0A0F1C",
    secondary: "#4B5563",
    accent: "#3B82F6",
    border: "#E5E7EB",
    chip: "#F3F4F6",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-0"
      style={{
        backgroundColor: color.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* Top Accent Header */}
      <div
        className="w-full h-20 px-8 flex items-center"
        style={{
          backgroundColor: color.accent,
          color: "#FFFFFF",
        }}
      >
        <div className="text-left">
          <h1 className="text-2xl font-bold tracking-tight">Johnathan Doe</h1>
          <p className="text-sm opacity-90">Product Designer</p>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-[180px_1fr] h-[calc(842px-80px)]">
        {/* LEFT SIDEBAR */}
        <div
          className="p-5 flex flex-col"
          style={{ backgroundColor: color.sidebar }}
        >
          {/* Profile Summary */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Profile
            </h3>
            <p className="text-xs" style={{ color: color.secondary }}>
              Designer with strong background in UX research, strategy, and
              design systems. Focused on scalable product experiences.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Contact
            </h3>
            <div
              className="text-xs leading-relaxed"
              style={{ color: color.secondary }}
            >
              <div>Email: john@example.com</div>
              <div>Phone: +1 (555) 333-1200</div>
              <div>Website: johndoe.design</div>
              <div>Location: New York, USA</div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "UX Research",
                "Wireframing",
                "Prototyping",
                "Figma",
                "Design Systems",
                "User Testing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: color.chip,
                    border: `1px solid ${color.border}`,
                    color: color.primary,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul className="text-xs" style={{ color: color.secondary }}>
              <li>English — Native</li>
              <li>German — Intermediate</li>
              <li>Japanese — Basic</li>
            </ul>
          </section>

          {/* Education */}
          <section className="mt-auto">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Education
            </h3>
            <div
              className="text-xs leading-tight"
              style={{ color: color.secondary }}
            >
              <div className="font-semibold" style={{ color: color.primary }}>
                B.A. — Visual Design
              </div>
              <div>Rhode Island School of Design</div>
              <div>2012 — 2016</div>
            </div>
          </section>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-8 flex flex-col">
          {/* Section: Experience */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-4 tracking-wide"
              style={{ color: color.primary }}
            >
              Experience
            </h2>

            <div className="space-y-5">
              {/* Job 1 */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3
                      className="font-semibold text-base"
                      style={{ color: color.primary }}
                    >
                      Senior Product Designer
                    </h3>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      Google — 2020–Present
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: color.secondary }}>
                    New York, USA
                  </p>
                </div>

                <ul
                  className="list-disc ml-5 mt-2 text-sm"
                  style={{ color: color.secondary }}
                >
                  <li>Led UX for enterprise dashboards used by 2M+ users.</li>
                  <li>
                    Redesigned research workflow, reducing task time by 34%.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3
                      className="font-semibold text-base"
                      style={{ color: color.primary }}
                    >
                      UX Designer
                    </h3>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      Dropbox — 2017–2020
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: color.secondary }}>
                    Remote
                  </p>
                </div>

                <ul
                  className="list-disc ml-5 mt-2 text-sm"
                  style={{ color: color.secondary }}
                >
                  <li>Improved file-sharing flows +15% conversion.</li>
                  <li>Worked closely with PMs to align product roadmap.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-6"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Section: Projects */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-4 tracking-wide"
              style={{ color: color.primary }}
            >
              Selected Projects
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4
                  className="font-semibold text-sm"
                  style={{ color: color.primary }}
                >
                  FlowKit App
                </h4>
                <p className="text-xs" style={{ color: color.secondary }}>
                  Workflow app improving team coordination.
                </p>
              </div>
              <div>
                <h4
                  className="font-semibold text-sm"
                  style={{ color: color.primary }}
                >
                  Dashboard UX Revamp
                </h4>
                <p className="text-xs" style={{ color: color.secondary }}>
                  UI restructuring for better data visibility.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-6"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Certifications */}
          <section className="mt-auto">
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Certifications
            </h2>
            <p className="text-xs" style={{ color: color.secondary }}>
              Google UX Professional Certificate — 2021
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
