import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'nkoffi17@gmail.com'     
  const password = 'NkCo2024!'        
  const name = 'Administrateur NK&Co'

  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 12)

  // Créer l'admin
  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      name,
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin créé avec succès :')
  console.log('   Email    :', admin.email)
  console.log('   Nom      :', admin.name)
  console.log('   Mot de passe : (celui que tu as défini)')
  console.log('\n⚠️  Supprime ce fichier après utilisation !')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())