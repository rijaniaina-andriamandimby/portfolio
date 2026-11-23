import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ui } from "@/components/ui/styles";

export default function SectionHeader({ icon: Icon, num, label, title }: { icon: LucideIcon; num: string; label: string; title: string }) {
  return (
    <Reveal className="relative mb-14">
      {/* Big outlined number: drifts slowly while scrolling (CSS scroll-driven animation, optional) */}
      <span aria-hidden className="section-num pointer-events-none absolute -top-8 right-0 z-0 select-none text-[clamp(5rem,16vw,11rem)] font-black leading-none text-transparent [-webkit-text-stroke:1px_var(--line)]">{num}</span>
      <div className="relative z-10">
        <p className={`${ui.label} mb-4 text-accent`}>{`// ${num} — ${label}`}</p>
        <div className="flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded border border-line bg-surface text-accent sm:size-14"><Icon size={26} aria-hidden /></span>
          <h2 className={ui.h2}>{title}</h2>
        </div>
      </div>
    </Reveal>
  );
}
