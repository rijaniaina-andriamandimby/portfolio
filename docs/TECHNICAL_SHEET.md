# Fiche technique – Portfolio Rijaniaina Andriamandimby

> À relire et à mettre à jour à chaque modification (voir `CHANGE_SHEET_TEMPLATE.md`).

## 1. Stack
| Élément | Choix |
|---|---|
| Framework | Next.js 16 (App Router, pages statiques) · React 19 · TypeScript |
| Style | Tailwind CSS 4 (thème dans `app/globals.css`, classes partagées dans `components/ui/styles.ts`) |
| Icônes | `lucide-react` (interface) + `simple-icons` (logos de technologies, en local) |
| Police | Roboto via `next/font/google` (auto-hébergée par Next) |
| Images | `next/image` (AVIF/WebP automatiques, tailles responsives, chargement différé) |
| Langues | EN · FR · DE · ES, sans bibliothèque (`i18n/`) ; **anglais par défaut** (le choix du visiteur est mémorisé) |
| Thème | clair / sombre, attribut `data-theme` sur `<html>` ; **sombre par défaut** (le choix du visiteur est mémorisé) |

## 2. Structure du projet
```
app/                 Routes et fichiers Next uniquement
  layout.tsx           métadonnées SEO, JSON-LD, police, thème (script anti-flash), fournisseur de langue
  page.tsx             assemble les sections
  globals.css          variables de couleurs (clair/sombre), animations (keyframes), .reveal
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg not-found.tsx error.tsx
components/
  layout/              Navbar, Footer, SkipLink, ScrollProgress, ThemeToggle, LanguageSwitcher
  sections/            Hero, Skills, Projects, Education, Contact (une section = un fichier)
  ui/                  Reveal (animation au scroll), SectionHeader, TechIcon, styles.ts
config/site.ts       Identité, contacts, titre/description SEO  ← source unique
data/                projects.ts, skills.ts, education.ts  (données sans texte traduit)
i18n/                index.tsx (fournisseur + hook useT) et dictionaries/{en,fr,de,es}.ts
public/              profile.webp, icons/, projects/<slug>/1.webp, 2.webp...
scripts/check-prod.mjs   vérifications avant déploiement
docs/                cette fiche, modèle de fiche de modification, changelog, checklist
```
Règle : **les données vont dans `data/` et `config/`, les textes dans `i18n/`, l'affichage dans `components/`.**

## 3. Recettes de modification
| Je veux… | Je modifie |
|---|---|
| Changer email / GitHub / LinkedIn | `config/site.ts` (email, GitHub, LinkedIn : repris par Contact, Hero, Navbar et le SEO) |
| Changer un texte (4 langues) | `i18n/dictionaries/en.ts` puis `fr.ts`, `de.ts`, `es.ts` (TypeScript signale une clé manquante) |
| Ajouter un projet (affichés 2 par 2) | 1) une ligne dans `data/projects.ts` (slug, type, icône, stack, `n` = nombre de photos) 2) ses textes dans `projects.items` des 4 dictionnaires 3) ses photos dans `public/projects/<slug>/1.webp…` |
| Ajouter une photo à un projet | déposer `N.webp` dans le dossier du projet et augmenter `n` dans `data/projects.ts` |
| Ajouter une technologie | `data/skills.ts` (nom) + son icône dans `components/ui/TechIcon.tsx` (`simple-icons`) |
| Ajouter une étape de formation | `data/education.ts` + `education.items` dans les 4 dictionnaires |
| Changer les couleurs | variables `--bg`, `--accent`… dans `app/globals.css` (bloc clair `:root`, bloc sombre `[data-theme="dark"]`) |
| Ajouter une langue | créer `i18n/dictionaries/xx.ts` (type `Dict`), l'ajouter dans `i18n/dictionaries/index.ts` (`LANGS`, `LANG_NAMES`, `dictionaries`) |
| Modifier le SEO | `config/site.ts` (titre, description, mots-clés) et `app/layout.tsx` (Open Graph, JSON-LD) |
| Changer la photo de profil | remplacer `public/profile.webp` (PNG/WebP transparent, vertical) et ajuster `width`/`height` dans `components/sections/Hero.tsx` |

Photos de projets : exporter en WebP **qualité ≥ 90**, **1600 px de large minimum** (2400–3200 px pour des écrans Retina très nets), ratio 2:1 conseillé (≈ 1600×812). Les cartes utilisent l'image optimisée par Next (WebP, qualité 90) ; la fenêtre d'agrandissement affiche le fichier d'origine sans recompression (`unoptimized`), limité à sa taille native. Si vous fournissez des fichiers plus larges, augmentez `max-w-[1600px]` dans `Projects.tsx`. Aucune photo (`n: 0`) = un encart « bientôt disponible » est affiché.

