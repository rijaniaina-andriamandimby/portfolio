import { Handshake, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { GithubIcon } from "./TechIcon";
import Reveal from "./Reveal";
import { ui } from "./ui";

const items = [
  { icon: Mail, label: "Email", value: "rija.fam@gmail.com", href: "mailto:rija.fam@gmail.com" },
  { icon: Phone, label: "Phone", value: "038 183 600", href: "tel:+261381836000" },
  { icon: MessageCircle, label: "WhatsApp", value: "032 843 3393", href: "tel:+261328433393" },
  { icon: GithubIcon, label: "GitHub", value: "rijaniaina-andriamandimby", href: "https://github.com/rijaniaina-andriamandimby" },
  { icon: MapPin, label: "Location", value: "Ampasambazaha, Fianarantsoa", href: "" },
];

export default function Contact() {
  return (
    <section id="contact" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={Handshake} num="04" label="Contact" title="Let's work together" />
        <p className={`${ui.lead} mb-10 max-w-[560px]`}>Open to internships, freelance projects and job opportunities. Feel free to reach out.</p>
        <div className={`${ui.grid} mb-10`}>
          {items.map((c, i) => {
            const body = (<><div className={ui.topLine} /><c.icon size={22} className="shrink-0 text-accent" /><div className="min-w-0"><div className={ui.small}>{c.label}</div><div className={`${ui.h3} break-words`}>{c.value}</div></div></>);
            const cls = `${ui.card} group flex h-full items-center gap-4`;
            return <Reveal key={c.label} delay={(i % 3) * 90} className="h-full">{c.href
              ? <a href={c.href} className={cls} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a>
              : <div className={cls}>{body}</div>}</Reveal>;
          })}
        </div>
        <a href="mailto:rija.fam@gmail.com" className={ui.btn}><Mail size={14} aria-hidden />Send me an email</a>
      </div>
    </section>
  );
}
