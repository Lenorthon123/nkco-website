import { services } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Nos Services | NK&Co',
  description: "Découvrez l'ensemble de nos services : financement, investissement, immobilier, conseil stratégique",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Des solutions complètes pour accompagner tous vos projets financiers
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h2 className="font-display text-4xl font-bold text-neutral-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl text-neutral-600 mb-8">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                        Ce que nous proposons :
                      </h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                        Vos avantages :
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                            <span className="text-neutral-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="text-sm font-semibold text-neutral-600">Pour :</span>
                      {service.targetClients.map((client) => (
                        <span
                          key={client}
                          className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium text-sm"
                        >
                          {client}
                        </span>
                      ))}
                    </div>

                    <Link href="/rendez-vous" className="btn-primary inline-flex items-center">
                      Prendre rendez-vous
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Decorative badge */}
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg flex items-center space-x-3">
                        <span className="text-3xl">{service.icon}</span>
                        <span className="font-bold text-neutral-800 text-sm">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="border-t border-neutral-200 mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Besoin de conseils personnalisés ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour étudier votre projet et vous proposer les meilleures solutions
          </p>
          <Link
            href="/rendez-vous"
            className="btn-secondary inline-flex items-center bg-white text-primary-700 hover:bg-primary-50"
          >
            Prendre rendez-vous
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}