"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects in a slider format with 3 visible at once
 */
export function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerView = 3;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const handleTransition = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextProject = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const prevProject = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    handleTransition(newIndex);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  // If we're at the end and don't have enough projects, fill from the beginning
  if (visibleProjects.length < projectsPerView && projects.length >= projectsPerView) {
    const remainingSlots = projectsPerView - visibleProjects.length;
    const fromStart = projects.slice(0, remainingSlots);
    visibleProjects.push(...fromStart);
  }

  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          disabled={isTransitioning}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous projects"
        >
          &lt;
        </button>

        {/* Projects Grid */}
        <div className="mx-12 overflow-hidden">
          <div
            className={`-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
              }`}
            role="feed"
            aria-labelledby="side-projects"
          >
            {visibleProjects.map((project, index) => (
              <article
                key={`${project.title}-${currentIndex}-${index}`}
                className={`h-full transition-all duration-300 ease-in-out ${isTransitioning
                    ? 'opacity-0 transform scale-95'
                    : 'opacity-100 transform scale-100'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              </article>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          disabled={isTransitioning}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next projects"
        >
          &gt;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: projects.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const newIndex = Math.min(index, maxIndex);
              if (newIndex !== currentIndex) {
                handleTransition(newIndex);
              }
            }}
            disabled={isTransitioning}
            className={`h-2 w-2 rounded-full transition-all duration-300 ease-in-out hover:scale-125 disabled:cursor-not-allowed ${index >= currentIndex && index < currentIndex + projectsPerView
                ? 'bg-gray-800 scale-110'
                : 'bg-gray-300'
              }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
