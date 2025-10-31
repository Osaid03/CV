import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  logo: string;
};

interface SkillsListProps {
  skills: Skills;
  className?: string;
}
type Skills = readonly Skill[]; // Update this to match the structure

function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {skills.map((skill) => (
        <li key={skill.name}> {/* Use skill.name as the key */}
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill.name}`}>
            {skill.name} {/* Pass only the name to Badge */}
          </Badge>
        </li>
      ))}
    </ul>
  );
}


interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section>
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {RESUME_DATA.skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="relative group flex items-center justify-center w-20 h-20"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 transition-transform group-hover:scale-125"
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-base font-medium bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
