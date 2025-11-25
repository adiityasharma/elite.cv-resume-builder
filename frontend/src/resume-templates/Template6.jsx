export default function Template8({ data }) {
  const colors = {
    bg: "#FFFFFF",
    primary: "#0B1220",
    secondary: "#4B5563",
    accent: "#2563EB",
    border: "#E5E7EB",
    chipBg: "#F3F4F6",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto"
      style={{
        backgroundColor: colors.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
        padding: "16px", // compact padding
        boxSizing: "border-box",
      }}
    >
      {/* HEADER — compact */}
      <header className="flex items-center gap-3 mb-3">
        {data?.avatar && (
          <div
            className="w-14 h-14 rounded-full overflow-hidden border"
            style={{ borderColor: colors.border }}
          >
            <img
              src={data.avatar}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div>
          <div
            className="text-xl font-semibold leading-tight"
            style={{ color: colors.primary }}
          >
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </div>

          <div
            className="text-sm leading-tight"
            style={{ color: colors.secondary }}
          >
            {data.jobRole}
          </div>
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <p
          className="text-xs mb-3"
          style={{ color: colors.secondary, lineHeight: "1.25rem" }}
        >
          {data.summary}
        </p>
      )}

      {/* CONTACT & SKILLS — Compact 2-column layout */}
      <section className="grid grid-cols-2 gap-3 mb-4">
        {/* Contact */}
        <div>
          <h3
            className="text-xs uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent }}
          >
            Contact
          </h3>
          <div className="text-xs" style={{ color: colors.secondary }}>
            {data?.personalInfo?.email && (
              <p>Email: {data.personalInfo.email}</p>
            )}
            {data?.personalInfo?.phone && (
              <p>Phone: {data.personalInfo.phone}</p>
            )}
            {data?.personalInfo?.website && (
              <p>Web: {data.personalInfo.website}</p>
            )}
            {data?.personalInfo?.linkedin && (
              <p>LinkedIn: {data.personalInfo.linkedin}</p>
            )}
            {data?.personalInfo?.github && (
              <p>GitHub: {data.personalInfo.github}</p>
            )}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3
            className="text-xs uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent }}
          >
            Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {data?.skills?.map((s) => (
              <span
                key={s.id}
                className="text-[10px] px-2 py-[2px] rounded"
                style={{
                  backgroundColor: colors.chipBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.primary,
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — compact stacked items */}
      {data?.experience?.length > 0 && (
        <section className="mb-4">
          <h3
            className="text-xs uppercase font-bold mb-2 tracking-wide"
            style={{ color: colors.accent }}
          >
            Experience
          </h3>

          <div className="space-y-2">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div
                  className="text-sm font-semibold leading-tight"
                  style={{ color: colors.primary }}
                >
                  {exp.position}
                </div>

                <div
                  className="text-[11px] leading-tight mb-1"
                  style={{ color: colors.secondary }}
                >
                  {exp.company} — {exp.startDate} to {exp.endDate || "Present"}
                </div>

                <p
                  className="text-xs"
                  style={{ color: colors.secondary, lineHeight: "1.1rem" }}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data?.projects?.length > 0 && (
        <section className="mb-4">
          <h3
            className="text-xs uppercase font-bold mb-2 tracking-wide"
            style={{ color: colors.accent }}
          >
            Projects
          </h3>

          <div className="space-y-2">
            {data.projects.map((p) => (
              <div key={p.id}>
                <div
                  className="text-sm font-semibold"
                  style={{ color: colors.primary }}
                >
                  {p.name}
                </div>
                <div
                  className="text-[11px]"
                  style={{ color: colors.secondary }}
                >
                  {p.technologies}
                </div>
                <p
                  className="text-xs"
                  style={{ color: colors.secondary, lineHeight: "1.1rem" }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data?.education?.length > 0 && (
        <section className="mb-4">
          <h3
            className="text-xs uppercase font-bold mb-2 tracking-wide"
            style={{ color: colors.accent }}
          >
            Education
          </h3>

          {data.education.map((ed, index) => (
            <div key={index} className="mb-1">
              <div
                className="text-sm font-semibold"
                style={{ color: colors.primary }}
              >
                {ed.degree}
              </div>
              <div className="text-xs" style={{ color: colors.secondary }}>
                {ed.school} ({ed.month} {ed.year})
              </div>
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICATES & INTERESTS */}
      <section className="grid grid-cols-2 gap-3">
        {data?.certificates?.length > 0 && (
          <div>
            <h3
              className="text-xs uppercase font-bold mb-1 tracking-wide"
              style={{ color: colors.accent }}
            >
              Certificates
            </h3>
            <div className="text-xs" style={{ color: colors.secondary }}>
              {data.certificates.map((cert) => (
                <p key={cert.id}>{cert.title}</p>
              ))}
            </div>
          </div>
        )}

        {data?.interests?.length > 0 && (
          <div>
            <h3
              className="text-xs uppercase font-bold mb-1 tracking-wide"
              style={{ color: colors.accent }}
            >
              Interests
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.interests.map((i, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-[2px] rounded"
                  style={{
                    backgroundColor: colors.chipBg,
                    border: `1px solid ${colors.border}`,
                    color: colors.secondary,
                  }}
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
