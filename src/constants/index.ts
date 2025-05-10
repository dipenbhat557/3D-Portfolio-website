import {
  backend,
  whatsapp,
  sajilodev,
  geoland,
  deukhuri,
  sharad,
  shivaraj,
  shivaoli,
  tekpun,
  payment,
  gharsanchar,
  sajilodevlogo,
  frontend,
  cloud,
  hyperce,
  xDevs,
  casebase,
} from "../assets";

// Import React icons
import { 
  SiSpring, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiFirebase,
  SiWordpress,
  SiExpress,
} from 'react-icons/si';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "conkkktact",
    title: "Conklkltact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description: "Crafting responsive and engaging user interfaces using React, Next.js, and Tailwind CSS."
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:"Building efficient and secure server-side applications with Spring Boot, integrating databases like MySQL and MongoDB."
  },
  {
    title: "Cloud Services",
    icon: cloud,
    description:"Leveraging cloud platforms for deploying and managing applications, ensuring high availability and scalability."
  },
];

const technologies = [
  {
    name: "Spring Boot",
    icon: SiSpring,
    color: "#6DB33F"
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    color: "#ffff"
  },
  {
    name: "React JS",
    icon: SiReact,
    color: "#61DAFB"
  },
  {
    name: "Express JS",
    icon: SiExpress,
    color: "#339933"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED"
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5"
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    color: "#D24939"
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28"
  },
  {
    name: "WordPress CMS",
    icon: SiWordpress,
    color: "#21759B"
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Casebase",
    icon: casebase,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Architected and implemented scalable backend solutions using Node.js and Express",
      "Developed and maintained RESTful APIs with MongoDB integration",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment",
      "Mentored junior developers and conducted code reviews to ensure code quality"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "100xDevs",
    icon: xDevs,
    iconBg: "#383E56",
    date: "October 2024 - February 2025",
    points: [
      "Built full-stack applications using React, Node.js, and PostgreSQL",
      "Implemented authentication and authorization using JWT and OAuth2",
      "Optimized database queries and improved application performance by 40%",
      "Collaborated with cross-functional teams to deliver features on schedule"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hyperce",
    icon: hyperce,
    iconBg: "#383E56",
    date: "June 2024 - November 2024",
    points: [
      "Developed microservices architecture using Docker and Kubernetes",
      "Implemented real-time features using WebSocket and Socket.io",
      "Created responsive UIs with React and Material-UI",
      "Set up monitoring and logging using ELK stack"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SajiloDev",
    icon: sajilodevlogo,
    iconBg: "#E6DEDD",
    date: "November 2023 - June 2024",
    points: [
      "Developed and deployed multiple production-ready projects, including the official website of SajiloDev",
      "Designed and implemented RESTful APIs using Spring Boot for backend services",
      "Built responsive user interfaces with React TypeScript and Tailwind CSS",
      "Integrated third-party services and APIs to enhance application functionality",
      "Promoted open-source initiatives through advocacy and educational events"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Working with Dipendra was a game-changer for my online presence. They took the time to understand my goals and delivered a website that not only looks fantastic but also performs exceptionally well. Their expertise and dedication are unmatched!",
    name: "Sharad Kumar Sharma",
    designation: "Managing Director",
    company: "Geoland Travels",
    image: sharad,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dipendra proved me wrong. The attention to detail and creativity was impressive, resulting in a website that exceeded our expectations.",
    name: "Shiv Raj Khanal",
    designation: "Founder",
    company: "Lamahi Chamber of Commerce",
    image: shivaraj,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dipendra does. He consistently went above and beyond to ensure our website met our needs and provided valuable insights throughout the process.",
    name: "Shiva Oli",
    designation: "Campus Chief",
    company: "Deukhuri Multiple Campus",
    image: shivaoli,
  },
  {
    testimonial:
      "After Dipendra optimized our website, our traffic increased by 50%. We can't thank them enough! His expertise in SEO and user experience design significantly improved our online visibility and user engagement.",
    name: "Tek Bahadhur Pun",
    designation: "CTO",
    company: "GharSanchar",
    image: tekpun,
  },
];
const projects = [
  {
    name: "SajiloDev",
    description:
      "A web platform built with React TypeScript and Firebase for ordering technical services such as website creation, domain checks, hosting, and maintenance. It provides a user-friendly interface for managing these services efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: sajilodev,
    source_code_link: "https://github.com/dipenbhat557/SajiloDev",
    website_link: "https://sajilodev.com",
  },
  {
    name: "Payment Management System",
    description:
      "A Next.js and TypeScript-based platform that connects multiple bank accounts, displays real-time transactions, and allows fund transfers. It integrates with Plaid for account linking and Dwolla for transfers, featuring secure authentication and responsive design for ease of use.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Plaid",
        color: "green-text-gradient",
      },
      {
        name: "Dwolla",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "Sentry",
        color: "blue-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/dipenbhat557/payment-management",
  },
  {
    name: "Geoland Travels",
    description:
      "A travel platform with admin and user panels, built with React.js and TypeScript, and powered by Firebase for the backend. It offers inbound and outbound tours, ticketing services, and pricing details, all in one convenient location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: geoland,
    source_code_link: "https://github.com/dipenbhat557/Geoland-Travels",
    website_link: "https://geolandtravels.com",
  },
  {
    name: "Deukhuri Multiple Campus",
    description:
      "A learning management system with admin and user panels, built with React.js and TypeScript, and powered by Spring Boot for the backend with MySQL for the database. It offers insights into various notices, publications, college teams, and also handles the admission process effectively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: deukhuri,
    source_code_link: "https://github.com/dipenbhat557/Deukhuri-College",
    website_link: "https://deukhurimultiplecampus.edu.np",
  },
  {
    name: "Ghar Sanchar",
    description:
      "A news website in Nepal, featuring a simple UI design for news in Nepali, providing readers with the latest updates and information in an easy-to-navigate format.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: gharsanchar,
    website_link: "https://gharsanchar.com",
  },
  {
    name: "WhatsApp Clone",
    description:
      "A real-time messaging application that replicates the functionality of WhatsApp, allowing users to send text messages, images, videos, and documents to their contacts seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/dipenbhat557/Whatsapp-clone",
  }
];


export { services, technologies, experiences, testimonials, projects };
