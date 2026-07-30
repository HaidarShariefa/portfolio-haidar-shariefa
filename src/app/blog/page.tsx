import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog — Haidar Shariefa",
  description:
    "No posts yet — in the meantime, follow along on Instagram for software engineering content.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
      <h1 className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
        Blog
      </h1>
      <TerminalWindow title="blog/" command="ls blog/" className="mt-8">
        <div className="flex items-center gap-3">
          <p className="font-mono text-sm text-dim">no posts yet</p>
          <Badge variant="amber">Coming soon</Badge>
        </div>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
          Nothing written here yet, but I&apos;m planning to share notes on
          what I&apos;m building and what I run into along the way. In the
          meantime, I post software engineering content on{" "}
          <a
            href="https://www.instagram.com/haidar_shariefa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent-cyan hover:underline"
          >
            <InstagramIcon className="size-4" aria-hidden="true" />
            Instagram
          </a>
          .
        </p>
      </TerminalWindow>
      <Link
        href="/"
        className="mt-8 inline-block font-mono text-sm text-muted hover:text-foreground hover:underline"
      >
        ← back home
      </Link>
    </div>
  );
}
