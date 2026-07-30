import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border"
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="04."
          title="Experience"
          id="experience-heading"
        />
        <ol className="mt-8 flex max-w-2xl flex-col gap-6 border-l border-border">
          {experience.map((entry) => (
            <ExperienceItem key={`${entry.organization}-${entry.startDate}`} entry={entry} />
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
