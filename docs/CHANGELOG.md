# Changelog

## v15 – Qualité des images
**Type** : performance | design
- Nouvelles captures (1600×812, 22 fichiers) et nouveau portrait (528×898, WebP qualité 92, fond transparent).
- Cartes projets : WebP qualité 90 (AVIF retiré : il adoucit le texte fin des captures).
- Fenêtre d'agrandissement et portrait : fichiers servis sans recompression, jamais agrandis au-delà de leur taille native.
- Survol des cartes : zoom réduit (1.03) pour éviter le flou de rééchantillonnage.
**Fiche technique mise à jour** : oui

## v14 – Titre « Full Stack Developer (Python / JavaScript) », simplifications, défauts, curseur
**Type** : contenu | design | configuration
- Titre, description du Hero (4 langues) et SEO : « Full Stack Developer · Python / JavaScript » (retrait de « Software Engineer & Data Engineer »).
- Compétences : mot « basics » supprimé (NestJS, FastAPI).
- Projets : dates et bouton GitHub supprimés.
- Pied de page : mention « Built with Next.js » supprimée.
- Défauts : langue **anglaise** et thème **sombre** pour tout nouveau visiteur (indépendamment de son navigateur ou système) ; le choix fait ensuite est mémorisé.
- Nouveau curseur personnalisé (point + anneau), appareils tactiles et mouvement réduit exclus.
**Fiche technique mise à jour** : oui

## v13 – Titre « Software Engineer & Data Engineer », 4 projets, contact, animations
**Type** : contenu | design | SEO
- Titre, description du Hero (4 langues), SEO (titre, description, mots-clés, JSON-LD, image de partage) alignés sur « Software Engineer & Data Engineer ».
- Hero : suppression du badge « disponible… » et des statistiques ; ajout du bouton LinkedIn.
- Projets : 4 projets seulement (Gestion scolaire, Plateforme interne, Refonte Polypus, Gestion de restaurant), affichés 2 par 2 ; captures au format 2:1.
- Contact : email, GitHub et LinkedIn (logo local `public/icons/linkedin.svg`, absent de simple-icons) ; téléphone, WhatsApp et localisation supprimés (aussi du JSON-LD).
- Animations : titre qui monte, reflet du rôle, halos, inclinaison 3D du portrait, halo suiveur sur les cartes, cascade des compétences, frise qui se dessine, navigation par points, grands numéros de section, effets liés au scroll (amélioration progressive).
**Fiche technique mise à jour** : oui

## v12 – Structure, images, SEO, documentation
**Type** : structure | performance | SEO
- Nouvelle arborescence : `components/{layout,sections,ui}`, `data/`, `config/`, `i18n/dictionaries/` (un fichier par langue).
- Contacts centralisés dans `config/site.ts` (Contact, Hero, Navbar, SEO).
- Projets, compétences et formations extraits dans `data/`.
- `next/image` pour le portrait (priorité) et les captures de projets (AVIF/WebP, `sizes`, chargement différé).
- Vraies captures des projets (Gestion scolaire, Plateforme interne, Polypus, Restaurant) converties en WebP ; nouveau portrait détouré.
- Projets sans capture : encart « bientôt disponible » (4 langues).
- SEO : titre ≤ 60 car., description ≤ 160 car., JSON-LD Person + WebSite, jeton Search Console optionnel.
- Animations du Hero mises en pause hors écran.
- Script `npm run predeploy` (vérifications avant mise en ligne) et `npm run check`.
- Docs : fiche technique, modèle de fiche de modification, checklist de production.
**Fiche technique mise à jour** : oui
