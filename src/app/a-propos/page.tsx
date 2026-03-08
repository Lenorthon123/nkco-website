import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp, Award, Shield, Heart } from 'lucide-react'

export const metadata = {
  title: 'À propos | NK&Co',
  description: 'Découvrez NK&Co, votre partenaire de confiance en conseil financier et investissement depuis plus de 15 ans',
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            À propos de NK&Co
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Votre partenaire de confiance pour concrétiser vos projets financiers depuis 2009
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-neutral-900 mb-6">
              Notre Histoire
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 leading-relaxed mb-6">
              Fondée en 2009, <strong>NK&Co</strong> est née d'une conviction simple : chacun mérite 
              d'avoir accès à un conseil financier de qualité, personnalisé et transparent.
            </p>
            
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Au fil des années, nous avons accompagné plus de <strong>500 clients</strong> dans 
              la réalisation de leurs projets, qu'il s'agisse d'acquisition immobilière, de 
              développement d'entreprise ou d'optimisation patrimoniale.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Notre expertise couvre l'ensemble des besoins en <strong>financement</strong>, 
              <strong> investissement</strong> et <strong>conseil stratégique</strong>, 
              permettant à nos clients de bénéficier d'un accompagnement complet et cohérent.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-neutral-900 mb-6">
              Nos Valeurs
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Confiance
              </h3>
              <p className="text-neutral-600">
                La transparence et l'honnêteté sont au cœur de notre relation avec nos clients. 
                Nous construisons des partenariats durables basés sur la confiance mutuelle.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Engagement
              </h3>
              <p className="text-neutral-600">
                Nous nous engageons pleinement dans chaque projet, de la première consultation 
                jusqu'à la réalisation complète de vos objectifs.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600">
                Nous visons l'excellence dans chaque aspect de notre service, en restant 
                constamment à jour sur les évolutions du marché et de la réglementation.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Proximité
              </h3>
              <p className="text-neutral-600">
                Chaque client est unique. Nous prenons le temps de comprendre votre situation 
                et vos aspirations pour vous offrir un service personnalisé.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Performance
              </h3>
              <p className="text-neutral-600">
                Avec un taux de réussite de 95%, nous mettons notre expertise au service de 
                vos objectifs pour obtenir les meilleurs résultats possibles.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Adaptabilité
              </h3>
              <p className="text-neutral-600">
                Nous nous adaptons à votre situation spécifique et proposons des solutions 
                sur-mesure qui correspondent réellement à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-neutral-900 mb-6">
                Une Expertise Reconnue
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">15+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Années d'expérience</h3>
                    <p className="text-neutral-600">
                      Plus de 15 ans à accompagner nos clients dans leurs projets les plus importants
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">500+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Clients satisfaits</h3>
                    <p className="text-neutral-600">
                      Des particuliers, PME et professionnels qui nous font confiance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">10M€</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Financements obtenus</h3>
                    <p className="text-neutral-600">
                      Des millions d'euros de financements négociés pour nos clients
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">95%</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Taux de réussite</h3>
                    <p className="text-neutral-600">
                      Un taux de réussite exceptionnel grâce à notre expertise et notre réseau
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-white">
              <h3 className="font-display text-3xl font-bold mb-6">
                Notre Mission
              </h3>
              <p className="text-xl text-primary-100 mb-6">
                Rendre le conseil financier accessible à tous en offrant un accompagnement 
                personnalisé, transparent et efficace.
              </p>
              <p className="text-lg text-primary-100 mb-8">
                Nous croyons que chaque projet mérite une attention particulière et des 
                solutions adaptées. C'est pourquoi nous mettons notre expertise et notre 
                réseau au service de votre réussite.
              </p>
              <Link href="/rendez-vous" className="inline-flex items-center bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-primary-50 transition-all">
                Discutons de votre projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-accent-100 max-w-2xl mx-auto">
            Rencontrons-nous pour un premier échange gratuit et sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous" className="btn-secondary bg-white text-accent-700 hover:bg-accent-50">
              Prendre rendez-vous
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
