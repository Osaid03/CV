import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
}

function LocationLink({ location }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xl text-foreground">
      <span className="inline-flex gap-x-2 align-baseline leading-none">
        <MapPinIcon className="size-4" aria-hidden="true" />
        {location}
      </span>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-foreground/60 transition-colors"
    >
      <Icon className="size-8" aria-hidden="true" />
    </a>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div className="space-y-1 print:hidden">
      {/* Email with icon */}
      {contact.email && (
        <div className="flex items-center gap-x-2 font-mono text-xl text-foreground/80">
          <MailIcon className="size-4" aria-hidden="true" />
          <a
            href={`mailto:${contact.email}`}
            className="hover:underline"
            aria-label="Email"
          >
            {contact.email}
          </a>
        </div>
      )}
      
      {/* Phone with icon */}
      {contact.tel && (
        <div className="flex items-center gap-x-2 font-mono text-xl text-foreground/80">
          <PhoneIcon className="size-4" aria-hidden="true" />
          <a
            href={`tel:${contact.tel}`}
            className="hover:underline"
            aria-label="Phone"
          >
            {contact.tel}
          </a>
        </div>
      )}
      
      {/* Social buttons */}
      <div className="flex gap-x-6 pt-3" role="list" aria-label="Social links">
        {contact.social.map((social) => (
          <SocialButton
            key={social.name}
            href={social.url}
            icon={social.icon}
            label={social.name}
          />
        ))}
      </div>
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-2">
        <h1 className="text-5xl md:text-6xl font-bold" id="resume-name">
          {RESUME_DATA.name}
        </h1>
        <div
          className="max-w-4xl text-pretty font-mono text-xl text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          <p className="font-bold mb-4 text-2xl">First Class Cybersecurity Graduate & Full-Stack Developer</p>
          <p className="mb-4">Ethical Hacking • Pentesting • AppSec • Secure Flutter & Spring Boot</p>
        </div>

        <div className="space-y-1">
          <LocationLink
            location={RESUME_DATA.location}
          />

          <ContactButtons
            contact={RESUME_DATA.contact}
            personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
          />
        </div>

        <PrintContact
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-40 self-center sm:size-48" aria-hidden="true">
        <AvatarImage
          alt={`${RESUME_DATA.name}'s profile picture`}
          src={RESUME_DATA.avatarUrl}
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
