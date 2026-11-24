import { Code2, Database, GitBranch, Monitor, Server } from "lucide-react";

// Names must match the keys of components/ui/TechIcon.tsx.
export const skills = [
  { key: "languages", icon: Code2, items: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin"] },
  { key: "frontend", icon: Monitor, items: ["ReactJS", "NextJS"] },
  { key: "backend", icon: Server, items: ["NodeJS", "ExpressJS", "Django", "NestJS", "FastAPI"] },
  { key: "databases", icon: Database, items: ["PostgreSQL", "MySQL"] },
  { key: "devops", icon: GitBranch, items: ["Git", "Docker", "Jenkins", "GitHub Actions", "CI/CD Pipelines"] },
] as const;

export const spoken = [{ key: "fr", level: "B2", pct: 72 }, { key: "en", level: "B1", pct: 55 }, { key: "mg", level: "", pct: 100 }] as const;
