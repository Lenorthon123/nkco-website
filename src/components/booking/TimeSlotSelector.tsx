'use client'

import { AVAILABLE_TIME_SLOTS } from '@/types/appointment'
import { Clock } from 'lucide-react'

interface TimeSlotSelectorProps {
  date: Date
  onSelectTimeSlot: (timeSlot: string) => void
  selectedTimeSlot: string | null
}

export default function TimeSlotSelector({ date, onSelectTimeSlot, selectedTimeSlot }: TimeSlotSelectorProps) {
  // Simuler les créneaux déjà réservés (à remplacer par de vraies données)
  const getBookedSlots = (date: Date): string[] => {
    // Ici, vous feriez un appel API pour récupérer les créneaux réservés
    // Pour la démo, on simule quelques créneaux réservés
    return ['10:00', '14:30', '16:00']
  }

  const bookedSlots = getBookedSlots(date)

  const isSlotAvailable = (timeSlot: string) => {
    return !bookedSlots.includes(timeSlot)
  }

  const morningSlots = AVAILABLE_TIME_SLOTS.filter(slot => {
    const hour = parseInt(slot.split(':')[0])
    return hour < 12
  })

  const afternoonSlots = AVAILABLE_TIME_SLOTS.filter(slot => {
    const hour = parseInt(slot.split(':')[0])
    return hour >= 12
  })

  const SlotButton = ({ timeSlot }: { timeSlot: string }) => {
    const isAvailable = isSlotAvailable(timeSlot)
    const isSelected = selectedTimeSlot === timeSlot

    return (
      <button
        type="button"
        onClick={() => isAvailable && onSelectTimeSlot(timeSlot)}
        disabled={!isAvailable}
        className={`
          flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all
          ${isAvailable ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-40'}
          ${isSelected ? 'bg-primary-600 text-white shadow-lg' : 'bg-white border-2 border-neutral-200 hover:border-primary-300'}
          ${!isAvailable && !isSelected ? 'bg-neutral-100 text-neutral-400' : ''}
        `}
      >
        <Clock className="w-4 h-4" />
        <span>{timeSlot}</span>
      </button>
    )
  }

  return (
    <div className="space-y-6">
      {/* Matinée */}
      <div>
        <h4 className="font-semibold text-lg mb-3 flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
          Matinée (9h - 12h)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {morningSlots.map(slot => (
            <SlotButton key={slot} timeSlot={slot} />
          ))}
        </div>
      </div>

      {/* Après-midi */}
      <div>
        <h4 className="font-semibold text-lg mb-3 flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
          Après-midi (12h - 18h)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {afternoonSlots.map(slot => (
            <SlotButton key={slot} timeSlot={slot} />
          ))}
        </div>
      </div>

      {/* Légende */}
      <div className="flex flex-wrap gap-4 text-sm mt-6 p-4 bg-neutral-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white border-2 border-neutral-200 rounded"></div>
          <span className="text-neutral-600">Disponible</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary-600 rounded"></div>
          <span className="text-neutral-600">Sélectionné</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-neutral-100 rounded"></div>
          <span className="text-neutral-600">Réservé</span>
        </div>
      </div>
    </div>
  )
}
