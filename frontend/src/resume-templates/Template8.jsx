export default function Template3({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    header: fontColor,
    primary: fontColor,
    secondary: "#4B5563",
    accent: fontColor,
    border: "#E5E7EB",
    chip: "#F3F4F6",
    softBg: "#FAFAFA",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto "
      style={{
        backgroundColor: color.bg,
      }}
    >
      {/* HEADER BAR */}
      <div
        className="w-full px-8 py-6 text-white"
        style={{ backgroundColor: color.header }}
      >
        <h1
          style={{ fontSize: fontSize.title }}
          className="font-bold tracking-tight"
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>
        {data?.personalInfo?.title && (
          <p style={{ fontSize: fontSize.text }} className=" opacity-70">
            {data.personalInfo.title}
          </p>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-2 h-[calc(842px-96px)]">
        {/* LEFT COLUMN */}
        <div
          className="p-4 space-y-3"
          style={{ backgroundColor: color.softBg }}
        >
          {/* Profile Summary */}
          <section>
            <h3
              className="uppercase font-bold mb-2 tracking-wide"
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

          {/* Contact */}
          <section>
            <h3
              className="uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Contact
            </h3>
            <div
              className="flex flex-col leading-snug"
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
              <div>{data?.personalInfo?.address}</div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3
              className="uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap ">
              {data?.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="pr-2"
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

          {/* Languages */}
          {data?.languages.length > 0 && (
            <section>
              <h3
                className="uppercase font-bold mb-2 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Languages
              </h3>
              <ul
                className=" space-y-[2px]"
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

          {data?.education.length > 0 && (
            <section
              className="pt-4 border-t"
              style={{ borderColor: color.border }}
            >
              <h3
                className="uppercase font-bold mb-2 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Education
              </h3>
              <div
                className=" space-y-2"
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
        <div className="p-4 flex flex-col space-y-6">
          {/* Experience */}

          {data?.experience?.length > 0 && (
            <section>
              <h2
                className="uppercase font-bold mb-4 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Experience
              </h2>

              <div className="space-y-3">
                {data?.experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between leading-snug">
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
                          className="mt-1"
                          style={{
                            color: color.secondary,
                            fontSize: fontSize.text,
                          }}
                        >
                          {job.company} — {job.startDate} – {job.endDate}
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

                    <ul
                      className="ml-4"
                      style={{
                        color: color.secondary,
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

          {/* Projects */}

          {data?.projects?.length > 0 && (
            <section>
              <h2
                className="uppercase font-bold mb-3 tracking-wide"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Projects
              </h2>

              <div className="space-y-3 leading-snug">
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
            <section
              className="mt-auto pt-4 border-t "
              style={{ borderColor: color.border }}
            >
              <h2
                className="uppercase font-bold tracking-wide mb-2"
                style={{ color: color.primary, fontSize: fontSize.heading }}
              >
                Certifications
              </h2>

              <ul
                className="space-y-1 leading-snug"
                style={{ color: color.secondary, fontSize: fontSize.text }}
              >
                {data?.certificates?.map((cert) => (
                  <li key={cert.id}>
                    {cert.title} — {cert.issuer}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {}
        </div>
      </div>
    </div>
  );
}
