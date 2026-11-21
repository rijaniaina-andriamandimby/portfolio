import type { LucideIcon } from "lucide-react";
import { ui } from "./ui";

export default function SectionHeader({ icon: Icon, num, label, title }: { icon: LucideIcon; num: string; label: string; title: string }) {
  return (
    <div className="mb-14">
      <p className={`${ui.label} mb-3 flex items-center gap-2 text-accent`}><Icon size={16} aria-hidden />{`// ${num} — ${label}`}</p>
      <h2 className={ui.h2}>{title}</h2>
    </div>
  );
}
