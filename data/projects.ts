import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import { SITE } from "@/config/site";
import type { Dict } from "@/i18n/dictionaries";

// To add a project: add a line here, its texts in i18n/dictionaries/*.ts (projects.items) and its photos in public/projects/<slug>/1.webp, 2.webp...
// "n" = number of photos (0 = placeholder). Replace the GitHub URL by the repository of each project.
export type RawProject = { slug: keyof Dict["projects"]["items"]; kind: keyof Dict["projects"]["types"]; icon: LucideIcon; stack: string[]; n: number; github: string };

// Replace each "github" URL with the repository of the project.
const GH = SITE.contact.github;
export const projects: RawProject[] = [
  { slug: "gestion-scolaire", kind: "freelance", icon: Briefcase, stack: ["ReactJS", "Django", "PostgreSQL"], n: 6, github: GH },
  { slug: "communication-interne", kind: "internship", icon: Briefcase, stack: ["ReactJS", "ExpressJS", "PostgreSQL"], n: 5, github: GH },
  { slug: "villa-reservation", kind: "internship", icon: Briefcase, stack: [], n: 3, github: GH },
  { slug: "gestion-restaurant", kind: "academic", icon: GraduationCap, stack: [], n: 5, github: GH },
];
