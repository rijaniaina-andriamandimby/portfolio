"use client";
import { useT } from "@/lib/i18n";
import { ui } from "./ui";

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-line px-6 py-8 text-center">
      <p className={ui.small}>© 2026 Rijaniaina Andriamandimby · {t.footer}</p>
    </footer>
  );
}
