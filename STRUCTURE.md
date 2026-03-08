# NK&Co - Structure du Site Web

## Arborescence Complète du Projet

```
nkco-website/
├── README.md
├── package.json
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── services/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx
│   │   │
│   │   ├── clientele/
│   │   │   └── page.tsx
│   │   │
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   │
│   │   ├── rendez-vous/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   │
│   │   ├── politique-confidentialite/
│   │   │   └── page.tsx
│   │   │
│   │   └── admin/
│   │       ├── dashboard/
│   │       │   └── page.tsx
│   │       ├── rendez-vous/
│   │       │   └── page.tsx
│   │       └── login/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── ClienteleSection.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceDetail.tsx
│   │   │
│   │   ├── booking/
│   │   │   ├── AppointmentForm.tsx
│   │   │   ├── CalendarView.tsx
│   │   │   ├── TimeSlotSelector.tsx
│   │   │   └── ConfirmationModal.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── AppointmentsList.tsx
│   │   │   ├── AppointmentCard.tsx
│   │   │   ├── DashboardStats.tsx
│   │   │   └── Calendar.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Modal.tsx
│   │       └── Toast.tsx
│   │
│   ├── lib/
│   │   ├── db.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── appointment.ts
│   │   ├── service.ts
│   │   └── user.ts
│   │
│   └── data/
│       ├── services.ts
│       └── clientele.ts
│
└── prisma/
    ├── schema.prisma
    └── migrations/

```

## Technologies Utilisées

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Base de données**: PostgreSQL (via Prisma ORM)
- **Authentification**: NextAuth.js
- **Formulaires**: React Hook Form
- **Validation**: Zod
- **Emails**: Resend ou Nodemailer
- **Calendrier**: React Big Calendar

## Fonctionnalités Principales

### Frontend Client
1. **Page d'accueil** - Présentation NK&Co
2. **Services** - Détail des 6 activités
3. **Clientèle** - 4 profils cibles
4. **À propos** - Expertise et équipe
5. **Prise de RDV** - Formulaire intelligent
6. **Blog** - Articles et actualités
7. **Contact** - Coordonnées

### Dashboard Administrateur
1. **Tableau de bord** - Vue d'ensemble
2. **Gestion des RDV** - Liste, filtres, recherche
3. **Actions** - Accepter/Refuser/Reprogrammer
4. **Calendrier** - Vue mensuelle/hebdomadaire
5. **Notifications** - Alertes email automatiques

## Flux de Prise de Rendez-vous

1. Client remplit le formulaire (nom, email, téléphone, type de service, message)
2. Client sélectionne date et créneau disponible
3. Soumission → Status "En attente"
4. Email de confirmation au client
5. Notification à l'admin
6. Admin accepte/refuse/reprogramme
7. Email de confirmation finale au client
