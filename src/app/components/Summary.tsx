import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={`mt-16 ${className || ''}`}>
      <h2 className="text-4xl font-bold mb-4" id="about-section">
        About
      </h2>
      <div
        className="text-pretty font-mono text-xl text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
