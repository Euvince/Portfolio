# Portfolio — Jean-Daniel Euvince

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · next-themes. Bilingue FR/EN (`/fr`, `/en`), thème clair/sombre.

## Lancer
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # vérifie les types
```

## Déployer sur Vercel
Pousser le dossier sur GitHub, puis « Add New Project » sur vercel.com et importer le dépôt. Aucun réglage nécessaire.

## Où modifier quoi
| Je veux… | Fichier |
|---|---|
| Changer un texte d'interface | `src/content/dictionaries/fr.ts` et `en.ts` |
| Ajouter ou modifier un projet | `src/content/projects.ts` (une entrée = une page projet) |
| Modifier expériences, formations, compétences, liens | `src/content/experience.ts`, `education.ts`, `skills.ts`, `socials.ts` |
| Changer l'ordre de la navbar | `src/content/navigation.ts` |
| Changer les couleurs | variables en haut de `src/app/globals.css` |
| Mettre à jour le CV | remplacer `public/cv.pdf` |

Les textes traduits sont des paires `[français, anglais]`. Une section de page projet (architecture, modèle de données, structure…) s'affiche dès que son champ est renseigné.

## Plus tard
- **Images de projet** : déposer les fichiers dans `public/projects/<slug>/` et remplacer `<Cover>` par `next/image`.
- **Blog** : ajouter `@next/mdx` et un dossier `src/content/blog/`.
- **Formulaire de contact** : remplacer le `mailto:` par une Server Action avec Resend.
