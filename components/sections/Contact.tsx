"use client";
import { Handshake, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/config/site";
import { useT } from "@/i18n";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/TechIcon";
import { ui } from "@/components/ui/styles";


const { contact } = SITE;
const items = [
  { key: "email", icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
  { key: "phone", icon: Phone, value: contact.phone, href: contact.phoneHref },
  { key: "whatsapp", icon: MessageCircle, value: contact.whatsapp, href: contact.whatsappHref },
  { key: "github", icon: GithubIcon, value: contact.githubHandle, href: contact.github },
  { key: "location", icon: MapPin, value: contact.location, href: "" },
] as const;

export default function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={Handshake} num="04" label={t.contact.label} title={t.contact.title} />
        <p className={`${ui.lead} mb-10 max-w-[560px]`}>{t.contact.intro}</p>
        <div className={`${ui.grid} mb-10`}>
          {items.map((c, i) => {
            const body = (<><div className={ui.topLine} /><c.icon size={22} className="shrink-0 text-accent" /><div className="min-w-0"><div className={ui.small}>{t.contact[c.key]}</div><div className={`${ui.h3} break-words`}>{c.value}</div></div></>);
            const cls = `${ui.card} group flex h-full items-center gap-4`;
            return (
              <Reveal key={c.key} delay={(i % 3) * 90} className="h-full">
                {c.href
                  ? <a href={c.href} className={cls} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a>
                  : <div className={cls}>{body}</div>}
              </Reveal>
            );
          })}
        </div>
        <a href={`mailto:${contact.email}`} className={ui.btn}><Mail size={14} aria-hidden />{t.contact.send}</a>
      </div>
    </section>
  );
}
