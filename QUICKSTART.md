# 🚀 Guide de Démarrage Rapide - NK&Co

## Installation en 5 minutes

### 1. Prérequis
```bash
# Vérifier Node.js (v18+)
node --version

# Vérifier PostgreSQL (v14+)
psql --version
```

### 2. Installation
```bash
# Installer les dépendances
npm install

# Créer la base de données
createdb nkco_db

# Copier et configurer .env
cp .env.example .env
# Éditer .env avec vos valeurs
```

### 3. Configuration .env minimale
```env
DATABASE_URL="postgresql://user:password@localhost:5432/nkco_db"
NEXTAUTH_SECRET="changez-moi-secret-securise"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Initialiser la DB
```bash
npm run db:push
```

### 5. Lancer le projet
```bash
npm run dev
```

✅ **Site accessible sur** : http://localhost:3000

---

## ⚠️ Avertissements Normaux (À Ignorer)

### "Unknown at rule @tailwind" / "@apply"
Ces avertissements dans l'éditeur sont **normaux** et n'affectent pas le fonctionnement.

**Solution** : 
- Installer l'extension VS Code : **Tailwind CSS IntelliSense**
- Les fichiers `.vscode/settings.json` sont déjà configurés

Le site fonctionne parfaitement malgré ces avertissements cosmétiques.

---

## 📋 Checklist de Configuration

### Base de données
- [ ] PostgreSQL installé et démarré
- [ ] Base de données `nkco_db` créée
- [ ] Variable `DATABASE_URL` configurée dans `.env`
- [ ] Migrations Prisma exécutées (`npm run db:push`)

### Authentification
- [ ] `NEXTAUTH_SECRET` généré (utilisez : `openssl rand -base64 32`)
- [ ] `NEXTAUTH_URL` configuré

### Emails (Optionnel pour dev)
- [ ] Compte Resend créé (https://resend.com)
- [ ] `RESEND_API_KEY` ajouté dans `.env`
- [ ] `EMAIL_FROM` configuré

### Compte Admin
- [ ] Créer un admin via Prisma Studio : `npm run db:studio`
- [ ] Ajouter un utilisateur dans la table `User`
- [ ] Hasher le mot de passe avec bcrypt

---

## 🎯 Tester les Fonctionnalités

### Frontend
1. **Page d'accueil** : http://localhost:3000
2. **Services** : http://localhost:3000/services
3. **Prise de RDV** : http://localhost:3000/rendez-vous
4. **Contact** : http://localhost:3000/contact

### Backend Admin
1. **Prisma Studio** : `npm run db:studio`
2. **Login Admin** : http://localhost:3000/admin/login
3. **Dashboard** : http://localhost:3000/admin/dashboard

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev              # Démarrer le serveur dev

# Base de données
npm run db:push          # Synchroniser le schéma
npm run db:studio        # Ouvrir Prisma Studio
npm run db:generate      # Générer le client Prisma

# Production
npm run build            # Build de production
npm start                # Démarrer en production

# Qualité
npm run lint             # Linter le code
```

---

## 🐛 Problèmes Courants

### "Cannot connect to database"
```bash
# Vérifier que PostgreSQL tourne
sudo service postgresql status

# Démarrer PostgreSQL si nécessaire
sudo service postgresql start
```

### "Prisma schema not found"
```bash
# Générer le client Prisma
npm run db:generate
```

### "Port 3000 already in use"
```bash
# Trouver le processus
lsof -i :3000

# Tuer le processus
kill -9 <PID>

# Ou utiliser un autre port
PORT=3001 npm run dev
```

---

## 📚 Prochaines Étapes

1. ✅ Personnaliser les couleurs dans `tailwind.config.js`
2. ✅ Ajouter votre logo dans `public/images/`
3. ✅ Configurer les emails avec Resend
4. ✅ Créer votre compte admin
5. ✅ Tester la prise de rendez-vous
6. ✅ Personnaliser les services dans `src/data/services.ts`
7. ✅ Déployer sur Vercel ou votre serveur

---

## 💡 Astuces

### Générer un secret sécurisé
```bash
openssl rand -base64 32
```

### Créer un compte admin rapidement
```bash
# Ouvrir Prisma Studio
npm run db:studio

# Ou via CLI Node
node
> const bcrypt = require('bcryptjs')
> bcrypt.hash('VotreMotDePasse', 10).then(console.log)
```

### Reset la base de données
```bash
# ATTENTION : Supprime toutes les données !
npx prisma migrate reset
npm run db:push
```

---

**Besoin d'aide ?** Consultez le README.md complet ou contactez le support.
