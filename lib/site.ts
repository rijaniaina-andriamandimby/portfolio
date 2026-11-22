// Set NEXT_PUBLIC_SITE_URL in your hosting environment (see .env.example).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE = {
  name: "Rijaniaina Andriamandimby",
  title: "Rijaniaina Andriamandimby — Full Stack Developer (ReactJS, ExpressJS, Django)",
  description: "Portfolio of Rijaniaina Andriamandimby, a Full Stack Developer from Madagascar building web applications with ReactJS, Next.js, ExpressJS, Django and PostgreSQL.",
  github: "https://github.com/rijaniaina-andriamandimby",
  email: "rija.fam@gmail.com",
};
