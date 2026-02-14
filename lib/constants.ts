export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/dipenbhat557",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dipendra-bhatta-38ba32259/",
    icon: "FaLinkedin",
  },
  {
    name: "X",
    url: "https://x.com/dipenbhat557",
    icon: "FaXTwitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dipenbhat557/",
    icon: "FaInstagram",
  },
];

export const experiences = [
  {
    title: "Chief Technology Officer",
    company: "AIPrep",
    url: "https://aiprep.in",
    logo: "/images/companies/aiprep.png",
    period: "September 2025 - Present",
    points: [
      "Architected an AI video generation platform with custom modal orchestration and Manim rendering pipelines serving thousands of users",
      "Designed a model routing system that reduced per-video LLM costs by 80% through intelligent tier selection",
      "Built distributed video rendering infrastructure with Celery workers on GKE & Modal, handling unlimited concurrent generation jobs",
      "Led migration from CIVO to GCP & Modal, implementing GKE clusters, ingress/TLS, secret management, and cost optimization",
      "Established engineering practices including CI/CD pipelines, code review standards, and deployment workflows",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Casebase",
    url: null,
    logo: "/images/companies/casebase.png",
    period: "March 2025 - September 2025",
    points: [
      "Architected and implemented scalable backend solutions using Node.js and Express",
      "Developed and maintained RESTful APIs with MongoDB integration",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "100xDevs",
    url: null,
    logo: "/images/companies/100xdevs.png",
    period: "October 2024 - September 2025",
    points: [
      "Built full-stack applications using various technologies",
      "Optimized database queries and improved application performance by 40%",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Served as a tutor for 100xSchool(Alt. College) & bootcamp"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Hyperce",
    url: null,
    logo: "/images/companies/hyperce.png",
    period: "June 2024 - November 2024",
    points: [
      "Developed microservices architecture using Docker and Kubernetes",
      "Implemented real-time features using WebSocket and Socket.io",
      "Created responsive UIs with React and Material-UI",
      "Set up monitoring and logging using ELK stack",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "SajiloDev",
    url: "https://sajilodev.com",
    logo: "/images/companies/sajilodev.jpg",
    period: "November 2023 - June 2024",
    points: [
      "Developed and deployed multiple production-ready projects including the official SajiloDev website",
      "Designed and implemented RESTful APIs using Spring Boot for backend services",
      "Built responsive user interfaces with React TypeScript and Tailwind CSS",
      "Integrated third-party services and APIs to enhance application functionality",
    ],
  },
];

export const projects = [
  {
    name: "AIPrep",
    description:
      "AI video generation platform that orchestrates multiple LLMs to create animated educational videos with Manim. Features intelligent model routing that reduced per-video costs by 80%, distributed rendering with Celery workers on GKE, and RAG pipelines for content accuracy.",
    url: "https://aiprep.in",
    github: null,
    image: "/images/projects/aiprep.png",
    tags: ["Python", "FastAPI", "LLM", "Celery", "GKE", "Kubernetes", "RAG"],
    featured: true,
  },
  {
    name: "FlyAirQ",
    description:
      "Airline and travel booking platform for flight search, booking, and travel management. Currently in staging with full booking pipeline.",
    url: "https://staging.flyairq.com",
    github: null,
    image: "/images/projects/flyairq.png",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    featured: true,
  },
  {
    name: "Petals KTM",
    description:
      "E-commerce flower and gift delivery platform serving Kathmandu Valley with same-day delivery. Handles real transactions, order tracking, and inventory management.",
    url: "https://petalsktm.com",
    github: null,
    image: "/images/projects/petalsktm.png",
    tags: ["Next.js", "Vercel", "E-commerce", "TypeScript"],
    featured: false,
  },
  {
    name: "Kinamna",
    description:
      "Production web platform with modern architecture, responsive design, and optimized performance.",
    url: "https://kinamna.com",
    github: null,
    image: "/images/projects/kinamna.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
  {
    name: "SajiloDev",
    description:
      "Tech service ordering platform for website creation, domain management, hosting, and maintenance services.",
    url: "https://sajilodev.com",
    github: "https://github.com/dipenbhat557/SajiloDev",
    image: "/images/projects/sajilodev.png",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    featured: false,
  },
  {
    name: "Geoland Travels",
    description:
      "Travel booking platform with admin and user panels for inbound/outbound tours, ticketing, and pricing management.",
    url: "https://geolandtravels.com",
    github: "https://github.com/dipenbhat557/Geoland-Travels",
    image: "/images/projects/geoland.png",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    featured: false,
  },
];

export const mediaVideos = [
  { videoId: "rE7xqjO5UMI" },
  { videoId: "msKpAYFe46U" },
  { videoId: "Ft3tkF-p-ds" },
  { videoId: "bGrcs3rcP4g" },
];

export const mediaTweets = [
  { tweetId: "1901637312166981790", author: "kirat_tw" },
];
