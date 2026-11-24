// Single source of truth: identity, contact details and SEO defaults.
// Set NEXT_PUBLIC_SITE_URL in your hosting environment (see .env.example).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE = {
  name: "Rijaniaina Andriamandimby",
  title: "Rijaniaina Andriamandimby | Full Stack Developer (Python / JavaScript)",
  description: "Portfolio of Rijaniaina Andriamandimby, Full Stack Developer from Madagascar building web applications with Python, Django, JavaScript, React, Next.js and PostgreSQL.",
  jobTitle: "Full Stack Developer",
  keywords: ["Rijaniaina Andriamandimby", "Full Stack Developer", "Python", "JavaScript", "ReactJS", "Next.js", "ExpressJS", "Django", "PostgreSQL", "Docker", "CI/CD", "Madagascar", "portfolio"],
  contact: {
    email: "rija.fam@gmail.com",
    github: "https://github.com/rijaniaina-andriamandimby", githubHandle: "rijaniaina-andriamandimby",
    linkedin: "https://www.linkedin.com/in/rijaniaina-andriamandimby-80905428b", linkedinHandle: "rijaniaina-andriamandimby",
  },
} as const;
