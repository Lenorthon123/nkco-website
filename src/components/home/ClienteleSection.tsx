import Link from 'next/link'
import { clienteles } from '@/data/clientele'
import { ArrowRight } from 'lucide-react'

export default function ClienteleSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Notre Clientèle
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Des solutions adaptées à chaque profil pour répondre à vos besoins spécifiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clienteles.map((client, index) => (
            <Link 
              href={`/clientele#${client.id}`}
              key={client.id}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {client.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 text-center mb-6 line-clamp-2">
                  {client.description}
                </p>

                <div className="text-center">
                  <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    Découvrir
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/clientele" className="btn-secondary inline-flex items-center">
            Voir toute notre clientèle
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
