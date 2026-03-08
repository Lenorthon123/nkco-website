export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'RESCHEDULED' | 'CANCELLED' | 'COMPLETED'
export type ServiceType = 'FINANCEMENT' | 'INVESTISSEMENT' | 'COMMERCE' | 'IMMOBILIER_PRINCIPAL' | 'IMMOBILIER_SECONDAIRE' | 'IMMOBILIER_LOCATIF' | 'ORGANISATION' | 'STRATEGIE'
export type ClientType = 'PME' | 'SALARIE' | 'FONCTIONNAIRE' | 'COMMERCANT'

export interface Appointment {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  service: ServiceType
  clientType: ClientType
  message?: string
  date: Date
  timeSlot: string
  status: AppointmentStatus
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
}

export interface AppointmentFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  service: ServiceType
  clientType: ClientType
  message?: string
  date: Date
  timeSlot: string
}

export interface TimeSlot {
  time: string
  available: boolean
}

export const SERVICE_LABELS: Record<ServiceType, string> = {
  FINANCEMENT: 'Assistance en financement',
  INVESTISSEMENT: 'Conseils en investissements',
  COMMERCE: 'Financement des activités commerciales',
  IMMOBILIER_PRINCIPAL: 'Financement immobilier - Résidence principale',
  IMMOBILIER_SECONDAIRE: 'Financement immobilier - Résidence secondaire',
  IMMOBILIER_LOCATIF: 'Financement immobilier locatif',
  ORGANISATION: 'Conseils en organisation',
  STRATEGIE: 'Conseils en stratégie',
}

export const CLIENT_TYPE_LABELS: Record<ClientType, string> = {
  PME: 'PME / PMI',
  SALARIE: 'Salarié du privé',
  FONCTIONNAIRE: 'Fonctionnaire',
  COMMERCANT: 'Petit commerçant',
}

export const STATUS_LABELS: Record<AppointmentStatus, string> = {
  PENDING: 'En attente',
  CONFIRMED: 'Confirmé',
  RESCHEDULED: 'Reprogrammé',
  CANCELLED: 'Annulé',
  COMPLETED: 'Terminé',
}

export const STATUS_COLORS: Record<AppointmentStatus, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  CONFIRMED: 'bg-green-100 text-green-800',
  RESCHEDULED: 'bg-blue-100 text-blue-800',
  CANCELLED: 'bg-red-100 text-red-800',
  COMPLETED: 'bg-gray-100 text-gray-800',
}

// Créneaux horaires disponibles (9h-18h, créneaux de 30min)
export const AVAILABLE_TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]
