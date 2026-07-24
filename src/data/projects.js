// src/data/projects.js
// Replace placeholder images with your actual project screenshots
import project1Image from "../assets/images/project5.png";
import project2Image from "../assets/images/dashboard.png";
import project3Image from "../assets/images/ERD.png";

export const projects = [
  {
    id: 1,
    title: "AI-Based Child Growth Monitoring System",
    description:
      "As a Co-Creator and official Copyright Holder registered with the Indonesian Ministry of Law and Human Rights (EC002025167897), I contributed to the development of a health data analysis system aimed at stunting prevention. This project utilizes Machine Learning algorithms, specifically Support Vector Machine (SVM) and XGBoost, to effectively monitor and analyze child growth metrics.",
    image: null, // Replace with: import imgPath from '../assets/images/project1.jpg'
    category: "ai",
    tags: [],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "IoT Automatic Smoking System",
    description:
      "As a Co-Creator and official Copyright Holder recognized by the Indonesian Ministry of Law and Human Rights (EC002025173559), I co-developed an innovative hardware solution. This project features an automatic smoking device integrated with an IoT system to ensure efficient operation and technical control.",
    image: null,
    category: "engineering",
    tags: [],
    github: null,
    live: null,
    featured: false,
  },
  // {
  //   id: 3,
  //   title: "Frontend Developer Internship Projects",
  //   description:
  //     "Collection of web interfaces and frontend systems built during internship at PT Baracipta Esa Engineering — responsive, performant, and user-centered.",
  //   image: null,
  //   category: "web",
  //   tags: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
  //   github: "https://github.com/valenisaafalaq",
  //   live: null,
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   title: "Academic Web Development Projects",
  //   description:
  //     "A series of web development projects completed as part of Informatics Engineering coursework, covering both frontend and backend fundamentals.",
  //   image: null,
  //   category: "academic",
  //   tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  //   github: "https://github.com/valenisaafalaq",
  //   live: null,
  //   featured: false,
  // },
  {
    id: 5,
    title: "Dicoding x IBM SkillsBuild Capstone",
    description:
      "CCapstone project completed during the Certified Independent Study (MBKM) program. Acted as a Data Engineer, responsible for designing robust data extraction pipelines, processing document texts, and building the knowledge base for an intelligent RAG (Retrieval-Augmented Generation) system.",
    image: project1Image,
    category: "ai",
    tags: [
      "Python",
      "Machine Learning",
      "PostgreSQL",
      "Docker",
      "RAG",
      "LangChain",
    ],
    youtube: "https://youtu.be/mtWZAzE8Csc",
    live: null,
    featured: true,
  },
  // {
  //   id: 6,
  //   title: "UI/UX Design Exploration",
  //   description:
  //     "A collection of UI/UX design work — wireframes, prototypes, and high-fidelity mockups created for various web and mobile concepts.",
  //   image: null,
  //   category: "uiux",
  //   tags: ["Figma", "UI Design", "Prototyping", "User Research"],
  //   github: null,
  //   live: null,
  //   featured: false,
  // },
  {
    id: 7,
    title: "Hotel Booking Demand & Cancellation Analytics",
    description:
      "Developed an interactive dashboard to support data-driven decision-making by monitoring essential KPIs. Investigates guest segments with the highest cancellation rates and booking surges.",
    image: project2Image,
    category: "data",
    tags: ["Data Analysis", "Dashboard", "Excel", "Analytics"],
    github: "https://github.com/ValenisaaFalaq/hotel-booking-analytics-excel",
    live: null,
    featured: true,
  },
  {
    id: 8,
    title: "Supply Chain & Inventory Analytics with PostgreSQL",
    description:
      "Developed a robust PostgreSQL ELT pipeline, transforming 180,000+ rows of raw data into an optimized 3NF relational database to ensure data integrity and auditable reporting.",
    image: project3Image,
    category: "data",
    tags: ["PostgreSQL", "Data Engineering", "ELT", "Database"],
    github:
      "https://github.com/ValenisaaFalaq/supply-chain-analytics-postgresql.git",
    live: null,
    featured: true,
  },
];

export const projectCategories = [
  "all",
  "web",
  "ai",
  "academic",
  "uiux",
  "engineering",
];
