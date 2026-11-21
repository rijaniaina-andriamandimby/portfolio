"use client";
import { useEffect, useState } from "react";
import { Briefcase, FolderKanban, GraduationCap, Mail, Menu, User, Wrench, X } from "lucide-react";
import { ui } from "./ui";

const links = [
  { label: "Profile", href: "#profile", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Briefcase },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav aria-label="Main" className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${scrolled ? "border-b border-line bg-bg/90 backdrop-blur-md" : ""}`}>
      <a href="#" className="text-[1.1rem] font-extrabold tracking-tight text-accent">RA<span className="text-fg">.</span></a>
      <div className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={`${ui.label} inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent`}><l.icon size={14} aria-hidden />{l.label}</a>
        ))}
      </div>
      <a href="mailto:rija.fam@gmail.com" className={`${ui.btn} hidden !px-5 !py-2 md:inline-flex`}><Mail size={14} aria-hidden />Contact me</a>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-[60px] flex flex-col gap-5 border-b border-line bg-bg2 px-8 py-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`${ui.h3} flex items-center gap-3`}><l.icon size={18} aria-hidden />{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
