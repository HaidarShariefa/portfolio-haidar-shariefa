import { ContactLink } from "@/lib/types";

export const profile = {
  name: "Haidar Shariefa",
  role: "Software Engineer",
  tagline: "Building Digital Experiences",
  avatar: "/avatar.svg",
  shortBio:
    "I like turning rough ideas into real, working products — the kind with actual users, not just a demo.",
  bio: "I'm a software engineer who likes turning rough ideas into real, working products — from an AI-assisted marketplace to a restaurant ordering system used by actual customers. I care about the unglamorous parts of shipping: authentication that holds up, APIs that don't fall over under load, and code that still makes sense six months later. My background spans freelance client work, in-house full-stack development, and IT support — which means I've usually got a decent sense of both how something should work and what tends to break in practice. Currently freelancing and always building something new.",
  email: "haidar.shariefa.dev@gmail.com",
  phone: "+96178986316",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: "phone",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/HaidarShariefa",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/haidarshariefa",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/haidar_shariefa",
    icon: "instagram",
  },
];
