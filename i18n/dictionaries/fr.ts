import type { Dict } from "./types";

export const fr: Dict = {
  nav: { skip: "Aller au contenu", profile: "Profil", skills: "Compétences", projects: "Projets", education: "Formation", contact: "Contact", contactMe: "Me contacter", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", light: "Passer en mode clair", dark: "Passer en mode sombre", language: "Langue", top: "Retour en haut" },
  hero: { role: "Ingénieur logiciel & Data Engineer", bio: "Je suis ingénieur logiciel et data engineer, guidé par la curiosité et l'ambition, avec une forte passion pour la construction de systèmes fiables de bout en bout — des applications web et API aux bases de données et pipelines de données qui les alimentent. J'aime résoudre des problèmes complexes, explorer de nouvelles technologies et transformer des idées en solutions concrètes et à fort impact, tout en progressant sans cesse sur les plans technique et personnel.", scroll: "Faire défiler vers le bas", view: "Voir mes projets", alt: "Portrait de Rijaniaina Andriamandimby" },
  skills: { label: "Compétences", title: "Stack technique", cats: { languages: "Langages", frontend: "Frontend", backend: "Backend", databases: "Bases de données", devops: "DevOps & CI/CD" }, basics: "bases", spokenTitle: "Langues parlées", spoken: { fr: "Français", en: "Anglais", mg: "Malgache" }, native: "Langue maternelle" },
  projects: { label: "Projets", title: "Expériences & Réalisations", photo: "photo", photos: "photos", open: "Ouvrir les photos en popup", prev: "Photo précédente", next: "Photo suivante", goTo: "Aller à la photo", close: "Fermer", noPhotos: "Captures d'écran bientôt disponibles",
    types: { hackathon: "Hackathon", freelance: "Freelance", internship: "Stage de 3 mois", academic: "Projet académique", mobile: "Application mobile" },
    items: {
      "gestion-scolaire": { title: "Application web de gestion scolaire", place: "Lycée d'Enseignement Général d'Andramasina", date: "Décembre 2025", desc: "Application de gestion des étudiants, des matières et des enseignants du lycée d'Andramasina." },
      "communication-interne": { title: "Plateforme de communication interne", place: "Success MDG – Anosisoa, Antananarivo", date: "Sept. – Nov. 2025", desc: "Développement d'une plateforme de communication interne et de suivi des activités de l'entreprise." },
      "villa-reservation": { title: "Refonte de site web et application de réservation de villa", place: "Polypus Corporation S.A", date: "Sept. – Nov. 2024", desc: "Amélioration du site web de l'entreprise et développement d'une application de gestion des réservations de leurs villas." },
      "gestion-restaurant": { title: "Gestion de restaurant", place: "ENI Fianarantsoa", date: "", desc: "Application de gestion d'un restaurant (commandes, menus, stock)." },
    } },
  education: { label: "Formation", title: "Parcours académique", levels: { master: "Master", bachelor: "Licence", certificate: "Certificat de formation", highschool: "Diplôme de fin d'études secondaires" }, status: { progress: "En cours", completed: "Terminé", certified: "Certifié" },
    items: {
      master: { title: "Master professionnel en Génie Logiciel et Base de Données", school: "École Nationale d'Informatique (ENI) – Université de Fianarantsoa", period: "En cours" },
      bachelor: { title: "Licence professionnelle en Génie Logiciel et Base de Données", school: "École Nationale d'Informatique (ENI) – Université de Fianarantsoa", period: "2022 – 2025" },
      office: { title: "Bureautique et infographie", school: "Institut de Formation Professionnelle Antohomadinika", period: "Octobre 2022" },
      english: { title: "Formation en langue anglaise", school: "Madagascar Professional Training Center, Andranomena", period: "Janv. – Août 2022" },
      bac: { title: "Baccalauréat série C", school: "Lycée Catholique Notre Dame de l'Assomption, Mahitsy", period: "2020 – 2021" },
    } },
  contact: { label: "Contact", title: "Travaillons ensemble", intro: "Ouvert aux stages, aux projets freelance et aux opportunités d'emploi. N'hésitez pas à me contacter.", send: "M'envoyer un e-mail", email: "E-mail", github: "GitHub", linkedin: "LinkedIn" },
  footer: "Réalisé avec Next.js",
};
