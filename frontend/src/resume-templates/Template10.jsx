export default function Template5({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#4B5563",
    accent: fontColor,
    border: "#E5E7EB",
    chip: "#F3F4F6",
    sidebar: "#F4F6F8",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto px-6 py-2"
      style={{
        background: color.bg,
      }}
    >
      {/* HEADER */}
      <div className="pb-3 mb-4 border-b" style={{ borderColor: color.border }}>
        <h1
          className=" font-bold tracking-tight"
          style={{ color: color.primary, fontSize: fontSize.title }}
        >
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>

        {data.personalInfo.title && (
          <p
            className="mt-1"
            style={{ color: color.secondary, fontSize: fontSize.text }}
          >
            {data.personalInfo.title}
          </p>
        )}

        {/* CONTACT */}
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 mt-2 "
          style={{ color: color.secondary, fontSize: fontSize.text }}
        >
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.website && (
            <a href={data.personalInfo.website} className="">
              {data.personalInfo.website}
            </a>
          )}
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} className="">
              {data.personalInfo.linkedin}
            </a>
          )}
          {data.personalInfo.github && (
            <a href={data.personalInfo.github} className="">
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
              className="font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Profile
            </h3>
            <p
              className="leading-snug"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3
              className="font-bold uppercase mb-1 tracking-wider"
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
                    fontSize: fontSize.text,
                    color: color.secondary,
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

          {/* Languages */}
          <section>
            <h3
              className="text-xs font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Languages
            </h3>
            <ul
              className=""
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
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
              className="font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Education
            </h3>
            <div
              className="space-y-2"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="" style={{ color: color.primary }}>
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
              className="font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Experience
            </h3>
            <div className="space-y-3">
              {data.experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between leading-snug">
                    <div>
                      <h4
                        className="font-medium"
                        style={{
                          color: color.primary,
                          fontSize: fontSize.subHeading,
                        }}
                      >
                        {job.position}
                      </h4>
                      <p
                        className=""
                        style={{
                          color: color.secondary,
                          fontSize: fontSize.text,
                        }}
                      >
                        {job.company} — {job.startStart}–{job.endStart}
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
                    className="ml-4"
                    style={{ color: color.secondary, fontSize: fontSize.text }}
                  >
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3
              className="font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Projects
            </h3>

            <div className="space-y-2 leading-snug">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <p
                    className="font-semibold"
                    style={{ color: color.primary, fontSize: fontSize.text }}
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

          {/* Certifications */}
          <section className="mt-auto mb-5">
            <h3
              className="font-bold uppercase mb-1 tracking-wider"
              style={{ color: color.primary }}
            >
              Certificates
            </h3>
            <ul
              className="space-y-[2px]"
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
