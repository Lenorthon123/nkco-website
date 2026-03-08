import { CheckCircle2, Clock, Target, Award, HeartHandshake, Sparkles } from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Expertise éprouvée',
    description: 'Plus de 15 ans d\'expérience dans le conseil financier et l\'accompagnement de projets complexes.',
  },
  {
    icon: Clock,
    title: 'Réactivité garantie',
    description: 'Réponse sous 24h et traitement rapide de vos dossiers pour concrétiser vos projets sans délai.',
  },
  {
    icon: Target,
    title: 'Approche personnalisée',
    description: 'Analyse approfondie de votre situation pour des solutions parfaitement adaptées à vos besoins.',
  },
  {
    icon: Award,
    title: 'Taux compétitifs',
    description: 'Négociation des meilleures conditions grâce à notre réseau bancaire étendu et nos partenariats.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement total',
    description: 'De la première consultation à la signature finale, nous sommes à vos côtés à chaque étape.',
  },
  {
    icon: Sparkles,
    title: 'Transparence absolue',
    description: 'Aucun frais caché, conseil impartial et communication claire tout au long du processus.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Pourquoi choisir NK&Co ?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Votre réussite est notre priorité. Découvrez ce qui fait la différence NK&Co
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonial section */}
       
      </div>
    </section>
  )
}
