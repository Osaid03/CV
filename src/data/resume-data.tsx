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
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Timeline from "@/app/components/Timeline/Timeline";
import { title } from "process";

export const RESUME_DATA = {
  name: "Osaid Qattan",
  initials: "OQ",
  location: "Abu Dhabi, UAE, GST",
  locationLink: "https://www.google.com/maps/place/Abu+Dhabi",
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

  certification: [
    {
      title: "Certificate in Cybersecurity (CC)",
      badges: ["Certification", "Cybersecurity"],
      issuer: "ISC2",
      date: "2024 - 2027",
      description: "Certification in Cybersecurity (CC) from ISC2, demonstrating foundational knowledge in cybersecurity principles and practices.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7228788689617747968/",
      logo: ISC2Logo,
    },
  ],

  work: [
    {
      company: "Codeguru - Dubai",
      location: "Dubai - Remote",
      link: "https://codeguru.ae/",
      badges: ["React", "Next.js", "Python", "FastAPI", "MangoDB", "CRM"],
      title: "Software Developer",
      logo: IbtikarLogo,
      start: "Sep 2025",
      end: "Present",
description: (
  <>
    Developed scalable web and chatbot applications with modern frameworks including React, Next.js, Python (FastAPI), and Node.js, deploying microservices on AWS and integrating secure data handling with MongoDB.
    <ul className="list-inside list-disc">
      <li>Built and deployed a WhatsApp-based chatbot system using FastAPI and MongoDB with real-time interaction and automation features.</li>
      <li>Integrated the chatbot with React and Node.js backend microservices, improving scalability and response efficiency.</li>
      <li>Implemented AWS-based cloud deployment, API Gateway routing, and secure authentication to ensure system reliability and data protection.</li>
      <li>Collaborated in Agile sprints with code reviews to enhance performance, maintainability, and cybersecurity compliance.</li>
    </ul>
  </>
),

    },
    {
      company: "Ibtikar - Germany",
      location: "Germany - Remote",
      link: "",
      badges: ["Remote", "Java Spring Boot", "Flutter", "React", "SQL", "Agile", "Jira"],
      title: "Software Developer",
      logo: IbtikarLogo,
      start: "Feb 2024",
      end: "Present",
      description: (
        <>
          Developed scalable applications with a backend in Java Spring Boot and frontends in Flutter and React, collaborating in Agile sprints with code reviews.
          <ul className="list-inside list-disc">
            <li>Contributed to a cross-platform Classifieds App with secure authentication, listings, and user management features.</li>
            <li>Applied cybersecurity principles to ensure secure coding practices and data protection.</li>
          </ul>
        </>
      ),
    },
    {
      company: "TCR",
      location: "Dubai - Remote",
      link: "https://www.tcr-group.com/",
      badges: ["Remote", "React", "JavaScript", "Node.js", "SQL"],
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

