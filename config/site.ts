// Single source of truth: identity, contact details and SEO defaults.
// Set NEXT_PUBLIC_SITE_URL in your hosting environment (see .env.example).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE = {
  name: "Rijaniaina Andriamandimby",
  title: "Rijaniaina Andriamandimby | Software Engineer & Data Engineer",
  description: "Portfolio of Rijaniaina Andriamandimby, Software Engineer & Data Engineer from Madagascar: web apps, databases and data pipelines with Python, Next.js and PostgreSQL.",
  jobTitle: "Software Engineer & Data Engineer",
  keywords: ["Rijaniaina Andriamandimby", "Software Engineer", "Data Engineer", "Full Stack Developer", "Data Pipelines", "Python", "ReactJS", "Next.js", "ExpressJS", "Django", "PostgreSQL", "Docker", "CI/CD", "Madagascar", "Fianarantsoa", "portfolio"],
  contact: {
    email: "rija.fam@gmail.com",
    github: "https://github.com/rijaniaina-andriamandimby", githubHandle: "rijaniaina-andriamandimby",
    linkedin: "https://www.linkedin.com/in/rijaniaina-andriamandimby-80905428b", linkedinHandle: "rijaniaina-andriamandimby",
  },
} as const;
