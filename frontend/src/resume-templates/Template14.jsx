export default function Template14({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#374151",
    border: "#E5E7EB",
    accent: fontColor,
    sectionBg: "#FAFAFA",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-6 flex flex-col"
      style={{ backgroundColor: color.bg }}
    >
      {/* HEADER */}
      <header
        className="text-center pb-3 border-b-2"
        style={{ borderColor: color.border }}
      >
        <h1
          className="font-bold tracking-tight"
          style={{ fontSize: fontSize.title, color: color.primary }}
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>

        {/* Contact row */}
        <div
          className="flex justify-center gap-4 flex-wrap mt-1"
          style={{ fontSize: fontSize.text, color: color.secondary }}
        >
          <span>{data?.personalInfo?.email}</span>
          <span>{data?.personalInfo?.phone}</span>
          {data?.personalInfo?.website && (
            <a href={data?.personalInfo?.website}>
              {data?.personalInfo?.website}
            </a>
          )}
          {data?.personalInfo?.linkedin && (
            <a href={data?.personalInfo?.linkedin}>LinkedIn</a>
          )}
          {data?.personalInfo?.github && (
            <a href={data?.personalInfo?.github}>GitHub</a>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      <section
        className="mt-3 p-3 rounded"
        style={{
          backgroundColor: color.sectionBg,
          borderLeft: `4px solid ${color.accent}`,
        }}
      >
        <h2
          className="uppercase font-bold mb-1 tracking-wide"
          style={{ fontSize: fontSize.heading, color: color.primary }}
        >
          Profile
        </h2>
        <p
          className="leading-snug"
          style={{ color: color.secondary, fontSize: fontSize.text }}
        >
          {data?.summary}
        </p>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-2 gap-4 mt-4 flex-1">
        {/* EXPERIENCE */}
        <section
          className="p-3 rounded"
          style={{
            backgroundColor: color.sectionBg,
            borderLeft: `4px solid ${color.accent}`,
          }}
        >
          <h2
            className="uppercase font-bold mb-2 tracking-wide"
            style={{ fontSize: fontSize.heading, color: color.primary }}
          >
            Experience
          </h2>

          <div className="space-y-3">
            {data?.experience?.map((exp) => (
              <div key={exp.id}>
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: fontSize.subHeading,
                    color: color.primary,
                  }}
                >
                  {exp.position}
                </h3>
                <p style={{ fontSize: fontSize.text, color: color.secondary }}>
                  {exp.company} — {exp.startDate} – {exp.endDate || "Present"}
                </p>
                <p
                  className="italic"
                  style={{ fontSize: fontSize.text, color: color.secondary }}
                >
                  {exp.location}
                </p>
                <ul
                  className="ml-5 list-disc mt-1"
                  style={{ fontSize: fontSize.text, color: color.secondary }}
                >
                  {exp.description}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS + LANGUAGES + EDUCATION + CERTS */}
        <div className="flex flex-col gap-4">
          {/* Skills */}
          <section
            className="p-3 rounded"
            style={{
              backgroundColor: color.sectionBg,
              borderLeft: `4px solid ${color.accent}`,
            }}
          >
            <h2
              className="uppercase font-bold mb-2 tracking-wide"
              style={{ fontSize: fontSize.heading, color: color.primary }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {data?.skills?.map((skill) => (
                <span
                  key={skill.id}
                  className=""
                  style={{
                    fontSize: fontSize.text,
                    color: color.secondary,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {data?.tools?.length > 0 && (
            <section
              className="p-3 rounded"
              style={{
                backgroundColor: color.sectionBg,
                borderLeft: `4px solid ${color.accent}`,
              }}
            >
              <h3
                className="font-semibold mb-1"
                style={{ color: fontColor, fontSize: fontSize.heading }}
              >
                Tools
              </h3>
              <div
                style={{ fontSize: fontSize.text }}
                className="flex flex-col leading-snug"
              >
                {data?.tools.map((tool) => (
                  <span
                    key={tool.id}
                    className="pr-2"
                    style={{
                      color: "#374151",
                    }}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          <section
            className="p-3 rounded"
            style={{
              backgroundColor: color.sectionBg,
              borderLeft: `4px solid ${color.accent}`,
            }}
          >
            <h2
              className="uppercase font-bold tracking-wide mb-2"
              style={{ fontSize: fontSize.heading, color: color.primary }}
            >
              Languages
            </h2>
            <ul
              className="space-y-1"
              style={{ fontSize: fontSize.text, color: color.secondary }}
            >
              {data?.languages?.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section
            className="p-3 rounded"
            style={{
              backgroundColor: color.sectionBg,
              borderLeft: `4px solid ${color.accent}`,
            }}
          >
            <h2
              className="uppercase font-bold tracking-wide mb-2"
              style={{ fontSize: fontSize.heading, color: color.primary }}
            >
              Education
            </h2>
            <div className="space-y-2">
              {data?.education?.map((edu) => (
                <div key={edu.id}>
                  <p
                    className="font-medium"
                    style={{ fontSize: fontSize.text, color: color.primary }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {edu.month} {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section
            className="p-3 rounded"
            style={{
              backgroundColor: color.sectionBg,
              borderLeft: `4px solid ${color.accent}`,
            }}
          >
            <h2
              className="uppercase font-bold tracking-wide mb-2"
              style={{ fontSize: fontSize.heading, color: color.primary }}
            >
              Certificates
            </h2>
            <div
              className="space-y-1"
              style={{ fontSize: fontSize.text, color: color.secondary }}
            >
              {data?.certificates?.map((cert) => (
                <p key={cert.id}>
                  {cert.title} — {cert.issuer}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER LINE */}
      <div
        className="w-full mt-4"
        style={{ borderTop: `1px dotted ${color.border}` }}
      />
    </div>
  );
}
