export default function Template4({ data, fontColor, fontSize }) {
  return (
    <div
      className="w-[595px] h-[842px] mx-auto  overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Outer container with subtle paper-like background */}
      <div
        className="w-full h-full p-6 flex"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Left column (sidebar) */}
        <aside
          className="w-[180px] pr-3 border-r"
          style={{ borderColor: "#E6E6E6" }}
        >
          <div className="flex flex-col items-start overflow-hidden">
            {/* Contact */}
            <h3
              className=" font-semibold mb-2"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Contact
            </h3>
            <ul
              style={{ fontSize: fontSize.text }}
              className="mt-2 pb-2 truncate space-y-1 opacity-90"
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

            <div
              className="w-full h-[1px] mt-2"
              style={{ backgroundColor: "#EEF2F6" }}
            />

            {/* Skills */}
            <div>
              <h3
                className="font-semibold mb-2"
                style={{ color: fontColor, fontSize: fontSize.heading }}
              >
                Skills
              </h3>
              <div
                style={{ fontSize: fontSize.text }}
                className="flex flex-wrap "
              >
                {data?.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="pr-2"
                    style={{
                      color: "#374151",
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="font-semibold my-2"
                style={{ color: fontColor, fontSize: fontSize.heading }}
              >
                Tools
              </h3>
              <div
                style={{ fontSize: fontSize.text }}
                className="flex flex-wrap "
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
            </div>

            <div
              className="w-full h-[1px] mt-2"
              style={{ backgroundColor: "#EEF2F6" }}
            />

            {/* Languages */}
            <h3
              className="font-semibold mb-2"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Languages
            </h3>
            <ul
              className=" leading-snug"
              style={{ color: "#374151", fontSize: fontSize.text }}
            >
              <li className="">English — Native</li>
              <li className="">Spanish — Professional</li>
            </ul>

            <section className="mt-4">
              <h2
                className="font-semibold mb-1"
                style={{ color: fontColor, fontSize: fontSize.heading }}
              >
                Education
              </h2>
              <div
                style={{ fontSize: fontSize.text }}
                className="space-y-1 opacity-90"
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
          </div>
        </aside>

        {/* Right column (main content) */}
        <main className="flex-1 pl-3">
          {/* Header: name, title, summary */}
          <header className="mb-4">
            <div className="flex flex-col items-baseline justify-between">
              <div>
                <h1
                  className="text-[26px] font-bold leading-tight"
                  style={{ color: fontColor, fontSize: fontSize.title }}
                >
                  {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
                </h1>
                {data?.personalInfo?.title && (
                  <p
                    style={{ fontSize: fontSize.text }}
                    className=" mt-1 opacity-80"
                  >
                    {data.personalInfo.title}
                  </p>
                )}
              </div>
            </div>

            <p
              className="mt-2 leading-snug"
              style={{ color: "#374151", fontSize: fontSize.text }}
            >
              {data?.summary}
            </p>
          </header>

          <section className="">
            <h2
              className="text-[15px] font-semibold mb-3"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Experience
            </h2>

            <article className="mb-2">
              <div className="space-y-3">
                {data?.experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between">
                      <div>
                        <h3
                          className="font-medium"
                          style={{
                            color: fontColor,
                            fontSize: fontSize.subHeading,
                          }}
                        >
                          {job.position}
                        </h3>
                        <p
                          className="text-xs"
                          style={{
                            color: "#374151",
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
                          color: "#374151",
                          fontSize: fontSize.text,
                        }}
                      >
                        {job.location}
                      </p>
                    </div>

                    <ul
                      className="ml-5 mt-2 "
                      style={{
                        color: "#374151",
                        fontSize: fontSize.text,
                      }}
                    >
                      {job.description}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section>
            <h2
              className=" font-bold tracking-wide mb-2"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Projects
            </h2>

            <div className="space-y-2">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-medium"
                    style={{
                      color: fontColor,
                      fontSize: fontSize.subHeading,
                    }}
                  >
                    {project.name}
                  </h4>
                  <p
                    className=""
                    style={{ color: "", fontSize: fontSize.text }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="font-bold tracking-wide my-2"
              style={{ color: fontColor, fontSize: fontSize.heading }}
            >
              Certificates
            </h2>
            <ul
              className=" space-y-1"
              style={{ color: "", fontSize: fontSize.text }}
            >
              {data?.certificates?.map((cert) => (
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
