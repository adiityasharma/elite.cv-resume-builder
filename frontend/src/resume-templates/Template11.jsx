export default function Template11({ data, fontColor, fontSize }) {
  return (
    <div
      className="w-[595px] h-[842px] mx-auto bg-white p-5 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* NAME + TITLE */}
      <header className="border-b pb-4">
        <h1
          className="font-bold tracking-tight"
          style={{ fontSize: fontSize.title, color: fontColor }}
        >
          {data?.personalInfo?.firstName}
          {data?.personalInfo?.lastName}
        </h1>

        {data?.personalInfo?.title && (
          <p
            className="mt-1"
            style={{ fontSize: fontSize.subHeading, color: "#374151" }}
          >
            {data.personalInfo.title}
          </p>
        )}

        {/* CONTACT */}
        <div
          className="flex flex-wrap mt-1 gap-x-4 gap-y-1"
          style={{ fontSize: fontSize.text, color: "#374151" }}
        >
          <span>{data?.personalInfo?.email}</span>
          <span>{data?.personalInfo?.phone}</span>
          <span>{data?.personalInfo?.website}</span>
          <span>{data?.personalInfo?.linkedin}</span>
          <span>{data?.personalInfo?.github}</span>
          <span>{data?.personalInfo?.address}</span>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mt-2">
        <h2
          className="font-semibold mb-1 tracking-wide"
          style={{ fontSize: fontSize.heading, color: fontColor }}
        >
          Summary
        </h2>
        <p
          className="leading-snug"
          style={{ fontSize: fontSize.text, color: "#374151" }}
        >
          {data?.summary}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-1">
        <h2
          className="font-semibold tracking-wide"
          style={{
            fontSize: fontSize.heading,
            color: fontColor,
          }}
        >
          Experience
        </h2>

        {data?.experience.map((job) => (
          <div key={job.id} className="mb-1">
            <div className="flex justify-between">
              <h3
                className="font-medium"
                style={{ fontSize: fontSize.subHeading, color: fontColor }}
              >
                {job.position}
              </h3>
              <span style={{ fontSize: fontSize.text, color: "#374151" }}>
                {job.location}
              </span>
            </div>

            <p
              style={{ fontSize: fontSize.text, color: "#374151" }}
              className="opacity-90"
            >
              {job.company} — {job.startDate} – {job.endDate || "Present"}
            </p>

            <p
              className="ml-4 mt-1 space-y-1 leading-snug"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {job.description}
            </p>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="mt-2">
        <h2
          className="font-semibold mb-1 tracking-wide "
          style={{
            fontSize: fontSize.heading,
            color: fontColor,
            borderColor: "#E5E7EB",
          }}
        >
          Projects
        </h2>

        {data?.projects.map((project) => (
          <div key={project.id} className="mb-1">
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

      {/* EDUCATION */}
      <section className="mt-2">
        <h2
          className="font-semibold mb-1 tracking-wide"
          style={{
            fontSize: fontSize.heading,
            color: fontColor,
            borderColor: "#E5E7EB",
          }}
        >
          Education
        </h2>

        {data?.education.map((edu) => (
          <div key={edu.id} className="mb-1">
            <p
              className="font-medium"
              style={{ fontSize: fontSize.subHeading, color: fontColor }}
            >
              {edu.degree}
            </p>
            <p style={{ fontSize: fontSize.text, color: "#374151" }}>
              {edu.school}
            </p>
            <p
              className="opacity-80"
              style={{ fontSize: fontSize.text, color: "#374151" }}
            >
              {edu.month} {edu.year}
            </p>
          </div>
        ))}
      </section>

      {/* SKILLS + TOOLS + LANGUAGES + CERTIFICATES */}
      <section className="mt-2 grid grid-cols-3">
        {/* SKILLS */}
        <div>
          <h3
            className="font-semibold mb-1"
            style={{ fontSize: fontSize.heading, color: fontColor }}
          >
            Skills
          </h3>
          <ul
            className="ml-0 leading-snug"
            style={{ fontSize: fontSize.text, color: "#374151" }}
          >
            {data?.skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <h3
            className="font-semibold mb-1"
            style={{ fontSize: fontSize.heading, color: fontColor }}
          >
            Tools
          </h3>
          <ul
            className="leading-snug"
            style={{ fontSize: fontSize.text, color: "#374151" }}
          >
            {data?.tools.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>

        {/* LANGUAGES */}
        <div>
          <h3
            className="font-semibold mb-1"
            style={{ fontSize: fontSize.heading, color: fontColor }}
          >
            Languages
          </h3>
          <ul
            className="space-y-1"
            style={{ fontSize: fontSize.text, color: "#374151" }}
          >
            {data?.languages?.map((lang) => (
              <li key={lang.id}>
                {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* CERTIFICATES */}
      <div>
        <h3
          className="font-semibold mb-1 mt-2"
          style={{ fontSize: fontSize.heading, color: fontColor }}
        >
          Certificates
        </h3>
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
      </div>
    </div>
  );
}
