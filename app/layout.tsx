import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n";
import { SITE, SITE_URL } from "@/config/site";
import SkipLink from "@/components/layout/SkipLink";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-roboto", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: `${SITE.name} — Portfolio`,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: `${SITE.name} — Portfolio`, title: SITE.title, description: SITE.description, locale: "en_US", alternateLocale: ["fr_FR", "de_DE", "es_ES"] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // Optional: paste the Google Search Console token in NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#e6e6e4" }, { media: "(prefers-color-scheme: dark)", color: "#2a2c2f" }],
};

// Structured data (schema.org): the person and the website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": `${SITE_URL}/#person`, name: SITE.name, url: SITE_URL, image: `${SITE_URL}/profile.webp`,
      email: `mailto:${SITE.contact.email}`, jobTitle: SITE.jobTitle, sameAs: [SITE.contact.github],
      address: { "@type": "PostalAddress", addressLocality: "Fianarantsoa", addressCountry: "MG" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "École Nationale d'Informatique, Université de Fianarantsoa" },
      knowsAbout: ["ReactJS", "Next.js", "ExpressJS", "Django", "PostgreSQL", "Docker", "CI/CD", "Jenkins", "GitHub Actions", "Python", "TypeScript", "Java", "Kotlin"],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: `${SITE.name} — Portfolio`, inLanguage: ["en", "fr", "de", "es"], publisher: { "@id": `${SITE_URL}/#person` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}` }} />
        <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body className={`${roboto.variable} overflow-x-hidden bg-bg font-sans text-base leading-relaxed text-fg antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
