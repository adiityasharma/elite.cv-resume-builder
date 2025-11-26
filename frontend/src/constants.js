

export const links = [
  {
    name: "Create Resume",
    path: "/resume",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Templates",
    path: "/templates",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
];


export const features = [
  {
    icon: "🚀",
    title: "Effortless Resume Creation",
    description:
      "Create a stunning resume effortlessly with our user-friendly interface.",
  },
  {
    icon: "🧭",
    title: "Step-by-Step Guidance",
    description:
      "Tailor your resume to match your unique style and personality.",
  },
  {
    icon: "📈",
    title: "Real-Time Resume Preview",
    description:
      "See your resume in real-time as you build it, ensuring accuracy.",
  },
  {
    icon: "⚡",
    title: "Tailored Suggestions",
    description:
      "Receive personalized tips to highlight your strengths and match your target job.",
  },
  {
    icon: "💬",
    title: "Instant Formatting",
    description:
      "Automatically adjust spacing, fonts, and alignment for a clean, polished look.",
  },
  {
    icon: "📤",
    title: "Download & Share Easily",
    description:
      "Export your resume in multiple formats and share it instantly with recruiters or job platforms.",
  },
]

export const reviews = [
  {
    name: "Mark Johnson",
    role: "Marketing Manager",
    review: "This builder saved me so much time. The AI suggestions were spot on, and I landed two interviews within a week of applying!",
    image: "https://images.pexels.com/photos/15441821/pexels-photo-15441821.jpeg",
  },
  {
    name: "Emily Park",
    role: "Recent Graduate",
    review: "I'm not a designer, but my resume looks incredible. I loved how easy it was to switch templates and customize everything.",
    image: "https://images.pexels.com/photos/22663781/pexels-photo-22663781.jpeg",
  },
  {
    name: "Sarah Adams",
    role: "Software Engineer",
    review: "The best resume builder I've used. Simple, fast, and the final result was extremely professional. Highly recommend!",
    image: "https://images.pexels.com/photos/34352267/pexels-photo-34352267.jpeg",
  },

]

export const skillsSuggestions = [
  {
    id: 1,
    name: "Multitasking Abilities",
  },
  {
    id: 2,
    name: "Planning",
  },
  {
    id: 3,
    name: "Maintenance & repair",
  },
  {
    id: 4,
    name: "Leadership",
  },
  {
    id: 5,
    name: "Friendly, positive attitude",
  },
  {
    id: 6,
    name: "Conflict resolution",
  },
  {
    id: 7,
    name: "Verbal communication",
  },
  {
    id: 8,
    name: "Cultural awareness",
  },
]

export const otherFieldsForAdditionalDetails = [
  {
    id: 101,
    name: "Personal Details"
  },
  {
    id: 102,
    name: "Websites, Portfolios, Profiles"
  },
  {
    id: 103,
    name: "Certifications"
  },
  {
    id: 104,
    name: "Languages"
  },
  {
    id: 105,
    name: "Accomplishments"
  },
  {
    id: 106,
    name: "Additional Information"
  },
  {
    id: 107,
    name: "Affiliations"
  },
  {
    id: 108,
    name: "Software"
  },
  {
    id: 109,
    name: "References"
  },
  {
    id: 110,
    name: "Volunteering"
  },
  {
    id: 111,
    name: "Interests"
  },
]


export const sampleData = {
  name: "Asha Verma",
  title: "Frontend Engineer",
  location: "Bengaluru, India",
  email: "asha.verma@example.com",
  phone: "+91 98XXXXXXXX",
  website: "ashaverma.dev",
  linkedin: "linkedin.com/in/ashaverma",
  github: "github.com/ashaverma",
  summary:
    "Frontend engineer with 6+ years building accessible, high-performance React applications. Passionate about UX, responsive design and maintainable code.",
  skills: [
    "React", "TypeScript", "Tailwind CSS", "CSS-in-JS", "HTML5", "Accessibility (a11y)",
    "Testing (Jest, RTL)", "Performance Optimization"
  ],
  experience: [
    {
      company: "BrightApps Pvt. Ltd.",
      role: "Senior Frontend Engineer",
      start: "May 2022",
      end: "Present",
      bullets: [
        "Led migration from class components to React hooks + TypeScript.",
        "Improved Lighthouse performance score from 48 -> 92 for primary product.",
        "Mentored 4 engineers; introduced component-driven design with Storybook."
      ],
    },
    {
      company: "PixelWorks",
      role: "Frontend Engineer",
      start: "Jan 2019",
      end: "Apr 2022",
      bullets: [
        "Implemented reusable UI library used across 6 products.",
        "Improved form accessibility and reduced validation errors by 30%."
      ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology",
      degree: "B.Tech, Computer Science",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      name: "Resume Builder",
      desc: "A tiny React app to generate printable resumes, PDF export with print CSS.",
      link: "https://github.com/ashaverma/resume-builder",
    },
  ],
};

export const colors = [
  { name: "black", hex: "#000" },
  { name: "Coral", hex: "#FF6F61" },
  { name: "Sunset Orange", hex: "#FF8C42" },
  { name: "Golden Yellow", hex: "#FFC857" },
  { name: "Soft Pink", hex: "#F7B2BD" },
  { name: "Deep Plum", hex: "#5C2751" },
  { name: "Seafoam Green", hex: "#9FE2BF" },
  { name: "Aqua Blue", hex: "#00B5D8" },
  { name: "Deep Ocean", hex: "#005377" },
  { name: "Sand", hex: "#EED9C4" },
  { name: "Coral Reef", hex: "#FF7660" },
];

export const fontSizes = [
  {
    name: "small",
    title: "20px",
    heading: "13px",
    subHeading: "12px",
    text: "10px",
  },
  {
    name: "medium",
    title: "24px",
    heading: "15px",
    subHeading: "13px",
    text: "11px",
  },
  {
    name: "large",
    title: "28px",
    heading: "18px",
    subHeading: "15px",
    text: "13px",
  }
]


// all fonts
import '@fontsource/fira-mono/400.css';
import '@fontsource/fira-mono/500.css';
import '@fontsource/fira-mono/700.css';
// Supports weights 100-900
import '@fontsource-variable/roboto';
// Supports weights 300-800
import '@fontsource-variable/open-sans';

import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

// Supports weights 100-900
import '@fontsource-variable/montserrat';

export const resumeFonts = [
  {
    id: 1,
    name: "Fira Mono",
    font: "'Fira Mono', monospace",
    weights: ["400", "500", "700"]
  },
  {
    id: 2,
    name: "Roboto",
    font: "'Roboto Variable', sans-serif",
    weights: ["100", "300", "400", "500", "700", "900"]
  },
  {
    id: 3,
    name: "Open Sans",
    font: "'Open Sans', sans-serif",
    weights: ["400", "500", "600", "700", "800"]
  },
  {
    id: 4,
    name: "Lato",
    font: "'Lato', sans-serif",
    weights: ["400", "700", "900"]
  },
  {
    id: 5,
    name: "Poppins",
    font: "'Poppins', sans-serif",
    weights: ["400", "500", "600", "700", "800", "900"]
  },
  {
    id: 6,
    name: "Montserrat",
    font: "'Montserrat', sans-serif",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
];