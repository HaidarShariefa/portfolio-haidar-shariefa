import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  title: string;
  id?: string;
  className?: string;
}

export function SectionHeading({
  index,
  title,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "flex items-baseline gap-3 font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
        className
      )}
    >
      <span className="text-accent-green" aria-hidden="true">
        {index}
      </span>
      {title}
    </h2>
  );
}
