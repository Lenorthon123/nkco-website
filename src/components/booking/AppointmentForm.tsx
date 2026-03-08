'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import CalendarView from './CalendarView'
import TimeSlotSelector from './TimeSlotSelector'
import ConfirmationModal from './ConfirmationModal'
import { 
  SERVICE_LABELS, 
  CLIENT_TYPE_LABELS,
  type ServiceType,
  type ClientType 
} from '@/types/appointment'

const appointmentSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(\+33|0)[1-9](\d{8})$/, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  service: z.enum([
    'FINANCEMENT',
    'INVESTISSEMENT',
    'COMMERCE',
    'IMMOBILIER_PRINCIPAL',
    'IMMOBILIER_SECONDAIRE',
    'IMMOBILIER_LOCATIF',
    'ORGANISATION',
    'STRATEGIE'
  ]),
  clientType: z.enum(['PME', 'SALARIE', 'FONCTIONNAIRE', 'COMMERCANT']),
  message: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    if (!selectedDate || !selectedTimeSlot) {
      alert('Veuillez sélectionner une date et un créneau horaire')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
        }),
      })

      if (response.ok) {
        setShowConfirmation(true)
        reset()
        setSelectedDate(null)
        setSelectedTimeSlot(null)
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <h2 className="font-display text-3xl font-bold mb-8">Informations de contact</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="label">Prénom *</label>
            <input
              {...register('firstName')}
              type="text"
              className="input-field"
              placeholder="Jean"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="label">Nom *</label>
            <input
              {...register('lastName')}
              type="text"
              className="input-field"
              placeholder="Dupont"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="label">Email *</label>
            <input
              {...register('email')}
              type="email"
              className="input-field"
              placeholder="jean.dupont@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="label">Téléphone *</label>
            <input
              {...register('phone')}
              type="tel"
              className="input-field"
              placeholder="06 12 34 56 78"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="label">Entreprise (optionnel)</label>
          <input
            {...register('company')}
            type="text"
            className="input-field"
            placeholder="Nom de votre entreprise"
          />
        </div>

        <h2 className="font-display text-3xl font-bold mb-8 mt-12">Votre projet</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="label">Type de service *</label>
            <select {...register('service')} className="input-field">
              <option value="">Sélectionnez un service</option>
              {Object.entries(SERVICE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label className="label">Profil *</label>
            <select {...register('clientType')} className="input-field">
              <option value="">Sélectionnez votre profil</option>
              {Object.entries(CLIENT_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.clientType && (
              <p className="text-red-600 text-sm mt-1">{errors.clientType.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="label">Message (optionnel)</label>
          <textarea
            {...register('message')}
            className="input-field"
            rows={4}
            placeholder="Décrivez brièvement votre projet..."
          />
        </div>

        <h2 className="font-display text-3xl font-bold mb-8 mt-12">Date et heure</h2>

        <div className="mb-6">
          <label className="label mb-4">Sélectionnez une date</label>
          <CalendarView onSelectDate={setSelectedDate} selectedDate={selectedDate} />
        </div>

        {selectedDate && (
          <div className="mb-8">
            <label className="label mb-4">
              Créneaux disponibles le {format(selectedDate, 'dd MMMM yyyy', { locale: fr })}
            </label>
            <TimeSlotSelector
              date={selectedDate}
              onSelectTimeSlot={setSelectedTimeSlot}
              selectedTimeSlot={selectedTimeSlot}
            />
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !selectedDate || !selectedTimeSlot}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Confirmer le rendez-vous'}
          </button>
        </div>
      </form>

      {showConfirmation && (
        <ConfirmationModal
          onClose={() => setShowConfirmation(false)}
          date={selectedDate!}
          timeSlot={selectedTimeSlot!}
        />
      )}
    </>
  )
}
