export default function Template6({ data }) {
  const color = {
    bg: "#FFFFFF",
    primary: "#0F172A",
    secondary: "#475569",
    accent: "#3B82F6",
    border: "#CBD5E1",
    chip: "#F1F5F9",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto"
      style={{
        backgroundColor: color.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* HEADER */}
      <div className="px-8 py-4 border-b" style={{ borderColor: color.border }}>
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: color.primary }}
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>
        {data?.personalInfo?.title && (
          <p className="text-sm mt-1" style={{ color: color.secondary }}>
            {data.personalInfo.title}
          </p>
        )}

        {/* CONTACT BAR */}
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 text-xs pt-2"
          style={{ borderColor: color.border, color: color.secondary }}
        >
          {data?.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data?.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data?.personalInfo?.website && (
            <a href={data.personalInfo.website}>{data.personalInfo.website}</a>
          )}
          {data?.personalInfo?.linkedin && (
            <a href={data.personalInfo.linkedin}>
              {data.personalInfo.linkedin}
            </a>
          )}
          {data?.personalInfo?.github && (
            <a href={data.personalInfo.github}>{data.personalInfo.github}</a>
          )}
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="flex justify-between h-[calc(842px-150px)]">
        {/* LEFT COLUMN */}
        <div className="w-[40%] pl-8 pr-6 py-6 space-y-5">
          {/* SUMMARY */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.accent }}
          >
            <h3
              className="text-xs uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Summary
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: color.secondary }}
            >
              {data?.summary}
            </p>
          </section>

          {/* SKILLS */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.accent }}
          >
            <h3
              className="text-xs uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data?.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-[2px] text-[10px] rounded"
                  style={{
                    color: color.primary,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.accent }}
          >
            <h3
              className="text-xs uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Education
            </h3>

            <div
              className="text-xs space-y-3"
              style={{ color: color.secondary }}
            >
              {data?.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold" style={{ color: color.primary }}>
                    {edu.degree}
                  </p>
                  <p>{edu.school}</p>
                  <p>
                    {edu.month} {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* LANGUAGES */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.accent }}
          >
            <h3
              className="text-xs uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul
              className="text-xs space-y-1"
              style={{ color: color.secondary }}
            >
              {data?.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[60%] pr-8 pl-6 py-6 space-y-5">
          {/* EXPERIENCE */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.primary }}
          >
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Experience
            </h2>

            <div className="space-y-3">
              {data?.experience.map((job) => (
                <div key={job.id}>
                  <h3
                    className="font-semibold"
                    style={{ color: color.primary }}
                  >
                    {job.position}
                  </h3>

                  <p className="text-xs" style={{ color: color.secondary }}>
                    {job.company} — {job.startDate}–{job.endDate}
                  </p>

                  <p
                    className="text-[10px] mt-1"
                    style={{ color: color.secondary }}
                  >
                    {job.location}
                  </p>

                  <ul
                    className="list-disc ml-5 mt-1 text-xs"
                    style={{ color: color.secondary }}
                  >
                    {job.description}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.primary }}
          >
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              Projects
            </h2>

            <div className="space-y-2">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: color.primary }}
                  >
                    {project.name}
                  </h4>
                  <p
                    className="text-xs mt-1"
                    style={{ color: color.secondary }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section
            className="relative pl-4 border-l-4"
            style={{ borderColor: color.primary }}
          >
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              Certifications
            </h2>
            <ul
              className="text-xs space-y-0"
              style={{ color: color.secondary }}
            >
              {data?.certificates?.map((cert) => (
                <li key={cert.id}>
                  {cert.title} — {cert.issuer}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
