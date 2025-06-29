
import JustinMainImage from './assets/images/justin-soon.jpg';
import JustinResume from './assets/documents/Justin_Resume_Jun2025.pdf';
import pathPilotImage from './assets/projectImages/pathpilot.png';
import cafeConnectImage from './assets/projectImages/cafeconnect.png';
import javaLogo from './assets/images/javaimage.svg';
import icons from "simple-icons/icons";

const logotext = "JSJK";
const meta = {
    title: "Justin Soon",
    description: "I’m Justin Soon",
};

const introdata = {
    title: "I’m Justin Soon",
    animated: {
        first: "I hack",
        second: "I build things",
        third: "I make coffee",
    },
    description: "I am a software engineer and cybersecurity enthusiast with a passion for creating innovative solutions. I love to explore new technologies and push the boundaries of what's possible.",
    your_img_url: JustinMainImage,
};

const dataabout = {
    title: "A bit About Myself",
    aboutme: "Hi, I'm Justin Soon, a Computer Science student at NUS with a passion for building clean, scalable software and a strong interest in cybersecurity. I’ve contributed to full-stack projects, developed mobile apps, and explored areas like offensive security and AI-driven systems. Outside of tech, I’m also a dedicated coffee enthusiast—I run a small dorm-room café and love experimenting with brews. Whether it’s crafting efficient code or the perfect cup, I bring the same attention to detail and curiosity to everything I do. I'm always excited to learn, collaborate, and tackle real-world problems through software.",
};
const resume = [{
    description: "For a more detailed view of my professional experience, please download my resume with the link below.",
},
];
const resumeDownloadLink = JustinResume;

const skills = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Spring Boot", icon: "springboot" },
  { name: "Tailwind CSS", icon: "simpleicons:tailwindcss" },
  { name: "Google Maps", icon: "simpleicons:googlemaps" },
  { name: "Kali Linux", icon: "simpleicons:kalilinux" },
  { name: "Wireshark", icon: "simpleicons:wireshark" },
  { name: "Burp Suite", icon: "simpleicons:burpsuite" },
  { name: "Metasploit", icon: "simpleicons:metasploit" },
  { name: "Git", icon: "simpleicons:git" },
];



const experience = [
    {
        title: "Software Engineer Intern",
        period: "May 2024 - Aug 2024",
        company: "Koru Partners Pte Ltd",
        description: "Developed Spacetime permission scripts using Django to enhance access control and security. Led deployment of cybersecurity solutions, including Cloudflare integration and endpoint protection with SEPMS."
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
    img: pathPilotImage,
    description: "PathPilot project...",
    link: "#",
    tech: [
      { name: "react", simple: true },
      { name: "firebase", simple: true },
      { name: "googlemaps", simple: true }
    ]
  },
  {
    img: cafeConnectImage,
    description: "CafeConnect project...",
    link: "#",
    tech: [
      { name: "Java", customSrc: javaLogo },
      { name: "JSON", simple: true }
    ]
  }
];



const contactConfig = {
    YOUR_EMAIL: "jienkhye01@gmail.com",
    description: "Whether it's about collaboration, freelance opportunities, or just a chat about tech or coffee, I'm always open to connecting. I'm currently looking for exciting roles in software engineering or cybersecurity, so feel free to reach out.",
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
    resume,
    resumeDownloadLink,
    experience,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};