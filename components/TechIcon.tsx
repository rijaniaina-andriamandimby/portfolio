import { Workflow } from "lucide-react";
import { siDjango, siDocker, siExpress, siFastapi, siGit, siGithub, siGithubactions, siJenkins, siKotlin, siJavascript, siMysql, siNestjs, siNextdotjs, siNodedotjs, siPostgresql, siPython, siReact, siTypescript } from "simple-icons";

type Icon = { path: string; hex: string };

// Real brand icons, bundled locally from simple-icons. Java was removed from simple-icons, so it uses a local SVG (public/icons/java.svg).
const icons: Record<string, Icon> = {
  Python: siPython, JavaScript: siJavascript, TypeScript: siTypescript, ReactJS: siReact, NextJS: siNextdotjs,
  NodeJS: siNodedotjs, ExpressJS: siExpress, Django: siDjango, "NestJS (basics)": siNestjs, "FastAPI (basics)": siFastapi,
  PostgreSQL: siPostgresql, MySQL: siMysql, Git: siGit, Docker: siDocker, Kotlin: siKotlin, Jenkins: siJenkins, "GitHub Actions": siGithubactions,
};

// Brand colours that would disappear on a dark (or light) background fall back to the text colour.
const isDark = (hex: string) => { const n = parseInt(hex, 16); return (0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255 < 0.25; };

export function SimpleIcon({ icon, size = 20, color, className }: { icon: Icon; size?: number; color?: string; className?: string }) {
  return (
    <svg role="img" aria-hidden viewBox="0 0 24 24" width={size} height={size} className={className} fill={color ?? (isDark(icon.hex) ? "currentColor" : `#${icon.hex}`)}>
      <path d={icon.path} />
    </svg>
  );
}

export const GithubIcon = ({ size = 16, className }: { size?: number; className?: string }) => <SimpleIcon icon={siGithub} size={size} color="currentColor" className={className} />;

export default function TechIcon({ name, size = 20 }: { name: string; size?: number }) {
  if (name === "Java") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/icons/java.svg" alt="" width={size} height={size} aria-hidden />;
  }
  if (name === "CI/CD Pipelines") return <Workflow size={size} className="text-accent" aria-hidden />; // no brand logo exists for a practice
  return icons[name] ? <SimpleIcon icon={icons[name]} size={size} /> : null;
}
