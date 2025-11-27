export default function Template3({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    header: fontColor,
    textPrimary: fontColor,
    textSecondary: "#4B5563",
    accent: fontColor,
    sidebar: "#F4F6F8",
    border: "#E5E7EB",
    chip: "#F3F4F6",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto "
      style={{
        backgroundColor: color.bg,
      }}
    >
      {/* HEADER */}
      <div
        className="text-center py-4"
        style={{ backgroundColor: color.header, color: "#fff" }}
      >
        <h1
          style={{ fontSize: fontSize.title }}
          className="font-bold tracking-tight"
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>

        {data?.personalInfo?.title && (
          <p className="text-sm mt-1 opacity-90">{data.personalInfo.title}</p>
        )}

        <div
          className="flex justify-center gap-6 mt-2 "
          style={{ fontSize: fontSize.text }}
        >
          {data?.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data?.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data?.personalInfo?.website && (
            <a href={data.personalInfo.website} className="truncate">
              {data.personalInfo.website}
            </a>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-[200px_1fr] h-[calc(842px-160px)]">
        {/* LEFT COLUMN */}
        <div className="p-4" style={{ backgroundColor: color.sidebar }}>
          {/* Profile Summary */}
          {data?.summary && (
            <section className="">
              <h3
                className="uppercase text-xs font-bold mb-1"
                style={{ color: color.textPrimary, fontSize: fontSize.heading }}
              >
                Summary
              </h3>
              <p
                className="text-xs"
                style={{ color: color.textSecondary, fontSize: fontSize.text }}
              >
                {data?.summary}
              </p>
            </section>
          )}

          {/* Skills */}

          {data?.skills?.length > 0 && (
            <section className="mt-2">
              <h3
                className="uppercase font-bold mb-1"
                style={{ color: color.textPrimary, fontSize: fontSize.heading }}
              >
                Skills
              </h3>

              <div className="flex flex-col ">
                {data?.skills?.map((skill) => (
                  <span
                    key={skill.id}
                    className="pr-2"
                    style={{
                      fontSize: fontSize.text,
                      color: color.textSecondary,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}

          {data?.languages?.length > 0 && (
            <section className="mt-2">
              <h3
                className="uppercase font-bold mb-2"
                style={{ color: color.textPrimary }}
              >
                Languages
              </h3>

              <ul
                className=""
                style={{ fontSize: fontSize.text, color: color.textSecondary }}
              >
                {data?.languages?.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} – {lang.level}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data?.education?.length > 0 && (
            <section>
              <h3
                className="uppercase font-bold mt-2"
                style={{ color: color.textPrimary, fontSize: fontSize.heading }}
              >
                Education
              </h3>

              <div className="space-y-2 leading-snug">
                {data?.education?.map((edu) => (
                  <div
                    key={edu.id}
                    style={{
                      fontSize: fontSize.text,
                      color: color.textSecondary,
                    }}
                  >
                    <p className="font-semibold">{edu.degree}</p>
                    <p>{edu.school}</p>
                    <p className="">
                      {edu.month} {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-4 flex flex-col">
          {/* Experience */}
          {data?.experience?.length > 0 && (
            <section>
              <h2
                className="uppercase font-bold tracking-wide"
                style={{ color: color.textPrimary }}
              >
                Experience
              </h2>

              <div className="space-y-2">
                {data?.experience?.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between">
                      <div>
                        <h3
                          className="font-medium"
                          style={{
                            color: color.textPrimary,
                            fontSize: fontSize.subHeading,
                          }}
                        >
                          {job.position}
                        </h3>
                        <p
                          className=""
                          style={{
                            color: color.textSecondary,
                            fontSize: fontSize.text,
                          }}
                        >
                          {job.company} — {job.startDate} –{" "}
                          {job.endDate || "Present"}
                        </p>
                      </div>

                      {job.location && (
                        <p
                          className=""
                          style={{
                            color: color.textSecondary,
                            fontSize: fontSize.text,
                          }}
                        >
                          {job.location}
                        </p>
                      )}
                    </div>

                    <ul
                      className="ml-4 leading-snug"
                      style={{
                        color: color.textSecondary,
                        fontSize: fontSize.text,
                      }}
                    >
                      {job.description}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          <div
            className="mt-4"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Projects */}
          {data?.projects?.length > 0 && (
            <section>
              <h2
                className="uppercase mt-2 font-bold "
                style={{ color: color.textPrimary, fontSize: fontSize.heading }}
              >
                Projects
              </h2>

              <div className="space-y-2">
                {data?.projects?.map((proj) => (
                  <div key={proj.id}>
                    <h4
                      className="font-medium"
                      style={{
                        color: color.textPrimary,
                        fontSize: fontSize.subHeading,
                      }}
                    >
                      {proj.name}
                    </h4>
                    <p
                      className="leading-snug"
                      style={{
                        color: color.textSecondary,
                        fontSize: fontSize.text,
                      }}
                    >
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          <div
            className="mt-4"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Certifications */}
          {data?.certificates?.length > 0 && (
            <section>
              <h2
                className="uppercase font-bold mt-2"
                style={{ color: color.textPrimary, fontSize: fontSize.heading }}
              >
                certificates
              </h2>

              <ul
                className="leading-snug"
                style={{ color: color.textSecondary, fontSize: fontSize.text }}
              >
                {data?.certificates?.map((cert) => (
                  <li key={cert.id}>
                    {cert.title} — {cert.issuer}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