## 4. Animations : ce qui est utilisé
**Aucune bibliothèque d'animation** (pas de framer-motion / GSAP) : zéro Ko de JavaScript en plus.
| Effet | Technique | Où |
|---|---|---|
| Titre du Hero (mots qui montent), reflet du rôle, halos qui dérivent, défilement « souris » | Animations CSS (`rise`, `shimmer`, `drift`, `animate-bounce`) | `Hero.tsx`, `globals.css` |
| Inclinaison 3D du portrait au mouvement de la souris | `pointermove` + `requestAnimationFrame` (appareils tactiles exclus) | `Hero.tsx` |
| Halo lumineux qui suit le curseur sur les cartes | un seul écouteur global qui met à jour `--mx/--my` ; dégradé radial CSS | `components/ui/Spotlight.tsx`, `.spot` |
| Curseur personnalisé (point + anneau qui le suit, s'agrandit sur les liens, se réduit au clic) | `pointermove` + `requestAnimationFrame` ; natif conservé sur tactile et en mouvement réduit | `components/ui/Cursor.tsx`, `html.has-cursor` |
| Navigation par points (section courante) | `IntersectionObserver` | `components/layout/SectionDots.tsx` |
| Grand numéro de section, axe de la frise qui se dessine, disparition du Hero au scroll | CSS scroll-driven animations (`animation-timeline: view()`), amélioration progressive (ignorées si non supportées ou si mouvement réduit) | `globals.css` |
| Cascade des pastilles de compétences, point de frise qui « pop », fondu entre photos | `Reveal` avec délais, classes `group-[.in]`, `animate-fade-in` | `Skills.tsx`, `Education.tsx`, `Projects.tsx` |
| Apparition au scroll (fondu + glissement) | `IntersectionObserver` qui ajoute la classe `.in` ; l'animation elle-même est une transition CSS (`opacity`, `transform`) | `components/ui/Reveal.tsx`, `.reveal` dans `globals.css` |
| Entrée du Hero, flottement et halo du portrait, point qui pulse, icône qui tourne | Animations CSS (`@keyframes` déclarés dans `@theme`, classes `animate-*` de Tailwind) | `app/globals.css`, `Hero.tsx` |
| Particules du Hero | `<canvas>` + `requestAnimationFrame`, mis en pause hors écran et quand l'onglet est caché | `Hero.tsx` |
| Barre / anneau de progression du scroll, compteurs du Hero | `requestAnimationFrame` (une mise à jour par image, sans re-rendu React pendant le scroll) | `ScrollProgress.tsx`, `Hero.tsx` |
| Survol des cartes, thème, menu | Transitions CSS Tailwind | partout |

Règles : n'animer que `opacity` et `transform` (composités par le GPU) ; respecter `prefers-reduced-motion` (règles dans `globals.css`).
Quand envisager une bibliothèque (`motion`, GSAP) : animations pilotées par le scroll à la milliseconde, transitions entre pages, séquences complexes. Pas nécessaire ici.

## 5. Performance et fluidité du scroll
- `scroll-behavior: smooth` natif + `scroll-padding-top` (la barre fixe ne masque pas les titres).
- Écouteurs `scroll` en `passive` ; mises à jour regroupées par `requestAnimationFrame`.
- Animations limitées à `opacity`/`transform` ; animations infinies du Hero mises en pause quand il n'est plus visible (`data-offscreen`).
- Flou d'arrière-plan de la barre de navigation limité aux grands écrans (coûteux sur mobile).
- Images : `next/image` (`priority` uniquement pour le portrait du Hero, `sizes` renseignés, le reste en chargement différé).
- `compiler.removeConsole` retire les `console.*` en production.

## 6. SEO en place
Titre et description (≤ 160 car.), URL canonique, Open Graph + Twitter Card, image de partage générée (`opengraph-image`), `robots.txt`, `sitemap.xml`, manifeste, données structurées JSON-LD (Person + WebSite), un seul `<h1>`, textes alternatifs sur les images, `<html lang>`, lien « Aller au contenu ».
**Limite connue** : la langue se change côté navigateur, donc les moteurs de recherche indexent la version anglaise. Pour référencer FR/DE/ES, il faudrait des URL par langue (`/fr`, `/de`, `/es`) avec `hreflang`.

## 7. Points de vigilance
- Les `data-theme` et le script du `<head>` (`app/layout.tsx`) évitent le « flash » du thème : ne pas les supprimer.
- `Reveal` masque son contenu (`opacity: 0`) jusqu'à l'entrée à l'écran ; sans JavaScript, le `<noscript>` du layout le rend visible.
- Les images avec `fill` exigent un parent `relative` avec une taille (voir `Projects.tsx`).
- `NEXT_PUBLIC_SITE_URL` est obligatoire en production (voir `PROD_CHECKLIST.md`).
