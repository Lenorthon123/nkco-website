import Link from 'next/link'
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Prêt à concrétiser vos projets ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-100">
            Prenez rendez-vous dès aujourd'hui pour un premier échange gratuit et sans engagement
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Rendez-vous en ligne</h3>
              <p className="mb-6 text-primary-100">
                Choisissez le créneau qui vous convient et rencontrez-nous par visio ou en personne
              </p>
              <Link 
                href="/rendez-vous" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Réserver un créneau
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Contactez-nous</h3>
              <p className="mb-6 text-primary-100">
                Une question ? Besoin d'informations ? Notre équipe vous répond sous 24h
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
              >
                Envoyer un message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Premier échange gratuit</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
