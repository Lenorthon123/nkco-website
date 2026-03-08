'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Users, Clock, TrendingUp, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

interface DashboardStats {
  totalAppointments: number
  pendingAppointments: number
  confirmedAppointments: number
  todayAppointments: number
  weekAppointments: number
  monthAppointments: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAppointments: 0,
    pendingAppointments: 0,
    confirmedAppointments: 0,
    todayAppointments: 0,
    weekAppointments: 0,
    monthAppointments: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler le chargement des stats
    // À remplacer par un vrai appel API
    setTimeout(() => {
      setStats({
        totalAppointments: 156,
        pendingAppointments: 12,
        confirmedAppointments: 98,
        todayAppointments: 5,
        weekAppointments: 23,
        monthAppointments: 67,
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-custom py-6">
          <h1 className="font-display text-3xl font-bold text-neutral-900">
            Dashboard Administrateur
          </h1>
          <p className="text-neutral-600 mt-2">
            Vue d'ensemble de votre activité
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card border-l-4 border-primary-600">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold text-neutral-900">
                {stats.totalAppointments}
              </span>
            </div>
            <div className="text-sm text-neutral-600 font-medium">Total RDV</div>
          </div>

          <div className="card border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-neutral-900">
                {stats.pendingAppointments}
              </span>
            </div>
            <div className="text-sm text-neutral-600 font-medium">En attente</div>
          </div>

          <div className="card border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-neutral-900">
                {stats.confirmedAppointments}
              </span>
            </div>
            <div className="text-sm text-neutral-600 font-medium">Confirmés</div>
          </div>

          <div className="card border-l-4 border-accent-600">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent-600" />
              </div>
              <span className="text-2xl font-bold text-neutral-900">
                {stats.todayAppointments}
              </span>
            </div>
            <div className="text-sm text-neutral-600 font-medium">Aujourd'hui</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Cette semaine</h3>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {stats.weekAppointments}
            </div>
            <p className="text-sm text-neutral-600">rendez-vous programmés</p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Ce mois</h3>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {stats.monthAppointments}
            </div>
            <p className="text-sm text-neutral-600">rendez-vous programmés</p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-4">Taux de confirmation</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {((stats.confirmedAppointments / stats.totalAppointments) * 100).toFixed(0)}%
            </div>
            <p className="text-sm text-neutral-600">des demandes acceptées</p>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold text-xl mb-6">Actions rapides</h3>
            <div className="space-y-4">
              <Link 
                href="/admin/rendez-vous?status=pending"
                className="flex items-center justify-between p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium">RDV en attente</span>
                </div>
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {stats.pendingAppointments}
                </span>
              </Link>

              <Link 
                href="/admin/rendez-vous?date=today"
                className="flex items-center justify-between p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">RDV aujourd'hui</span>
                </div>
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {stats.todayAppointments}
                </span>
              </Link>

              <Link 
                href="/admin/rendez-vous"
                className="flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-neutral-600" />
                  <span className="font-medium">Tous les rendez-vous</span>
                </div>
                <span className="text-neutral-600">→</span>
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-xl mb-6">Activité récente</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Nouveau rendez-vous confirmé</p>
                  <p className="text-sm text-neutral-600">Jean Dupont - Financement immobilier</p>
                  <p className="text-xs text-neutral-400 mt-1">Il y a 2 heures</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Demande de rendez-vous</p>
                  <p className="text-sm text-neutral-600">Sophie Martin - Conseil investissement</p>
                  <p className="text-xs text-neutral-400 mt-1">Il y a 5 heures</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Rendez-vous reprogrammé</p>
                  <p className="text-sm text-neutral-600">Pierre Leblanc - PME financement</p>
                  <p className="text-xs text-neutral-400 mt-1">Hier à 14:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
