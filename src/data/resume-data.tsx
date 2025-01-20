import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos"; // Import logos of companies and projects
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"; // Import icons for social links
import Timeline from "@/app/components/Timeline/Timeline";
import { title } from "process";

// The constant RESUME_DATA object that holds the resume information
export const RESUME_DATA = {
  name: "Osaid Qattan",
  initials: "OQ",
  location: "Abu Dhabi, UAE, GST",
  locationLink: "https://www.google.com/maps/place/Abu+Dhabi",
  about: "Cybersecurity student and full-stack web developer with goals to secure a job in the field.",
  summary: (
    <>
      A Cybersecurity student passionate about building secure systems and full-stack applications.
      Experienced in backend development, and learning frontend technologies like React and Next.js to create modern, responsive web applications.
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
        url: "https://www.linkedin.com/in/osaid-qattan-17550a255/",
        icon: LinkedInIcon,
      },
    ],
  },

  work: [
    {
      company: "TCR",
      link: "https://www.tcr-group.com/",
      badges: ["Remote", "React", "JavaScript", "Node.js", "SQL"],
      title: "Full Stack Developer Intern",
      logo: ClevertechLogo,
      start: "2023",
      end: "2026",
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
    {
      company: "ISC2",
      link: "https://www.isc2.org/",
      badges: ["Certification", "Cybersecurity"],
      title: "Certification in Cybersecurity (CC)",
      logo: NSNLogo,
      start: "2024",
      end: "2027",
      description:
        "Currently pursuing a Certification in Cybersecurity (CC) from ISC2 to enhance cybersecurity knowledge and skills.",
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
        href: "https://github.com/Osaid03", // Update with the actual link if available
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
        href: "https://github.com/Osaid03", // Update with the actual link if available
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
        href: "https://github.com/Osaid03", // Update with the actual link if available
      },
    },
  ],
  slider: [
    {
      id: "certificate1",       // Unique identifier for the certificate
      imageUrl: "images/certificate1.png",  // Path to the image
      redirectUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7228788689617747968/", // URL to open
      title: "Certificate in CyberSeucrity"
    },
    {
      id: "certificate2",       // Another certificate
      imageUrl: "images/certificate2.png",  // Path to the second certificate
      redirectUrl: "https://certificate.givemycertificate.com/c/683243ad-2685-4f9a-b8cb-bd9a7b13b5b5", // URL to open
      title: "Certificate in Full Stack Web Development"
    },

  ],

} as const;

