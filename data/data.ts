export type Project = {
  slug: string; title: string; place: string; kind: string; date: string;
  description: string; stack: string[]; images: string[];
};

export const about =
  "I am a curious, ambitious, and growth-oriented individual with a strong passion for technology and software engineering. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical solutions. Driven by continuous learning and self-improvement, I strive to build reliable, meaningful, and impactful software while constantly developing my technical and personal skills.";

export const skills: Record<string, string[]> = {
  Langages: ["Python", "Java", "JavaScript", "TypeScript"],
  "Front-end": ["React.js", "Next.js"],
  "Back-end": ["Node.js", "Express.js", "Django", "FastAPI (bases)", "NestJS (bases)"],
  "Bases de données": ["PostgreSQL", "MySQL"],
  Outils: ["Git", "Docker"],
};

// Ajoutez vos images dans public/projects/<slug>/1.jpg, 2.jpg, 3.jpg ...
const imgs = (slug: string, n = 3) => Array.from({ length: n }, (_, i) => `/projects/${slug}/${i + 1}.jpg`);

export const experiences: Project[] = [
  {
    slug: "devhunt-eni", title: "Dev Hunt – ENI", place: "École Nationale d'Informatique", kind: "Hackathon",
    date: "Avril 2026", description: "Participation au hackathon interne de l'ENI.",
    stack: [], images: imgs("devhunt-eni"),
  },
  {
    slug: "gestion-scolaire", title: "Application web de gestion scolaire",
    place: "Lycée d'Enseignement Général d'Andramasina", kind: "Freelance", date: "Décembre 2025",
    description: "Application de gestion des étudiants, des matières et des enseignants du lycée d'Andramasina.",
    stack: ["React.js", "Django", "PostgreSQL"], images: imgs("gestion-scolaire"),
  },
  {
    slug: "communication-interne", title: "Plateforme de communication interne",
    place: "Success MDG – Anosisoa, Antananarivo", kind: "Stage de 3 mois", date: "Sept. – Nov. 2025",
    description: "Développement d'une plateforme de communication interne et de suivi des activités de l'entreprise.",
    stack: ["React.js", "Express.js", "PostgreSQL"], images: imgs("communication-interne"),
  },
  {
    slug: "villa-reservation", title: "Refonte de site web et application de réservation de villa",
    place: "Polypus Corporation S.A", kind: "Stage de 3 mois", date: "Sept. – Nov. 2024",
    description: "Amélioration du site web de l'entreprise et développement d'une application de gestion de réservation de leurs villas.",
    stack: [], images: imgs("villa-reservation"),
  },
];

export const academicProjects: Project[] = [
  { slug: "gestion-restaurant", title: "Gestion de restaurant", place: "ENI Fianarantsoa", kind: "Projet académique", date: "",
    description: "Application de gestion d'un restaurant (commandes, menus, stock).", stack: [], images: imgs("gestion-restaurant") },
  { slug: "gestion-entretien", title: "Gestion d'entretien", place: "ENI Fianarantsoa", kind: "Projet académique", date: "",
    description: "Application de gestion et de suivi des entretiens.", stack: [], images: imgs("gestion-entretien") },
  { slug: "scan-documents", title: "Scan de documents administratifs", place: "ENI Fianarantsoa", kind: "Application mobile", date: "",
    description: "Application mobile de numérisation de documents administratifs.", stack: [], images: imgs("scan-documents") },
];

export const education = [
  { title: "Master professionnel en Génie Logiciel et Base de Données", place: "École Nationale d'Informatique, Université de Fianarantsoa", date: "En cours" },
  { title: "Licence professionnelle en Génie Logiciel et Base de Données", place: "École Nationale d'Informatique, Université de Fianarantsoa", date: "2022 – 2025" },
  { title: "Formation en bureautique et infographie", place: "Institut de Formation Professionnelle Antohomadinika", date: "Octobre 2022" },
  { title: "Formation en langue anglaise", place: "Madagascar Professional Training Center, Andranomena", date: "Janv. – Août 2022" },
  { title: "Baccalauréat série C", place: "Lycée Catholique Notre Dame de l'Assomption, Mahitsy", date: "2020 – 2021" },
];
