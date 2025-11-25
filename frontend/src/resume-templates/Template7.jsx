export default function Template3({ data }) {
  const color = {
    bg: "#FFFFFF",
    header: "#0A0F1C",
    textPrimary: "#1A1A1A",
    textSecondary: "#4B5563",
    accent: "#3B82F6",
    sidebar: "#F4F6F8",
    border: "#E5E7EB",
    chip: "#F3F4F6",
  };

  console.log(data);

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-0"
      style={{
        backgroundColor: color.bg,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      {/* HEADER */}
      <div
        className="text-center py-8"
        style={{ backgroundColor: color.header, color: "#fff" }}
      >
        <h1 className="text-3xl font-bold tracking-tight">
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>

        {data?.personalInfo?.title && (
          <p className="text-sm mt-1 opacity-90">{data.personalInfo.title}</p>
        )}

        <div className="flex justify-center gap-6 mt-4 text-xs">
          {data?.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data?.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data?.personalInfo?.website && (
            <a href={data.personalInfo.website} className="underline">
              {data.personalInfo.website}
            </a>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-[200px_1fr] h-[calc(842px-160px)]">
        {/* LEFT COLUMN */}
        <div className="p-6" style={{ backgroundColor: color.sidebar }}>
          {/* Profile Summary */}
          <section className="mb-6">
            <h3
              className="uppercase text-xs font-bold mb-2"
              style={{ color: color.textPrimary }}
            >
              Profile
            </h3>
            <p className="text-xs" style={{ color: color.textSecondary }}>
              {data?.summary}
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3
              className="uppercase text-xs font-bold mb-2"
              style={{ color: color.textPrimary }}
            >
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {data?.skills?.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-[2px] text-[10px] rounded-full border"
                  style={{
                    backgroundColor: color.chip,
                    borderColor: color.border,
                    color: color.textPrimary,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h3
              className="uppercase text-xs font-bold mb-2"
              style={{ color: color.textPrimary }}
            >
              Languages
            </h3>

            <ul className="text-xs" style={{ color: color.textSecondary }}>
              {data?.languages?.map((lang) => (
                <li key={lang.id}>
                  {lang.name} – {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h3
              className="uppercase text-xs font-bold mb-2"
              style={{ color: color.textPrimary }}
            >
              Education
            </h3>

            <div className="space-y-3 text-xs">
              {data?.education?.map((edu) => (
                <div key={edu.id}>
                  <p
                    className="font-semibold"
                    style={{ color: color.textPrimary }}
                  >
                    {edu.degree}
                  </p>
                  <p style={{ color: color.textSecondary }}>{edu.school}</p>
                  <p
                    className="text-[11px]"
                    style={{ color: color.textSecondary }}
                  >
                    {edu.month} {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-8 flex flex-col">
          {/* Experience */}
          <section>
            <h2
              className="uppercase text-sm font-bold tracking-wide mb-3"
              style={{ color: color.textPrimary }}
            >
              Experience
            </h2>

            <div className="space-y-5">
              {data?.experience?.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: color.textPrimary }}
                      >
                        {job.title}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: color.textSecondary }}
                      >
                        {job.company} — {job.start}–{job.end}
                      </p>
                    </div>

                    {job.location && (
                      <p
                        className="text-xs"
                        style={{ color: color.textSecondary }}
                      >
                        {job.location}
                      </p>
                    )}
                  </div>

                  <ul
                    className="list-disc ml-5 mt-2 text-sm"
                    style={{ color: color.textSecondary }}
                  >
                    {job.description}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-6"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Projects */}
          <section>
            <h2
              className="uppercase text-sm font-bold mb-3"
              style={{ color: color.textPrimary }}
            >
              Projects
            </h2>

            <div className="space-y-3">
              {data?.projects?.map((proj) => (
                <div key={proj.id}>
                  <h4
                    className="font-semibold"
                    style={{ color: color.textPrimary }}
                  >
                    {proj.name}
                  </h4>
                  <p className="text-xs" style={{ color: color.textSecondary }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-6"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Certifications */}
          <section>
            <h2
              className="uppercase text-sm font-bold mb-2"
              style={{ color: color.textPrimary }}
            >
              certificates
            </h2>

            <ul className="text-xs" style={{ color: color.textSecondary }}>
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
