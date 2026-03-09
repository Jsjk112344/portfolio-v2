
import JustinMainImage from './assets/images/justin-soon.jpg';
import JustinResume from './assets/documents/Justin_Resume_Mar2025.pdf';
import pathPilotImage from './assets/projectImages/pathpilot.png';
import cafeConnectImage from './assets/projectImages/cafeconnect.png';
import readlyImage from './assets/projectImages/readly.png';
import ducketImage from './assets/projectImages/ducket.png';
import boopImage from './assets/projectImages/boop.svg';
import javaLogo from './assets/images/javaimage.svg';
import maven from './assets/images/maven.png';
import oscp_badge from './assets/certifications/oscp.png'
import osep_badge from './assets/certifications/osep.png'

const logotext = "JS";
const meta = {
    title: "Justin Soon | Co-founder & CTO, Ducket",
    description: "Justin Soon - Co-founder & CTO at Ducket, a blockchain-based NFT ticketing platform. Software engineer and cybersecurity specialist.",
};

const introdata = {
    title: "I'm Justin Soon",
    animated: {
        first: "Co-founder & CTO at Ducket",
        second: "I build products people need",
        third: "Full-stack engineer & security specialist",
    },
    description: "I'm the Co-founder and CTO of Ducket, where we're building blockchain-based NFT ticketing to eliminate scalping and protect fans. With a background spanning full-stack development, offensive cybersecurity (OSCP, OSEP), and machine learning, I bring a security-first mindset to everything I build.",
    your_img_url: JustinMainImage,
};

const dataabout = {
    title: "Founder & Engineer",
    aboutme: "I'm Justin Soon, Co-founder & CTO of Ducket, a blockchain-based NFT ticketing platform that combats ticket scalping through smart contract-enforced price caps. I'm a Computer Science student at NUS with deep expertise in full-stack development and offensive cybersecurity (OSCP & OSEP certified). My journey from SOC analyst to ML engineer to startup founder has given me a unique lens on building secure, scalable systems. I've shipped products across web, mobile, and blockchain, and I bring the same intensity to crafting code as I do to brewing the perfect cup of coffee from my dorm-room cafe.",
};
const resume = [{
    description: "For a more detailed view of my professional experience, please download my resume with the link below.",
},
];
const resumeDownloadLink = JustinResume;

const certifications = [
  {
    name: "OSCP",
    img: oscp_badge,
    link: "https://www.credential.net/03fc5a83-a1a1-4f13-b9e1-39cab3fe37e2",
  },
  {
    name: "OSEP",
    img: osep_badge,
    link: "https://credentials.offsec.com/33bbf414-c222-4b6c-ba28-d04bca40b309",
  },
];


const skills = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Solidity", icon: "solidity" },
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React Native", icon: "react" },
  { name: "Spring Boot", icon: "springboot" },
  { name: "Django", icon: "django" },
  { name: "Tailwind CSS", icon: "simpleicons:tailwindcss" },
  { name: "Supabase", icon: "simpleicons:supabase" },
  { name: "Google Maps", icon: "simpleicons:googlemaps" },
  { name: "Kali Linux", icon: "simpleicons:kalilinux" },
  { name: "Burp Suite", icon: "simpleicons:burpsuite" },
  { name: "Git", icon: "simpleicons:git" },
];



