import { now } from "@/content/now";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Reveal } from "@/components/ui/Reveal";

export function Now() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="border-t border-border"
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="05." title="Now" id="now-heading" />
        <TerminalWindow
          title="ps aux | grep haidar"
          variant="compact"
          className="mt-8 max-w-2xl"
        >
          <p className="text-base leading-relaxed text-muted">{now.text}</p>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
