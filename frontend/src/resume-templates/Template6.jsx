export default function Template8({ data, fontColor, fontSize }) {
  const colors = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#4B5563",
    accent: fontColor,
    border: "#E5E7EB",
    chipBg: "#F3F4F6",
  };

  return (
    <div
      className="w-[595px] h-[842px] p-4 mx-auto"
      style={{
        backgroundColor: colors.bg,
      }}
    >
      {/* HEADER — compact */}
      <header className="flex items-center gap-3 mb-1">
        <div>
          <div
            className="font-semibold leading-tight"
            style={{ color: colors.primary, fontSize: fontSize.title }}
          >
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </div>

          <div
            className="leading-tight"
            style={{ color: colors.secondary, fontSize: fontSize.text }}
          >
            {data?.personalInfo?.title}
          </div>
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <p
          className="mb-2"
          style={{ color: colors.secondary, fontSize: fontSize.text }}
        >
          {data.summary}
        </p>
      )}

      {/* CONTACT & SKILLS — Compact 2-column layout */}
      <section className="grid grid-cols-2 gap-3 mb-2">
        {/* Contact */}
        <div>
          <h3
            className=" uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent, fontSize: fontSize.heading }}
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
            className="uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent, fontSize: fontSize.heading }}
          >
            Skills
          </h3>
          <div className="flex flex-wrap">
            {data?.skills?.map((s) => (
              <span
                key={s.id}
                className="pr-2"
                style={{
                  fontSize: fontSize.text,
                  color: colors.secondary,
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
        <section className="mb-2">
          <h3
            className="uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent, fontSize: fontSize.heading }}
          >
            Experience
          </h3>

          <div className="space-y-2">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div
                  className="font-semibold leading-tight mb-1"
                  style={{
                    color: colors.primary,
                    fontSize: fontSize.subHeading,
                  }}
                >
                  {exp.position}
                </div>

                <div
                  className=" leading-tight mb-1"
                  style={{ color: colors.secondary, fontSize: fontSize.text }}
                >
                  {exp.company} — {exp.startDate} to {exp.endDate || "Present"}
                </div>

                <p
                  className="pl-4 leading-snug"
                  style={{ color: colors.secondary, fontSize: fontSize.text }}
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
        <section className="mb-2">
          <h3
            className="uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent, fontSize: fontSize.heading }}
          >
            Projects
          </h3>

          <div className="space-y-2">
            {data.projects.map((p) => (
              <div key={p.id}>
                <div
                  className="font-medium"
                  style={{
                    color: colors.primary,
                    fontSize: fontSize.subHeading,
                  }}
                >
                  {p.name}
                </div>
                <div
                  className=""
                  style={{ color: colors.secondary, fontSize: fontSize.text }}
                >
                  {p.technologies}
                </div>
                <p
                  className="leading-snug"
                  style={{ color: colors.secondary, fontSize: fontSize.text }}
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
        <section className="mb-2">
          <h3
            className="uppercase font-bold mb-1 tracking-wide"
            style={{ color: colors.accent, fontSize: fontSize.heading }}
          >
            Education
          </h3>

          {data.education.map((ed, index) => (
            <div key={index} className="mb-1">
              <div
                className="font-semibold"
                style={{ color: colors.primary, fontSize: fontSize.subHeading }}
              >
                {ed.degree}
              </div>
              <div
                className=""
                style={{ color: colors.secondary, fontSize: fontSize.text }}
              >
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
              className="uppercase font-bold mb-1 tracking-wide"
              style={{ color: colors.accent, fontSize: fontSize.heading }}
            >
              Certificates
            </h3>
            <div
              className=""
              style={{ color: colors.secondary, fontSize: fontSize.text }}
            >
              {data.certificates.map((cert) => (
                <p key={cert.id}>
                  {cert.title} - {cert.issuer}
                </p>
              ))}
            </div>
          </div>
        )}

        {data?.interests?.length > 0 && (
          <div>
            <h3
              className="uppercase font-bold mb-1 tracking-wide"
              style={{ color: colors.accent, fontSize: fontSize.heading }}
            >
              Interests
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.interests.map((i, idx) => (
                <span
                  key={idx}
                  className="pl-2"
                  style={{
                    fontSize: fontSize.text,
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
