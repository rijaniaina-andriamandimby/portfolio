import { Code2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ui } from "./ui";

const items = [
  { icon: Mail, label: "Email", value: "rija.fam@gmail.com", href: "mailto:rija.fam@gmail.com" },
  { icon: Phone, label: "Phone", value: "038 18 368 00", href: "tel:+261381836800" },
  { icon: MessageCircle, label: "WhatsApp", value: "038 18 368 00", href: "tel:+261381836800" },
  { icon: Code2, label: "GitHub", value: "rijaniaina-andriamandimby", href: "https://github.com/rijaniaina-andriamandimby" },
  { icon: MapPin, label: "Location", value: "Ampasambazaha, Fianarantsoa", href: "" },
];

export default function Contact() {
  return (
    <section id="contact" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={Send} num="04" label="Contact" title="Let's work together" />
        <p className={`${ui.lead} mb-10 max-w-140`}>Open to internships, freelance projects and job opportunities. Feel free to reach out.</p>
        <div className={`${ui.grid} mb-10`}>
          {items.map((c) => {
            const body = (<><div className={ui.topLine} /><c.icon size={22} className="shrink-0 text-accent" aria-hidden /><div className="min-w-0"><div className={ui.small}>{c.label}</div><div className={`${ui.h3} wrap-break-word`}>{c.value}</div></div></>);
            const cls = `${ui.card} group flex items-center gap-4`;
            return c.href
              ? <a key={c.label} href={c.href} className={cls} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a>
              : <div key={c.label} className={cls}>{body}</div>;
          })}
        </div>
        <a href="mailto:rija.fam@gmail.com" className={ui.btn}><Mail size={14} aria-hidden />Send me an email</a>
      </div>
    </section>
  );
}
