import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react'
import { services, type Service } from '@/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

const serviceMap: Record<string, string[]> = {
  financement:    ['financement'],
  investissement: ['investissement'],
  commerce:       ['commerce'],
  immobilier:     ['immobilier-principal', 'immobilier-secondaire', 'immobilier-locatif'],
  conseil:        ['organisation', 'strategie'],
}

const steps = [
  { n: 1, title: 'Analyse de votre situation',         text: 'Étude approfondie de votre projet et de vos besoins spécifiques' },
  { n: 2, title: 'Recherche des meilleures solutions', text: 'Nous sollicitons notre réseau pour trouver les offres les plus adaptées' },
  { n: 3, title: 'Montage et négociation',             text: 'Préparation du dossier et négociation des conditions optimales' },
  { n: 4, title: "Accompagnement jusqu'au bout",       text: "Suivi complet jusqu'à la concrétisation de votre projet" },
]

const trustItems = [
  "15+ ans d'expérience",
  '500+ clients satisfaits',
  'Taux de réussite 95%',
  'Accompagnement personnalisé',
]

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({ slug }))
}

// ── Sous-composant : un service dans la colonne gauche ──
function ServiceBlock({ service, showImage }: { service: Service; showImage: boolean }) {
  return (
    <div>
      {showImage && (
        <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-lg" style={{ aspectRatio: '16/7' }}>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <span className="text-3xl">{service.icon}</span>
            <h2 className="font-display text-2xl font-bold text-white">{service.title}</h2>
          </div>
        </div>
      )}

      <div className="mb-10">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-4">
          <span className="w-2 h-8 bg-primary-600 rounded-full flex-shrink-0" />
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

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-4">
          <span className="w-2 h-8 bg-accent-600 rounded-full flex-shrink-0" />
          Vos avantages
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg">
              <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
              <span className="font-semibold text-neutral-900">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Sous-composant : carte "autre service" ──
function OtherServiceCard({ slug, service }: { slug: string; service: Service }) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group card overflow-hidden p-0 hover:shadow-xl transition-all"
    >
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-2xl">{service.icon}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
          {service.title}
        </h3>
        <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
          {service.description}
        </p>
        <span className="text-primary-600 font-semibold text-sm">
          En savoir plus
        </span>
      </div>
    </Link>
  )
}

// ── Page principale ──
export default function ServiceDetailPage({ params }: ServicePageProps) {
  const serviceIds = serviceMap[params.slug]
  if (!serviceIds) return notFound()

  const relatedServices = services.filter((s) => serviceIds.includes(s.id))
  if (relatedServices.length === 0) return notFound()

  const mainService = relatedServices[0]
  const hasMultipleServices = relatedServices.length > 1

  const otherServices = Object.entries(serviceMap)
    .filter(([slug]) => slug !== params.slug)
    .flatMap(([slug, ids]) => {
      const service = services.find((s) => s.id === ids[0])
      return service ? [{ slug, service }] : []
    })

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={mainService.image}
            alt={mainService.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/60" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{mainService.icon}</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {mainService.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              {mainService.description}
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition-all shadow-xl"
            >
              Prendre rendez-vous gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Colonne gauche */}
            <div className="lg:col-span-2 space-y-16">

              {/* Titre si service unique */}
              {!hasMultipleServices && (
                <h2 className="font-display text-3xl font-bold text-neutral-900">
                  Tout ce que nous faisons pour vous
                </h2>
              )}

              {/* Blocs services */}
              {relatedServices.map((service, idx) => (
                <div key={service.id}>
                  <ServiceBlock service={service} showImage={hasMultipleServices} />
                  {idx < relatedServices.length - 1 && (
                    <div className="border-t-2 border-neutral-100 mt-12" />
                  )}
                </div>
              ))}

              {/* Notre processus */}
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Notre processus
                </h3>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.n} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                        <p className="text-neutral-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar droite */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Prêt à vous lancer ?
                  </h3>
                  <p className="mb-6 text-primary-100">
                    Discutons de votre projet lors d&apos;un premier rendez-vous gratuit et sans engagement.
                  </p>
                  <Link
                    href="/rendez-vous"
                    className="btn-secondary block text-center bg-white text-primary-700 hover:bg-primary-50"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className="card">
                  <h3 className="font-bold text-xl mb-4">
                    Besoin d&apos;informations ?
                  </h3>
                  <div className="space-y-4">
                    
                      href="tel:+2250707994859"
                      className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                    <a>
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>+225 07 07 99 48 59</span>
                    </a>
                    
                      href="mailto:contact@nkco.pro"
                      className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                    <a>
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>contact@nkco.pro</span>
                    </a>
                  </div>
                </div>

                <div className="card bg-accent-50">
                  <h4 className="font-bold mb-4">Pourquoi nous faire confiance ?</h4>
                  <ul className="space-y-3 text-sm">
                    {trustItems.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Découvrez nos autres services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map(({ slug, service }) => (
              <OtherServiceCard key={slug} slug={slug} service={service} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}