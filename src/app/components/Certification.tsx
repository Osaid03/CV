import React, { useState } from "react";
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
                        className="align-middle text-sm print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                    >
                        {badge}
                    </Badge>
                </li>
            ))}
        </ul>
    );
}



interface CertificationItemProps {
    certification: Certification;
}

/**
 * Modal component for certificate image view
 */
function CertificateModal({ isOpen, onClose, certificate }: { isOpen: boolean; onClose: () => void; certificate: Certification | null }) {
    if (!isOpen || !certificate) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
            <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
                >
                    ×
                </button>
                {certificate.image && (
                    <Image
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        width={800}
                        height={600}
                        className="max-w-full max-h-full object-contain rounded-lg"
                    />
                )}
            </div>
        </div>
    );
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification, onImageClick }: CertificationItemProps & { onImageClick: (cert: Certification) => void }) {
    const { title, issuer, date, description, badges, logo, image } = certification;

    return (
        <Card 
            className="py-1 print:py-0 text-center cursor-pointer hover:shadow-lg transition-shadow max-w-md mx-auto"
            onClick={() => onImageClick(certification)}
        >
            <CardHeader className="print:space-y-1">
                <div className="flex flex-col items-center gap-y-2 text-lg">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
                        {logo && (
                            <Image
                                src={logo}
                                alt={`${issuer || title} logo`}
                                width={32}
                                height={32}
                                className="rounded-sm object-contain print:w-4 print:h-4"
                            />
                        )}
                        <span>{title}</span>
                    </h3>
                    {date && (
                        <div
                            className="text-base tabular-nums text-gray-500"
                            aria-label={`Certification date: ${date}`}
                        >
                            {date}
                        </div>
                    )}
                    <BadgeList
                        className="flex gap-x-1 justify-center"
                        badges={badges || []}
                    />
                </div>

                {issuer && (
                    <h4 className="font-mono text-base font-semibold leading-none print:text-[12px] text-center">
                        {issuer}
                    </h4>
                )}
            </CardHeader>

            <CardContent className="text-center">
                <div className="mt-2 text-sm text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
                    {description}
                </div>
                <div className="mt-4 text-xs text-gray-400">
                    Click to view certificate
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
 * Renders a list of certifications in chronological order
 */
export function Certification({ certification }: CertificationProps) {
    const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (cert: Certification) => {
        setSelectedCertificate(cert);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <Section>
            <h2 className="text-4xl font-bold text-center mb-8" id="certification">
                Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto" role="feed" aria-labelledby="certification">
                {certification.map((item, idx) => (
                    <article key={idx} role="article">
                        <CertificationItem certification={item} onImageClick={handleImageClick} />
                    </article>
                ))}
            </div>
            <CertificateModal 
                isOpen={isModalOpen} 
                onClose={handleModalClose} 
                certificate={selectedCertificate} 
            />
        </Section>
    );
}

export default function CertificationSection() {
    return <Certification certification={RESUME_DATA.certification} />;
}
