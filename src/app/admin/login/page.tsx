'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email ou mot de passe incorrect')
      } else {
        router.push('/admin/dashboard')
        router.refresh()
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-primary-700 font-bold text-2xl">NK</span>
            </div>
            <span className="font-display text-3xl font-bold text-white">NK&Co</span>
          </div>
          <p className="text-primary-200">Espace administrateur</p>
        </div>

        {/* Carte */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="font-display text-2xl font-bold text-neutral-900 mb-2">
            Connexion
          </h1>
          <p className="text-neutral-500 mb-8 text-sm">
            Accédez à votre tableau de bord
          </p>

          {/* Message d'erreur */}
          {error && (
            <div className="flex items-center space-x-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@nkco.pro"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Bouton connexion */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Connexion...</span>
                </>
              ) : (
                <span>Se connecter</span>
              )}
            </button>
          </form>
        </div>

        {/* Lien retour */}
        <div className="text-center mt-6">
          
            href="/"
            className="text-primary-200 hover:text-white text-sm transition-colors"
          <a>
            ← Retour au site
          </a>
        </div>
      </div>
    </div>
  )
}