const experience = [
    {
        title: "Co-founder & CTO",
        period: "2025 - Present",
        company: "Ducket, Singapore",
        description: "Co-founded a blockchain-based NFT ticketing startup. Architected the full platform from smart contracts (Solidity on Polygon) to frontend (React + TypeScript), backend (67 Supabase Edge Functions), and payments (Stripe Connect). Built multi-tenant architecture serving buyers, organizers, admins, and event scanners."
    },
    {
        title: "Cybersecurity Engineer (Offensive Security)",
        period: "Jan 2026 - Jun 2026",
        company: "GovTech Singapore, Singapore",
        description: "Developing an AI-assisted framework using LLMs to generate functional MITRE ATT&CK TTP implementations in C/C++. Implementing a RAG system with Qdrant hybrid search for improved generation accuracy. Building automated compilation and validation pipelines for offensive tooling targeting Windows and Linux."
    },
    {
        title: "Machine Learning Engineer Intern",
        period: "Jul 2025 - Dec 2025",
        company: "Elephantech Inc, Tokyo, Japan",
        description: "Contributed to the development and refinement of machine learning models for high-precision industrial printing systems. Applied data-driven approaches to improve spatial accuracy and system performance through model optimization and parameter tuning."
    },
    {
        title: "Software Engineer Intern",
        period: "May 2024 - Aug 2024",
        company: "Koru Partners Pte Ltd, Singapore",
        description: "Developed Spacetime permission scripts using Django to enhance access control and security. Led deployment of cybersecurity solutions, including Cloudflare integration and endpoint protection."
    },
    {
        title: "SOC Analyst",
        period: "Jan 2023 - Aug 2023",
        company: "The Digital and Intelligence Service, Singapore",
        description: "Identified and analyzed security events for critical SAF infrastructure. Led teams in 24/7 threat monitoring and cyber defence exercises under SAF's cyber test and evaluation centre."
    },
];

const dataportfolio = [
  {
    img: ducketImage,
    description: "My startup. A full-stack NFT ticketing platform on Polygon with enforced resale price caps to combat ticket scalping. Features Stripe Connect payments, dynamic QR validation, smart contract integration, and multi-tenant architecture serving 4 distinct user roles.",
    link: "/projectDetails/ducket",
    title: "Ducket (Co-founder & CTO)",
    featured: true,
    tech: [
      { name: "react", simple: true },
      { name: "typescript", simple: true },
      { name: "solidity", simple: true },
      { name: "stripe", simple: true },
      { name: "supabase", simple: true }
    ]
  },
  {
    img: pathPilotImage,
    description: "A mobile navigation app to assist food delivery volunteers with route planning using Google Maps API. Integrated Firebase backend and designed for smooth UX to improve efficiency and reduce confusion during public transport-based deliveries.",
    link: "/projectDetails/pathpilot",
    title: "PathPilot",
    tech: [
      { name: "react", simple: true },
      { name: "firebase", simple: true },
      { name: "googlemaps", simple: true }
    ]
  },
  {
    img: boopImage,
    description: "A mobile app for real-world exploration with NFC check-in capabilities. Users discover locations, perform check-ins, collect stamps, earn achievement badges, and connect with friends through a social layer. Built with Expo and Supabase.",
    link: "/projectDetails/boop",
    title: "Boop",
    tech: [
      { name: "react", simple: true },
      { name: "typescript", simple: true },
      { name: "supabase", simple: true },
      { name: "expo", simple: true }
    ]
  },
  {
    img: cafeConnectImage,
    description: "A Java-based inventory and point-of-sale system tailored for cafe owners. Includes an intuitive UI and real-time sales tracking. Custom data models and file I/O handling with backend logic and object-oriented programming.",
    link: "/projectDetails/cafeconnect",
    title: "CafeConnect",
    tech: [
      { name: "Java", customSrc: javaLogo },
      { name: "JSON", simple: true }
    ]
  },
  {
    img: readlyImage,
    description: "A Java-based book logging application built with Spring Boot. Designed as a hands-on project to learn backend development while tracking personal reading habits with clean RESTful APIs.",
    link: "/projectDetails/readly",
    title: "Readly",
    tech: [
      { name: "Java", customSrc: javaLogo },
      { name: "Spring", simple: true },
      { name: "Maven", customSrc: maven },
      { name: "JSON", simple: true }
    ]
  }

];



const contactConfig = {
    YOUR_EMAIL: "jienkhye01@gmail.com",
    description: "I'm always open to conversations about startups, blockchain, cybersecurity, or collaboration opportunities. Whether you're an investor, a potential partner, or a fellow builder, feel free to reach out. Let's build something meaningful.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Jsjk112344",
    linkedin: "https://www.linkedin.com/in/justin-soon-558372212/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    certifications,
    resume,
    resumeDownloadLink,
    experience,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
