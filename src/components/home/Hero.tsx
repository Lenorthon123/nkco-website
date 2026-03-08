'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
          {/* Left content */}
          <div className="text-white animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold">✨ Votre partenaire financier de confiance</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Réalisez vos projets avec
              <span className="block mt-2 text-accent-300">NK&Co</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              Expertise en financement, investissement et conseil stratégique pour accompagner votre réussite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/rendez-vous" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl">
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all">
                Découvrir nos services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-sm text-primary-200">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">10M€</div>
                <div className="text-sm text-primary-200">Financements obtenus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
                <div className="text-sm text-primary-200">Taux de réussite</div>
              </div>
            </div>
          </div>

          {/* Right content - Features cards */}
          <div className="grid gap-6 animate-slide-up animation-delay-200">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Expertise reconnue</h3>
              <p className="text-neutral-600">
                Plus de 15 ans d'expérience dans le conseil financier et l'accompagnement de projets.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Accompagnement sur-mesure</h3>
              <p className="text-neutral-600">
                Solutions personnalisées adaptées à votre situation et vos objectifs spécifiques.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Réseau étendu</h3>
              <p className="text-neutral-600">
                Accès privilégié aux meilleures offres grâce à notre réseau bancaire et institutionnel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
