export interface ClientProfile {
  id: string
  title: string
  description: string
  icon: string
  specificNeeds: string[]
  solutions: string[]
  advantages: string[]
}

export const clienteles: ClientProfile[] = [
  {
    id: 'pme',
    title: 'PME / PMI',
    description: 'Accompagnement des petites et moyennes entreprises dans leur développement',
    icon: '🏭',
    specificNeeds: [
      'Financement de la croissance',
      'Trésorerie et besoin en fonds de roulement',
      'Investissements matériels et immatériels',
      'Acquisition ou transmission d\'entreprise',
      'Optimisation de la structure financière',
    ],
    solutions: [
      'Crédit professionnel adapté',
      'Facilités de caisse et découverts',
      'Crédit-bail et location financière',
      'Levée de fonds et private equity',
      'Conseil en stratégie financière',
    ],
    advantages: [
      'Expertise sectorielle reconnue',
      'Délais de traitement rapides',
      'Accompagnement personnalisé',
      'Réseau bancaire étendu',
    ],
  },
  {
    id: 'salaries',
    title: 'Salariés du Privé',
    description: 'Solutions financières adaptées aux salariés pour leurs projets personnels',
    icon: '👔',
    specificNeeds: [
      'Acquisition résidence principale',
      'Investissement locatif',
      'Travaux et rénovation',
      'Constitution d\'un patrimoine',
      'Rachat de crédits',
    ],
    solutions: [
      'Prêt immobilier avantageux',
      'Crédit consommation',
      'Prêt travaux',
      'Placement et épargne',
      'Assurance et prévoyance',
    ],
    advantages: [
      'Taux préférentiels négociés',
      'Assurance emprunteur optimisée',
      'Accompagnement de A à Z',
      'Conseil patrimonial gratuit',
    ],
  },
  {
    id: 'fonctionnaires',
    title: 'Fonctionnaires',
    description: 'Offres privilégiées pour les agents de la fonction publique',
    icon: '🏛️',
    specificNeeds: [
      'Accession à la propriété',
      'Investissement immobilier',
      'Prêts spéciaux fonctionnaires',
      'Préparation de la retraite',
      'Protection du patrimoine',
    ],
    solutions: [
      'Prêt fonctionnaire à taux bonifié',
      'Garantie mutuelle fonction publique',
      'Prêt relais et pont',
      'Plans d\'épargne dédiés',
      'Assurances groupe',
    ],
    advantages: [
      'Conditions exceptionnelles',
      'Garanties simplifiées',
      'Frais réduits',
      'Sécurité de l\'emploi valorisée',
    ],
  },
  {
    id: 'commercants',
    title: 'Petits Commerçants',
    description: 'Soutien financier pour les commerçants et artisans',
    icon: '🛒',
    specificNeeds: [
      'Achat de fonds de commerce',
      'Financement de stock',
      'Équipement professionnel',
      'Travaux d\'aménagement',
      'Développement de l\'activité',
    ],
    solutions: [
      'Crédit professionnel commerce',
      'Ligne de crédit renouvelable',
      'Leasing d\'équipement',
      'Micro-crédit professionnel',
      'Accompagnement business plan',
    ],
    advantages: [
      'Compréhension des métiers',
      'Flexibilité des remboursements',
      'Conseil en gestion',
      'Aides et subventions',
    ],
  },
]

export function getClienteleById(id: string): ClientProfile | undefined {
  return clienteles.find(client => client.id === id)
}
