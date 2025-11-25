export default function Template4({ data }) {
  const color = {
    bg: "#FDFDFD",
    sidebar: "#111827",
    primary: "#111827",
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
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      {/* SIDEBAR */}
      <div
        className="w-[210px] h-full p-6 text-white flex flex-col space-y-6"
        style={{ backgroundColor: color.sidebar }}
      >
        {/* NAME / TITLE */}
        <div>
          <h1 className="text-xl font-bold">
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h1>
          {data?.personalInfo?.title && (
            <p className="text-xs mt-1 opacity-80">{data.personalInfo.title}</p>
          )}
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[10px] uppercase font-semibold tracking-wide opacity-80">
            Contact
          </h3>
          <ul className="text-xs mt-2 space-y-1 opacity-90">
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

        {/* SKILLS */}
        <div>
          <h3 className="text-[10px] uppercase font-semibold tracking-wide opacity-80">
            Skills
          </h3>
          <div className="flex flex-wrap gap-1 mt-2">
            {data?.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-2 py-[2px] text-[9px] rounded"
                style={{
                  color: "white",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <h3 className="text-[10px] uppercase font-semibold tracking-wide opacity-80">
            Languages
          </h3>
          <ul className="text-xs mt-2 space-y-1 opacity-90">
            {data?.languages.map((lang) => (
              <li key={lang.id}>
                {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="mt-auto">
          <h3 className="text-[10px] uppercase font-semibold tracking-wide opacity-80">
            Education
          </h3>
          <div className="mt-2 space-y-3 text-xs opacity-90">
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
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 space-y-10">
        {/* PROFILE */}
        <section>
          <h2
            className="text-sm uppercase font-bold tracking-wide mb-2"
            style={{ color: color.primary }}
          >
            Profile Summary
          </h2>
          <p
            className="text-xs leading-relaxed"
            style={{ color: color.secondary }}
          >
            {data?.summary}
          </p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2
            className="text-sm uppercase font-bold tracking-wide mb-4"
            style={{ color: color.primary }}
          >
            Professional Experience
          </h2>

          <div className="space-y-6">
            {data?.experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between">
                  <div>
                    <h3
                      className="font-semibold text-base"
                      style={{ color: color.primary }}
                    >
                      {job.position}
                    </h3>
                    <p className="text-xs" style={{ color: color.secondary }}>
                      {job.company} — {job.startDate} – {job.endDate || "Present"}
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: color.secondary }}>
                    {job.location}
                  </p>
                </div>

                <ul
                  className="list-disc ml-5 mt-2 text-xs"
                  style={{ color: color.secondary }}
                >
                  {job.description}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2
            className="text-sm uppercase font-bold tracking-wide mb-3"
            style={{ color: color.primary }}
          >
            Projects
          </h2>

          <div className="space-y-3">
            {data?.projects.map((project) => (
              <div key={project.id}>
                <h4
                  className="font-semibold text-sm"
                  style={{ color: color.primary }}
                >
                  {project.name}
                </h4>
                <p className="text-xs" style={{ color: color.secondary }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2
            className="text-sm uppercase font-bold tracking-wide mb-2"
            style={{ color: color.primary }}
          >
            Certifications
          </h2>
          <ul className="text-xs space-y-1" style={{ color: color.secondary }}>
            {data?.certificates?.map((cert) => (
              <li key={cert.id}>
                {cert.title} — {cert.issuer}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
