# NK&Co - Site Web de Conseil Financier

Site web moderne avec système de prise de rendez-vous en ligne pour NK&Co, entreprise de conseil en financement et investissement.

## 🎯 Fonctionnalités

### Frontend Client
- ✅ **Page d'accueil** - Présentation attractive de NK&Co
- ✅ **Services** - Détail des 8 activités (financement, investissement, immobilier, conseil)
- ✅ **Clientèle** - 4 profils cibles (PME, salariés, fonctionnaires, commerçants)
- ✅ **Prise de RDV** - Système de réservation en ligne avec calendrier interactif
- ✅ **Blog** - Articles et actualités financières
- ✅ **Contact** - Formulaire de contact
- ✅ **Design moderne** - Interface élégante et responsive

### Dashboard Administrateur
- ✅ **Tableau de bord** - Vue d'ensemble des rendez-vous
- ✅ **Gestion des RDV** - Liste, filtres, recherche
- ✅ **Actions** - Accepter, refuser, reprogrammer les rendez-vous
- ✅ **Calendrier** - Vue mensuelle et hebdomadaire
- ✅ **Notifications** - Alertes email automatiques

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : NextAuth.js
- **Formulaires** : React Hook Form + Zod
- **Emails** : Resend
- **Calendrier** : React Big Calendar

## 📦 Installation

### Prérequis

- Node.js 18+ 
- PostgreSQL 14+
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
cd nkco-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**

Créer une base de données PostgreSQL :
```bash
createdb nkco_db
```

4. **Configurer les variables d'environnement**

Copier le fichier `.env.example` en `.env` et remplir les valeurs :
```bash
cp .env.example .env
```

Éditer `.env` avec vos informations :
```env
DATABASE_URL="postgresql://username:password@localhost:5432/nkco_db?schema=public"
NEXTAUTH_SECRET="votre-secret-securise-ici"
RESEND_API_KEY="votre-cle-api-resend"
EMAIL_FROM="contact@nkco.fr"
```

5. **Initialiser la base de données**
```bash
npm run db:push
```

6. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🗂️ Structure du Projet

```
nkco-website/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── services/          # Page services
│   │   ├── clientele/         # Page clientèle
│   │   ├── rendez-vous/       # Page prise de RDV
│   │   ├── admin/             # Dashboard admin
│   │   └── ...
│   ├── components/            # Composants React
│   │   ├── layout/           # Header, Footer
│   │   ├── home/             # Composants page d'accueil
│   │   ├── booking/          # Système de réservation
│   │   ├── admin/            # Composants admin
│   │   └── ui/               # Composants UI réutilisables
│   ├── data/                 # Données statiques
│   │   ├── services.ts       # Liste des services
│   │   └── clientele.ts      # Profils clientèle
│   ├── types/                # Types TypeScript
│   └── lib/                  # Utilitaires
├── prisma/
│   └── schema.prisma         # Schéma base de données
├── public/                    # Assets statiques
└── package.json
```

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository Git
3. Configurer les variables d'environnement
4. Déployer !

### Sur un serveur VPS

```bash
# Build de production
npm run build

# Démarrer en production
npm start
```

## 📝 Configuration

### Services proposés

Modifier le fichier `src/data/services.ts` pour ajouter/modifier les services.

### Profils clientèle

Modifier le fichier `src/data/clientele.ts` pour personnaliser les profils.

### Créneaux horaires

Modifier `src/types/appointment.ts` pour ajuster les horaires disponibles :
```typescript
export const AVAILABLE_TIME_SLOTS = [
  '09:00', '09:30', '10:00', ... 
]
```

### Emails

Configurer les templates d'emails dans `src/lib/email.ts`

## 🔐 Accès Admin

Pour accéder au dashboard administrateur :

1. Créer un compte admin via Prisma Studio :
```bash
npm run db:studio
```

2. Se connecter sur `/admin/login`

## 📧 Configuration Email

Le système utilise Resend pour l'envoi d'emails. Pour configurer :

1. Créer un compte sur [Resend](https://resend.com)
2. Obtenir une clé API
3. Ajouter la clé dans `.env`
4. Vérifier votre domaine d'envoi

## 🎨 Personnalisation du Design

### Couleurs

Modifier `tailwind.config.js` pour changer les couleurs :
```javascript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Polices

Modifier dans `src/app/layout.tsx` :
```typescript
const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e
```

## 📊 Base de Données

### Modèles Prisma

- **User** : Utilisateurs admin
- **Appointment** : Rendez-vous
- **BlogPost** : Articles de blog
- **ContactMessage** : Messages de contact

### Migrations

```bash
# Créer une migration
npx prisma migrate dev --name nom_migration

# Appliquer les migrations
npx prisma migrate deploy
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm start            # Démarrer en production
npm run lint         # Linter
npm run db:push      # Synchroniser le schéma DB
npm run db:studio    # Ouvrir Prisma Studio
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique (Next.js)
- Optimisation des fonts
- Compression des assets

## 🐛 Résolution de Problèmes

### La base de données ne se connecte pas

Vérifier que PostgreSQL est bien démarré :
```bash
sudo service postgresql status
```

### Les emails ne partent pas

Vérifier la configuration Resend et les variables d'environnement.

### Erreur de build

Supprimer `node_modules` et `.next` puis réinstaller :
```bash
rm -rf node_modules .next
npm install
npm run build
```

## 📄 Licence

© 2024 NK&Co. Tous droits réservés.

## 👥 Support

Pour toute question ou assistance :
- Email : contact@nkco.fr
- Téléphone : +33 1 23 45 67 89

---

**Développé avec ❤️ pour NK&Co**
