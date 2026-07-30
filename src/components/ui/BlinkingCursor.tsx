import { cn } from "@/lib/utils";

interface BlinkingCursorProps {
  className?: string;
}

export function BlinkingCursor({ className }: BlinkingCursorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-[1em] w-[0.55ch] translate-y-[0.1em] animate-blink bg-accent-green align-middle motion-reduce:animate-none",
        className
      )}
    />
  );
}
