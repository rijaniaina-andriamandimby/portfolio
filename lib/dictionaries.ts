export const LANGS = ["en", "fr", "de", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const LANG_NAMES: Record<Lang, string> = { en: "English", fr: "Français", de: "Deutsch", es: "Español" };

const en = {
  nav: { profile: "Profile", skills: "Skills", projects: "Projects", education: "Education", contact: "Contact", contactMe: "Contact me", openMenu: "Open menu", closeMenu: "Close menu", light: "Switch to light mode", dark: "Switch to dark mode", language: "Language", top: "Back to top" },
  hero: { badge: "Available for opportunities", role: "Full Stack Developer", bio: "I am a curious, ambitious, and growth-oriented individual with a strong passion for technology and software engineering. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical solutions. Driven by continuous learning and self-improvement, I strive to build reliable, meaningful, and impactful software while constantly developing my technical and personal skills.", view: "View my projects", alt: "Portrait of Rijaniaina Andriamandimby", stats: { projects: "Projects", internships: "Internships", technologies: "Technologies" } },
  skills: { label: "Skills", title: "Technical stack", cats: { languages: "Languages", frontend: "Frontend", backend: "Backend", databases: "Databases", devops: "DevOps & CI/CD" }, basics: "basics", spokenTitle: "Languages spoken", spoken: { fr: "French", en: "English", mg: "Malagasy" }, native: "Native" },
  projects: { label: "Projects", title: "Experience & Achievements", photo: "photo", photos: "photos", open: "Open photos in a popup", prev: "Previous photo", next: "Next photo", goTo: "Go to photo", close: "Close",
    types: { hackathon: "Hackathon", freelance: "Freelance", internship: "3-month internship", academic: "Academic project", mobile: "Mobile app" },
    items: {
      "devhunt-eni": { title: "Dev Hunt – ENI Hackathon", place: "National School of Computer Science (ENI)", date: "April 2026", desc: "Participation in the internal hackathon of ENI." },
      "gestion-scolaire": { title: "School Management Web Application", place: "Andramasina General Education High School", date: "December 2025", desc: "Application to manage the students, subjects and teachers of the Andramasina high school." },
      "communication-interne": { title: "Internal Communication Platform", place: "Success MDG – Anosisoa, Antananarivo", date: "Sep – Nov 2025", desc: "Development of an internal communication and activity tracking platform for the company." },
      "villa-reservation": { title: "Website Redesign & Villa Booking App", place: "Polypus Corporation S.A", date: "Sep – Nov 2024", desc: "Improvement of the company website and development of a booking management application for their villas." },
      "gestion-restaurant": { title: "Restaurant Management", place: "ENI Fianarantsoa", date: "", desc: "Application to manage a restaurant (orders, menus, stock)." },
      "gestion-entretien": { title: "Maintenance Management", place: "ENI Fianarantsoa", date: "", desc: "Application to manage and follow maintenance operations." },
      "scan-documents": { title: "Administrative Document Scanner", place: "ENI Fianarantsoa", date: "", desc: "Mobile application to scan administrative documents." },
    } },
  education: { label: "Education", title: "Academic background", levels: { master: "Master's degree", bachelor: "Bachelor's degree", certificate: "Training certificate", highschool: "High school diploma" }, status: { progress: "In progress", completed: "Completed", certified: "Certified" },
    items: {
      master: { title: "Professional Master's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "Ongoing" },
      bachelor: { title: "Professional Bachelor's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "2022 – 2025" },
      office: { title: "Office Software & Graphic Design", school: "Antohomadinika Professional Training Institute", period: "October 2022" },
      english: { title: "English Language Training", school: "Madagascar Professional Training Center, Andranomena", period: "Jan – Aug 2022" },
      bac: { title: "Baccalaureate, Series C", school: "Notre Dame de l'Assomption Catholic High School, Mahitsy", period: "2020 – 2021" },
    } },
  contact: { label: "Contact", title: "Let's work together", intro: "Open to internships, freelance projects and job opportunities. Feel free to reach out.", send: "Send me an email", email: "Email", phone: "Phone", whatsapp: "WhatsApp", github: "GitHub", location: "Location" },
  footer: "Built with Next.js",
};
export type Dict = typeof en;

const fr: Dict = {
  nav: { profile: "Profil", skills: "Compétences", projects: "Projets", education: "Formation", contact: "Contact", contactMe: "Me contacter", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", light: "Passer en mode clair", dark: "Passer en mode sombre", language: "Langue", top: "Retour en haut" },
  hero: { badge: "Disponible pour de nouvelles opportunités", role: "Développeur Full Stack", bio: "Je suis une personne curieuse, ambitieuse et tournée vers la progression, avec une forte passion pour la technologie et le génie logiciel. J'aime résoudre des problèmes complexes, explorer de nouvelles technologies et transformer des idées en solutions concrètes. Animé par l'apprentissage continu et le dépassement de soi, je m'efforce de créer des logiciels fiables, utiles et à fort impact, tout en développant sans cesse mes compétences techniques et personnelles.", view: "Voir mes projets", alt: "Portrait de Rijaniaina Andriamandimby", stats: { projects: "Projets", internships: "Stages", technologies: "Technologies" } },
  skills: { label: "Compétences", title: "Stack technique", cats: { languages: "Langages", frontend: "Frontend", backend: "Backend", databases: "Bases de données", devops: "DevOps & CI/CD" }, basics: "bases", spokenTitle: "Langues parlées", spoken: { fr: "Français", en: "Anglais", mg: "Malgache" }, native: "Langue maternelle" },
  projects: { label: "Projets", title: "Expériences & Réalisations", photo: "photo", photos: "photos", open: "Ouvrir les photos en popup", prev: "Photo précédente", next: "Photo suivante", goTo: "Aller à la photo", close: "Fermer",
    types: { hackathon: "Hackathon", freelance: "Freelance", internship: "Stage de 3 mois", academic: "Projet académique", mobile: "Application mobile" },
    items: {
      "devhunt-eni": { title: "Dev Hunt – Hackathon ENI", place: "École Nationale d'Informatique (ENI)", date: "Avril 2026", desc: "Participation au hackathon interne de l'ENI." },
      "gestion-scolaire": { title: "Application web de gestion scolaire", place: "Lycée d'Enseignement Général d'Andramasina", date: "Décembre 2025", desc: "Application de gestion des étudiants, des matières et des enseignants du lycée d'Andramasina." },
      "communication-interne": { title: "Plateforme de communication interne", place: "Success MDG – Anosisoa, Antananarivo", date: "Sept. – Nov. 2025", desc: "Développement d'une plateforme de communication interne et de suivi des activités de l'entreprise." },
      "villa-reservation": { title: "Refonte de site web et application de réservation de villa", place: "Polypus Corporation S.A", date: "Sept. – Nov. 2024", desc: "Amélioration du site web de l'entreprise et développement d'une application de gestion des réservations de leurs villas." },
      "gestion-restaurant": { title: "Gestion de restaurant", place: "ENI Fianarantsoa", date: "", desc: "Application de gestion d'un restaurant (commandes, menus, stock)." },
      "gestion-entretien": { title: "Gestion d'entretien", place: "ENI Fianarantsoa", date: "", desc: "Application de gestion et de suivi des entretiens." },
      "scan-documents": { title: "Scan de documents administratifs", place: "ENI Fianarantsoa", date: "", desc: "Application mobile de numérisation de documents administratifs." },
    } },
  education: { label: "Formation", title: "Parcours académique", levels: { master: "Master", bachelor: "Licence", certificate: "Certificat de formation", highschool: "Diplôme de fin d'études secondaires" }, status: { progress: "En cours", completed: "Terminé", certified: "Certifié" },
    items: {
      master: { title: "Master professionnel en Génie Logiciel et Base de Données", school: "École Nationale d'Informatique (ENI) – Université de Fianarantsoa", period: "En cours" },
      bachelor: { title: "Licence professionnelle en Génie Logiciel et Base de Données", school: "École Nationale d'Informatique (ENI) – Université de Fianarantsoa", period: "2022 – 2025" },
      office: { title: "Bureautique et infographie", school: "Institut de Formation Professionnelle Antohomadinika", period: "Octobre 2022" },
      english: { title: "Formation en langue anglaise", school: "Madagascar Professional Training Center, Andranomena", period: "Janv. – Août 2022" },
      bac: { title: "Baccalauréat série C", school: "Lycée Catholique Notre Dame de l'Assomption, Mahitsy", period: "2020 – 2021" },
    } },
  contact: { label: "Contact", title: "Travaillons ensemble", intro: "Ouvert aux stages, aux projets freelance et aux opportunités d'emploi. N'hésitez pas à me contacter.", send: "M'envoyer un e-mail", email: "E-mail", phone: "Téléphone", whatsapp: "WhatsApp", github: "GitHub", location: "Localisation" },
  footer: "Réalisé avec Next.js",
};

const de: Dict = {
  nav: { profile: "Profil", skills: "Fähigkeiten", projects: "Projekte", education: "Ausbildung", contact: "Kontakt", contactMe: "Kontakt aufnehmen", openMenu: "Menü öffnen", closeMenu: "Menü schließen", light: "Zum hellen Modus wechseln", dark: "Zum dunklen Modus wechseln", language: "Sprache", top: "Nach oben" },
  hero: { badge: "Offen für neue Möglichkeiten", role: "Full-Stack-Entwickler", bio: "Ich bin ein neugieriger, ehrgeiziger und wachstumsorientierter Mensch mit großer Leidenschaft für Technologie und Softwareentwicklung. Ich löse gerne komplexe Probleme, erkunde neue Technologien und verwandle Ideen in praktische Lösungen. Angetrieben von kontinuierlichem Lernen und Selbstverbesserung strebe ich danach, zuverlässige, sinnvolle und wirkungsvolle Software zu entwickeln und dabei meine technischen und persönlichen Fähigkeiten stetig weiterzuentwickeln.", view: "Meine Projekte ansehen", alt: "Porträt von Rijaniaina Andriamandimby", stats: { projects: "Projekte", internships: "Praktika", technologies: "Technologien" } },
  skills: { label: "Fähigkeiten", title: "Technologie-Stack", cats: { languages: "Sprachen", frontend: "Frontend", backend: "Backend", databases: "Datenbanken", devops: "DevOps & CI/CD" }, basics: "Grundkenntnisse", spokenTitle: "Gesprochene Sprachen", spoken: { fr: "Französisch", en: "Englisch", mg: "Madagassisch" }, native: "Muttersprache" },
  projects: { label: "Projekte", title: "Erfahrung & Erfolge", photo: "Foto", photos: "Fotos", open: "Fotos im Popup öffnen", prev: "Vorheriges Foto", next: "Nächstes Foto", goTo: "Zu Foto", close: "Schließen",
    types: { hackathon: "Hackathon", freelance: "Freiberuflich", internship: "3-monatiges Praktikum", academic: "Akademisches Projekt", mobile: "Mobile App" },
    items: {
      "devhunt-eni": { title: "Dev Hunt – ENI-Hackathon", place: "Nationale Hochschule für Informatik (ENI)", date: "April 2026", desc: "Teilnahme am internen Hackathon der ENI." },
      "gestion-scolaire": { title: "Webanwendung zur Schulverwaltung", place: "Allgemeinbildendes Gymnasium Andramasina", date: "Dezember 2025", desc: "Anwendung zur Verwaltung der Schüler, Fächer und Lehrer des Gymnasiums von Andramasina." },
      "communication-interne": { title: "Interne Kommunikationsplattform", place: "Success MDG – Anosisoa, Antananarivo", date: "Sep. – Nov. 2025", desc: "Entwicklung einer internen Kommunikations- und Aktivitätsverfolgungsplattform für das Unternehmen." },
      "villa-reservation": { title: "Website-Relaunch & Villa-Buchungs-App", place: "Polypus Corporation S.A", date: "Sep. – Nov. 2024", desc: "Verbesserung der Unternehmenswebsite und Entwicklung einer Anwendung zur Verwaltung der Villenbuchungen." },
      "gestion-restaurant": { title: "Restaurantverwaltung", place: "ENI Fianarantsoa", date: "", desc: "Anwendung zur Verwaltung eines Restaurants (Bestellungen, Speisekarten, Lager)." },
      "gestion-entretien": { title: "Wartungsverwaltung", place: "ENI Fianarantsoa", date: "", desc: "Anwendung zur Verwaltung und Nachverfolgung von Wartungsarbeiten." },
      "scan-documents": { title: "Scanner für Verwaltungsdokumente", place: "ENI Fianarantsoa", date: "", desc: "Mobile Anwendung zum Scannen von Verwaltungsdokumenten." },
    } },
  education: { label: "Ausbildung", title: "Akademischer Werdegang", levels: { master: "Master", bachelor: "Bachelor", certificate: "Weiterbildungszertifikat", highschool: "Schulabschluss" }, status: { progress: "Laufend", completed: "Abgeschlossen", certified: "Zertifiziert" },
    items: {
      master: { title: "Berufsorientierter Master in Softwaretechnik und Datenbanken", school: "Nationale Hochschule für Informatik (ENI) – Universität Fianarantsoa", period: "Laufend" },
      bachelor: { title: "Berufsorientierter Bachelor in Softwaretechnik und Datenbanken", school: "Nationale Hochschule für Informatik (ENI) – Universität Fianarantsoa", period: "2022 – 2025" },
      office: { title: "Bürosoftware und Grafikdesign", school: "Berufsbildungsinstitut Antohomadinika", period: "Oktober 2022" },
      english: { title: "Englischkurs", school: "Madagascar Professional Training Center, Andranomena", period: "Jan. – Aug. 2022" },
      bac: { title: "Abitur, Serie C", school: "Katholisches Gymnasium Notre Dame de l'Assomption, Mahitsy", period: "2020 – 2021" },
    } },
  contact: { label: "Kontakt", title: "Lass uns zusammenarbeiten", intro: "Offen für Praktika, Freelance-Projekte und Stellenangebote. Melde dich gerne bei mir.", send: "E-Mail senden", email: "E-Mail", phone: "Telefon", whatsapp: "WhatsApp", github: "GitHub", location: "Standort" },
  footer: "Erstellt mit Next.js",
};

const es: Dict = {
  nav: { profile: "Perfil", skills: "Habilidades", projects: "Proyectos", education: "Formación", contact: "Contacto", contactMe: "Contáctame", openMenu: "Abrir menú", closeMenu: "Cerrar menú", light: "Cambiar a modo claro", dark: "Cambiar a modo oscuro", language: "Idioma", top: "Volver arriba" },
  hero: { badge: "Disponible para nuevas oportunidades", role: "Desarrollador Full Stack", bio: "Soy una persona curiosa, ambiciosa y orientada al crecimiento, con una gran pasión por la tecnología y la ingeniería de software. Disfruto resolviendo problemas complejos, explorando nuevas tecnologías y convirtiendo ideas en soluciones prácticas. Impulsado por el aprendizaje continuo y la superación personal, me esfuerzo por crear software fiable, útil y de impacto, desarrollando constantemente mis habilidades técnicas y personales.", view: "Ver mis proyectos", alt: "Retrato de Rijaniaina Andriamandimby", stats: { projects: "Proyectos", internships: "Prácticas", technologies: "Tecnologías" } },
  skills: { label: "Habilidades", title: "Stack técnico", cats: { languages: "Lenguajes", frontend: "Frontend", backend: "Backend", databases: "Bases de datos", devops: "DevOps y CI/CD" }, basics: "nociones", spokenTitle: "Idiomas hablados", spoken: { fr: "Francés", en: "Inglés", mg: "Malgache" }, native: "Lengua materna" },
  projects: { label: "Proyectos", title: "Experiencia y Logros", photo: "foto", photos: "fotos", open: "Abrir las fotos en una ventana", prev: "Foto anterior", next: "Foto siguiente", goTo: "Ir a la foto", close: "Cerrar",
    types: { hackathon: "Hackathon", freelance: "Freelance", internship: "Prácticas de 3 meses", academic: "Proyecto académico", mobile: "Aplicación móvil" },
    items: {
      "devhunt-eni": { title: "Dev Hunt – Hackathon ENI", place: "Escuela Nacional de Informática (ENI)", date: "Abril 2026", desc: "Participación en el hackathon interno de la ENI." },
      "gestion-scolaire": { title: "Aplicación web de gestión escolar", place: "Liceo de Enseñanza General de Andramasina", date: "Diciembre 2025", desc: "Aplicación para gestionar los estudiantes, las asignaturas y los profesores del liceo de Andramasina." },
      "communication-interne": { title: "Plataforma de comunicación interna", place: "Success MDG – Anosisoa, Antananarivo", date: "Sep. – Nov. 2025", desc: "Desarrollo de una plataforma de comunicación interna y seguimiento de actividades de la empresa." },
      "villa-reservation": { title: "Rediseño web y app de reservas de villas", place: "Polypus Corporation S.A", date: "Sep. – Nov. 2024", desc: "Mejora del sitio web de la empresa y desarrollo de una aplicación de gestión de reservas de sus villas." },
      "gestion-restaurant": { title: "Gestión de restaurante", place: "ENI Fianarantsoa", date: "", desc: "Aplicación para gestionar un restaurante (pedidos, menús, inventario)." },
      "gestion-entretien": { title: "Gestión de mantenimiento", place: "ENI Fianarantsoa", date: "", desc: "Aplicación para gestionar y dar seguimiento al mantenimiento." },
      "scan-documents": { title: "Escáner de documentos administrativos", place: "ENI Fianarantsoa", date: "", desc: "Aplicación móvil para escanear documentos administrativos." },
    } },
  education: { label: "Formación", title: "Trayectoria académica", levels: { master: "Máster", bachelor: "Grado", certificate: "Certificado de formación", highschool: "Diploma de bachillerato" }, status: { progress: "En curso", completed: "Completado", certified: "Certificado" },
    items: {
      master: { title: "Máster profesional en Ingeniería de Software y Bases de Datos", school: "Escuela Nacional de Informática (ENI) – Universidad de Fianarantsoa", period: "En curso" },
      bachelor: { title: "Grado profesional en Ingeniería de Software y Bases de Datos", school: "Escuela Nacional de Informática (ENI) – Universidad de Fianarantsoa", period: "2022 – 2025" },
      office: { title: "Ofimática y diseño gráfico", school: "Instituto de Formación Profesional Antohomadinika", period: "Octubre 2022" },
      english: { title: "Formación en lengua inglesa", school: "Madagascar Professional Training Center, Andranomena", period: "Ene. – Ago. 2022" },
      bac: { title: "Bachillerato, serie C", school: "Liceo Católico Notre Dame de l'Assomption, Mahitsy", period: "2020 – 2021" },
    } },
  contact: { label: "Contacto", title: "Trabajemos juntos", intro: "Abierto a prácticas, proyectos freelance y oportunidades laborales. No dudes en escribirme.", send: "Enviarme un correo", email: "Correo", phone: "Teléfono", whatsapp: "WhatsApp", github: "GitHub", location: "Ubicación" },
  footer: "Creado con Next.js",
};

export const dictionaries: Record<Lang, Dict> = { en, fr, de, es };
