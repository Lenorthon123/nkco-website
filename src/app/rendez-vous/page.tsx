import AppointmentForm from '@/components/booking/AppointmentForm'
import { Calendar, CheckCircle2, Users } from 'lucide-react'

export const metadata = {
  title: 'Prendre Rendez-vous | NK&Co',
  description: 'Réservez votre rendez-vous en ligne avec NK&Co pour discuter de vos projets de financement et investissement',
}

export default function RendezVousPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Réservez votre rendez-vous
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Choisissez le créneau qui vous convient et discutons de votre projet
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Réservation instantanée</h3>
                <p className="text-neutral-600">Choisissez votre créneau et recevez une confirmation immédiate</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expert dédié</h3>
                <p className="text-neutral-600">Rencontrez un conseiller spécialisé dans votre domaine</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sans engagement</h3>
                <p className="text-neutral-600">Premier échange gratuit et sans aucune obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <AppointmentForm />
        </div>
      </section>
    </div>
  )
}
