// Single source of truth: identity, contact details and SEO defaults.
// Set NEXT_PUBLIC_SITE_URL in your hosting environment (see .env.example).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE = {
  name: "Rijaniaina Andriamandimby",
  title: "Rijaniaina Andriamandimby | Full Stack Developer",
  description: "Portfolio of Rijaniaina Andriamandimby, Full Stack Developer from Madagascar: web apps with ReactJS, Next.js, ExpressJS, Django and PostgreSQL.",
  jobTitle: "Full Stack Developer",
  keywords: ["Rijaniaina Andriamandimby", "Full Stack Developer", "ReactJS", "Next.js", "ExpressJS", "Django", "PostgreSQL", "Docker", "CI/CD", "Madagascar", "Fianarantsoa", "portfolio"],
  contact: {
    email: "rija.fam@gmail.com",
    phone: "038 183 600", phoneHref: "tel:+261381836000",
    whatsapp: "032 843 3393", whatsappHref: "tel:+261328433393",
    github: "https://github.com/rijaniaina-andriamandimby", githubHandle: "rijaniaina-andriamandimby",
    location: "Ampasambazaha, Fianarantsoa",
  },
} as const;
