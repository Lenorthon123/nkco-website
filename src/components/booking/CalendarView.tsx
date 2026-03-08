'use client'

import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isAfter, isBefore, startOfDay } from 'date-fns'
import { fr } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CalendarViewProps {
  onSelectDate: (date: Date) => void
  selectedDate: Date | null
}

export default function CalendarView({ onSelectDate, selectedDate }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const today = startOfDay(new Date())
  
  // Dates limites: aujourd'hui et dans 3 mois
  const minDate = today
  const maxDate = addMonths(today, 3)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const isDateSelectable = (date: Date) => {
    const day = date.getDay()
    // Samedi (6) et Dimanche (0) non sélectionnables
    if (day === 0 || day === 6) return false
    
    // Date doit être entre aujourd'hui et dans 3 mois
    return !isBefore(date, minDate) && !isAfter(date, maxDate)
  }

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6">
      {/* Header with month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={previousMonth}
          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          disabled={isBefore(subMonths(currentMonth, 1), today)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <h3 className="font-bold text-xl">
          {format(currentMonth, 'MMMM yyyy', { locale: fr })}
        </h3>
        
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          disabled={isAfter(addMonths(currentMonth, 1), maxDate)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-neutral-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day, index) => {
          const isSelectable = isDateSelectable(day)
          const isSelected = selectedDate && isSameDay(day, selectedDate)
          const isToday = isSameDay(day, today)

          return (
            <button
              key={index}
              type="button"
              onClick={() => isSelectable && onSelectDate(day)}
              disabled={!isSelectable}
              className={`
                aspect-square p-2 rounded-lg text-sm font-medium transition-all
                ${!isSameMonth(day, currentMonth) ? 'text-neutral-300' : ''}
                ${isSelectable ? 'hover:bg-primary-100 cursor-pointer' : 'cursor-not-allowed opacity-40'}
                ${isSelected ? 'bg-primary-600 text-white hover:bg-primary-700' : ''}
                ${isToday && !isSelected ? 'border-2 border-primary-600' : ''}
                ${!isSelectable && !isSelected ? 'text-neutral-400' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>

      <div className="mt-4 text-sm text-neutral-600">
        <p>• Les week-ends ne sont pas disponibles</p>
        <p>• Réservations possibles jusqu'à 3 mois à l'avance</p>
      </div>
    </div>
  )
}
