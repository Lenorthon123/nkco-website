export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  imageAlt: string
  details: string[]
  benefits: string[]
  targetClients: string[]
}

export const services: Service[] = [
  {
    id: 'financement',
    title: 'Assistance en Financement',
    description: 'Nous vous accompagnons dans la recherche et l\'obtention des meilleures solutions de financement adaptées à votre profil et vos objectifs.',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    imageAlt: 'Conseiller financier NK&Co accompagnant un client pour un financement',
    details: [
      'Analyse complète de votre capacité d\'emprunt',
      'Négociation des meilleures conditions bancaires',
      'Constitution et suivi de votre dossier',
      'Accompagnement jusqu\'à la signature',
      'Conseils sur les aides et dispositifs disponibles',
    ],
    benefits: [
      'Gain de temps considérable',
      'Meilleurs taux garantis',
      'Dossier optimisé',
      'Suivi personnalisé',
    ],
    targetClients: ['PME', 'Salariés', 'Fonctionnaires', 'Commerçants'],
  },
  {
    id: 'investissement',
    title: 'Conseils en Investissements',
    description: 'Faites fructifier votre capital avec des stratégies d\'investissement personnalisées et adaptées à votre profil de risque.',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Graphiques d analyse financière pour conseils en investissements NK&Co',
    details: [
      'Analyse de votre situation patrimoniale',
      'Définition de votre profil investisseur',
      'Stratégie d\'investissement sur-mesure',
      'Diversification du portefeuille',
      'Suivi et ajustement régulier',
    ],
    benefits: [
      'Rendement optimisé',
      'Risques maîtrisés',
      'Diversification intelligente',
      'Conseil impartial',
    ],
    targetClients: ['PME', 'Salariés', 'Fonctionnaires'],
  },
  {
    id: 'commerce',
    title: 'Financement des Activités Commerciales',
    description: 'Développez votre activité commerciale grâce à nos solutions de financement spécialement conçues pour les entrepreneurs et commerçants.',
    icon: '🏪',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    imageAlt: 'Boutique commerciale représentant le financement des activités commerciales',
    details: [
      'Financement de fonds de commerce',
      'Matériel et équipement professionnel',
      'Rachat ou création d\'activité',
      'Développement et expansion',
      'Trésorerie et besoin en fonds de roulement',
    ],
    benefits: [
      'Solutions sur-mesure',
      'Délais rapides',
      'Accompagnement projet',
      'Expertise métier',
    ],
    targetClients: ['PME', 'Commerçants'],
  },
  {
    id: 'immobilier-principal',
    title: 'Financement Immobilier - Résidence Principale',
    description: 'Concrétisez votre projet d\'acquisition de résidence principale avec les meilleures conditions du marché.',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    imageAlt: 'Maison moderne représentant le financement de résidence principale',
    details: [
      'Financement jusqu\'à 110% avec frais de notaire',
      'Prêt à taux zéro (PTZ) si éligible',
      'Prêt Action Logement',
      'Assurance emprunteur optimisée',
      'Garanties adaptées (hypothèque, caution)',
    ],
    benefits: [
      'Meilleurs taux du marché',
      'Assurance compétitive',
      'Conseil impartial',
      'Rapidité de traitement',
    ],
    targetClients: ['Salariés', 'Fonctionnaires', 'Commerçants'],
  },
  {
    id: 'immobilier-secondaire',
    title: 'Financement Immobilier - Résidence Secondaire',
    description: 'Financez votre résidence de vacances ou pied-à-terre dans les meilleures conditions.',
    icon: '🏖️',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    imageAlt: 'Résidence secondaire au bord de l eau pour financement immobilier',
    details: [
      'Apport minimum de 10 à 20%',
      'Durée de remboursement flexible',
      'Possibilité de location saisonnière',
      'Conseil sur la rentabilité',
      'Optimisation de votre plan de financement',
    ],
    benefits: [
      'Patrimoine diversifié',
      'Revenus complémentaires',
      'Avantages fiscaux possibles',
      'Projet familial sécurisé',
    ],
    targetClients: ['Salariés', 'Fonctionnaires', 'PME'],
  },
  {
    id: 'immobilier-locatif',
    title: 'Financement Immobilier Locatif',
    description: 'Investissement locatif pour se constituer un patrimoine rentable et générer des revenus passifs.',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    imageAlt: 'Immeuble d appartements pour investissement locatif NK&Co',
    details: [
      'Financement jusqu\'à 90% du bien',
      'Prise en compte des loyers futurs',
      'Dispositifs fiscaux (Pinel, Denormandie, LMNP)',
      'Étude de rentabilité complète',
      'Gestion locative et fiscale',
    ],
    benefits: [
      'Revenus passifs réguliers',
      'Réduction d\'impôts',
      'Constitution de patrimoine',
      'Préparation retraite',
    ],
    targetClients: ['Salariés', 'Fonctionnaires', 'PME', 'Commerçants'],
  },
  {
    id: 'organisation',
    title: 'Conseils en Organisation',
    description: 'Optimisation de l\'organisation et des processus de votre entreprise pour gagner en efficacité et en rentabilité.',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    imageAlt: 'Équipe en réunion de travail pour conseils en organisation d entreprise',
    details: [
      'Audit organisationnel complet',
      'Optimisation des processus internes',
      'Mise en place d\'outils de gestion',
      'Formation des équipes',
      'Amélioration de la productivité',
    ],
    benefits: [
      'Efficacité accrue',
      'Réduction des coûts',
      'Meilleure coordination',
      'Croissance maîtrisée',
    ],
    targetClients: ['PME', 'Commerçants'],
  },
  {
    id: 'strategie',
    title: 'Conseils en Stratégie',
    description: 'Accompagnement stratégique pour définir et déployer votre plan de développement et assurer la pérennité de votre entreprise.',
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    imageAlt: 'Réunion stratégique de direction représentant les conseils en stratégie NK&Co',
    details: [
      'Définition de votre stratégie de croissance',
      'Analyse de marché et positionnement',
      'Plan de développement commercial',
      'Stratégie d\'investissement',
      'Gestion des risques',
    ],
    benefits: [
      'Vision claire',
      'Décisions éclairées',
      'Croissance pérenne',
      'Avantage concurrentiel',
    ],
    targetClients: ['PME', 'Commerçants'],
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id)
}

export function getServicesByClientType(clientType: string): Service[] {
  return services.filter(service =>
    service.targetClients.includes(clientType)
  )
}
