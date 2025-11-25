export default function Template2({ data }) {
  const color = {
    bg: "#FFFFFF",
    sidebar: "#F4F6F8",
    primary: "#0A0F1C",
    secondary: "#4B5563",
    accent: "#3B82F6",
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
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* Top Accent Header */}
      <div
        className="w-full h-20 px-8 flex items-center"
        style={{
          backgroundColor: color.accent,
          color: "#FFFFFF",
        }}
      >
        <div className="text-left">
          <h1 className="text-2xl font-bold tracking-tight">
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h1>
          {/* <p className="text-sm opacity-90">Product Designer</p> */}
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-[180px_1fr] h-[calc(842px-80px)]">
        {/* LEFT SIDEBAR */}
        <div
          className="p-5 flex flex-col"
          style={{ backgroundColor: color.sidebar }}
        >
          {/* Profile Summary */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Profile
            </h3>
            <p className="text-xs" style={{ color: color.secondary }}>
              {data?.summary}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Contact
            </h3>
            <div
              className="text-xs leading-relaxed truncate flex flex-col"
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
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {data?.skills.length > 0 &&
                data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-[10px] "
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
          <section className="mb-6">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Languages
            </h3>
            <ul className="text-xs" style={{ color: color.secondary }}>
              {data?.languages.length > 0 &&
                data.languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} — {lang.level}
                  </li>
                ))}
            </ul>
          </section>

          {/* Education */}
          <section className="mt-auto">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Education
            </h3>
            <div
              className="text-xs leading-tight"
              style={{ color: color.secondary }}
            >
              {data?.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold" style={{ color: color.primary }}>
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

        {/* RIGHT CONTENT */}
        <div className="p-8 flex flex-col">
          {/* Section: Experience */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-4 tracking-wide"
              style={{ color: color.primary }}
            >
              Experience
            </h2>

            <div className="space-y-5">
              {data?.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: color.primary }}
                      >
                        {exp.position}
                      </h3>
                      <p className="text-xs" style={{ color: color.secondary }}>
                        {exp.company} — {exp.startDate} –{" "}
                        {exp.endDate || "Present"}
                      </p>
                    </div>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      {exp.location}
                    </p>
                  </div>

                  <ul
                    className=" ml-5 mt-2 text-sm"
                    style={{ color: color.secondary }}
                  >
                    {exp.description}
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

          {/* Section: Projects */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary }}
            >
              Selected Projects
            </h2>

            <div className="flex flex-col gap-2">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: color.primary }}
                  >
                    <a href={project.link}>{project.name}</a>
                  </h4>
                  <p className="text-xs" style={{ color: color.secondary }}>
                    {project.description}
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
          <section className="mt-auto">
            <h2
              className="text-sm uppercase font-bold tracking-wide mb-2"
              style={{ color: color.primary }}
            >
              certificates
            </h2>
            <div className="text-xs" style={{ color: color.secondary }}>
              {data?.certificates?.map((cert) => (
                <div key={cert.id}>
                  {cert.title} — {cert.issuer}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
