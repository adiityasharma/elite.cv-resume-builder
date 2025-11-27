export default function Template6({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    primary: fontColor,
    secondary: "#374151",
    border: "#D1D5DB",
    divider: "#E5E7EB",
    accent: fontColor,
  };

  return (
    <div
      className="w-full h-full mx-auto p-5 flex flex-col gap-3"
      style={{ backgroundColor: color.bg }}
    >
      {/* HEADER */}
      <header className="space-y-1">
        <h1
          className="font-bold"
          style={{ fontSize: fontSize.title, color: color.primary }}
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>

        {/* Contact Row */}
        <div
          className="flex gap-x-4 flex-wrap"
          style={{ fontSize: fontSize.text, color: color.secondary }}
        >
          <span>{data?.personalInfo?.email}</span>
          <span>{data?.personalInfo?.phone}</span>
          {data?.personalInfo?.website && (
            <a href={data?.personalInfo?.website}>Website</a>
          )}
          {data?.personalInfo?.linkedin && (
            <a href={data?.personalInfo?.linkedin}>LinkedIn</a>
          )}
          {data?.personalInfo?.github && (
            <a href={data?.personalInfo?.github}>GitHub</a>
          )}
          <span>{data?.personalInfo?.address}</span>
        </div>
      </header>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-[1fr_2px_1fr] gap-4 flex-1">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 pr-2">
          {/* Profile */}
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Profile
            </h2>
            <p
              className="leading-snug"
              style={{ fontSize: fontSize.text, color: color.secondary }}
            >
              {data?.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {data?.skills?.map((skill) => (
                <span
                  key={skill.id}
                  className="px-1"
                  style={{
                    borderColor: color.border,
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
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Languages
            </h2>
            <ul
              className="space-y-1"
              style={{ fontSize: fontSize.text, color: color.secondary }}
            >
              {data?.languages?.map((lang) => (
                <li key={lang.id}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Education
            </h2>
            <div className="space-y-2">
              {data?.education?.map((edu) => (
                <div key={edu.id}>
                  <p
                    className="font-medium"
                    style={{ fontSize: fontSize.text, color: color.primary }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {edu.month} {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Vertical Divider */}
        <div
          style={{ backgroundColor: color.border }}
          className="w-[2px] h-full"
        />

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 pl-2">
          {/* Experience */}
          <section>
            <h2
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Experience
            </h2>

            <div className="space-y-3">
              {data?.experience?.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between">
                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: fontSize.subHeading,
                        color: color.primary,
                      }}
                    >
                      {exp.position}
                    </h3>
                    <span
                      style={{
                        fontSize: fontSize.text,
                        color: color.secondary,
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {exp.company} — {exp.startDate} – {exp.endDate || "Present"}
                  </p>
                  <p
                    className="space-y-1 pl-2"
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Projects
            </h2>

            <div className="space-y-2">
              {data?.projects?.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold"
                    style={{
                      fontSize: fontSize.subHeading,
                      color: color.primary,
                    }}
                  >
                    <a href={project.link} target="_blank">
                      {project.name}
                    </a>
                  </h4>
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section>
            <h2
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              — Certificates
            </h2>
            <div
              className="space-y-1"
              style={{ fontSize: fontSize.text, color: color.secondary }}
            >
              {data?.certificates?.map((cert) => (
                <p key={cert.id}>
                  {cert.title} — {cert.issuer}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
