import {
  backend,
  web,
  javascript,
  reactjs,
  tailwind,
  git,
  docker,
  springBoot,
  mysql,
  postgresql,
  gdsc,
  techBlog,
  contactManager,
  whatsapp,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Services",
    icon: web,
  },
];

const technologies = [
  {
    name: "Spring Boot",
    icon: springBoot,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "jenkins",
    icon: jenkins
  },
  {
    name: "firebase",
    icon: firebase
  },
  {
    name: "kafka",
    icon: kafka
  },
  {
    name: "wordpress cms",
    icon: wordpress
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "SajiloDev",
    icon: sajilodev,
    iconBg: "#E6DEDD",
    date: "November 2023 - June 2024",
    points: [
      "Developerd and deployed multiple production ready projects including official website of sajilodev",
      "Implementing best practices for software development and version control.",
      "Troubleshooting and resolving technical issues in collaboration with the community.",
      "Promoting open-source initiatives through advocacy and educational events.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Geoland Tours and Travels",
    icon: geoland,
    iconBg: "#383E56",
    date: "January 2024 - April 2024",
    points: [
      "Created different consoles for user and admin using React typescript and tailwind in frontend and firebase in backend",
      "Optimizing database queries and improving server performance.",
      "Integrating third-party APIs to enhance application functionality.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Deukhuri Multiple Campus",
    icon: deukhuri,
    iconBg: "#E6DEDD",
    date: "December 2023 - August 2024",
    points: [
      "Created different consoles for user and admin using React typescript and tailwind in frontend and backend in spring boot",
      "Optimizing database queries and improving server performance.",
      "Integrating third-party APIs to enhance application functionality.",
    ],
  },
  {
    title: "Backend Facilitator",
    company_name: "Google DSC FETJU",
    icon: gdsc,
    iconBg: "#383E56",
    date: "July 2023 - July 2024",
    points: [
      "Leading backend development efforts for web applications using Spring Boot.",
      "Optimizing database queries and improving server performance.",
      "Integrating third-party APIs to enhance application functionality.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Working with sajiloDev was a game-changer for my online presence. They took the time to understand my goals and delivered a website that not only looks fantastic but also performs exceptionally well. Their expertise and dedication are unmatched!",
    name: "Govinda Sharma",
    designation: "Managing Director",
    company: "Geoland Travels",
    image: govinda,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dipendra proved me wrong.",
    name: "Shiv Raj Khanal",
    designation: "Lamahi Chamber of Commerce",
    company: "Founder",
    image: shivraj,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shiva Oli",
    designation: "Campus Chief",
    company: "Deukhuri Multiple Campus",
    image: shivaoli,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Tek Bahadhur Pun ",
    designation: "CTO",
    company: "GharSanchar",
    image: tekpun,
  },
];

const projects = [
  {
    name: "SajiloDev",
    description:
      "A web platform built with React.ts and Firebase for ordering technical services such as website creation, domain checks, hosting, and maintenance. It provides a user-friendly interface for managing these services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: sajilodev,
    source_code_link: "https://github.com/dipenbhat557/SajiloDev",
    website_link: "https://sajilodev.com"
  
  },
  {
    name: "Payment Management System",
    description:
      "A Next.js and TypeScript-based platform that connects multiple bank accounts, displays real-time transactions, and allows fund transfers. It integrates with Plaid for account linking and Dwolla for transfers, featuring secure authentication and responsive design."    tags: [
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
        color: "yellow-text-gradient",
      },
      {
        name: "Sentry",
        color: "pink-text-gradient",
      },

    ],
    image: paymentManagement,
    source_code_link: "https://github.com/dipenbhat557/payment-management",
  },
  {
    name: "Geoland Travels",
    description:
      "A travel platform with admin and user panels, built with React.js and TypeScript, and powered by Firebase for the backend. It offers inbound and outbound tours, ticketing services, and pricing details.",
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
        color: "white-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: geoland,
    source_code_link: "https://github.com/dipenbhat557/Geoland-Travels",
    website_link: "https://geolandtravels.com"
  },
  {
    name: "Deukhuri Multiple Campus",
    description:
      "A learning management system with admin and user panels, built with React.js and TypeScript, and powered by Spring Boot for the backend with mySQL for database. It offers insights into various notices, publications, college team and also handles the admission process.",
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
        color: "white-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "yellow-text-gradient",
      },
    ],
    image: deukhuri,
    source_code_link: "https://github.com/dipenbhat557/Deukhuri-College",
    website_link: "https://deukhurimultiplecampus.edu.np"
  },
  {
    name: "Ghar Sanchar",
    description:
      "A news website in Nepal, featuring simple UI design for the news in nepal.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      
    ],
    image: gharsanchar,
    website_link: "https://gharsanchar.com"
  },
  {
    name: "Whatsapp Clone",
    description:
      "A real-time messaging application that replicates the functionality of WhatsApp, allowing users to send text messages, images, videos, and documents to their contacts.",
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
        color: "white-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/dipenbhat557/Whatsapp-clone",
  },
  {
    name: "Tech Blog",
    description:
      "A blogging platform where users can write and publish articles on various technology topics, read articles from other authors, and engage in discussions through comments.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "servlet",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: techBlog,
    source_code_link: "https://github.com/dipenbhat557/TechBlog",
  },
  {
    name: "Contact Manager",
    description:
      "An application for managing and organizing contacts, including features for adding, editing, and deleting contacts, as well as searching for specific contacts.",
    tags: [
      {
        name: "thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: contactManager,
    source_code_link: "https://github.com/dipenbhat557/Smart-Contact-Manager",
  },
];

export { services, technologies, experiences, testimonials, projects };
