import Link from "next/link";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="border-t border-border"
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="06." title="Blog" id="blog-heading" />
        <TerminalWindow
          title="blog/"
          command="ls blog/"
          variant="compact"
          className="mt-8 max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <p className="font-mono text-sm text-dim">no posts yet</p>
            <Badge variant="amber">Coming soon</Badge>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted">
            I&apos;m not writing here yet, but I do post software engineering
            content on{" "}
            <a
              href="https://www.instagram.com/haidar_shariefa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-cyan hover:underline"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              Instagram
            </a>
            {" "}in the meantime.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-block font-mono text-sm text-muted hover:text-foreground hover:underline"
          >
            visit /blog →
          </Link>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
