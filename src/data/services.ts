export interface Service {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
  benefits: string[]
  targetClients: string[]
}

export const services: Service[] = [
  {
    id: 'financement',
    title: 'Assistance en Financement',
    description: 'Solutions de financement adaptées à vos besoins professionnels et personnels',
    icon: '💰',
    details: [
      'Étude de votre capacité d\'emprunt',
      'Recherche des meilleures conditions de crédit',
      'Négociation avec les établissements bancaires',
      'Montage complet de votre dossier',
      'Accompagnement jusqu\'à l\'obtention des fonds',
    ],
    benefits: [
      'Gain de temps considérable',
      'Accès à des taux préférentiels',
      'Dossier solide et complet',
      'Expertise bancaire reconnue',
    ],
    targetClients: ['PME', 'Salariés', 'Fonctionnaires', 'Commerçants'],
  },
  {
    id: 'investissement',
    title: 'Conseils en Investissements',
    description: 'Stratégies d\'investissement personnalisées pour faire fructifier votre patrimoine',
    icon: '📈',
    details: [
      'Analyse de votre situation patrimoniale',
      'Définition de vos objectifs d\'investissement',
      'Sélection des supports adaptés à votre profil',
      'Diversification et optimisation fiscale',
      'Suivi régulier de vos investissements',
    ],
    benefits: [
      'Rendement optimisé',
      'Risques maîtrisés',
      'Fiscalité optimisée',
      'Vision long terme',
    ],
    targetClients: ['PME', 'Salariés', 'Fonctionnaires'],
  },
  {
    id: 'commerce',
    title: 'Financement des Activités Commerciales',
    description: 'Financements dédiés au développement de votre activité commerciale',
    icon: '🏪',
    details: [
      'Crédit professionnel pour fonds de commerce',
      'Financement de stock et trésorerie',
      'Matériel et équipement professionnel',
      'Rachat ou création d\'activité',
      'Développement et expansion',
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
    description: 'Concrétisez votre projet d\'acquisition de résidence principale',
    icon: '🏠',
    details: [
      'Financement jusqu\'à 110% avec frais de notaire',
      'Prêt à taux zéro (PTZ) si éligible',
      'Prêt Action Logement',
      'Assurance emprunteur optimisée',
      'Garanties adaptées (hypothèque, caution)',
    ],
    benefits: [
      'Meilleurs taux du marché',
      'Assurance competitive',
      'Conseil impartial',
      'Rapidité de traitement',
    ],
    targetClients: ['Salariés', 'Fonctionnaires', 'Commerçants'],
  },
  {
    id: 'immobilier-secondaire',
    title: 'Financement Immobilier - Résidence Secondaire',
    description: 'Financez votre résidence de vacances ou pied-à-terre',
    icon: '🏖️',
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
    description: 'Investissement locatif pour se constituer un patrimoine rentable',
    icon: '🏢',
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
    description: 'Optimisation de l\'organisation et des processus de votre entreprise',
    icon: '⚙️',
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
    description: 'Accompagnement stratégique pour le développement de votre entreprise',
    icon: '🎯',
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
