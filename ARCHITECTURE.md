# 🏗️ Architecture du Système NK&Co

## Vue d'ensemble

Le site NK&Co est construit sur une architecture moderne et scalable basée sur Next.js 14 avec le App Router.

## Architecture Technique

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │   Pages    │  │ Components │  │   Hooks    │       │
│  └────────────┘  └────────────┘  └────────────┘       │
└─────────────────────────────────────────────────────────┘
                         ↓ ↑
┌─────────────────────────────────────────────────────────┐
│                  NEXT.JS SERVER                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ App Router │  │  API Routes│  │Server Actions│      │
│  └────────────┘  └────────────┘  └────────────┘       │
└─────────────────────────────────────────────────────────┘
                         ↓ ↑
┌─────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │  Prisma    │  │ PostgreSQL │  │   Cache    │       │
│  └────────────┘  └────────────┘  └────────────┘       │
└─────────────────────────────────────────────────────────┘
                         ↓ ↑
┌─────────────────────────────────────────────────────────┐
│               SERVICES EXTERNES                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │   Resend   │  │ NextAuth   │  │  Storage   │       │
│  └────────────┘  └────────────┘  └────────────┘       │
└─────────────────────────────────────────────────────────┘
```

## Structure des Dossiers

### `/src/app` - Pages et Routes
```
app/
├── layout.tsx              # Layout racine avec Header/Footer
├── page.tsx               # Page d'accueil
├── services/              # Page services
├── clientele/             # Page clientèle
├── rendez-vous/           # Système de réservation
├── a-propos/              # À propos
├── blog/                  # Blog et articles
├── contact/               # Contact
└── admin/                 # Dashboard admin
    ├── dashboard/
    ├── rendez-vous/
    └── login/
```

### `/src/components` - Composants React
```
components/
├── layout/               # Header, Footer, Navigation
├── home/                 # Composants page d'accueil
│   ├── Hero.tsx
│   ├── ServicesOverview.tsx
│   ├── ClienteleSection.tsx
│   ├── WhyChooseUs.tsx
│   └── CTASection.tsx
├── booking/              # Système de réservation
│   ├── AppointmentForm.tsx
│   ├── CalendarView.tsx
│   ├── TimeSlotSelector.tsx
│   └── ConfirmationModal.tsx
├── admin/                # Composants admin
│   ├── AppointmentsList.tsx
│   ├── AppointmentCard.tsx
│   └── DashboardStats.tsx
└── ui/                   # Composants réutilisables
    ├── Button.tsx
    ├── Card.tsx
    ├── Input.tsx
    └── Modal.tsx
```

## Flux de Données

### 1. Prise de Rendez-vous

```
User fills form
    ↓
AppointmentForm validates (Zod)
    ↓
POST /api/appointments
    ↓
Prisma creates Appointment
    ↓
Email notification (Resend)
    ↓
Confirmation to user
```

### 2. Gestion Admin

```
Admin logs in (NextAuth)
    ↓
GET /api/appointments
    ↓
Prisma queries database
    ↓
Display in Dashboard
    ↓
Admin action (accept/reject/reschedule)
    ↓
PATCH /api/appointments/:id
    ↓
Update database
    ↓
Email notification to client
```

## Modèle de Données

### Schéma Prisma

```prisma
User {
  id: String
  email: String @unique
  password: String
  name: String
  role: Role (ADMIN/USER)
}

Appointment {
  id: String
  firstName: String
  lastName: String
  email: String
  phone: String
  company: String?
  service: ServiceType
  clientType: ClientType
  message: String?
  date: DateTime
  timeSlot: String
  status: AppointmentStatus (PENDING/CONFIRMED/CANCELLED)
  adminNotes: String?
}

BlogPost {
  id: String
  title: String
  slug: String @unique
  content: String
  published: Boolean
  publishedAt: DateTime?
}

