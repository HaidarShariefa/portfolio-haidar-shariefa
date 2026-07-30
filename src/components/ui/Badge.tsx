import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "amber";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs",
        variant === "default" &&
          "border-border bg-elevated text-muted",
        variant === "amber" &&
          "border-accent-amber/40 bg-accent-amber/10 text-accent-amber",
        className
      )}
    >
      {children}
    </span>
  );
}
