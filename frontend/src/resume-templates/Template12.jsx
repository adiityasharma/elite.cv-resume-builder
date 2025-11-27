export default function Template3({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    panel: "#F9FAFB",
    primary: fontColor,
    secondary: "#374151",
    accent: fontColor,
    border: "#D1D5DB",
  };

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-0 flex"
      style={{ backgroundColor: color.bg }}
    >
      {/* LEFT CONTENT AREA */}
      <div className="flex-1 p-6 flex flex-col gap-5">
        {/* Name + Title */}
        <div className="pb-3 border-b-2" style={{ borderColor: color.border }}>
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: fontSize.title, color: color.primary }}
          >
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h1>
        </div>

        {/* Experience */}
        <section>
          <h2
            className="uppercase font-bold mb-2 tracking-wide"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Experience
          </h2>
          <div className="space-y-4">
            {data?.experience?.map((exp) => (
              <div
                key={exp.id}
                className="border-l-4 pl-3"
                style={{ borderColor: color.accent }}
              >
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
                  <p
                    style={{ fontSize: fontSize.text, color: color.secondary }}
                  >
                    {exp.location}
                  </p>
                </div>
                <p style={{ fontSize: fontSize.text, color: color.secondary }}>
                  {exp.company} — {exp.startDate} – {exp.endDate || "Present"}
                </p>
                <ul
                  className="ml-4 list-disc"
                  style={{ fontSize: fontSize.text, color: color.secondary }}
                >
                  {exp.description}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2
            className="uppercase font-bold mb-2 tracking-wide"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Projects
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
                  <a target="_blank" href={project.link}>
                    {project.name}
                  </a>
                </h4>
                <p style={{ fontSize: fontSize.text, color: color.secondary }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2
            className="uppercase font-bold mb-2 tracking-wide"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Certificates
          </h2>
          <div
            style={{ fontSize: fontSize.text, color: color.secondary }}
            className="space-y-1"
          >
            {data?.certificates?.map((cert) => (
              <p key={cert.id}>
                {cert.title} — {cert.issuer}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        className="w-[200px] p-4 flex flex-col gap-4 border-l"
        style={{ backgroundColor: color.panel, borderColor: color.border }}
      >
        {/* Profile */}
        <section>
          <h3
            className="uppercase font-bold tracking-wide mb-2"
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
        <section className="">
          <h3
            className="uppercase font-bold tracking-wide pb-2"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Contact
          </h3>
          <div
            className="flex flex-col truncate pb-2"
            style={{ fontSize: fontSize.text, color: color.secondary }}
          >
            <p>{data?.personalInfo?.email}</p>
            <p>{data?.personalInfo?.phone}</p>
            <a href={data?.personalInfo?.website}>
              {data?.personalInfo?.website}
            </a>
            <a href={data?.personalInfo?.linkedin}>
              {data?.personalInfo?.linkedin}
            </a>
            <a href={data?.personalInfo?.github}>
              {data?.personalInfo?.github}
            </a>
            <p className="tracking-tighter">{data?.personalInfo?.address}</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3
            className="uppercase font-bold tracking-wide mb-2"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {data?.skills?.map((skill) => (
              <span
                key={skill.id}
                className=""
                style={{
                  fontSize: fontSize.text,
                  color: color.secondary,
                  borderColor: color.border,
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
            className="uppercase font-bold tracking-wide mb-2"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Languages
          </h3>
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
        <section className="mt-auto">
          <h3
            className="uppercase font-bold tracking-wide mb-2"
            style={{ color: color.primary, fontSize: fontSize.heading }}
          >
            Education
          </h3>
          <div className="space-y-2">
            {data?.education?.map((edu) => (
              <div key={edu.id}>
                <p
                  className="font-medium"
                  style={{ fontSize: fontSize.text, color: color.primary }}
                >
                  {edu.degree}
                </p>
                <p style={{ fontSize: fontSize.text, color: color.secondary }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: fontSize.text, color: color.secondary }}>
                  {edu.month} {edu.year}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
