export default function Template2({ data, fontColor, fontSize }) {
  const color = {
    bg: "#FFFFFF",
    sidebar: "#F4F6F8",
    primary: fontColor,
    secondary: "#4B5563",
    accent: fontColor,
    border: "#E5E7EB",
    chip: "#F3F4F6",
  };

  console.log(fontSize);

  return (
    <div
      className="w-[595px] h-[842px] mx-auto p-0"
      style={{
        backgroundColor: color.bg,
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
          <h1
            style={{ fontSize: fontSize.title }}
            className="font-bold tracking-tight"
          >
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h1>
          {/* <p className="text-sm opacity-90">Product Designer</p> */}
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-[180px_1fr] h-[calc(842px-80px)]">
        {/* LEFT SIDEBAR */}
        <div
          className="p-3 flex flex-col gap-2"
          style={{ backgroundColor: color.sidebar }}
        >
          {/* Profile Summary */}
          <section className="">
            <h3
              className="uppercase font-bold mb-2 tracking-wide"
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
              className=" uppercase font-bold pb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Contact
            </h3>
            <div
              className="truncate flex flex-col leading-snug pb-2"
              style={{ color: color.secondary, fontSize: fontSize.text }}
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
              <p className="tracking-tighter">{data?.personalInfo?.address}</p>
            </div>
          </section>

          {/* Skills */}
          <section className="">
            <h3
              className=" uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {data?.skills.length > 0 &&
                data.skills.map((skill) => (
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

          {/* Languages */}
          <section className="">
            <h3
              className="text-xs uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Languages
            </h3>
            <ul
              className="text-xs"
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
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
              className=" uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Education
            </h3>
            <div className="leading-tight" style={{ color: color.secondary }}>
              {data?.education.map((edu) => (
                <div key={edu.id}>
                  <p
                    className="font-medium"
                    style={{
                      color: color.primary,
                      fontSize: fontSize.text,
                    }}
                  >
                    {edu.degree}
                  </p>
                  <div style={{ fontSize: fontSize.text }}>
                    <p>{edu.school}</p>
                    <span>
                      {edu.month} {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-3 flex flex-col gap-2">
          {/* Section: Experience */}
          <section>
            <h2
              className="text-sm uppercase font-bold mb-2 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Experience
            </h2>

            <div className="space-y-2">
              {data?.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3
                        className="font-semibold "
                        style={{
                          color: color.primary,
                          fontSize: fontSize.subHeading,
                        }}
                      >
                        {exp.position}
                      </h3>
                      <p
                        className=""
                        style={{
                          color: color.secondary,
                          fontSize: fontSize.text,
                        }}
                      >
                        {exp.company} — {exp.startDate} –{" "}
                        {exp.endDate || "Present"}
                      </p>
                    </div>
                    <p
                      className=""
                      style={{
                        color: color.secondary,
                        fontSize: fontSize.text,
                      }}
                    >
                      {exp.location}
                    </p>
                  </div>

                  <ul
                    className=" ml-5 mt-1 leading-snug"
                    style={{ color: color.secondary, fontSize: fontSize.text }}
                  >
                    {exp.description}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div
            className=" mt-4"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Section: Projects */}
          <section>
            <h2
              className="uppercase font-bold mb-1 tracking-wide"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              Projects
            </h2>

            <div className="flex flex-col gap-1">
              {data?.projects.map((project) => (
                <div key={project.id}>
                  <h4
                    className="font-semibold text-sm"
                    style={{
                      color: color.primary,
                      fontSize: fontSize.subHeading,
                    }}
                  >
                    <a target="_blank" href={project.link}>
                      {project.name}
                    </a>
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

          {/* Divider */}
          <div
            className="mt-2"
            style={{ height: 1, backgroundColor: color.border }}
          />

          {/* Certifications */}
          <section className="">
            <h2
              className=" uppercase font-bold tracking-wide mb-1"
              style={{ color: color.primary, fontSize: fontSize.heading }}
            >
              certificates
            </h2>
            <div
              className=""
              style={{ color: color.secondary, fontSize: fontSize.text }}
            >
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
