export default function Template5({ data, fontColor, fontSize }) {
  return (
    <div
      className="w-[595px] h-[842px] mx-auto bg-white overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* Top Header */}
      <header
        className="w-full px-8 py-6 border-b"
        style={{ borderColor: "#E5E7EB" }}
      >
        <h1
          className="font-extrabold tracking-tight"
          style={{ color: fontColor, fontSize: fontSize.title }}
        >
          {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
        </h1>
        {data?.personalInfo?.title && (
          <p
            className="mt-1"
            style={{ fontSize: fontSize.subHeading, color: "#374151" }}
          >
            {data.personalInfo.title}
          </p>
        )}

        {/* Contact Line */}
        <div
          className="flex flex-wrap mt-3 gap-x-4 gap-y-1 text-sm"
          style={{ fontSize: fontSize.text, color: "#374151" }}
        >
          <span>{data?.personalInfo?.email}</span>
          <span>{data?.personalInfo?.phone}</span>
          <span>{data?.personalInfo?.website}</span>
          <span>{data?.personalInfo?.linkedin}</span>
          <span>{data?.personalInfo?.github}</span>
        </div>
      </header>

      {/* Body */}
      <div className="flex h-[calc(842px-140px)] p-8 gap-6">
        {/* Left column */}
        <aside className="w-[200px] space-y-6">
          {/* SUMMARY */}
          <section>
            <h3
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Profile
            </h3>
            <p
              className="leading-snug"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {data?.summary}
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Skills
            </h3>
            <div
              className="flex flex-col leading-snug"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {data?.skills.map((skill) => (
                <span key={skill.id}>{skill.name}</span>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section>
            <h3
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Tools
            </h3>
            <div
              className="flex flex-col leading-snug"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {data?.tools.map((tool) => (
                <span key={tool.id}>{tool.name}</span>
              ))}
            </div>
          </section>

          {/* LANGUAGES */}
          <section>
            <h3
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Languages
            </h3>
            <ul
              className="leading-snug space-y-1"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              <li>English — Native</li>
              <li>Spanish — Professional</li>
            </ul>
          </section>

          {/* EDUCATION */}
          <section>
            <h3
              className="font-semibold mb-1 uppercase tracking-wide"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Education
            </h3>
            <div
              className="space-y-2"
              style={{ fontSize: fontSize.text, color: "#374151" }}
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
        </aside>

        {/* Right column */}
        <main className="flex-1 space-y-6 overflow-hidden">
          {/* EXPERIENCE */}
          <section>
            <h2
              className="font-semibold mb-2 tracking-wide "
              style={{
                borderColor: "#D1D5DB",
                color: fontColor,
                fontSize: fontSize.heading,
              }}
            >
              Experience
            </h2>
            {data?.experience.map((job) => (
              <div key={job.id} className="mb-4">
                <h3
                  className="font-semibold"
                  style={{ fontSize: fontSize.subHeading, color: fontColor }}
                >
                  {job.position}
                </h3>
                <p
                  className="opacity-80"
                  style={{ fontSize: fontSize.text, color: "#374151" }}
                >
                  {job.company} — {job.startDate} – {job.endDate || "Present"}
                </p>
                <p
                  className="text-sm mb-1"
                  style={{ fontSize: fontSize.text, color: "#374151" }}
                >
                  {job.location}
                </p>
                <ul
                  className="list-disc ml-5"
                  style={{ fontSize: fontSize.text, color: "#374151" }}
                >
                  {job.description}
                </ul>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section>
            <h2
              className="font-semibold mb-2 tracking-wide "
              style={{
                borderColor: "#D1D5DB",
                color: fontColor,
                fontSize: fontSize.heading,
              }}
            >
              Projects
            </h2>
            {data?.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <h4
                  className="font-medium"
                  style={{ fontSize: fontSize.subHeading, color: fontColor }}
                >
                  {project.name}
                </h4>
                <p style={{ fontSize: fontSize.text, color: "#374151" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </section>

          {/* CERTIFICATES */}
          <section>
            <h2
              className="font-semibold mb-2 tracking-wide"
              style={{
                borderColor: "#D1D5DB",
                color: fontColor,
                fontSize: fontSize.heading,
              }}
            >
              Certificates
            </h2>
            <ul
              className="space-y-1"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {data?.certificates.map((cert) => (
                <li key={cert.id}>
                  {cert.title} — {cert.issuer}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
