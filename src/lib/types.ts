export interface Project {
  slug: string;
  name: string;
  description: string;
  highlights?: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  screenshot?: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  current?: boolean;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "mail" | "phone";
}

export interface NavItem {
  label: string;
  href: string;
}
