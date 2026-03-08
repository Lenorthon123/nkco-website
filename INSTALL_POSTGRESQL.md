# 🗄️ Guide d'Installation PostgreSQL

PostgreSQL n'est pas installé sur votre système. Voici comment l'installer selon votre OS.

## 🍎 macOS

### Option 1 : Homebrew (Recommandé)

```bash
# Installer Homebrew si pas déjà fait
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installer PostgreSQL
brew install postgresql@14

# Démarrer PostgreSQL
brew services start postgresql@14

# Vérifier l'installation
psql --version
```

### Option 2 : Postgres.app (Interface graphique)

1. Télécharger depuis : https://postgresapp.com/
2. Glisser dans Applications
3. Lancer Postgres.app
4. Ajouter au PATH :
```bash
echo 'export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

## 🐧 Linux (Ubuntu/Debian)

```bash
# Mettre à jour les paquets
sudo apt update

# Installer PostgreSQL
sudo apt install postgresql postgresql-contrib

# Démarrer le service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Vérifier l'installation
psql --version
```

---

## 🪟 Windows

### Option 1 : Installateur officiel

1. Télécharger depuis : https://www.postgresql.org/download/windows/
2. Lancer l'installateur
3. Suivre les étapes (noter le mot de passe)
4. Ajouter au PATH si nécessaire

### Option 2 : Chocolatey

```powershell
# Installer Chocolatey si pas déjà fait
# Puis installer PostgreSQL
choco install postgresql

# Démarrer le service
pg_ctl start
```

---

## 🔧 Configuration Après Installation

### 1. Créer un utilisateur (si nécessaire)

**macOS/Linux :**
```bash
# Se connecter en tant que superuser postgres
sudo -u postgres psql

# Dans le prompt psql :
CREATE USER votre_nom WITH PASSWORD 'votre_password';
ALTER USER votre_nom CREATEDB;
\q
```

**Windows :**
```powershell
# Ouvrir SQL Shell (psql)
# Se connecter avec l'utilisateur postgres
CREATE USER votre_nom WITH PASSWORD 'votre_password';
ALTER USER votre_nom CREATEDB;
\q
```

### 2. Créer la base de données

```bash
# Créer la base de données pour NK&Co
createdb nkco_db

# Ou via psql :
psql
CREATE DATABASE nkco_db;
\q
```

### 3. Configurer le .env

```env
# Format pour connexion locale
DATABASE_URL="postgresql://votre_nom:votre_password@localhost:5432/nkco_db?schema=public"

# Si utilisateur par défaut (postgres)
DATABASE_URL="postgresql://postgres:votre_password@localhost:5432/nkco_db?schema=public"

# Si pas de mot de passe (développement local)
DATABASE_URL="postgresql://localhost:5432/nkco_db?schema=public"
```

---

## 🎯 Alternative : SQLite (Pour Développement Rapide)

Si vous voulez tester rapidement sans installer PostgreSQL, vous pouvez utiliser SQLite :

### 1. Modifier `prisma/schema.prisma`

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

### 2. Modifier `.env`

```env
DATABASE_URL="file:./dev.db"
```

### 3. Initialiser

```bash
npm run db:push
```

**Note** : SQLite est parfait pour le développement mais PostgreSQL est recommandé pour la production.

---

## 🐳 Alternative : Docker (Recommandé pour le développement)

### Créer `docker-compose.yml`

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14
    restart: always
    environment:
      POSTGRES_USER: nkco
      POSTGRES_PASSWORD: nkco123
      POSTGRES_DB: nkco_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Démarrer PostgreSQL avec Docker

```bash
# Démarrer (la première fois, télécharge l'image)
docker-compose up -d

# Vérifier que ça tourne
docker-compose ps

# Arrêter
docker-compose down

# Voir les logs
docker-compose logs postgres
```

### Configurer .env pour Docker

```env
DATABASE_URL="postgresql://nkco:nkco123@localhost:5432/nkco_db?schema=public"
```

### Commandes utiles Docker

```bash
# Démarrer
docker-compose up -d

# Arrêter
docker-compose down

# Redémarrer
docker-compose restart

# Supprimer tout (ATTENTION : supprime les données)
docker-compose down -v
```

---

## ✅ Vérification de l'Installation

### Test de connexion

```bash
# Tester la connexion
psql -U votre_nom -d nkco_db

# Ou avec Docker
docker exec -it nkco-website-postgres-1 psql -U nkco -d nkco_db
```

### Commandes psql utiles

```sql
-- Lister les bases de données
\l

-- Se connecter à une base
\c nkco_db

-- Lister les tables
\dt

-- Quitter
\q
```

---

## 🚀 Démarrage Rapide Recommandé

### Pour débuter rapidement sans installation :

**Option 1 : SQLite (Le plus simple)**
```bash
# 1. Modifier schema.prisma pour SQLite (voir ci-dessus)
# 2. Modifier .env
# 3. Lancer
npm run db:push
npm run dev
```

**Option 2 : Docker (Professionnel)**
```bash
# 1. Installer Docker Desktop
# 2. Créer docker-compose.yml (voir ci-dessus)
# 3. Démarrer
docker-compose up -d
npm run db:push
npm run dev
```

**Option 3 : PostgreSQL local (Production-ready)**
```bash
# 1. Installer PostgreSQL (voir début du guide)
# 2. Créer la base
createdb nkco_db
# 3. Lancer
npm run db:push
npm run dev
```

---

## 🆘 Problèmes Courants

### "Connection refused"
```bash
# Vérifier que PostgreSQL tourne
# macOS
brew services list

# Linux
sudo systemctl status postgresql

# Docker
docker-compose ps
```

### "Role does not exist"
```bash
# Créer l'utilisateur (voir section Configuration)
sudo -u postgres createuser --interactive
```

### "Database does not exist"
```bash
# Créer la base
createdb nkco_db
```

---

## 📝 Récapitulatif

**Recommandations par cas d'usage :**

| Cas | Solution | Complexité |
|-----|----------|------------|
| Test rapide | SQLite | ⭐ Facile |
| Développement | Docker | ⭐⭐ Moyen |
| Production locale | PostgreSQL | ⭐⭐⭐ Avancé |

**Mon conseil** : Commencez avec **Docker** si vous l'avez, sinon **SQLite** pour tester rapidement.

---

**Besoin d'aide ?** Consultez TROUBLESHOOTING.md pour plus de solutions.
