import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";

import type { Dict } from "@/i18n/dictionaries";

// To add a project: add a line here, its texts in i18n/dictionaries/*.ts (projects.items) and its photos in public/projects/<slug>/1.webp, 2.webp...
// "n" = number of photos (0 = placeholder).
export type RawProject = { slug: keyof Dict["projects"]["items"]; kind: keyof Dict["projects"]["types"]; icon: LucideIcon; stack: string[]; n: number };

// Replace each "github" URL with the repository of the project.
export const projects: RawProject[] = [
  { slug: "gestion-scolaire", kind: "freelance", icon: Briefcase, stack: ["ReactJS", "Django", "PostgreSQL"], n: 6 },
  { slug: "communication-interne", kind: "internship", icon: Briefcase, stack: ["ReactJS", "ExpressJS", "PostgreSQL"], n: 6 },
  { slug: "villa-reservation", kind: "internship", icon: Briefcase, stack: [], n: 6 },
  { slug: "gestion-restaurant", kind: "academic", icon: GraduationCap, stack: [], n: 5 },
];
