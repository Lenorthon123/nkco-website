import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email et mot de passe requis')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          throw new Error('Email ou mot de passe incorrect')
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error('Email ou mot de passe incorrect')
        }

        // Retourner l'objet avec role explicitement typé
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role as string,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        // ← Fix : passer par unknown pour éviter l'erreur de type
        token.role = (user as unknown as { role: string }).role
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },

  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
}