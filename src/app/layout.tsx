import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NK&Co - Conseil en Financement et Investissement',
  description: 'NK&Co vous accompagne dans vos projets de financement, investissements immobiliers et conseil en stratégie. Expertise PME, salariés, fonctionnaires et commerçants.',
  keywords: [
    'financement',
    'investissement',
    'conseil financier',
    'immobilier',
    'crédit professionnel',
    'PME',
    'stratégie entreprise',
  ],
  authors: [{ name: 'NK&Co' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nkco.fr',
    title: 'NK&Co - Conseil en Financement et Investissement',
    description: 'Votre partenaire financier pour tous vos projets',
    siteName: 'NK&Co',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
