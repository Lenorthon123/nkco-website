import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NK</span>
              </div>
              <span className="font-display text-xl font-bold">NK&Co</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Votre partenaire de confiance pour tous vos projets de financement, investissement et conseil stratégique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/financement" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Assistance en financement
                </Link>
              </li>
              <li>
                <Link href="/services/investissement" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Conseils en investissements
                </Link>
              </li>
              <li>
                <Link href="/services/commerce" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Financement commercial
                </Link>
              </li>
              <li>
                <Link href="/services/immobilier" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Financement immobilier
                </Link>
              </li>
              <li>
                <Link href="/services/conseil" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Conseil en stratégie
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liens Utiles</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Tous nos services
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  Abidjan<br />
                  Côte d'Ivoire
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+2250707994859" className="block text-neutral-400 hover:text-primary-400 transition-colors">
                    +225 07 07 99 48 59
                  </a>
                  <a href="tel:+33744230383" className="block text-neutral-400 hover:text-primary-400 transition-colors">
                    +33 7 44 23 03 83
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@nkco.pro" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  contact@nkco.pro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} NK&Co. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/mentions-legales" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}