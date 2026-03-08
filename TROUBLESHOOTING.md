# 🔧 Guide de Résolution des Problèmes

## Erreur : "Cannot find module 'react'"

### Solution 1 : Installation des dépendances

```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller toutes les dépendances
npm install

# Générer le client Prisma
npm run db:generate
```

### Solution 2 : Vérifier les versions

Assurez-vous d'avoir les bonnes versions installées :

```bash
# Installer les versions exactes
npm install react@18.2.0 react-dom@18.2.0
npm install --save-dev @types/react@18.2.48 @types/react-dom@18.2.18
npm install --save-dev typescript@5.3.3
```

### Solution 3 : Nettoyer le cache

```bash
# Nettoyer le cache npm
npm cache clean --force

# Nettoyer Next.js
rm -rf .next

# Réinstaller
npm install
```

## Erreur : "Module not found: Can't resolve '@/...'"

### Solution : Vérifier tsconfig.json

Le fichier `tsconfig.json` doit contenir :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Si le problème persiste :

```bash
# Redémarrer le serveur de développement
# Ctrl+C pour arrêter
npm run dev
```

## Erreur : "Prisma Client not found"

### Solution :

```bash
# Générer le client Prisma
npx prisma generate

# Ou utiliser le script
npm run db:generate
```

## Erreur : "Database connection failed"

### Solution :

1. Vérifier que PostgreSQL est démarré :
```bash
# Linux/Mac
sudo service postgresql status
sudo service postgresql start

# Windows
# Services → PostgreSQL → Démarrer
```

2. Vérifier la variable DATABASE_URL dans .env :
```env
DATABASE_URL="postgresql://username:password@localhost:5432/nkco_db?schema=public"
```

3. Créer la base de données si elle n'existe pas :
```bash
createdb nkco_db
```

4. Initialiser le schéma :
```bash
npm run db:push
```

## Erreur : Port 3000 déjà utilisé

### Solution :

```bash
# Trouver le processus
lsof -i :3000

# Tuer le processus
kill -9 <PID>

# Ou utiliser un autre port
PORT=3001 npm run dev
```

## Erreur : "JSX element implicitly has type 'any'"

Cette erreur signifie que TypeScript ne reconnaît pas les types React/JSX.

### Solution 1 : Redémarrer le serveur TypeScript (VS Code)

1. Ouvrir la palette de commandes : `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux)
2. Chercher : "TypeScript: Restart TS Server"
3. Sélectionner et valider

### Solution 2 : Vérifier les fichiers de configuration

Le fichier `next-env.d.ts` doit exister à la racine du projet. Si absent, créez-le :

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

### Solution 3 : Réinstaller les dépendances

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install

# Redémarrer le serveur
npm run dev
```

### Solution 4 : Vérifier que @types/react est installé

```bash
npm install --save-dev @types/react@18.2.48 @types/react-dom@18.2.18
```

### Solution 5 : Nettoyer Next.js

```bash
# Supprimer le cache Next.js
rm -rf .next

# Redémarrer
npm run dev
```

**Note** : Après chaque modification de configuration TypeScript, redémarrez le serveur de développement.

## Erreur : "Unknown at rule @tailwind" ou "@apply"

### Solution 1 : Configuration VS Code (Recommandé)

Le projet contient déjà un fichier `.vscode/settings.json` qui désactive la validation CSS native pour Tailwind.

Si vous utilisez VS Code, installez l'extension :
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)

### Solution 2 : Ignorer les avertissements

Ces avertissements ne cassent pas le build et peuvent être ignorés. Ils apparaissent seulement dans l'éditeur.

### Solution 3 : Configuration manuelle

Si vous n'utilisez pas VS Code, créez `.vscode/settings.json` :

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Vérification :

Les directives Tailwind `@tailwind`, `@apply`, et `@layer` sont valides et fonctionnent correctement. L'erreur est purement cosmétique dans l'éditeur.

```bash
# Vérifier que Tailwind fonctionne
npm run dev
# Ouvrir http://localhost:3000
# Les styles doivent s'afficher correctement
```

## Erreur de compilation TypeScript

### Solution :

```bash
# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Si beaucoup d'erreurs, installer les types manquants
npm install --save-dev @types/node @types/react @types/react-dom
```

## Erreur : "Module parse failed"

### Solution :

Vérifier que tous les fichiers ont la bonne extension :
- `.tsx` pour les composants React
- `.ts` pour les fichiers TypeScript sans JSX
- `.js` pour les fichiers JavaScript

## Erreur : Tailwind CSS ne fonctionne pas

### Solution :

1. Vérifier `tailwind.config.js` :
```javascript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

2. Vérifier `globals.css` :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Redémarrer le serveur de développement

## Erreur de build en production

### Solution :

```bash
# Nettoyer et rebuilder
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

## Erreurs ESLint

### Solution :

```bash
# Corriger automatiquement
npm run lint -- --fix

# Ou ignorer temporairement
# Ajouter /* eslint-disable */ en haut du fichier
```

## Installation Complète depuis Zéro

Si rien ne fonctionne, voici la procédure complète :

```bash
# 1. Nettoyer complètement
rm -rf node_modules
rm -rf .next
rm package-lock.json

# 2. Réinstaller Node.js si nécessaire
# Vérifier la version (doit être 18+)
node --version

# 3. Installer les dépendances
npm install

# 4. Vérifier PostgreSQL
sudo service postgresql start
createdb nkco_db

# 5. Configurer .env
cp .env.example .env
# Éditer .env avec vos valeurs

# 6. Initialiser Prisma
npx prisma generate
npx prisma db push

# 7. Lancer le serveur
npm run dev
```

## Vérification de l'Installation

### Checklist :

- [ ] Node.js 18+ installé (`node --version`)
- [ ] PostgreSQL installé et démarré
- [ ] Base de données créée (`createdb nkco_db`)
- [ ] Fichier `.env` configuré
- [ ] `node_modules` présent
- [ ] Client Prisma généré (`npx prisma generate`)
- [ ] Schéma DB synchronisé (`npm run db:push`)
- [ ] Aucune erreur TypeScript (`npx tsc --noEmit`)

### Commandes de diagnostic :

```bash
# Vérifier les versions
node --version        # Doit être 18+
npm --version         # Doit être 9+
psql --version        # Doit être 14+

# Vérifier l'installation
ls node_modules/react              # Doit exister
ls node_modules/@prisma/client     # Doit exister
ls .next                           # Existe après build

# Vérifier la DB
psql -l                            # Liste les bases de données
```

## Contact Support

Si le problème persiste après avoir essayé toutes ces solutions :

1. Vérifier les logs d'erreur complets
2. Vérifier la version de Node.js et npm
3. Essayer sur un nouveau projet vide pour isoler le problème
4. Consulter la documentation Next.js : https://nextjs.org/docs

## Problèmes Courants Spécifiques

### "Cannot find module 'lucide-react'"
```bash
npm install lucide-react@0.312.0
```

### "Cannot find module 'date-fns'"
```bash
npm install date-fns@3.2.0
```

### "Cannot find module 'zod'"
```bash
npm install zod@3.22.4
```

### Tous les modules manquants
```bash
# Réinstaller toutes les dépendances
npm ci
```

---

**Note**: La plupart des problèmes sont résolus par `rm -rf node_modules && npm install`
