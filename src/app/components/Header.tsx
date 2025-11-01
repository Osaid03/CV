import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";
import { TypingAnimation } from "./TypingAnimation";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
}

function LocationLink({ location }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-base sm:text-xl text-foreground">
      <span className="inline-flex gap-x-2 align-baseline leading-none">
        <MapPinIcon className="size-3 sm:size-4" aria-hidden="true" />
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
      <Icon className="size-6 sm:size-8" aria-hidden="true" />
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
        <div className="flex items-center gap-x-2 font-mono text-base sm:text-xl text-foreground/80">
          <MailIcon className="size-3 sm:size-4" aria-hidden="true" />
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
        <div className="flex items-center gap-x-2 font-mono text-base sm:text-xl text-foreground/80">
          <PhoneIcon className="size-3 sm:size-4" aria-hidden="true" />
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
      <div className="flex gap-x-4 sm:gap-x-6 pt-2 sm:pt-3" role="list" aria-label="Social links">
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
    <header className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-1.5 sm:space-y-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold" id="resume-name">
          {RESUME_DATA.name}
        </h1>
        <div
          className="max-w-4xl text-pretty font-mono text-base sm:text-xl text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          <p className="font-bold mb-2 sm:mb-4 text-lg sm:text-2xl">
            <TypingAnimation 
              phrases={["First Class CyberSecurity Graduate", "Full-Stack Developer"]}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={1000}
            />
          </p>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">Java SpringBoot • Python FastAPI & Flutter Dart • Ethical Hacking • Pentesting • AppSec</p>
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

      <Avatar className="size-28 sm:size-40 md:size-48 self-center" aria-hidden="true">
        <AvatarImage
          alt={`${RESUME_DATA.name}'s profile picture`}
          src={RESUME_DATA.avatarUrl}
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
