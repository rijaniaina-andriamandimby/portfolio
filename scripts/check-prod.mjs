#!/usr/bin/env node
// Pre-deployment checks: `npm run predeploy`. Exit code 1 if a blocking problem is found.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const errors = [], warnings = [];
const read = (p) => readFileSync(p, "utf8");
const walk = (dir, out = []) => {
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

// 1. Public URL (canonical, sitemap, Open Graph)
let url = process.env.NEXT_PUBLIC_SITE_URL;
for (const f of [".env.production.local", ".env.production", ".env.local", ".env"]) {
  if (!url && existsSync(f)) url = read(f).match(/^NEXT_PUBLIC_SITE_URL=(.+)$/m)?.[1]?.trim();
}
if (!url) errors.push("NEXT_PUBLIC_SITE_URL is not set (canonical URL, sitemap and Open Graph would use localhost).");
else if (!url.startsWith("https://")) warnings.push(`NEXT_PUBLIC_SITE_URL should start with https:// (got "${url}").`);

// 2. Leftovers in the source code
const src = ["app", "components", "data", "i18n", "config"].flatMap((d) => walk(d)).filter((f) => [".ts", ".tsx"].includes(extname(f)));
for (const f of src) {
  read(f).split("\n").forEach((line, i) => {
    if (/console\.log|debugger/.test(line)) errors.push(`${f}:${i + 1} contains console.log / debugger`);
    if (/TODO|FIXME/.test(line)) warnings.push(`${f}:${i + 1} ${line.trim().slice(0, 70)}`);
  });
}

// 3. Required files
for (const f of ["public/profile.webp", "app/icon.svg", "config/site.ts"]) if (!existsSync(f)) errors.push(`Missing file: ${f}`);

// 4. Project photos declared in data/projects.ts must exist
const projects = read("data/projects.ts");
for (const m of projects.matchAll(/slug: "([^"]+)".*?n: (\d+)/g)) {
  const [, slug, n] = m;
  if (Number(n) === 0) { warnings.push(`Project "${slug}" has no photo (placeholder displayed).`); continue; }
  for (let i = 1; i <= Number(n); i++) if (!existsSync(`public/projects/${slug}/${i}.webp`)) errors.push(`Missing photo: public/projects/${slug}/${i}.webp`);
}

// 5. Heavy images
for (const f of walk("public")) if ([".png", ".jpg", ".jpeg", ".webp"].includes(extname(f)) && statSync(f).size > 500 * 1024) warnings.push(`${f} is ${(statSync(f).size / 1024) | 0} KB (> 500 KB): compress it.`);

console.log(errors.length ? "\n✖ Blocking problems" : "\n✔ No blocking problem");
errors.forEach((e) => console.log("  ✖", e));
if (warnings.length) { console.log("\n⚠ Warnings"); warnings.forEach((w) => console.log("  ⚠", w)); }
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)\n`);
process.exit(errors.length ? 1 : 0);
