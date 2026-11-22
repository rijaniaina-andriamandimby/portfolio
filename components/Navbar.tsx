"use client";
import { useEffect, useState } from "react";
import { Briefcase, FolderKanban, GraduationCap, Mail, Menu, User, Wrench, X } from "lucide-react";
import { useT } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { ui } from "./ui";

const links = [
  { key: "profile", href: "#profile", icon: User },
  { key: "skills", href: "#skills", icon: Wrench },
  { key: "projects", href: "#projects", icon: FolderKanban },
  { key: "education", href: "#education", icon: GraduationCap },
  { key: "contact", href: "#contact", icon: Briefcase },
] as const;

export default function Navbar() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40); // React skips the render when the value is unchanged
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Scroll-spy: highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.href.slice(1))).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Main" className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-[background-color,border-color] duration-300 sm:px-8 ${scrolled ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"}`}>
      <a href="#profile" className="text-[1.1rem] font-extrabold tracking-tight text-accent">RA<span className="text-fg">.</span></a>
      <div className="hidden gap-8 md:flex">
        {links.map((l) => {
          const on = active === l.href.slice(1);
          return (
            <a key={l.href} href={l.href} aria-current={on ? "true" : undefined}
              className={`${ui.label} relative inline-flex items-center gap-1.5 py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:text-accent ${on ? "text-accent after:scale-x-100" : "text-muted after:scale-x-0"}`}>
              <l.icon size={14} aria-hidden />{t.nav[l.key]}
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeToggle />
        <a href="mailto:rija.fam@gmail.com" className={`${ui.btn} hidden !px-5 !py-2 md:inline-flex`}><Mail size={14} aria-hidden />{t.nav.contactMe}</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="fixed inset-x-0 top-[60px] flex animate-fade-up flex-col gap-5 border-b border-line bg-bg2 px-8 py-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`${ui.h3} flex items-center gap-3 ${active === l.href.slice(1) ? "text-accent" : ""}`}><l.icon size={18} aria-hidden />{t.nav[l.key]}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
