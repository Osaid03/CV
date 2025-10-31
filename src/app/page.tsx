import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import Slider from "./components/Slider/Slider";
import Timeline from "./components/Timeline/Timeline";
import DarkModeToggle from './components/DarkMode/DarkModeToggle';

function SectionDivider() {
  return (
    <div className="w-full flex justify-center my-8 print:my-4">
      <div className="w-full h-px bg-[#dde1e4]"></div>
    </div>
  );
}

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
  },
};

function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="relative mx-auto scroll-my-12 overflow-x-hidden p-4 sm:p-6 print:p-11 md:p-20 mt-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>
      <section
        className="mx-auto w-full max-w-6xl space-y-10 bg-white print:space-y-4 px-4 sm:px-6 md:px-8"
        aria-label="Resume Content"
      >
        <Header />
        <div className="space-y-12 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />
          <SectionDivider />
          <WorkExperience work={RESUME_DATA.work} />
          <SectionDivider />
          <Timeline />
          <SectionDivider />
          <Skills skills={RESUME_DATA.skills} />
          <SectionDivider />
          <Projects projects={RESUME_DATA.projects} />
          <SectionDivider />
          <Slider sliders={RESUME_DATA.slider} />
        </div>
      </section>
      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}