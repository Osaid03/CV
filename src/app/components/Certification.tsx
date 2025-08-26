import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Certification = (typeof RESUME_DATA)["certification"][number];
type CertificationBadges = readonly string[];

interface BadgeListProps {
    className?: string;
    badges: CertificationBadges;
}

/**
 * Renders a list of badges for certification
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
    if (badges.length === 0) return null;

    return (
        <ul
            className={cn("inline-flex list-none gap-x-1 p-0", className)}
            aria-label="Certification categories"
        >
            {badges.map((badge) => (
                <li key={badge}>
                    <Badge
                        variant="secondary"
                        className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                    >
                        {badge}
                    </Badge>
                </li>
            ))}
        </ul>
    );
}

interface CertificationLinkProps {
    title: Certification["title"];
    link: Certification["link"];
}

/**
 * Renders certification title with optional link
 */
function CertificationLink({ title, link }: CertificationLinkProps) {
    if (!link) {
        return <span>{title}</span>;
    }

    return (
        <a
            className="hover:underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} certificate`}
        >
            {title}
        </a>
    );
}

interface CertificationItemProps {
    certification: Certification;
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
    const { title, issuer, date, description, link, badges, logo } = certification;

    return (
        <Card className="py-1 print:py-0">
            <CardHeader className="print:space-y-1">
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
                        {logo && (
                            <Image
                                src={logo}
                                alt={`${issuer || title} logo`}
                                width={24}
                                height={24}
                                className="rounded-sm object-contain print:w-4 print:h-4"
                            />
                        )}
                        <CertificationLink title={title} link={link} />
                        <BadgeList
                            className="hidden gap-x-1 sm:inline-flex"
                            badges={badges || []}
                        />
                    </h3>
                    {date && (
                        <div
                            className="text-sm tabular-nums text-gray-500"
                            aria-label={`Certification date: ${date}`}
                        >
                            {date}
                        </div>
                    )}
                </div>

                {issuer && (
                    <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
                        {issuer}
                    </h4>
                )}
            </CardHeader>

            <CardContent>
                <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
                    {description}
                </div>
                <div className="mt-2">
                    <BadgeList
                        className="-mx-2 flex-wrap gap-1 sm:hidden"
                        badges={badges || []}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

interface CertificationProps {
    certification: (typeof RESUME_DATA)["certification"];
}

/**
 * Main certification section component
 * Renders a list of certifications
 */
export function Certification({ certification }: CertificationProps) {
    return (
        <Section>
            <h2 className="text-xl font-bold" id="certification">
                Certification
            </h2>
            <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="certification">
                {certification.map((item, idx) => (
                    <article key={idx} role="article">
                        <CertificationItem certification={item} />
                    </article>
                ))}
            </div>
        </Section>
    );
}

export default function CertificationSection() {
    return <Certification certification={RESUME_DATA.certification} />;
}
