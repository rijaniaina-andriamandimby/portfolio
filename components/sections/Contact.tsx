"use client";
import { Handshake, Mail } from "lucide-react";
import { SITE } from "@/config/site";
import { useT } from "@/i18n";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/TechIcon";
import { ui } from "@/components/ui/styles";

const { contact } = SITE;
const items = [
  { key: "email", icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
  { key: "github", icon: GithubIcon, value: contact.githubHandle, href: contact.github },
  { key: "linkedin", icon: LinkedinIcon, value: contact.linkedinHandle, href: contact.linkedin },
] as const;

export default function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={Handshake} num="04" label={t.contact.label} title={t.contact.title} />
        <Reveal><p className={`${ui.lead} mb-10 max-w-[560px]`}>{t.contact.intro}</p></Reveal>
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.key} delay={i * 110} className="h-full">
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${ui.card} group flex h-full items-center gap-4`}>
                <div className={ui.topLine} />
                <c.icon size={28} className="shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" />
                <div className="min-w-0"><div className={ui.small}>{t.contact[c.key]}</div><div className={`${ui.h3} break-words`}>{c.value}</div></div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={350}><a href={`mailto:${contact.email}`} className={ui.btn}><Mail size={14} aria-hidden />{t.contact.send}</a></Reveal>
      </div>
    </section>
  );
}
