import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="01." title="About" id="about-heading" />
        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
          {profile.bio}
        </p>
      </Reveal>
    </section>
  );
}