ContactMessage {
  id: String
  name: String
  email: String
  subject: String
  message: String
  read: Boolean
}
```

## API Routes

### Public
```
GET  /api/appointments/available      # Créneaux disponibles
POST /api/appointments                # Créer un RDV
POST /api/contact                     # Message de contact
GET  /api/blog                        # Liste des articles
GET  /api/blog/:slug                  # Article spécifique
```

### Admin (Protected)
```
GET    /api/admin/appointments        # Liste tous les RDV
GET    /api/admin/appointments/:id    # Détail d'un RDV
PATCH  /api/admin/appointments/:id    # Modifier un RDV
DELETE /api/admin/appointments/:id    # Annuler un RDV
GET    /api/admin/stats               # Statistiques
```

## Authentification

### NextAuth Configuration

```typescript
providers: [
  CredentialsProvider({
    credentials: {
      email: { type: "email" },
      password: { type: "password" }
    },
    authorize: async (credentials) => {
      // Vérifier email/password
      // Retourner user si valide
    }
  })
]

callbacks: {
  session: ({ session, token }) => {
    // Ajouter info user à session
  }
}
```

## Validation des Données

### Zod Schemas

```typescript
// Appointment
const appointmentSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^(\+33|0)[1-9](\d{8})$/),
  service: z.enum([...]),
  clientType: z.enum([...]),
  date: z.date(),
  timeSlot: z.string(),
})
```

## Notifications Email

### Templates

1. **Nouvelle demande de RDV** → Admin
2. **Confirmation de demande** → Client
3. **RDV accepté** → Client
4. **RDV refusé** → Client
5. **RDV reprogrammé** → Client
6. **Rappel RDV** → Client (J-1)

### Service Resend

```typescript
await resend.emails.send({
  from: 'NK&Co <contact@nkco.fr>',
  to: appointment.email,
  subject: 'Confirmation de votre rendez-vous',
  html: EmailTemplate({ appointment }),
})
```

## Gestion d'État

### Client State
- **useState** : État local des composants
- **useForm** : Gestion des formulaires (React Hook Form)
- **Context API** : État global (si nécessaire)

### Server State
- **Server Components** : Fetch côté serveur
- **Server Actions** : Mutations côté serveur
- **API Routes** : Endpoints REST classiques

## Performance

### Optimisations

1. **Static Generation** : Pages statiques pré-générées
2. **Lazy Loading** : Chargement différé des composants
3. **Image Optimization** : Next.js Image component
4. **Code Splitting** : Découpage automatique du code
5. **Caching** : Cache des requêtes Prisma

### Métriques à surveiller

- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1
- **TTFB** (Time to First Byte) < 600ms

## Sécurité

### Mesures de Protection

1. **HTTPS** : Toutes les communications chiffrées
2. **CSRF Protection** : NextAuth intégré
3. **SQL Injection** : Prisma ORM sécurisé
4. **XSS** : React échappe par défaut
5. **Rate Limiting** : Limite les requêtes API
6. **Input Validation** : Zod pour toutes les entrées
7. **Password Hashing** : bcrypt pour les mots de passe

### Headers de Sécurité

```typescript
// next.config.js
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
]
```

## Déploiement

### Environnements

1. **Development** : Local (localhost:3000)
2. **Staging** : Vercel Preview
3. **Production** : Vercel Production

### CI/CD Pipeline

```
Git Push
  ↓
GitHub Actions
  ↓
Tests (lint, type-check)
  ↓
Build (next build)
  ↓
Deploy to Vercel
  ↓
Healthcheck
```

## Monitoring

### Outils

- **Vercel Analytics** : Performance monitoring
- **Prisma Studio** : Database management
- **Logs** : Erreurs et debugging
- **Uptime Monitoring** : Disponibilité du site

## Scalabilité

### Capacités

- **Concurrent Users** : 1000+ utilisateurs simultanés
- **Database** : PostgreSQL avec réplication
- **Caching** : Redis pour les données fréquentes
- **CDN** : Vercel Edge Network
- **Auto-scaling** : Serverless functions

### Limites actuelles

- Max 100 RDV par jour
- Max 20 créneaux par jour
- Emails limités par Resend plan

## Maintenance

### Tasks régulières

- **Daily** : Vérifier les RDV du jour
- **Weekly** : Backup base de données
- **Monthly** : Update dépendances
- **Quarterly** : Audit de sécurité

---

**Documentation maintenue par** : Équipe Dev NK&Co  
**Dernière mise à jour** : 2024
