import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { ui } from "./ui";

export default function SectionHeader({ icon: Icon, num, label, title }: { icon: LucideIcon; num: string; label: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className={`${ui.label} mb-4 text-accent`}>{`// ${num} — ${label}`}</p>
      <div className="flex items-center gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded border border-line bg-surface text-accent sm:size-14"><Icon size={26} aria-hidden /></span>
        <h2 className={ui.h2}>{title}</h2>
      </div>
    </Reveal>
  );
}
