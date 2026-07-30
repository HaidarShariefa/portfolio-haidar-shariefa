import { cn } from "@/lib/utils";

interface TerminalPromptProps {
  command: string;
  className?: string;
}

export function TerminalPrompt({ command, className }: TerminalPromptProps) {
  return (
    <p className={cn("font-mono text-sm", className)}>
      <span className="text-accent-green">$</span>{" "}
      <span className="text-muted">{command}</span>
    </p>
  );
}
