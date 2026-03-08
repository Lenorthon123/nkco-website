'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simuler l'envoi (à remplacer par un vrai appel API)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form data:', data)
      setSubmitSuccess(true)
      reset()

      // Masquer le message de succès après 5 secondes
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8">
                Envoyez-nous un message
              </h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                  <p className="text-green-800 font-semibold">
                    ✓ Message envoyé avec succès !
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="label">Nom complet *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="input-field"
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="+225 07 07 99 48 59"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="label">Sujet *</label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="input-field"
                    placeholder="Ex: Demande de financement immobilier"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Message *</label>
                  <textarea
                    {...register('message')}
                    className="input-field"
                    rows={6}
                    placeholder="Décrivez votre demande ou votre projet..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="inline ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-neutral-600">
                  * Champs obligatoires - Vos données sont protégées et ne seront pas partagées
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-neutral-600">
                        Abidjan<br />
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <div className="space-y-2">
                        <a 
                          href="tel:+2250707994859" 
                          className="block text-primary-600 hover:text-primary-700 font-medium"
                        >
                          +225 07 07 99 48 59
                        </a>
                        <a 
                          href="tel:+33744230383" 
                          className="block text-primary-600 hover:text-primary-700 font-medium"
                        >
                          +33 7 44 23 03 83
                        </a>
                      </div>
                      <p className="text-sm text-neutral-600 mt-2">
                        Du lundi au vendredi, 9h - 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/2250707994859" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        +225 07 07 99 48 59
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Disponible 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:contact@nkco.pro" 
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        contact@nkco.pro
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horaires</h3>
                      <div className="text-neutral-600 space-y-1">
                        <p>Lundi - Vendredi : 9h00 - 18h00</p>
                        <p>Samedi - Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                <h3 className="font-bold text-xl mb-3">Préférez un rendez-vous ?</h3>
                <p className="text-primary-100 mb-4">
                  Réservez un créneau pour discuter de votre projet en visio ou en personne.
                </p>
                <a 
                  href="/rendez-vous" 
                  className="btn-secondary block text-center bg-white text-primary-700 hover:bg-primary-50"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-center text-neutral-900 mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-lg mb-2">Quel est le délai de réponse ?</h3>
              <p className="text-neutral-600">
                Nous nous engageons à répondre à tous les messages dans un délai de 24h ouvrées.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Les consultations sont-elles payantes ?</h3>
              <p className="text-neutral-600">
                Le premier rendez-vous est toujours gratuit et sans engagement. C'est l'occasion 
                de faire connaissance et d'étudier ensemble votre projet.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Intervenez-vous partout en Côte d'Ivoire ?</h3>
              <p className="text-neutral-600">
                Oui, nous accompagnons des clients dans toute la Côte d'Ivoire et à l'international 
                grâce à nos rendez-vous en visioconférence et notre réseau de partenaires.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Mes données sont-elles protégées ?</h3>
              <p className="text-neutral-600">
                Absolument. Toutes vos informations sont traitées de manière confidentielle et 
                sécurisée conformément au RGPD. Elles ne sont jamais partagées avec des tiers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}