import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], style: ["normal", "italic"], variable: "--font-roboto", display: "swap" });

export const metadata: Metadata = {
  title: "Rijaniaina Andriamandimby — Full Stack Developer",
  description: "Portfolio of Rijaniaina Andriamandimby, ReactJS / ExpressJS / Django developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body className={`${roboto.variable} overflow-x-hidden bg-bg font-sans text-base leading-relaxed text-fg antialiased`}>{children}</body>
    </html>
  );
}
