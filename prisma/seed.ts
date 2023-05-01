import { PrismaClient } from '@prisma/client';
import * as process from 'process';

// IMPORTANT - populate database with items

const prisma = new PrismaClient();

async function main() {
  const ingredient1 = await prisma.ingredient.upsert({
    where: {
      name: 'Apple',
    },
    create: {
      name: 'Apple',
    },
    update: {},
  });

  const ingredient2 = await prisma.ingredient.upsert({
    where: {
      name: 'Orange',
    },
    create: {
      name: 'Orange',
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
