import { forwardRef } from "react";

const Resume = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-3xl mx-auto p-6 bg-white text-black leading-relaxed print-safe"
    >
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">Aarav Sharma</h1>
        <p className="text-lg font-medium mt-1">Senior Frontend Engineer</p>

        <div className="mt-2 text-sm">
          <p>Email: aarav.sharma@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Bengaluru, India</p>
          <p>LinkedIn: linkedin.com/in/aarav-sharma</p>
          <p>Portfolio: aaravsharma.dev</p>
        </div>
      </header>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">
          Professional Summary
        </h2>
        <p className="text-sm mt-2">
          Senior Frontend Engineer with 7+ years of experience building
          high-performance, accessible, and scalable web applications.
          Specialized in React, TypeScript, and modern UI engineering. Strong
          track record of improving performance, leading frontend architecture,
          and collaborating with cross-functional teams.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">Work Experience</h2>

        <div className="mt-3">
          <h3 className="font-semibold">
            Senior Frontend Engineer — TechNova Solutions
          </h3>
          <p className="text-sm text-gray-700">May 2021 – Present</p>
          <ul className="list-disc ml-6 text-sm mt-1 space-y-1">
            <li>
              Led development of a design system used across 10+ applications.
            </li>
            <li>Improved Lighthouse performance score from 52 to 94.</li>
            <li>
              Migrated legacy frontend to React + TypeScript, reducing bugs by
              30%.
            </li>
            <li>Implemented WCAG-compliant accessibility improvements.</li>
            <li>Mentored 6 junior engineers and established best practices.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">
            Frontend Engineer — BrightApps Technologies
          </h3>
          <p className="text-sm text-gray-700">Feb 2018 – Apr 2021</p>
          <ul className="list-disc ml-6 text-sm mt-1 space-y-1">
            <li>
              Developed reusable React components reducing development time by
              25%.
            </li>
            <li>Optimized mobile UI performance, reducing load time by 40%.</li>
            <li>Collaborated on features used by over 1M+ users.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">
            Web Developer Intern — SoftMatrix InfoTech
          </h3>
          <p className="text-sm text-gray-700">Jun 2017 – Jan 2018</p>
          <ul className="list-disc ml-6 text-sm mt-1 space-y-1">
            <li>Built internal dashboards with HTML, CSS, and JavaScript.</li>
            <li>
              Automated reporting workflows reducing manual effort by 60%.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">Skills</h2>
        <p className="text-sm mt-2">
          React, Next.js, JavaScript (ES6+), TypeScript, Redux, Zustand,
          Tailwind CSS, CSS Modules, Responsive Design, Accessibility (WCAG),
          Node.js, REST APIs, GraphQL, Webpack, Vite, Git, Jest, React Testing
          Library, Performance Optimization
        </p>
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">Projects</h2>

        <div className="mt-2">
          <p className="font-semibold text-sm">SmartResume Builder</p>
          <p className="text-sm">
            Built a React + Tailwind app for generating resumes with
            export-to-PDF.
          </p>
        </div>

        <div className="mt-2">
          <p className="font-semibold text-sm">
            TaskFlow – Team Management Tool
          </p>
          <p className="text-sm">
            Developed a collaborative Kanban board with real-time updates and
            optimized drag-and-drop.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">Education</h2>
        <p className="text-sm mt-2">
          B.Tech in Computer Science — Indian Institute of Technology (IIT)
          Delhi
          <br />
          2013 – 2017
        </p>
      </section>

      {/* Certifications */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg border-b pb-1">Certifications</h2>
        <p className="text-sm mt-2">
          Meta Frontend Developer • AWS Cloud Practitioner • Google UX
          Certification
        </p>
      </section>
    </div>
  );
});

export default Resume;
