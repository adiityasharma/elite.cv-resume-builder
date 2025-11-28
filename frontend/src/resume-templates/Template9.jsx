export default function Template9({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#4B5563",
    accent: fontColor,
    border: "#E5E7EB",
    chip: "#F3F4F6",
    soft: "#FAFAFA",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-6"
      style={{
        backgroundColor: color.bg,
      }}
    >
      {/* HEADER */}
      <div className="mb-4">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: color.primary, fontSize: fontSize.title }}
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>
        {data?.personalInfo?.title && (
          <p
            className="mt-1"
            style={{ color: color.secondary, fontSize: fontSize.text }}
          >
            {data.personalInfo.title}
          </p>
        )}
      </div>

      {/* GRID LAYOUT (Two Columns) */}
      <div className="grid grid-cols-2 gap-4 h-[calc(842px-96px)]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-y-4">
          {/* Profile */}
          {data?.summary && (
            <section>
              <h3
                className="font-bold uppercase mb-1 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Profile
              </h3>
              <p
                className="leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
              >
                {data?.summary}
              </p>
            </section>
          )}

          {/* Contact */}
          {data?.personalInfo && (
            <section>
              <h3
                className="font-bold uppercase pb-2 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Contact
              </h3>
              <div
                className="truncate flex flex-col leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
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
          )}

          {/* Skills */}
          {data?.skills?.length > 0 && (
            <section>
              <h3
                className="font-bold uppercase mb-1 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Skills
              </h3>
              <div className="flex flex-col leading-snug">
                {data?.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="pr-2"
                    style={{
                      color: color.secondary,
                      fontSize: fontSize.text,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data?.tools?.length > 0 && (
            <section>
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
          {data?.languages.length > 0 && (
            <section>
              <h3
                className="font-bold uppercase mb-1 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Languages
              </h3>
              <ul
                className=" space-y-px leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
              >
                {data?.languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} — {lang.level}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data?.education?.length > 0 && (
            <section className="mt-auto">
              <h3
                className="font-bold uppercase mb-1 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Education
              </h3>
              <div
                className="space-y-2 leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
              >
                {data?.education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-medium">{edu.degree}</p>
                    <p>{edu.school}</p>
                    <p>
                      {edu.month} {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-4">
          {/* Experience */}
          {data?.experience?.length > 0 && (
            <section>
              <h2
                className="font-bold uppercase mb-2 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Experience
              </h2>
              <div className="space-y-4">
                {data?.experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3
                          className="font-medium"
                          style={{
                            color: color.primary,
                            fontSize: fontSize.subHeading,
                          }}
                        >
                          {job.position}
                        </h3>
                        <p
                          className=""
                          style={{
                            color: color.secondary,
                            fontSize: fontSize.text,
                          }}
                        >
                          {job.company} — {job.startDate}–
                          {job.endDate || "Present"}
                        </p>
                      </div>
                      <p
                        className=""
                        style={{
                          color: color.secondary,
                          fontSize: fontSize.text,
                        }}
                      >
                        {job.location}
                      </p>
                    </div>

                    <p
                      className="ml-4 mt-1 leading-snug"
                      style={{
                        color: color.secondary,
                        fontSize: fontSize.text,
                      }}
                    >
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}

          {data?.projects?.length > 0 && (
            <section>
              <h2
                className="font-bold uppercase mb-1 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Projects
              </h2>
              <div className="space-y-2 leading-snug">
                {data?.projects.map((project) => (
                  <div key={project.id}>
                    <h4
                      className="font-medium"
                      style={{
                        color: color.primary,
                        fontSize: fontSize.subHeading,
                      }}
                    >
                      {project.name}
                    </h4>
                    <p
                      className=""
                      style={{
                        color: color.secondary,
                        fontSize: fontSize.text,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data?.certificates?.length > 0 && (
            <section className="mt-auto">
              <h2
                className="font-bold uppercase tracking-wide mb-1"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Certificates
              </h2>
              <ul
                className="space-y-[2px] leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
              >
                {data?.certificates.map((cert) => (
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
