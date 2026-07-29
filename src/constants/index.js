import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Teknobuilt,
  google,
  oluseed,
  SpeakAfrica,
  carter,
  Livelink,
  silverScreen,
  brainwave,
  finance,
  quiz,
  githubProj,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Technical Support",
    icon: mobile,
  },
  {
    title: "E-commerce Development",
    icon: backend,
  },
  {
    title: "Computer Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Teknobuilt, India",
    icon: Teknobuilt,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Developed and maintained enterprise web applications using React and JavaScript, delivering responsive, scalable interfaces that improved usability and enhanced the overall user experience.",
      "Diagnosed and resolved complex frontend issues by reproducing bugs and identifying root causes, reducing recurring defects and increasing application stability.",
      "Collaborated with testers and technical teams to identify root causes, validate fixes, and deliver smoother, more reliable product experiences.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Oluseed Technologies",
    icon: oluseed,
    iconBg: "#383E56",
    date: "Dec 2024 - Sept 2025",
    points: [
      "Built and maintained dynamic, responsive web applications with React.js, which delivers reliable and user-friendly digital experiences.",
      "Collaborated with technical teams to develop scalable frontend solutions, improving product functionality and overall usability.",
      "Resolved frontend issues through structured debugging.",
    ],
  },
  {
    title: "Technical Support & Customer Success",
    company_name: "Oluseed Technologies",
    icon: oluseed,
    iconBg: "#383E56",
    date: "June 2024 - Dec 2024",
    points: [
      "Explained technical issues clearly to help users understand and resolve product-related problems.",
      "Investigated reported issues, tested solutions, and verified fixes to ensure effective resolution.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Speak Africa",
    icon: SpeakAfrica,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Built responsive web interfaces with React.js, delivering user-friendly experiences across devices.",
      "Collaborated with team members to develop and refine web solutions, improving product functionality and usability.",
      "Debugged and resolved frontend issues, helping deliver more reliable and stable applications.",
    ],
  },

  {
    title: "Web. Developer Core Team Member",
    company_name: "Google Developers Student Club",
    icon: google,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Supported web development workshops and coding sessions, helping members build practical web development skills.",
      "Collaborated with the core team to organize technical learning activities and foster knowledge sharing within the community.",
    ],
  },
];

const projects = [
  {
    name: "Carter",
    description:
      "A premium headless e-commerce storefront that integrates Shopify's Storefront API with a modern Next.js frontend. Implemented features including product search, collections, wishlist, recently viewed products, quick view, shopping cart, and secure checkout while focusing on performance, scalability, and an intuitive user experience.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Shopify",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carter,
    source_code_link: "https://github.com/Aoogunwole/Carter",
    live_link: "https://carter-shop1.vercel.app/",
  },
  {
    name: "Livelink",
    description:
      "A web-based platform with Zoom-like features, enabling seamless video meetings. It offers high-quality video, screen sharing, and real-time collaboration for users.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Livelink,
    source_code_link: "https://github.com/Aoogunwole/livelink",
    live_link: "https://livelink-zeta.vercel.app/",
  },
  {
    name: "SilverScreen",
    description:
      "A cinematic platform to browse movies, purchase tickets, and select showtimes, with a responsive design for a seamless experience across devices.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: silverScreen,
    source_code_link: "https://github.com/Aoogunwole/Cinema-Project",
    live_link: "https://silverscreenn.netlify.app/",
  },
  {
    name: "Github Finder",
    description:
      "A web app that lets users search GitHub profiles, view repositories, contributions, followers, and more through a clean and user-friendly interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "githubapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: githubProj,
    source_code_link: "https://github.com/Aoogunwole/Github-User-Finder",
    live_link: "https://github-userr-finder.netlify.app/",
  },
  {
    name: "Brainwave",
    description:
      "An Artificial Inteligence powered web application featuring a sleek design, offering intelligent insights and interactive features for users.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/Aoogunwole/Brainwave",
    live_link: "https://brainwave-eight-chi.vercel.app/",
  },
  {
    name: "Financial Tracker",
    description:
      "A simple web app for tracking and categorizing expenses, providing visual insights to help users manage their finances effectively.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/Aoogunwole/Financial-Tracker",
    live_link: "https://financial-trackerr.netlify.app/",
  },
];

const resumeLink =
  "https://drive.google.com/file/d/1MPfEKnBk5oaphACRwMbYwHdorFfX8zuL/view?usp=sharing";

const contactInfo = {
  email: "ogunwoleabraham21@gmail.com",
  phone: "+2349061807298",
  location: "",
  tagline:
    "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Reach out via email, phone, or connect with me on social media.",
};

const socialLinks = [
  {
    name: "GitHub",
    handle: "@Aoogunwole",
    link: "https://github.com/Aoogunwole",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "Abraham Ogunwole",
    link: "linkedin.com/in/abraham-ogunwole-58980a220",
    icon: "linkedin",
  },
  {
    name: "X (Twitter)",
    handle: "@aoogunwole",
    link: "https://x.com/aoogunwole",
    icon: "twitter",
  },
];

export { services, technologies, experiences, projects, contactInfo, socialLinks, resumeLink };
