# Checklist avant mise en production

Automatique : `npm run check` (typage + lint + build + `scripts/check-prod.mjs`).

## Configuration
- [ ] `NEXT_PUBLIC_SITE_URL=https://votre-domaine` défini sur l'hébergeur (canonique, sitemap, Open Graph)
- [ ] (optionnel) `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` renseigné
- [ ] Node ≥ 20.9
- [ ] HTTPS actif, domaine relié

## Contenu
- [ ] `config/site.ts` : email, téléphones, GitHub, ville exacts
- [ ] Photos des projets restants ajoutées (`n` mis à jour) ou encart « bientôt disponible » accepté
- [ ] 4 langues relues (idéalement par un natif pour DE et ES)

## Qualité
- [ ] Aucun `console.log` / `debugger` / TODO bloquant (`predeploy`)
- [ ] Mode clair ET sombre, sur mobile et desktop
- [ ] Navigation clavier (Tab, Échap dans la fenêtre d'images) et lien « Aller au contenu »
- [ ] Système en « réduire les animations » : le site reste lisible
- [ ] Lighthouse (mobile) : Performance, Accessibilité, SEO, Bonnes pratiques ≥ 90

## SEO après déploiement
- [ ] `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image` répondent 200
- [ ] Test du partage : https://www.opengraph.xyz ou LinkedIn Post Inspector
- [ ] Données structurées : https://validator.schema.org
- [ ] Google Search Console : ajouter le site, soumettre `sitemap.xml`

## Sécurité
- [ ] Aucun secret dans le dépôt (`.env*` ignorés par Git)
- [ ] En-têtes de sécurité actifs (`next.config.ts`) ; envisager une CSP si des scripts tiers sont ajoutés
