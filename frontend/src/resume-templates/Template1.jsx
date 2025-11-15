import React from "react";

const Template1 = () => {
  return (
    <div
      // ref={ref}
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <article
        className="w-full h-full shadow-xl overflow-hidden"
        style={{ outline: "1px solid #e5e7eb" }}
      >
        {/* Layout */}
        <div className="min-h-[841px] grid grid-cols-[220px_1fr]">
          {/* LEFT SIDEBAR */}
          <aside className=" bg-[#0f172a] text-[#fff] p-6 flex flex-col gap-6">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full  overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  className="w-full h-full object-cover"
                  alt="avatar"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Jane Developer</h1>
                <p className="text-xs ">Frontend Engineer</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide ">
                Contact
              </h2>
              <ul className="mt-2 text-xs  space-y-1">
                <li>jane.dev@example.com</li>
                <li>+1 (555) 123-4567</li>
                <li>jane.dev</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide ">
                Skills
              </h2>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <span className="   px-2 py-1 rounded">React</span>
                <span className="   px-2 py-1 rounded">TypeScript</span>
                <span className="   px-2 py-1 rounded">Tailwind</span>
                <span className="   px-2 py-1 rounded">Node.js</span>
                <span className="   px-2 py-1 rounded">HTML/CSS</span>
                <span className="   px-2 py-1 rounded">Testing</span>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide ">
                Tools
              </h2>
              <ul className="mt-2 text-xs  space-y-1">
                <li>Git · VSCode · Figma</li>
                <li>Jest · Cypress · Storybook</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="mt-auto">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Languages
              </h2>
              <ul className="mt-2 text-xs space-y-1">
                <li>English — Native</li>
                <li>Spanish — Professional</li>
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="p-8 ">
            {/* Header */}
            <header>
              <h3 className="text-2xl font-bold   ">Jane Developer</h3>
              <p className="text-sm    mt-1">
                Frontend Engineer specializing in accessible and
                high-performance web apps.
              </p>
            </header>

            {/* Experience */}
            <section className="mt-6">
              <h4 className="text-sm font-semibold   uppercase tracking-wide">
                Experience
              </h4>

              <div className="mt-3 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-semibold   ">
                      Senior Frontend Engineer
                    </h5>
                    <span className="text-xs   ">2021 — Present</span>
                  </div>
                  <p className="text-sm    mt-1">Acme Corp — Remote</p>
                  <ul className="list-disc ml-5 mt-2 text-sm   space-y-1">
                    <li>Led redesign improving performance by 40%.</li>
                    <li>Created design-system used by 6 teams.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-semibold   ">
                      Frontend Engineer
                    </h5>
                    <span className="text-xs   ">2018 — 2021</span>
                  </div>
                  <p className="text-sm    mt-1">Beta LLC — San Francisco</p>
                  <ul className="list-disc ml-5 mt-2 text-sm   space-y-1">
                    <li>Built dashboards with React and D3.</li>
                    <li>Improved testing, reducing regressions by 30%.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mt-6">
              <h4 className="text-sm font-semibold   uppercase tracking-wide">
                Education
              </h4>

              <div className="mt-3 text-sm  ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">B.S. Computer Science</p>
                    <p className="text-xs ">University of Somewhere</p>
                  </div>
                  <span className="text-xs ">2014 — 2018</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-6">
              <h4 className="text-sm font-semibold   uppercase tracking-wide">
                Projects
              </h4>
              <ul className="mt-2 text-sm   space-y-2">
                <li>
                  <span className="font-medium">DesignSystem</span> — UI library
                  used across apps.
                </li>
                <li>
                  <span className="font-medium">VizTool</span> — realtime
                  analytics dashboard.
                </li>
              </ul>
            </section>

            {/* Interests */}
            <section className="mt-6">
              <h4 className="text-sm font-semibold   uppercase tracking-wide">
                Interests
              </h4>
              <p className="mt-2 text-sm ">
                Accessibility, Performance, Design Systems, Climbing
              </p>
            </section>
          </main>
        </div>
      </article>
    </div>
  );
};

export default Template1;
