import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredServices = [
  {
    id: 'financement',
    slug: 'financement',
    icon: '💰',
    title: 'Assistance en Financement',
    description: 'Solutions de financement adaptées à vos besoins professionnels et personnels',
  },
  {
    id: 'investissement',
    slug: 'investissement',
    icon: '📈',
    title: 'Conseils en Investissements',
    description: 'Stratégies d\'investissement personnalisées pour faire fructifier votre patrimoine',
  },
  {
    id: 'commerce',
    slug: 'commerce',
    icon: '🏪',
    title: 'Financement des Activités Commerciales',
    description: 'Financements dédiés au développement de votre activité commerciale',
  },
  {
    id: 'immobilier',
    slug: 'immobilier',
    icon: '🏠',
    title: 'Financement Immobilier',
    description: 'Solutions complètes pour tous vos projets immobiliers',
  },
  {
    id: 'organisation',
    slug: 'conseil',
    icon: '⚙️',
    title: 'Conseils en Organisation',
    description: 'Optimisation de l\'organisation et des processus de votre entreprise',
  },
  {
    id: 'strategie',
    slug: 'conseil',
    icon: '🎯',
    title: 'Conseils en Stratégie',
    description: 'Accompagnement stratégique pour le développement de votre entreprise',
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
              className="card group hover:border-primary-200 border-2 border-transparent cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 line-clamp-3">
                {service.description}
              </p>

              <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
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
