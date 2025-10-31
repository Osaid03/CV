import {
  ClevertechLogo,
  ConsultlyLogo,
  IbtikarLogo,
  ISC2Logo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TCRLogo,
  CodeguruLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Timeline from "@/app/components/Timeline/Timeline";
import { title } from "process";

export const RESUME_DATA = {
  name: "OSAID QATTAN",
  initials: "OQ",
  location: "Abu Dhabi, UAE",
  about: "First Class Cybersecurity Graduate & Full-Stack Developer  Ethical Hacking • Pentesting • AppSec • Secure Flutter & Spring Boot",
  summary: (
    <>
      A Cybersecurity graduate with First Class Honours, passionate about building secure systems and full-stack applications. Experienced in backend development and skilled with frontend technologies such as Flutter, React, and Next.js for creating modern, responsive web applications. I have a solid foundation in cybersecurity principles, including Linux system administration, along with both offensive (ethical hacking, penetration testing) and defensive (system hardening, incident response) techniques.
    </>
  ),
  avatarUrl: "https://gitlab.com/uploads/-/system/user/avatar/22931844/avatar.png?width=192",
  personalWebsiteUrl: "https://github.com/Osaid03",
  contact: {
    email: "osaid.qattan@hotmail.com",
    tel: "+971 56 155 0845",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Osaid03",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/osaid-qattan/",
        icon: LinkedInIcon,
      },
    ],
  },

  work: [
{
  company: "Codeguru",
  location: "Dubai - Remote",
  link: "https://codeguru.ae/",
  badges: ["Python", "FastAPI", "React", "Next.js", "MongoDB", "AWS"],
  title: "Full Stack Software Engineer",
  logo: CodeguruLogo,
  start: "Sep 2025",
  end: "Present",
  description: (
    <>
      Developed scalable web and chatbot applications using Python (FastAPI) as the main microservice framework, deployed on AWS with MongoDB for data management and OpenSearch for intelligent query retrieval.
      <ul className="list-inside list-disc">
        <li>Built and deployed a WhatsApp-based chatbot using FastAPI as a microservice integrated with a CRM backend developed with React and Node.js.</li>
        <li>Implemented a knowledge bank powered by OpenSearch RAG and FAQ-based retrieval to enhance accuracy and contextual understanding in chatbot responses.</li>
        <li>Deployed services on AWS using API Gateway routing, Lambda functions, and secure authentication for reliable cloud performance.</li>
        <li>Utilized GitHub for version control, collaboration, and CI/CD automation to ensure continuous delivery and code quality.</li>
      </ul>
    </>
  ),
},


{
  company: "Ibtikar",
  location: "Germany - Remote",
  link: "https://www.ibtikar.sa/",
  badges: ["Java Spring Boot", "Flutter", "React", "SQL", "Agile", "Jira"],
  title: "Software Developer",
  logo: IbtikarLogo,
  start: "Feb 2024",
  end: "Present",
  description: (
    <>
      Developed scalable applications with a backend in Java Spring Boot and frontends in Flutter and React, collaborating in Agile sprints with regular code reviews and best practices in version control.
      <ul className="list-inside list-disc">
        <li>Contributed to a cross-platform Classifieds App with secure authentication, listings, and user management features.</li>
        <li>Applied cybersecurity principles to ensure secure coding practices, data protection, and compliance with security standards.</li>
        <li>Collaborated with cross-functional teams to optimize performance, implement CI/CD pipelines, and streamline deployment workflows.</li>
      </ul>
    </>
  ),
},


    {
      company: "TCR",
      location: "Dubai - Remote",
      link: "https://www.tcr-group.com/",
      badges: ["React", "JavaScript", "Node.js", "SQL"],
      title: "Full Stack Developer Intern",
      logo: TCRLogo,
      start: "June 2023",
      end: "July 2023",
      description: (
        <>
          Full Stack Developer Intern at TCR, contributing to web applications and backend services.
          <ul className="list-inside list-disc">
            <li>Worked on building and maintaining scalable web applications using React and Node.js.</li>
            <li>Collaborated with team members to improve code quality and development workflows.</li>
          </ul>
        </>
      ),
    },
  ],
  
  certification: [
    {
      title: "Certificate in Cybersecurity (CC)",
      badges: ["Certification", "Cybersecurity"],
      issuer: "ISC2",
      date: "2024 - 2027",
      description: "Certification in Cybersecurity (CC) from ISC2, demonstrating foundational knowledge in cybersecurity principles and practices.",
      image: "/images/isc2-certificate.jpg",
      logo: ISC2Logo,
    },
    {
      title: "Certificate in Full Stack Web Development",
      badges: ["Development", "Full Stack"],
      issuer: "TR Innovation",
      date: "2023",
      description: "Full Stack Web Development certification covering modern web technologies and frameworks.",
      image: "/images/fullstack-certificate.jpg",
      logo: TCRLogo,
    },
  ],
  
  skills: [
    { name: "CSS", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
    { name: "Debian", logo: "https://www.svgrepo.com/show/349333/debian.svg" },
    { name: "Docker", logo: "https://www.svgrepo.com/show/452192/docker.svg" },
    { name: "Gitlab", logo: "https://www.svgrepo.com/show/448226/gitlab.svg" },
    { name: "HTML", logo: "https://www.svgrepo.com/show/452228/html-5.svg" },
    { name: "Java", logo: "https://www.svgrepo.com/show/452234/java.svg" },
    { name: "JavaScript", logo: "https://www.svgrepo.com/show/349419/javascript.svg" },
    { name: "Jira", logo: "https://www.svgrepo.com/show/353935/jira.svg" },
    { name: "Kalilinux", logo: "https://www.svgrepo.com/show/330767/kalilinux.svg" },
    { name: "Linux", logo: "https://www.svgrepo.com/show/448236/linux.svg" },
    { name: "Node.js", logo: "https://www.svgrepo.com/show/452075/node-js.svg" },
    { name: "PostgreSQL", logo: "https://www.svgrepo.com/show/303301/postgresql-logo.svg" },
    { name: "Python", logo: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "React/Next.js", logo: "https://www.svgrepo.com/show/452092/react.svg" },
    { name: "SQL", logo: "https://www.svgrepo.com/show/374093/sql.svg" },
    { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "TensorFlow", logo: "https://www.svgrepo.com/show/354440/tensorflow.svg" },
    { name: "Typescript", logo: "https://www.svgrepo.com/show/439022/typescript.svg" },
    { name: "Flutter", logo: "https://www.svgrepo.com/show/373604/flutter.svg" },
    { name: "Mongodb", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" },

  ],
  projects: [
    {
      title: "Adaptive Intelligence for Honeypot Deception",
      techStack: ["Python", "TensorFlow", "Cowrie Honeypot"],
      description:
        "Graduation project focused on integrating AI-driven behavioral analysis and real-time adaptability to improve the effectiveness of honeypots in cybersecurity.",
      logo: MonitoLogo,
      link: {
        label: "Project Details",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "WagenHub",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      description:
        "A car-selling platform with a modern frontend and robust backend architecture for smooth user experience and data management.",
      logo: ConsultlyLogo,
      link: {
        label: "WagenHub Repository",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "Classifieds Mobile & Web Application",
      techStack: ["Flutter", "Spring Boot", "Security", "Authentication"],
      description:
        "Cross-platform classifieds app with cybersecurity focus. Implemented secure authentication, data encryption, and conducted security assessments to mitigate vulnerabilities.",
      logo: MonitoLogo,
      link: {
        label: "Project Repository",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "BOTBase",
      techStack: ["Java", "Firebase", "Discord API"],
      description:
        "A custom-built Discord bot with a ranking system powered by Firebase, improving community engagement.",
      logo: ParabolLogo,
      link: {
        label: "BOTBase Repository",
        href: "https://github.com/Osaid03",
      },
    },
  ],
  slider: [
    {
      id: "certificate1",
      imageUrl: "images/certificate1.png",
      redirectUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7228788689617747968/",
      title: "Certificate in CyberSeucrity"
    },
    {
      id: "certificate2",
      imageUrl: "images/certificate2.png",
      redirectUrl: "https://certificate.givemycertificate.com/c/683243ad-2685-4f9a-b8cb-bd9a7b13b5b5",
      title: "Certificate in Full Stack Web Development"
    },

  ],

} as const;

