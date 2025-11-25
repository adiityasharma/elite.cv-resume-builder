export default function Template4({ data }) {
  return (
    <div
      className="w-[595px] h-[842px] mx-auto my-8 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Outer container with subtle paper-like background */}
      <div
        className="w-full h-full p-6 flex"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Left column (sidebar) */}
        <aside
          className="w-[180px] pr-6 border-r"
          style={{ borderColor: "#E6E6E6" }}
        >
          <div className="flex flex-col items-start">
            {/* Contact */}
            <h3
              className="text-[13px] font-semibold mb-2"
              style={{ color: "#0F1724" }}
            >
              Contact
            </h3>
            <p
              className="text-[11px] leading-relaxed mb-2"
              style={{ color: "#374151" }}
            >
              John Doe
              <br />
              johndoe@example.com
              <br />
              +1 (555) 555-5555
              <br />
              City, Country
            </p>

            <div
              className="w-full h-[1px] my-3"
              style={{ backgroundColor: "#EEF2F6" }}
            />

            {/* Skills */}
            <h3
              className="text-[13px] font-semibold mb-2"
              style={{ color: "#0F1724" }}
            >
              Skills
            </h3>
            <ul
              className="text-[11px] leading-snug mb-3"
              style={{ color: "#374151" }}
            >
              <li className="mb-1">React</li>
              <li className="mb-1">TypeScript</li>
              <li className="mb-1">Tailwind CSS</li>
              <li className="mb-1">Node.js</li>
              <li className="mb-1">REST / GraphQL</li>
            </ul>

            <div
              className="w-full h-[1px] my-3"
              style={{ backgroundColor: "#EEF2F6" }}
            />

            {/* Languages */}
            <h3
              className="text-[13px] font-semibold mb-2"
              style={{ color: "#0F1724" }}
            >
              Languages
            </h3>
            <ul
              className="text-[11px] leading-snug"
              style={{ color: "#374151" }}
            >
              <li className="mb-1">English — Native</li>
              <li className="mb-1">Spanish — Professional</li>
            </ul>
          </div>
        </aside>

        {/* Right column (main content) */}
        <main className="flex-1 pl-6">
          {/* Header: name, title, summary */}
          <header className="mb-4">
            <div className="flex items-baseline justify-between">
              <div>
                <h1
                  className="text-[26px] font-bold leading-tight"
                  style={{ color: "#0B1220" }}
                >
                  John Doe
                </h1>
                <p className="text-[14px] mt-1" style={{ color: "#1F2937" }}>
                  Senior Frontend Engineer
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px]" style={{ color: "#6B7280" }}>
                  Portfolio: johndoe.dev
                </p>
                <p className="text-[11px]" style={{ color: "#6B7280" }}>
                  LinkedIn: linkedin.com/in/johndoe
                </p>
              </div>
            </div>

            <p
              className="mt-4 text-[12px] leading-relaxed"
              style={{ color: "#374151" }}
            >
              Product-minded frontend engineer with 8+ years building
              accessible, performant web applications. Expert in React,
              component-driven design systems, and turning product specs into
              delightful user experiences.
            </p>
          </header>

          <section className="mb-4">
            <h2
              className="text-[15px] font-semibold mb-3"
              style={{ color: "#0B1220" }}
            >
              Experience
            </h2>

            <article className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className="text-[13px] font-medium"
                    style={{ color: "#0B1220" }}
                  >
                    Senior Frontend Engineer
                  </h3>
                  <p className="text-[11px]" style={{ color: "#6B7280" }}>
                    Acme Corp — Jan 2021 — Present
                  </p>
                </div>
                <div className="text-[11px]" style={{ color: "#6B7280" }}>
                  Remote
                </div>
              </div>
              <ul
                className="list-disc ml-5 mt-2 text-[12px]"
                style={{ color: "#374151" }}
              >
                <li className="mb-1">
                  Led a team of 4 engineers to build a design system of reusable
                  React components, reducing development time by 30%.
                </li>
                <li className="mb-1">
                  Improved first contentful paint by 40% through code-splitting
                  and image optimizations.
                </li>
              </ul>
            </article>

            <article className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className="text-[13px] font-medium"
                    style={{ color: "#0B1220" }}
                  >
                    Frontend Engineer
                  </h3>
                  <p className="text-[11px]" style={{ color: "#6B7280" }}>
                    Beta Labs — May 2017 — Dec 2020
                  </p>
                </div>
                <div className="text-[11px]" style={{ color: "#6B7280" }}>
                  New York, NY
                </div>
              </div>
              <ul
                className="list-disc ml-5 mt-2 text-[12px]"
                style={{ color: "#374151" }}
              >
                <li className="mb-1">
                  Built multiple high-traffic features in a React + Redux app,
                  including a real-time dashboard used by 100k+ monthly users.
                </li>
                <li className="mb-1">
                  Introduced automated visual regression testing and component
                  documentation.
                </li>
              </ul>
            </article>
          </section>

          <section className="mb-4">
            <h2
              className="text-[15px] font-semibold mb-3"
              style={{ color: "#0B1220" }}
            >
              Education
            </h2>
            <div className="text-[12px]" style={{ color: "#374151" }}>
              <div className="flex justify-between">
                <div>
                  <strong>B.S. Computer Science</strong>
                  <div className="text-[11px]" style={{ color: "#6B7280" }}>
                    State University — 2013 — 2017
                  </div>
                </div>
                <div className="text-[11px]" style={{ color: "#6B7280" }}>
                  GPA: 3.8
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-[15px] font-semibold mb-3"
              style={{ color: "#0B1220" }}
            >
              Projects
            </h2>

            <div className="mb-3">
              <h3
                className="text-[13px] font-medium"
                style={{ color: "#0B1220" }}
              >
                Component Library
              </h3>
              <p className="text-[12px]" style={{ color: "#374151" }}>
                Designed and maintained a TypeScript React component library
                with Storybook and automated releases.
              </p>
            </div>

            <div>
              <h3
                className="text-[13px] font-medium"
                style={{ color: "#0B1220" }}
              >
                Analytics Dashboard
              </h3>
              <p className="text-[12px]" style={{ color: "#374151" }}>
                Built a customizable analytics dashboard with charts, real-time
                data, and role-based access.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
