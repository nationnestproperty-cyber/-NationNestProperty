const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();
async function main(){
  const email = process.env.ADMIN_EMAIL || 'admin@nationnestproperty.com';
  const password = process.env.ADMIN_PASSWORD || 'demo1234';
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash: await bcrypt.hash(password, 10) }
  });
  console.log('Seeded admin:', email);
}
main().then(()=> prisma.$disconnect());
