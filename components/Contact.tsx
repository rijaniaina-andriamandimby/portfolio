"use client";
import { Handshake, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useT } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { GithubIcon } from "./TechIcon";
import { ui } from "./ui";

const items = [
  { key: "email", icon: Mail, value: "rija.fam@gmail.com", href: "mailto:rija.fam@gmail.com" },
  { key: "phone", icon: Phone, value: "038 183 600", href: "tel:+261381836000" },
  { key: "whatsapp", icon: MessageCircle, value: "032 843 3393", href: "tel:+261328433393" },
  { key: "github", icon: GithubIcon, value: "rijaniaina-andriamandimby", href: "https://github.com/rijaniaina-andriamandimby" },
  { key: "location", icon: MapPin, value: "Ampasambazaha, Fianarantsoa", href: "" },
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
        <a href="mailto:rija.fam@gmail.com" className={ui.btn}><Mail size={14} aria-hidden />{t.contact.send}</a>
      </div>
    </section>
  );
}
