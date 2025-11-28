export default function Template4({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FDFDFD",
    sidebar: fontColor,
    primary: fontColor,
    secondary: "#374151",
    accent: "#2563EB",
    border: "#D1D5DB",
    chip: "#E5E7EB",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto flex"
      style={{
        backgroundColor: color.bg,
      }}
    >
      {/* SIDEBAR */}
      <div
        className="w-[210px] h-full p-6 text-white flex flex-col space-y-4"
        style={{ backgroundColor: color.sidebar }}
      >
        {/* NAME / TITLE */}
        <div>
          <h1 style={{ fontSize: fontSize.title }} className=" font-bold">
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h1>
          {data?.personalInfo?.title && (
            <p style={{ fontSize: fontSize.text }} className=" mt-1 opacity-80">
              {data.personalInfo.title}
            </p>
          )}
        </div>

        {/* CONTACT */}
        {data?.personalInfo?.email && (
          <div>
            <h3
              style={{ fontSize: fontSize.heading }}
              className="uppercase font-semibold tracking-wide opacity-80"
            >
              Contact
            </h3>
            <ul
              style={{ fontSize: fontSize.text }}
              className="py-2 truncate  opacity-90 leading-snug"
            >
              <li>{data?.personalInfo?.email}</li>
              <li>{data?.personalInfo?.phone}</li>
              <li>
                <a href={data?.personalInfo?.website}>
                  {data?.personalInfo?.website}
                </a>
              </li>
              <li>
                <a href={data?.personalInfo?.linkedin}>
                  {data?.personalInfo?.linkedin}
                </a>
              </li>
              <li>
                <a href={data?.personalInfo?.github}>
                  {data?.personalInfo?.github}
                </a>
              </li>
              <li>{data?.personalInfo?.address}</li>
            </ul>
          </div>
        )}

        {/* SKILLS */}
        {data?.skills?.length > 0 && (
          <div>
            <h3
              style={{ fontSize: fontSize.heading }}
              className=" uppercase font-semibold tracking-wide opacity-80"
            >
              Skills
            </h3>
            <div
              style={{ fontSize: fontSize.text }}
              className="flex flex-col leading-snug"
            >
              {data?.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="pr-2"
                  style={{
                    color: "white",
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {data?.tools?.length > 0 && (
          <section>
            <h3
              className="font-semibold mb-1 opacity-80"
              style={{ fontSize: fontSize.heading }}
            >
              Tools
            </h3>
            <div
              style={{ fontSize: fontSize.text }}
              className="flex flex-col leading-snug"
            >
              {data?.tools.map((tool) => (
                <span key={tool.id} className="pr-2">
                  {tool.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* LANGUAGES */}
        {data?.languages.length > 0 && (
          <div>
            <h3
              style={{ fontSize: fontSize.heading }}
              className=" uppercase font-semibold tracking-wide opacity-80"
            >
              Languages
            </h3>
            <ul
              style={{ fontSize: fontSize.text }}
              className="text-xs mt-2 space-y-1 opacity-90"
            >
              {data?.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* EDUCATION */}
        {data?.education.length > 0 && (
          <div className="mt-auto">
            <h3
              style={{ fontSize: fontSize.heading }}
              className=" uppercase font-semibold tracking-wide opacity-80"
            >
              Education
            </h3>
            <div
              style={{ fontSize: fontSize.text }}
              className="mt-2 space-y-2 opacity-90"
            >
              {data?.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold text-white">{edu.degree}</p>
                  <p>{edu.school}</p>
                  <p>
                    {edu.month} {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 space-y-5">
        {/* PROFILE */}
        {data?.summary && (
          <section>
            <h2
              className=" uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Summary
            </h2>
            <p
              className="leading-snug"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data?.summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {data?.experience.length > 0 && (
          <section>
            <h2
              className="uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Experience
            </h2>

            <div className="space-y-3">
              {data?.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between">
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
                        className="text-xs"
                        style={{
                          color: color.secondary,
                          fontSize: fontSize.text,
                        }}
                      >
                        {job.company} — {job.startDate} –{" "}
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

                  <ul
                    className="ml-5 mt-2 "
                    style={{ color: color.secondary, fontSize: fontSize.text }}
                  >
                    {job.description}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {data?.projects.length > 0 && (
          <section>
            <h2
              className=" uppercase font-bold tracking-wide mb-1 leading-snug"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Projects
            </h2>

            <div className="space-y-2">
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
                    style={{ color: color.secondary, fontSize: fontSize.text }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {data?.certificates.length > 0 && (
          <section>
            <h2
              className="uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Certificates
            </h2>
            <ul
              className=" space-y-1"
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
      </div>
    </div>
  );
}
