// ResumeTemplate.jsx
import React from "react";

export default function Template5({ data }) {
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
          {data?.avatar && (
            <div
              className="flex flex-col items-center p-4 rounded"
              style={{ backgroundColor: colors.canvas }}
            >
              {/* Avatar circle */}
              <div
                className="w-24 h-24 rounded-full border flex items-center justify-center mb-3 overflow-hidden"
                style={{
                  // backgroundColor: colors.accent,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                {data.avatar && (
                  <img
                    className="w-full h-full object-top"
                    src={data.avatar}
                    alt="profile pic"
                  />
                )}
              </div>

              <div className="text-center">
                <div
                  className="text-lg font-semibold"
                  style={{ color: colors.primaryText }}
                >
                  {data?.name}
                </div>
                <div
                  className="text-sm"
                  style={{ color: colors.secondaryText, marginTop: 2 }}
                >
                  {data?.jobRole}
                </div>
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="mt-6">
            <h4
              className="text-sm uppercase tracking-wide mb-3"
              style={{ color: colors.accentDark, fontWeight: 700 }}
            >
              Contact
            </h4>
            <div className="text-sm" style={{ color: colors.secondaryText }}>
              {data?.personalInfo?.phone && (
                <div className="mb-2">
                  <strong style={{ color: colors.primaryText }}>Phone:</strong>{" "}
                  <span>{data?.personalInfo?.phone}</span>
                </div>
              )}
              {data?.personalInfo?.email && (
                <div className="mb-2">
                  <strong style={{ color: colors.primaryText }}>Email:</strong>{" "}
                  <span>{data?.personalInfo?.email}</span>
                </div>
              )}
              {data?.personalInfo?.website && (
                <div className="mb-2">
                  <strong style={{ color: colors.primaryText }}>
                    Website:
                  </strong>{" "}
                  <span>{data?.personalInfo?.website}</span>
                </div>
              )}
              {data?.personalInfo?.linkedin && (
                <div className="mb-2">
                  <strong style={{ color: colors.primaryText }}>
                    Linkedin:
                  </strong>{" "}
                  <span>{data?.personalInfo?.linkedin}</span>
                </div>
              )}
              {data?.personalInfo?.github && (
                <div className="mb-2">
                  <strong style={{ color: colors.primaryText }}>Github:</strong>{" "}
                  <span>{data?.personalInfo?.github}</span>
                </div>
              )}
              {data?.personalInfo?.address && (
                <div>
                  <strong style={{ color: colors.primaryText }}>
                    Address:
                  </strong>{" "}
                  <span>{data?.personalInfo?.address}</span>
                </div>
              )}
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
              {data?.skills.length > 0 &&
                data.skills.map((s) => (
                  <span
                    key={s.id}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: colors.chipBg,
                      color: colors.primaryText,
                      border: `1px solid ${colors.mutedBorder}`,
                    }}
                  >
                    {s.name}
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
              {data?.languages.length > 0 &&
                data.languages.map((l) => (
                  <div key={l.id} className="mb-1">
                    {l.name}
                  </div>
                ))}
            </div>
          </div>

          {/* Education */}
          {data?.education.length > 0 && (
            <div className="mt-auto">
              <h4
                className="text-sm uppercase tracking-wide mb-3"
                style={{ color: colors.accentDark, fontWeight: 700 }}
              >
                Education
              </h4>
              {data.education.map((d, index) => (
                <div key={index} style={{ color: colors.secondaryText }}>
                  <div style={{ color: colors.primaryText, fontWeight: 600 }}>
                    {d.degree} — {d.school}
                  </div>
                  <div className="text-xs">
                    {d.month} - {d.year}
                  </div>
                </div>
              ))}
            </div>
          )}
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
                {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
              </h1>
              <div
                className="mt-1 text-sm"
                style={{ color: colors.secondaryText }}
              >
                {data?.summary}
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
          {data?.experience.length > 0 && (
            <>
              <section>
                <h3
                  className="text-sm uppercase tracking-wide mb-3"
                  style={{ color: colors.accentDark, fontWeight: 700 }}
                >
                  Experience
                </h3>

                <div className="space-y-4">
                  {/* Job item */}

                  {data.experience.map((exp) => (
                    <article key={exp.id}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div
                            className="font-semibold"
                            style={{ color: colors.primaryText }}
                          >
                            {exp?.position}
                          </div>
                          <div
                            className="text-xs"
                            style={{ color: colors.secondaryText }}
                          >
                            {exp?.company} — {exp?.startDate} —{" "}
                            {exp?.endDate || "Present"}
                          </div>
                        </div>

                        <div
                          className="text-xs"
                          style={{ color: colors.secondaryText }}
                        >
                          {exp?.location}
                        </div>
                      </div>

                      <p
                        className="mt-2 list-disc ml-5 text-sm"
                        style={{ color: colors.secondaryText }}
                      >
                        {exp?.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
              <div
                className="my-4"
                style={{
                  height: 1,
                  backgroundColor: colors.mutedBorder,
                  width: "100%",
                }}
              />
            </>
          )}

          {/* Divider */}

          {/* Projects / Achievements */}
          {data?.projects?.length > 0 && (
            <section>
              <h3
                className="text-sm uppercase tracking-wide mb-3"
                style={{ color: colors.accentDark, fontWeight: 700 }}
              >
                Selected Projects
              </h3>

              <div
                className="grid grid-cols-1 gap-2 text-sm"
                style={{ color: colors.secondaryText }}
              >
                {data.projects.map((p) => (
                  <div key={p.name}>
                    <div style={{ color: colors.primaryText, fontWeight: 600 }}>
                      <a href={p.link}>{p.name}</a> —{" "}
                      <span
                        style={{ color: colors.primaryText, fontWeight: 400 }}
                      >
                        {p?.technologies}
                      </span>
                    </div>
                    <div>{p.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

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
          <section className="">
            <div className="flex justify-between items-center">
              {data?.certificates?.length > 0 && (
                <div>
                  <h4 style={{ color: colors.primaryText, fontWeight: 700 }}>
                    Certificates
                  </h4>
                  {data.certificates.map((certificate) => (
                    <div
                      key={certificate.id}
                      className="text-sm"
                      style={{ color: colors.secondaryText }}
                    >
                      {certificate.title} — {certificate.issuer}
                    </div>
                  ))}
                </div>
              )}

              {data?.interests?.length > 0 && (
                <div style={{ textAlign: "right" }}>
                  <div
                    className="text-xs"
                    style={{ color: colors.secondaryText }}
                  >
                    Interests:
                  </div>
                  {data.interests.main((interest) => (
                    <div
                      style={{
                        fontSize: "15px",
                        color: colors.secondaryText,
                        fontWeight: 400,
                      }}
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
