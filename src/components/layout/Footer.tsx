import { Mail, Phone } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { contactLinks, profile } from "@/content/profile";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
  phone: Phone,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} {profile.name} — built with Next.js
        </p>

        <ul className="flex items-center gap-4">
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
                  aria-label={link.label}
                  className="flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-accent-cyan"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
