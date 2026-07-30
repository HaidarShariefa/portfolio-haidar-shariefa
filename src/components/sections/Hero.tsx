"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { BlinkingCursor } from "@/components/ui/BlinkingCursor";
import { Button } from "@/components/ui/Button";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Hero() {
  const typewriter = useTypewriter(1.2);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-stretch md:gap-10">
        <TerminalWindow
          title="intro.sh"
          command="whoami"
          className="w-full flex-1"
        >
          <p className="font-mono text-sm text-muted">{profile.role}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-accent-cyan sm:text-xl">
            <motion.span
              className="inline-block overflow-hidden whitespace-nowrap align-bottom"
              {...typewriter}
            >
              {profile.tagline}
            </motion.span>
            <BlinkingCursor className="ml-1" />
          </p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
            {profile.shortBio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View projects</Button>
            <Button href="#contact">Get in touch</Button>
          </div>
        </TerminalWindow>

        <TerminalWindow
          title="avatar.jpg"
          variant="compact"
          className="w-48 shrink-0 self-center sm:w-56 md:w-64 md:self-start"
          contentClassName="p-2 sm:p-2.5"
        >
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 16rem, 12rem"
              className="object-cover"
              priority
            />
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
