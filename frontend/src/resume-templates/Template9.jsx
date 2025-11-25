export default function Template4({ data }) {
  const color = {
    bg: "#FFFFFF",
    primary: "#0A0F1C",
    secondary: "#4B5563",
    accent: "#3B82F6",
    border: "#E5E7EB",
    chip: "#F3F4F6",
    soft: "#FAFAFA",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-6"
      style={{
        backgroundColor: color.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* HEADER */}
      <div className="mb-4">
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
      </div>

      {/* GRID LAYOUT (Two Columns) */}
      <div className="grid grid-cols-2 gap-4 h-[calc(842px-96px)]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-y-4">
          {/* Profile */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wide"
              style={{ color: color.primary }}
            >
              Profile
            </h3>
            <p
              className="text-xs leading-snug"
              style={{ color: color.secondary }}
            >
              {data?.summary}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3
              className="text-xs font-bold uppercase pb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Contact
            </h3>
            <div
              className="text-xs truncate flex flex-col "
              style={{ color: color.secondary }}
            >
              <div>{data?.personalInfo?.email}</div>
              <div>{data?.personalInfo?.phone}</div>
              <a href={data?.personalInfo?.website}>
                {data?.personalInfo?.website}
              </a>
              <a href={data?.personalInfo?.linkedin}>
                {data?.personalInfo?.linkedin}
              </a>
              <a href={data?.personalInfo?.github}>
                {data?.personalInfo?.github}
              </a>
              <p className="mb-2">{data?.personalInfo?.address}</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wide"
              style={{ color: color.primary }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data?.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-[1px] text-[10px] rounded"
                  style={{
                    backgroundColor: color.chip,
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
              className="text-xs font-bold uppercase mb-1 tracking-wide"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul
              className="text-xs space-y-[1px]"
              style={{ color: color.secondary }}
            >
              {data?.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="mt-auto">
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wide"
              style={{ color: color.primary }}
            >
              Education
            </h3>
            <div
              className="text-xs space-y-2"
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
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-4">
          {/* Experience */}
          <section>
            <h2
              className="text-xs font-bold uppercase mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Experience
            </h2>
            <div className="space-y-4">
              {data?.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className="font-semibold text-sm"
                        style={{ color: color.primary }}
                      >
                        {job.title}
                      </h3>
                      <p className="text-xs" style={{ color: color.secondary }}>
                        {job.company} — {job.start}–{job.end}
                      </p>
                    </div>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      {job.location}
                    </p>
                  </div>

                  <ul
                    className="list-disc ml-4 mt-1 text-xs space-y-[2px]"
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
            <h2
              className="text-xs font-bold uppercase mb-1 tracking-wide"
              style={{ color: color.primary }}
            >
              Selected Projects
            </h2>
            <div className="space-y-2">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold text-xs"
                    style={{ color: color.primary }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-[11px]" style={{ color: color.secondary }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-auto">
            <h2
              className="text-xs font-bold uppercase tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              Certifications
            </h2>
            <ul
              className="text-xs space-y-[2px]"
              style={{ color: color.secondary }}
            >
              {data?.certificates.map((cert) => (
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
