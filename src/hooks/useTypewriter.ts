"use client";

import { useReducedMotion } from "motion/react";

export function useTypewriter(durationSeconds = 1.2) {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: shouldReduceMotion ? false : { width: 0 },
    animate: { width: "auto" as const },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: durationSeconds, ease: "linear" as const },
  };
}
