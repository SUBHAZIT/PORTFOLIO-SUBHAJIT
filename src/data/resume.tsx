import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { Html } from "@/components/ui/svgs/html";

export const DATA = {
  name: "SUBHAJIT PATHAK",
  initials: "SP",
  url: "https://subhajitpathak.dev",
  location: "KOLKATA, INDIA",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "FULL-STACK DEVELOPER — WEB DESIGNER. EXPERIENCED IN BUILDING SCALABLE WEB APPLICATIONS AND AI-POWERED TOOLS WITH MODERN TECHNOLOGIES.",
  summary:
    "FULL-STACK DEVELOPER EXPERIENCED IN BUILDING SCALABLE WEB APPLICATIONS AND AI-POWERED TOOLS USING MODERN TECHNOLOGIES. SKILLED IN REACT, NODE.JS, EXPRESS, AND PYTHON WITH STRONG FOUNDATIONS IN DATA STRUCTURES, ALGORITHMS, AND BACKEND ARCHITECTURE. PASSIONATE ABOUT SOLVING REAL-WORLD PROBLEMS THROUGH EFFICIENT SYSTEMS AND CLEAN CODE.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "PYTHON", icon: Python },
    { name: "TYPESCRIPT", icon: "/TypeScript.svg" },
    { name: "JAVASCRIPT", icon: "/JavaScript.svg" },
    { name: "REACT.JS", icon: ReactLight },
    { name: "NEXT.JS", icon: NextjsIconDark },
    { name: "NODE.JS", icon: "/Node.js.svg" },
    { name: "EXPRESS.JS", icon: "/Express.svg" },
    { name: "FASTAPI", icon: "/FastAPI.svg" },
    { name: "MONGODB", icon: "/MongoDB.svg" },
    { name: "MYSQL", icon: "/MySQL.svg" },
    { name: "SOCKET.IO", icon: "/Socket.io.svg" },
    { name: "GIT", icon: "/Git.svg" },
    { name: "GITHUB", icon: "/GitHub.svg" },
    { name: "REST APIS", icon: Icons.globe },
    { name: "WEBSOCKETS", icon: Icons.globe },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: "/CSS3.svg" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "HOME" },
    { href: "/blog", icon: NotebookIcon, label: "BLOG" },
  ],
  contact: {
    email: "subhajitpathak9900@gmail.com",
    tel: "+919531605804",
    social: {
      GitHub: {
        name: "GITHUB",
        url: "https://github.com/SUBHAZIT",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/subhajit-pathak-4820672b1/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "SEND EMAIL",
        url: "mailto:subhajitpathak9900@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TEXIBITION 2K26",
      href: "#",
      badges: [],
      location: "KOLKATA, INDIA",
      title: "LEAD DEVELOPER",
      logoUrl: "/texibition.png",
      start: "2026",
      end: "PRESENT",
      description:
        "DESIGNED AND DEVELOPED THE COMPLETE OFFICIAL WEBSITE FOR THE TEXIBITION 2K26 HACKATHON. BUILT SYSTEMS FOR PARTICIPANT REGISTRATION, EVENT INFORMATION, AND EVENT MANAGEMENT WORKFLOWS. MANAGED DEPLOYMENT, DEBUGGING, AND LIVE TECHNICAL INFRASTRUCTURE DURING THE UNIVERSITY-LEVEL EVENT. COORDINATED WITH ORGANIZING TEAMS TO ENSURE SMOOTH TECHNICAL EXECUTION OF THE TECH FEST.",
    },
  ],
  education: [
    {
      school: "BRAINWARE UNIVERSITY",
      href: "https://brainwareuniversity.ac.in",
      degree: "B.TECH IN COMPUTER SCIENCE (AI/ML SPECIALIZATION) — CGPA: 8.0",
      logoUrl: "/bwu.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "TEXIBITION 2K26 OFFICIAL WEBSITE REDESIGN",
      href: "https://texibition.pages.dev/",
      dates: "JAN 2026 - PRESENT",
      active: true,
      description:
        "DESIGNED AND DEVELOPED A HIGH-PERFORMANCE, FULLY RESPONSIVE OFFICIAL WEBSITE FOR TEXIBITION 2K26 WITH COMPLETE EVENT MANAGEMENT, REGISTRATION SYSTEMS, AND MODERN UI/UX. OPTIMIZED FOR FAST PERFORMANCE UNDER HIGH TRAFFIC AND HANDLED LIVE DEPLOYMENT, DEBUGGING, AND REAL-TIME ISSUE RESOLUTION, ENSURING A SMOOTH, ZERO-DOWNTIME EXPERIENCE.\n\nTECH STACK: REACT.JS, NODE.JS, EXPRESS.JS, MONGODB, REST API\n\nROLE: LEAD DEVELOPER — END-TO-END DEVELOPMENT, DEPLOYMENT, AND TEAM COORDINATION",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://texibition.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dtngnr71k/video/upload/v1773780274/Screen_Recording_2026-03-18_at_2.10.26_AM_nnulzy.mov",
      comingSoon: false,
    },
    {
      title: "FIXVERSITY — COLLEGE PROBLEM REPORTING PLATFORM",
      href: "https://fixversityy.pages.dev/",
      dates: "JAN 2026 - PRESENT",
      active: true,
      description:
        "DEVELOPED A CENTRALIZED WEB PLATFORM FOR STUDENTS TO REPORT, TRACK, AND RESOLVE CAMPUS ISSUES EFFICIENTLY. BUILT ROLE-BASED DASHBOARDS FOR STUDENTS AND ADMINISTRATORS WITH REAL-TIME STATUS UPDATES AND NOTIFICATION SYSTEMS, ENSURING TRANSPARENCY AND FASTER ISSUE RESOLUTION.\n\nWINNER OF PERCEPTRON 2K26 HACKATHON.\n\nTECH STACK: REACT.JS, NODE.JS, EXPRESS.JS, MONGODB",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://fixversityy.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SUBHAZIT/FIXVERSITY",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dtngnr71k/video/upload/v1773780786/Screen_Recording_2026-03-18_at_2.22.24_AM_cuueat.mov",
      comingSoon: false,
    },
    {
      title: "CAFE12AM — MIDNIGHT SNACK DELIVERY PLATFORM",
      href: "https://cafe12am.store",
      dates: "FEB 2026 - PRESENT",
      active: true,
      description:
        "DEVELOPED A FOOD DELIVERY WEB PLATFORM FOCUSED ON MIDNIGHT SNACK SERVICES, ENABLING USERS TO BROWSE MENUS, PLACE ORDERS, AND TRACK DELIVERIES IN REAL TIME. IMPLEMENTED MULTI-ROLE AUTHENTICATION FOR ADMIN, VENDORS, AND CUSTOMERS ALONG WITH ORDER MANAGEMENT AND SECURE LOGIN SYSTEMS.\n\nTECH STACK: REACT.JS, NODE.JS, EXPRESS.JS, MONGODB, JWT",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://cafe12am.store",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "private",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dtngnr71k/video/upload/v1773781286/Screen_Recording_2026-03-18_at_2.29.49_AM_axxi8p.mov",
      comingSoon: false,
    },
    {
      title: "CODEBASEGPT — AI CODEBASE ANALYZER",
      href: "https://codebasegpt.pages.dev/",
      dates: "MAR 2026 - PRESENT",
      active: true,
      description:
        "DEVELOPED AN AI-POWERED TOOL TO ANALYZE LARGE GITHUB CODEBASES AND PROVIDE INSTANT INSIGHTS USING SEMANTIC SEARCH AND INTELLIGENT CODE PARSING. HELPS DEVELOPERS QUICKLY UNDERSTAND COMPLEX PROJECTS, GENERATE PROPER ONBOARDING GUIDES, PERFORM SECURITY SCANS, AND EXPLORE FILES, FUNCTIONS, AND ARCHITECTURE THROUGH A CHATBOT-STYLE INTERFACE. ALSO AVAILABLE AS A CHROME EXTENSION AND VS CODE EXTENSION FOR SEAMLESS DEVELOPMENT WORKFLOW INTEGRATION.\n\nTECH STACK: PYTHON, NODE.JS, OPENAI API, VECTOR EMBEDDINGS",
      technologies: [
        "Python",
        "Node.js",
        "OpenAI API",
        "Vector Embeddings",
      ],
      links: [
        {
          type: "Website",
          href: "https://codebasegpt.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "private",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dtngnr71k/video/upload/v1773782213/Screen_Recording_2026-03-18_at_2.46.23_AM_we1wyh.mov",
      comingSoon: false,
    },
  ],
  hackathons: [
    {
      title: "PERCEPTRON 2K26 — RKMVERI TECHFEST",
      dates: "2026",
      location: "BELUR, WEST BENGAL",
      description: "BUILD FIXVERSITY (WINNER OF PERCEPTRON 2K26)",
      win: "WINNER",
      image: "/perceptron.jpeg",
      links: [],
    },
    {
      title: "SIH 2025 — SMART INDIA HACKATHON",
      dates: "2025",
      location: "NATIONAL LEVEL",
      description: "BUILD BLOCKCHAIN BASED TOURISM ID SYSTEM FOR FOREIGNERS AND DOMESTIC TRAVELLERS",
      image: "/sih.jpeg",
      links: [],
    },
    {
      title: "HACKADEMIA — NATIONAL COLLEGE OF JAYANAGAR BANGALORE",
      dates: "2025",
      location: "BANGALORE, KARNATAKA",
      description: "BUILD A SMART AI BASED RECOMMERCE PLATFORM CALLED TRUSTLIST",
      image: "/hackademia.webp",
      links: [],
    },
    {
      title: "TEXIBITION 2K25 — BRAINWARE UNIVERSITY TECHFEST",
      dates: "2025",
      location: "BARASAT, WEST BENGAL",
      description: "BUILD A BLACKBOX SYSTEM FOR CAR DATA LOGGING AFTER ACCIDENT (SECOND RUNNER UP)",
      win: "SECOND RUNNER UP",
      image: "/texibition.png",
      links: [],
    },
    {
      title: "SIH — SMART INDIA HACKATHON 2024",
      dates: "2024",
      location: "NATIONAL LEVEL",
      description: "PARTICIPATED IN THE NATIONAL LEVEL HACKATHON FOR PROBLEM RESOLUTION",
      image: "/sih.jpeg",
      links: [],
    },
    {
      title: "TEXIBITION 2K24 — BRAINWARE UNIVERSITY TECHFEST",
      dates: "2024",
      location: "BARASAT, WEST BENGAL",
      description: "BUILD - A SMART IRRIGATION SYSTEM DRONE AI BASED",
      image: "/texibition.png",
      links: [],
    },
  ],
} as const;
