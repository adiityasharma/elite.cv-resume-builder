export default function Template5({ data }) {
  const color = {
    bg: "#FFFFFF",
    primary: "#0A0F1C",
    secondary: "#4B5563",
    accent: "#3B82F6",
    border: "#E5E7EB",
    chip: "#F3F4F6",
    sidebar: "#F4F6F8",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-6"
      style={{
        background: color.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* HEADER */}
      <div className="pb-3 mb-4 border-b" style={{ borderColor: color.border }}>
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: color.primary }}
        >
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>

        {data.personalInfo.title && (
          <p className="text-sm mt-1" style={{ color: color.secondary }}>
            {data.personalInfo.title}
          </p>
        )}

        {/* CONTACT */}
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px]"
          style={{ color: color.secondary }}
        >
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.website && (
            <a href={data.personalInfo.website} className="underline">
              {data.personalInfo.website}
            </a>
          )}
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} className="underline">
              {data.personalInfo.linkedin}
            </a>
          )}
          {data.personalInfo.github && (
            <a href={data.personalInfo.github} className="underline">
              {data.personalInfo.github}
            </a>
          )}
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-2 gap-5 h-[calc(842px-130px)]">
        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-5">
          {/* Profile */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Profile
            </h3>
            <p
              className="text-xs leading-snug"
              style={{ color: color.secondary }}
            >
              {data.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-[1px] text-[10px] rounded"
                  style={{
                    background: color.chip,
                    color: color.primary,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul className="text-xs" style={{ color: color.secondary }}>
              {data.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="mt-auto mb-5">
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Education
            </h3>
            <div
              className="text-xs space-y-2"
              style={{ color: color.secondary }}
            >
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold" style={{ color: color.primary }}>
                    {edu.degree}
                  </p>
                  <p>{edu.school}</p>
                  <span>
                    {edu.month} {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col space-y-5">
          {/* Experience */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Experience
            </h3>
            <div className="space-y-3">
              {data.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between">
                    <div>
                      <h4
                        className="font-semibold text-sm"
                        style={{ color: color.primary }}
                      >
                        {job.title}
                      </h4>
                      <p
                        className="text-[11px]"
                        style={{ color: color.secondary }}
                      >
                        {job.company} — {job.start}–{job.end}
                      </p>
                    </div>
                    <p
                      className="text-[11px]"
                      style={{ color: color.secondary }}
                    >
                      {job.location}
                    </p>
                  </div>

                  <ul
                    className="list-disc ml-4 text-xs space-y-[1px]"
                    style={{ color: color.secondary }}
                  >
                    {job.description}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Selected Projects
            </h3>

            <div className="space-y-2">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <p
                    className="font-semibold text-xs"
                    style={{ color: color.primary }}
                  >
                    {project.title}
                  </p>
                  <p className="text-[11px]" style={{ color: color.secondary }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-auto mb-5">
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Certifications
            </h3>
            <ul
              className="text-xs space-y-[2px]"
              style={{ color: color.secondary }}
            >
              {data.certificates.map((cert) => (
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
