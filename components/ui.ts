// Shared Tailwind class strings: a single type scale, Roboto only.
export const ui = {
  h1: "text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1] tracking-[-0.03em]",
  h2: "text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.02em]",
  h3: "text-[1.05rem] font-bold leading-snug",
  lead: "text-[1rem] font-light leading-[1.8] text-fg/80",
  text: "text-[.88rem] leading-[1.7] text-muted",
  small: "text-[.78rem] text-muted",
  label: "text-[.72rem] font-medium uppercase tracking-[.12em]",
  wrap: "mx-auto w-full max-w-[1100px]",
  sec: "px-6 py-24",
  grid: "grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6",
  card: "relative overflow-hidden rounded border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_40px_rgba(0,0,0,.4)]",
  topLine: "absolute inset-x-0 top-0 h-[3px] bg-accent opacity-40 transition-opacity group-hover:opacity-100",
  row: "flex flex-wrap items-center gap-2",
  tag: "inline-flex items-center gap-1.5 rounded-sm border border-line bg-bg px-2.5 py-1 text-[.75rem]",
  btn: "inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3 text-[.78rem] font-bold uppercase tracking-[.06em] text-bg transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(207,210,214,.25)]",
  btnGhost: "inline-flex items-center gap-2 rounded-sm border border-line px-7 py-3 text-[.78rem] font-bold uppercase tracking-[.06em] text-fg transition-colors hover:border-accent hover:text-accent",
};
