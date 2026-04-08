import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const featuredServices = [
  {
    id: 'financement',
    slug: 'financement',
    icon: '💰',
    title: 'Assistance en Financement',
    description: 'Solutions de financement adaptées à vos besoins professionnels et personnels',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    imageAlt: 'Conseiller financier accompagnant un client',
  },
  {
    id: 'investissement',
    slug: 'investissement',
    icon: '📈',
    title: 'Conseils en Investissements',
    description: "Stratégies d'investissement personnalisées pour faire fructifier votre patrimoine",
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    imageAlt: 'Graphiques financiers pour investissements',
  },
  {
    id: 'commerce',
    slug: 'commerce',
    icon: '🏪',
    title: 'Financement des Activités Commerciales',
    description: 'Financements dédiés au développement de votre activité commerciale',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80',
    imageAlt: 'Boutique commerciale dynamique',
  },
  {
    id: 'immobilier',
    slug: 'immobilier',
    icon: '🏠',
    title: 'Financement Immobilier',
    description: 'Solutions complètes pour tous vos projets immobiliers',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    imageAlt: 'Maison moderne pour financement immobilier',
  },
  {
    id: 'organisation',
    slug: 'conseil',
    icon: '⚙️',
    title: "Conseils en Organisation",
    description: "Optimisation de l'organisation et des processus de votre entreprise",
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
    imageAlt: 'Équipe en réunion de travail',
  },
  {
    id: 'strategie',
    slug: 'conseil',
    icon: '🎯',
    title: 'Conseils en Stratégie',
    description: "Accompagnement stratégique pour le développement de votre entreprise",
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    imageAlt: 'Réunion de direction stratégique',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins en financement, investissement et conseil stratégique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group card overflow-hidden p-0 hover:border-primary-200 border-2 border-transparent cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex items-center">
            Voir tous nos services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
