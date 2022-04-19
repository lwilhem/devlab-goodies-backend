import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';
const prisma = new PrismaClient();

async function main() {
  const salt: string = await bcrypt.genSalt();
  const password: string = await bcrypt.hash('password', salt);

  for (let i = 1; i <= 10; i++) {
    const shop = await prisma.shop.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Shop #${i}`,
        description: 'this is a description for a shop',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const retainer = await prisma.retainer.upsert({
      where: { id: i },
      update: {},
      create: {
        email: `vendeur.${i}@devinci.fr`,
        password: password,
      },
    });
    for (let j = 1; j <= 20; j++) {
      const randkey = randomInt(0, 1000000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const product = await prisma.product.upsert({
        where: { id: j * i },
        update: {},
        create: {
          price: Number(9.85 * j),
          stock: Number(5 * j),
          name: `Product #${randkey}`,
          description: 'This is a description',
          shopId: shop.id,
        },
      });
    }
  }
  for (let j = 1; j <= 100; j++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const buyer = await prisma.buyer.upsert({
      where: { id: j },
      update: {},
      create: {
        email: `acheteur.${j}@edu.devinci.fr`,
        password: password,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
