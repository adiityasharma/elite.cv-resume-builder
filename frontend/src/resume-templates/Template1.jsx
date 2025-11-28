export default function Template1({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#4B5563",
    accent: "#3B82F6",
    border: "#E5E7EB",
    chip: "#F3F4F6",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-5"
      style={{
        backgroundColor: color.bg,
      }}
    >
      {/* HEADER */}
      <div
        className="flex justify-between items-center pb-3 mb-3 border-b"
        style={{ borderColor: color.border }}
      >
        <div>
          <h1
            className="text-xl font-bold tracking-tight"
            style={{ color: color.primary, fontSize: fontSize.title }}
          >
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </h1>

          {data.personalInfo.title && (
            <p
              className="text-[10px] mt-[2px]"
              style={{ color: color.secondary }}
            >
              {data.personalInfo.title}
            </p>
          )}
        </div>

        <div
          className="flex flex-col text-[12px] items-end leading-tight"
          style={{ color: color.secondary, fontSize: fontSize.text }}
        >
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          {data.personalInfo.website && (
            <span>{data.personalInfo.website}</span>
          )}
          {data.personalInfo.linkedin && (
            <span>{data.personalInfo.linkedin}</span>
          )}
          {data.personalInfo.github && <span>{data.personalInfo.github}</span>}
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-[190px_1fr] gap-4">
        {/* LEFT SIDEBAR */}
        <div className="flex flex-col space-y-4">
          {/* PROFILE */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Profile
            </h3>
            <p
              className="text-[10px] leading-snug"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data.summary}
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Skills
            </h3>
            <div className="flex flex-col leading-snug">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className=""
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

          {/* LANGUAGES */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Languages
            </h3>
            <ul
              className="leading-tight"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* EDUCATION */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Education
            </h3>
            <div
              className="space-y-2 "
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data.education.map((edu) => (
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

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-4">
          {/* EXPERIENCE */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Experience
            </h3>

            <div className="space-y-3">
              {data.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between">
                    <div>
                      <p
                        className="font-medium "
                        style={{
                          color: color.primary,
                          fontSize: fontSize.subHeading,
                        }}
                      >
                        {job.position}
                      </p>
                      <p
                        className=" italic"
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

                  <p
                    className="ml-4 mt-1 leading-snug"
                    style={{ color: color.secondary, fontSize: fontSize.text }}
                  >
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Projects
            </h3>

            <div className="space-y-2">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <p
                    className="font-medium"
                    style={{
                      color: color.primary,
                      fontSize: fontSize.subHeading,
                    }}
                  >
                    {project.name}
                  </p>
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

          {/* CERTIFICATIONS */}
          <section>
            <h3
              className="font-semibold text-[10px] uppercase tracking-wider mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Certificates
            </h3>
            <ul
              className=""
              style={{ color: color.secondary, fontSize: fontSize.text }}
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
