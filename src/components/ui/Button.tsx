import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles =
  "inline-flex items-center gap-2 rounded-md border border-accent-green px-4 py-2 font-mono text-sm text-accent-green transition-colors hover:bg-accent-green hover:text-background focus-visible:bg-accent-green focus-visible:text-background";

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  children: ReactNode;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ children, className, ...props }: ButtonProps) {
  if ("href" in props && props.href) {
    return (
      <a className={cn(styles, className)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(styles, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
