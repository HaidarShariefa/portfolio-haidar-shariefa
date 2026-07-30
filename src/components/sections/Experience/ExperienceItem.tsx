import { ExperienceEntry } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1.5 left-0 size-2.5 rounded-full border-2",
          entry.current
            ? "border-accent-green bg-accent-green"
            : "border-border bg-background"
        )}
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="font-semibold text-foreground">{entry.role}</h3>
        {entry.current ? <Badge variant="amber">Current</Badge> : null}
      </div>
      <p className="mt-0.5 text-sm text-muted">
        {entry.organization} · {entry.employmentType}
      </p>
      <p className="mt-1 font-mono text-xs text-dim">
        {entry.startDate} — {entry.endDate}
      </p>
    </li>
  );
}
