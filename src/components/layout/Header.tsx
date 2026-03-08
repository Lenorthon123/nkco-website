'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200) // Délai de 200ms avant fermeture
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">NK</span>
            </div>
            <span className="font-display text-2xl font-bold text-neutral-900">
              NK&Co
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Accueil
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4 animate-fade-in">
                  <Link href="/services/financement" className="block px-6 py-3 hover:bg-primary-50 transition-colors">
                    <div className="font-semibold text-neutral-900">💰 Assistance en financement</div>
                    <div className="text-sm text-neutral-600">Solutions adaptées à vos besoins</div>
                  </Link>
                  <Link href="/services/investissement" className="block px-6 py-3 hover:bg-primary-50 transition-colors">
                    <div className="font-semibold text-neutral-900">📈 Conseils en investissements</div>
                    <div className="text-sm text-neutral-600">Stratégies personnalisées</div>
                  </Link>
                  <Link href="/services/commerce" className="block px-6 py-3 hover:bg-primary-50 transition-colors">
                    <div className="font-semibold text-neutral-900">🏪 Financement commercial</div>
                    <div className="text-sm text-neutral-600">Pour votre activité</div>
                  </Link>
                  <Link href="/services/immobilier" className="block px-6 py-3 hover:bg-primary-50 transition-colors">
                    <div className="font-semibold text-neutral-900">🏠 Financement immobilier</div>
                    <div className="text-sm text-neutral-600">Tous types de projets</div>
                  </Link>
                  <Link href="/services/conseil" className="block px-6 py-3 hover:bg-primary-50 transition-colors">
                    <div className="font-semibold text-neutral-900">🎯 Conseil & stratégie</div>
                    <div className="text-sm text-neutral-600">Organisation et développement</div>
                  </Link>
                  <div className="border-t mt-2 pt-2">
                    <Link href="/services" className="block px-6 py-2 text-primary-600 font-semibold hover:bg-primary-50">
                      Voir tous nos services →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            
            <Link href="/rendez-vous" className="btn-primary">
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-neutral-700 hover:text-primary-600 font-medium px-4 py-2">
                Accueil
              </Link>
              <Link href="/services" className="text-neutral-700 hover:text-primary-600 font-medium px-4 py-2">
                Services
              </Link>
              <Link href="/contact" className="text-neutral-700 hover:text-primary-600 font-medium px-4 py-2">
                Contact
              </Link>
              <Link href="/rendez-vous" className="btn-primary mx-4">
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}