"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.href.slice(1)));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-elevated/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          <span className="text-accent-green">~/</span>haidar-shariefa
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-1.5 font-mono text-sm transition-colors",
                    isActive
                      ? "border-b-2 border-accent-green text-accent-green"
                      : "border-b-2 border-transparent text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block min-h-11 rounded-md px-3 py-2.5 font-mono text-sm",
                    isActive
                      ? "text-accent-green"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
