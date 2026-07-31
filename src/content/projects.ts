import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "lal-be3-ai",
    name: "Lal Be3 AI",
    description:
      '"Lal Be3" (لَلْبِيع) is Lebanese Arabic for "for sale." A full-stack, AI-assisted marketplace app — a focused, from-scratch take on Facebook Marketplace or OLX, with one twist: upload a photo of what you\'re selling and AI drafts the title, description, and category for you, then can turn that same photo into a clean, studio-style product shot.',
    highlights: [
      "Real authentication, a real database, and real file storage — not a demo stack",
      "Two separate AI integrations solving two different problems",
      "Engineered around production rough edges: a hanging SDK call, a shared API quota to protect, and a stale-session bug",
    ],
    tech: ["Next.js 16", "TypeScript", "MongoDB", "NextAuth v5", "Vercel Blob"],
    // liveUrl: "",
    // repoUrl: "",
    screenshot: "/projects/lal-be3-ai.png",
  },
  {
    slug: "foodify",
    name: "Foodify",
    description:
      "A full-featured restaurant QR management system with a modern UI/UX. Foodify provides a comprehensive admin panel for managing a restaurant's menu and an elegant customer-facing interface for seamless order placement, with automatic WhatsApp integration.",
    tech: ["React", "Firebase", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    // liveUrl: "",
    // repoUrl: "",
    screenshot: "/projects/foodify.png",
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    description:
      "A robust full-stack web application designed to streamline task management, user administration, and reporting. Built with the MERN stack and styled with Tailwind CSS.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    // liveUrl: "",
    // repoUrl: "",
    screenshot: "/projects/task-manager.png",
  },
];
