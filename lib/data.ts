export type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  url: string;
  image: string;
  tech: string[];
  features: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Arvofin — Financial Proposal Platform',
    category: 'FinTech · Node.js',
    description:
      'A financial proposal platform with an interactive dashboard, live demo generation, and a robust Node.js backend powering proposal workflows and analytics.',
    longDescription:
      'Arvofin is a financial proposal platform that streamlines the way proposals are created, presented, and reviewed. It features an interactive dashboard for tracking proposal performance, a live demo builder for generating tailored client presentations, and a strong Node.js backend handling proposal workflows, authentication, and real-time analytics.',
    url: 'https://arvofin.com/',
    image:
      'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Node.js', 'Express', 'React', 'REST API', 'Dashboard'],
    features: [
      'Interactive financial proposal dashboard',
      'Live demo generation for client presentations',
      'Proposal lifecycle & version tracking',
      'Real-time analytics and reporting',
      'Secure authentication & role management',
      'Modular, scalable Node.js backend architecture',
    ],
    featured: true,
  },
  {
    title: 'Al-Abagera Courses Platform',
    category: 'Course Management System',
    description:
      'A full-featured course management platform with instructor dashboards, student enrollment, video lessons, and certified completion tracking.',
    longDescription:
      'An integrated educational platform offering free high-quality courses across multiple fields with certified completion certificates. Features a comprehensive dashboard for managing course content, student progress, and certificate issuance.',
    url: 'https://courses.alabagerasys.com/',
    image:
      'https://images.pexels.com/photos/5905749/pexels-photo-5905749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS', 'REST API'],
    features: [
      'Instructor & student dashboards',
      'Video, text, audio & PDF lesson support',
      'Certified completion certificates with verification',
      'Student enrollment & progress tracking',
      'WhatsApp community integration per course',
      'Certificate search and lookup system',
    ],
    featured: true,
  },
  {
    title: 'Al-Abagera Inventory System',
    category: 'Inventory Management System',
    description:
      'A powerful inventory management system with real-time stock tracking, order management, barcode scanning, and advanced analytics.',
    longDescription:
      'A robust inventory management system designed for enterprise use. Features real-time stock tracking across multiple locations, automated order management, barcode scanning, demand forecasting, and comprehensive reporting dashboards.',
    url: 'https://alabagerasys.com/',
    image:
      'https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS', 'REST API'],
    features: [
      'Real-time stock tracking & low-stock alerts',
      'Multi-warehouse location management',
      'Barcode scanning & identifier management',
      'Automated order management workflow',
      'Demand forecasting & analytics dashboard',
      'Role-based access control & permissions',
    ],
    featured: true,
  },
  {
    title: 'ICN Marketplace',
    category: 'E-commerce Marketplace',
    description:
      'Contributed to a global e-commerce marketplace connecting millions of buyers and sellers with secure payments, fast delivery, and multi-platform support.',
    longDescription:
      'ICN is a global e-commerce marketplace designed to connect millions of buyers and sellers through a secure, innovative, and user-friendly digital shopping platform. Contributed as a backend developer building robust APIs and marketplace infrastructure.',
    url: 'https://icn.com/en-jo',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['Laravel', 'MySQL', 'REST API', 'E-commerce'],
    features: [
      'Multi-vendor seller marketplace architecture',
      'Secure payment processing & checkout',
      'Product catalog & inventory synchronization',
      'Order tracking & fulfillment workflows',
      'Customer reviews & rating system',
      'Mobile app API (iOS, Android, Huawei)',
    ],
    featured: false,
  },
];

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  { name: 'PHP', level: 90, category: 'Backend' },
  { name: 'Laravel', level: 92, category: 'Backend' },
  { name: 'Node.js', level: 84, category: 'Backend' },
  { name: 'Express', level: 82, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'REST API', level: 88, category: 'Backend' },
  { name: 'Third-Party API Integration', level: 86, category: 'Backend' },
  { name: 'Modular Architecture', level: 85, category: 'Backend' },
  { name: 'React', level: 82, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Git', level: 85, category: 'Tools & DevOps' },
  { name: 'GitHub Actions', level: 80, category: 'Tools & DevOps' },
  { name: 'SonarQube', level: 78, category: 'Tools & DevOps' },
  { name: 'Deployment', level: 82, category: 'Tools & DevOps' },
  { name: 'AI Tools (Codex, Claude, Copilot)', level: 88, category: 'Tools & DevOps' },
  { name: 'OOP', level: 88, category: 'Backend' },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: 'Full Stack Web Development',
    description:
      'Building dynamic and scalable web applications from backend to frontend using PHP, Laravel, Node.js, React, MySQL, and Tailwind CSS.',
    icon: 'Code2',
  },
  {
    title: 'Laravel Backend Development',
    description:
      'Implementing clean REST APIs, authentication systems, dashboards, roles, and permissions with security and performance in mind.',
    icon: 'Server',
  },
  {
    title: 'Node.js Backend Development',
    description:
      'Crafting fast, modular Node.js backends with Express — handling proposal workflows, real-time analytics, and third-party integrations.',
    icon: 'Network',
  },
  {
    title: 'React Frontend Development',
    description:
      'Creating modern, fast, and responsive user interfaces with React, Next.js, Tailwind CSS, and clean reusable UI components.',
    icon: 'Layout',
  },
  {
    title: 'Database Design & Optimization',
    description:
      'Designing efficient MySQL database structures, improving query performance, and ensuring data integrity & security.',
    icon: 'Database',
  },
  {
    title: 'Third-Party API Integration',
    description:
      'Integrating payment gateways, external services, and AI tools into existing systems with clean, maintainable abstractions.',
    icon: 'Plug',
  },
  {
    title: 'CI/CD & Code Quality',
    description:
      'Setting up GitHub Actions pipelines, SonarQube quality gates, and automated deployment workflows for reliable releases.',
    icon: 'GitBranch',
  },
  {
    title: 'Technical Consulting & Architecture',
    description:
      'Providing guidance on modular architecture, project planning, development workflow, and best practices to deliver effective solutions.',
    icon: 'Lightbulb',
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: 'Backend Developer — Laravel',
    company: 'ICN Marketplace',
    period: 'January 2026 — Present',
    location: 'Amman, Jordan',
    description:
      'Contributing to a global e-commerce marketplace platform. Building robust REST APIs, multi-vendor architecture, and secure payment processing systems serving millions of buyers and sellers.',
  },
  {
    role: 'Full Stack Developer',
    company: 'CSC Beyond',
    period: 'June 2025 — Present',
    location: 'Amman, Jordan',
    description:
      'Developing full-stack web applications with Laravel and React. Building scalable backend systems, designing database architectures, and creating responsive frontend interfaces.',
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  period: 'Oct 2021 — Jun 2025',
  institution: 'Al al-Bayt University',
  location: 'College of Information Technology, Jordan',
};

export const contactInfo = {
  address: 'Amman, Jordan',
  phone: '+962 782213822',
  phoneRaw: '+962782213822',
  email: 'jamelalshalabe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jamel-alshalabe',
  github: 'https://jamel-alshalabe.github.io/Portfolio/',
};
