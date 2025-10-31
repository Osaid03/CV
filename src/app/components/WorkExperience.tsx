import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { PinIcon } from "@/components/icons";
import Image from "next/image";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-base print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500 whitespace-nowrap"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, logo, location } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-start gap-x-4">
          {/* Logo spanning 3 lines */}
          {logo && (
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={83}
                height={83}
                className="rounded-sm object-contain print:w-14 print:h-14"
              />
            </div>
          )}
          
          {/* Content area with 3 lines */}
          <div className="flex-1 min-w-0 space-y-1">
            {/* Line 1: Company name and work period */}
            <div className="flex items-center justify-between gap-x-4 text-2xl">
              <h3 className="font-semibold leading-none print:text-sm flex-1 min-w-0">
                <CompanyLink company={company} link={link} />
              </h3>
              <div className="flex-shrink-0">
                <WorkPeriod start={start} end={end} />
              </div>
            </div>

            {/* Line 2: Location */}
            {location && (
              <div className="flex items-center gap-x-1 text-lg text-gray-500 print:text-[10px]">
                <PinIcon size={16} className="flex-shrink-0" />
                {location}
              </div>
            )}

            {/* Line 3: Job title and skills */}
            <div className="flex items-center gap-x-4 text-xl">
              <h4 className="font-mono font-semibold leading-none print:text-[12px]">
                {title}
              </h4>
              <BadgeList
                className="hidden gap-x-3 lg:inline-flex"
                badges={badges}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-lg text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section className="mb-4">
      <h2 className="text-4xl font-bold mb-4" id="work-experience">
        Work Experience
      </h2>
      <div className="space-y-6 print:space-y-0" role="feed" aria-labelledby="work-experience">
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
