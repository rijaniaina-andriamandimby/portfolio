import { Atom, Blocks, Boxes, Braces, Coffee, Container, Database, FileCode, GitBranch, HardDrive, Hexagon, Layers, Server, Terminal, Zap, Code, type LucideIcon } from "lucide-react";

// lucide-react has no brand logos, so each technology gets the closest semantic icon.
export const techIcons: Record<string, LucideIcon> = {
  Python: Terminal, Java: Coffee, JavaScript: Braces, TypeScript: FileCode,
  ReactJS: Atom, NextJS: Layers, NodeJS: Hexagon, ExpressJS: Server,
  Django: Blocks, "NestJS (basics)": Boxes, "FastAPI (basics)": Zap,
  PostgreSQL: Database, MySQL: HardDrive, Git: GitBranch, Docker: Container,
};
export const techIcon = (name: string): LucideIcon => techIcons[name] ?? Code;
