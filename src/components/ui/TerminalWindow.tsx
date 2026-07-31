import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  command?: string;
  children: ReactNode;
  variant?: "default" | "compact";
  className?: string;
  contentClassName?: string;
}

export function TerminalWindow({
  title,
  command,
  children,
  variant = "default",
  className,
  contentClassName,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border bg-surface",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-elevated px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-dot-red" />
          <span className="size-3 rounded-full bg-dot-yellow" />
          <span className="size-3 rounded-full bg-dot-green" />
        </span>
        {title ? (
          <span className="truncate font-mono text-xs text-muted sm:text-sm">
            {title}
          </span>
        ) : null}
      </div>

      {command ? (
        <div className="border-b border-border px-4 py-2 font-mono text-xs sm:text-sm">
          <span className="text-accent-green">$</span>{" "}
          <span className="text-foreground">{command}</span>
        </div>
      ) : null}

      <div
        className={cn(
          variant === "compact" ? "p-4 sm:p-5" : "p-5 sm:p-8",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
