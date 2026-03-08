import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react'
import { services } from '@/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'financement' },
    { slug: 'investissement' },
    { slug: 'commerce' },
    { slug: 'immobilier' },
    { slug: 'conseil' },
  ]
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  // Map slug to service
  const serviceMap: Record<string, string[]> = {
    'financement': ['financement'],
    'investissement': ['investissement'],
    'commerce': ['commerce'],
    'immobilier': ['immobilier-principal', 'immobilier-secondaire', 'immobilier-locatif'],
    'conseil': ['organisation', 'strategie'],
  }

  const serviceIds = serviceMap[params.slug]
  if (!serviceIds) {
    notFound()
  }

  const relatedServices = services.filter(s => serviceIds.includes(s.id))

  if (relatedServices.length === 0) {
    notFound()
  }

  const mainService = relatedServices[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">{mainService.icon}</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {mainService.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {mainService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {relatedServices.map((service) => (
                <div key={service.id} className="space-y-8">
                  {relatedServices.length > 1 && (
                    <h2 className="font-display text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h2>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                      <span className="w-2 h-8 bg-primary-600 mr-4"></span>
                      Ce que nous proposons
                    </h3>
                    <ul className="space-y-4">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                          <span className="text-lg text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                      <span className="w-2 h-8 bg-accent-600 mr-4"></span>
                      Vos avantages
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg">
                          <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                          <span className="font-semibold text-neutral-900">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {relatedServices.length > 1 && relatedServices.indexOf(service) < relatedServices.length - 1 && (
                    <div className="border-t border-neutral-200 pt-8"></div>
                  )}
                </div>
              ))}

              {/* Process Section */}
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Notre processus
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Analyse de votre situation</h4>
                      <p className="text-neutral-600">Étude approfondie de votre projet et de vos besoins spécifiques</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Recherche des meilleures solutions</h4>
                      <p className="text-neutral-600">Nous sollicitons notre réseau pour trouver les offres les plus adaptées</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Montage et négociation</h4>
                      <p className="text-neutral-600">Préparation du dossier et négociation des conditions optimales</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Accompagnement jusqu'au bout</h4>
                      <p className="text-neutral-600">Suivi complet jusqu'à la concrétisation de votre projet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Prêt à vous lancer ?
                  </h3>
                  <p className="mb-6 text-primary-100">
                    Discutons de votre projet lors d'un premier rendez-vous gratuit et sans engagement.
                  </p>
                  <Link href="/rendez-vous" className="btn-secondary block text-center bg-white text-primary-700 hover:bg-primary-50">
                    Prendre rendez-vous
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="card">
                  <h3 className="font-bold text-xl mb-4">Besoin d'informations ?</h3>
                  <div className="space-y-4">
                    <a href="tel:+33123456789" className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    <span>+225 07 07 99 48 59</span>
                    </a>
                    <a href="mailto:contact@nkco.fr" className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>contact@nkco.pro</span>
                    </a>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="card bg-accent-50">
                  <h4 className="font-bold mb-4">Pourquoi nous faire confiance ?</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>15+ ans d'expérience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>500+ clients satisfaits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>Taux de réussite 95%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>Accompagnement personnalisé</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Découvrez nos autres services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(serviceMap)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, ids]) => {
                const service = services.find(s => s.id === ids[0])
                if (!service) return null
                
                return (
                  <Link 
                    key={slug}
                    href={`/services/${slug}`}
                    className="card hover:shadow-xl transition-all group"
                  >
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                      {service.description}
                    </p>
                    <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                      En savoir plus →
                    </span>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
