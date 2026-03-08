'use client'

import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { CheckCircle2, X, Calendar, Clock, Mail } from 'lucide-react'

interface ConfirmationModalProps {
  onClose: () => void
  date: Date
  timeSlot: string
}

export default function ConfirmationModal({ onClose, date, timeSlot }: ConfirmationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <h2 className="font-display text-3xl font-bold text-neutral-900 mb-4">
          Rendez-vous confirmé !
        </h2>

        <p className="text-neutral-600 mb-6">
          Votre demande de rendez-vous a bien été envoyée. Nous vous confirmerons ce créneau par email sous 24h.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg">
            <Calendar className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <div>
              <div className="text-sm text-neutral-600">Date</div>
              <div className="font-semibold text-neutral-900">
                {format(date, 'EEEE d MMMM yyyy', { locale: fr })}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg">
            <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <div>
              <div className="text-sm text-neutral-600">Heure</div>
              <div className="font-semibold text-neutral-900">{timeSlot}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg">
            <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <div>
              <div className="text-sm text-neutral-600">Confirmation</div>
              <div className="font-semibold text-neutral-900">Par email sous 24h</div>
            </div>
          </div>
        </div>

        <div className="bg-accent-50 border-l-4 border-accent-600 p-4 rounded mb-6">
          <p className="text-sm text-neutral-700">
            <strong>Prochaines étapes :</strong><br />
            1. Vous recevrez un email de confirmation<br />
            2. Notre équipe validera votre rendez-vous<br />
            3. Vous recevrez les détails de connexion (visio) ou l'adresse (présentiel)
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full btn-primary"
        >
          Fermer
        </button>
      </div>
    </div>
  )
}
