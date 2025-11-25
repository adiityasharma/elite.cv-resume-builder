export default function Template3({ data }) {
  const color = {
    bg: "#FFFFFF",
    header: "#0A0F1C",
    primary: "#0A0F1C",
    secondary: "#4B5563",
    accent: "#3B82F6",
    border: "#E5E7EB",
    chip: "#F3F4F6",
    softBg: "#FAFAFA",
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
      {/* HEADER BAR */}
      <div
        className="w-full px-8 py-6 text-white"
        style={{ backgroundColor: color.header }}
      >
        <h1 className="text-2xl font-bold tracking-tight">
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>
        {data?.personalInfo?.title && (
          <p className="text-sm opacity-70">{data.personalInfo.title}</p>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-2 gap-0 h-[calc(842px-96px)]">
        {/* LEFT COLUMN */}
        <div
          className="p-6 space-y-6"
          style={{ backgroundColor: color.softBg }}
        >
          {/* Profile Summary */}
          <section>
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Profile
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: color.secondary }}
            >
              {data?.summary}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Contact
            </h3>
            <div
              className="text-xs flex flex-col "
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
              <div>{data?.personalInfo?.address}</div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
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
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul
              className="text-xs space-y-[2px]"
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
          <section
            className="pt-4 border-t"
            style={{ borderColor: color.border }}
          >
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
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
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-8 flex flex-col space-y-6">
          {/* Experience */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-4 tracking-wide"
              style={{ color: color.primary }}
            >
              Experience
            </h2>

            <div className="space-y-6">
              {data?.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: color.primary }}
                      >
                        {job.title}
                      </h3>
                      <p className="text-xs" style={{ color: color.secondary }}>
                        {job.company} — {job.startDate}–{job.endDate}
                      </p>
                    </div>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      {job.location}
                    </p>
                  </div>

                  <ul
                    className="list-disc ml-5 mt-2 text-xs"
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
              className="text-sm uppercase font-bold mb-3 tracking-wide"
              style={{ color: color.primary }}
            >
              Selected Projects
            </h2>

            <div className="space-y-3">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: color.primary }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs" style={{ color: color.secondary }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section
            className="mt-auto pt-4 border-t"
            style={{ borderColor: color.border }}
          >
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              Certifications
            </h2>

            <ul
              className="text-xs space-y-1"
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
