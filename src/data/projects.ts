
import {
  Code2,
  Layers3,
  Rocket,
  GitBranch,
  LayoutDashboard,
  Component,
  Database,
  Gauge,
} from "lucide-react";

export const DESIGNATION = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Designer",
];

export const SKILLS = [
  "JavaScript",
  "React JS",
  "TypeScript",
  "REST APIs",
  "Redux",
  "HTML",
  "CSS",
  "MUI",
  "TailwindCSS",
  "Bootstrap",
  "Git",
  // "Node.js",
  // "Express",
  // "MongoDB",
];

export const CORE_TECHNOLOGIES = [
  "React",
  "TypeScript",
  "JavaScript",
  "Redux",
  "REST APIs",
  "Tailwind CSS",
  "Material UI",
  "Git",
];

export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];


export const CODE_LINES = [
  "const developer = {",
  "  experience: '5+ years',",
  "  focus: 'Frontend Engineering',",
  "  stack: ['React', 'TypeScript'],",
  "};",
];

export const EXPERIENCE = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Developed and maintained web applications using React and Redux.",
  },
  {
    title: "Web Developer Intern",
    company: "WebWorks",
    duration: "Jun 2021 - Dec 2021",
    description:
      "Assisted in building responsive websites and improving UI/UX.",
  },
];

export const EDUCATION = [
  {
    degree: "BCA in Computer Science",
    institution: "MJPRU ",
    duration: "2015 - 2018",
  },
  {
    degree: "Intermediate in Science",
    institution: "CAS Inter College ",
    duration: "2014 - 2015",
  },
  {
    degree: "High School",
    institution: "CAS Inter College ",
    duration: "2013 - 2014",
  },
];

export const STATS = [
  {
    value: "5+",
    label: "Years Experience",
    description: "Building production frontends",
    icon: Code2,
  },
  {
    value: "20+",
    label: "Features Shipped",
    description: "Across real-world products",
    icon: Layers3,
  },
  {
    value: "React",
    label: "Primary Expertise",
    description: "Scalable component architecture",
    icon: Rocket,
  },
  {
    value: "TypeScript",
    label: "Development Stack",
    description: "Reliable and maintainable code",
    icon: GitBranch,
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Scalable React Applications",
    description:
      "Component-driven applications designed to stay maintainable as products and teams grow.",
    tags: ["React", "TypeScript", "Architecture"],
    icon: Component,
  },
  {
    number: "02",
    title: "Complex Dashboards",
    description:
      "Data-heavy interfaces with forms, filters, tables, reports, and role-based workflows.",
    tags: ["Redux", "REST APIs", "MUI"],
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "Reusable UI Systems",
    description:
      "Consistent, reusable components that reduce duplication and make product development faster.",
    tags: ["Components", "Design Systems", "CSS"],
    icon: Database,
  },
  {
    number: "04",
    title: "Performance-Focused Frontends",
    description:
      "Responsive experiences optimized for usability, rendering performance, and real-world usage.",
    tags: ["Performance", "UX", "Responsive"],
    icon: Gauge,
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     description:
//       "A full-stack e-commerce platform with product pages, cart, and secure checkout.",
//     tech: ["React", "TypeScript", "MongoDB", "Node.js"],
//     img: "./images/shopEasy.png",
//     demo: "https://timely-mooncake-5c977c.netlify.app/",
//     github: "https://github.com/RahulsHubb/apnaShop",
//   },
//   {
//     title: "LMS Platform",
//     description:
//       "A learning management system for teachers and students with video, quizzes, and reports.",
//     tech: ["React", "Redux", "TailwindCSS", "Node.js"],
//     img: "./images/lms.png",
//     demo: "https://pmponline.co.in/dashboard",
//     github: "",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A modern, responsive personal portfolio built with React + Tailwind.",
//     tech: ["React", "TailwindCSS", "TypeScript"],
//     img: "/images/portfolio.png",
//     demo: "https://rahuldewalportfolio.netlify.app/",
//     github: "https://github.com/RahulsHubb/portfolio",
//   },
//   {
//     title: "Dgital Training Platform",
//     description:
//       "A platform for online training with video, quizzes, and reports.",
//     tech: ["React", "Recharts", "TypeScript", "MUI", "GIT"],
//     img: "/images/viliyo.png",
//     demo: "https://viliyo.com/",
//     github: "",
//   },
// ];

export  const PROJECTS = [
  {
    title: "PMP LMS",
    category: "Learning Management Platform",
    description:
      "A large-scale learning management platform with admin workflows, resource management, question paper generation, reporting, and role-based experiences.",
    image: "/projects/lms.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "MUI",
      "REST APIs",
    ],
    highlights: [
      "Complex admin workflows",
      "Dynamic question paper generation",
      "Report generation and exports",
    ],
    featured: true,
    liveUrl: "https://pmponline.co.in",
    githubUrl: "#",
  },
  {
    title: "HeartWise",
    category: "Education Platform",
    description:
      "A modern educational platform focused on delivering structured learning experiences through a responsive and accessible interface.",
    image: "/projects/heartWise.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
    ],
    highlights: [
      "Responsive education experience",
      "Reusable UI sections",
      "Performance-focused frontend",
    ],
    featured: false,
    liveUrl: "https://weareheartwise.in/",
    githubUrl: "#",
  },
  {
    title: "Question Paper Generator",
    category: "Product Feature",
    description:
      "A dynamic question paper generation system supporting multiple question types, configurable templates, validation, and document exports.",
    image: "/projects/qpg.webp",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "jsPDF",
    ],
    highlights: [
      "Dynamic form architecture",
      "Multiple question types",
      "PDF and Word exports",
    ],
    featured: false,
    liveUrl: "https://pmponline.co.in",
    githubUrl: "#",
  },
];


export const SOCIAL_MEDIA = Object.freeze({
  FACEBOOK : "https://www.facebook.com/RahulDewal03/",
  INSTAGRAM : "https://www.instagram.com/real_rahul_dewal/",
  X: "https://x.com/rahuldewal333",
  LINKED_IN: "https://in.linkedin.com/in/rahuldewal33",
  GIT: "https://github.com/rahulshubb",
  MAIL: "dewalsuccess@gmail.com"
})
