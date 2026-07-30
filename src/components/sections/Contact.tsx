import { Mail, Phone } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { contactLinks } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
  phone: Phone,
};

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border"
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="07." title="Contact" id="contact-heading" />
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
          Have a project in mind or just want to say hi? Reach out through
          whichever channel works for you.
        </p>
        <TerminalWindow
          title="contact.sh"
          command="cat contact.txt"
          variant="compact"
          className="mt-8 max-w-xl"
        >
          <ul className="flex flex-col divide-y divide-border">
            {contactLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex min-h-11 items-center gap-3 py-3 font-mono text-sm text-muted transition-colors hover:text-accent-cyan"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
