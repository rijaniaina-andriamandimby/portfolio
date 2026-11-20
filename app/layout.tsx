import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], style: ["normal", "italic"], variable: "--font-roboto", display: "swap" });

export const metadata: Metadata = {
  title: "Rijaniaina Andriamandimby — Développeur Full Stack",
  description: "Portfolio de Rijaniaina Andriamandimby, développeur ReactJS / ExpressJS / Django",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
