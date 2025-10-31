"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";
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
      className="mt-3 flex list-none flex-wrap gap-2 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-2 py-1 text-base font-medium print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
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
      className="flex h-full flex-col overflow-hidden border p-4 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
      role="article"
    >
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-2xl font-semibold">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-lg leading-relaxed print:text-[10px]"
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
 * Section component displaying all side projects in a slider format with 2 visible at once
 */
export function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const projectsPerView = 2;
  const maxIndex = Math.max(0, projects.length - projectsPerView);
  const autoSlideInterval = 5000; // 5 seconds - comfortable reading time

  const handleTransition = (newIndex: number, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 350);
  };

  const nextProject = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + projectsPerView;
    handleTransition(newIndex, 'right');
  };

  const prevProject = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - projectsPerView;
    handleTransition(newIndex, 'left');
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && projects.length > projectsPerView) {
      const interval = setInterval(() => {
        nextProject();
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, projects.length, projectsPerView]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  // If we're at the end and don't have enough projects, fill from the beginning
  if (visibleProjects.length < projectsPerView && projects.length >= projectsPerView) {
    const remainingSlots = projectsPerView - visibleProjects.length;
    const fromStart = projects.slice(0, remainingSlots);
    visibleProjects.push(...fromStart);
  }

  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12 mb-16">
      <h2 className="text-4xl font-bold mb-8" id="side-projects">
        Side Projects
      </h2>

      {/* Simple Projects Container */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Floating Navigation Buttons */}
        <button
          onClick={prevProject}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Previous projects"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Next projects"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Projects Showcase Grid */}
        <div className="mx-24 overflow-visible">
          <div
            className={`grid grid-cols-1 gap-8 print:grid-cols-3 print:gap-4 md:grid-cols-2 lg:grid-cols-2 transition-opacity duration-700 ease-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            role="feed"
            aria-labelledby="side-projects"
          >
            {visibleProjects.map((project, index) => (
              <article
                key={`${project.title}-${currentIndex}-${index}`}
                className="h-full overflow-visible"
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

        {/* Slider Dots Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-3">
            {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => {
                  const newIndex = slideIndex * projectsPerView;
                  if (newIndex !== currentIndex && newIndex <= maxIndex) {
                    const direction = newIndex > currentIndex ? 'right' : 'left';
                    handleTransition(newIndex, direction);
                  }
                }}
                disabled={isTransitioning}
                className={`transition-all duration-300 ease-in-out hover:scale-110 ${
                  Math.floor(currentIndex / projectsPerView) === slideIndex
                    ? 'w-8 h-3 bg-black rounded-full shadow-md'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
