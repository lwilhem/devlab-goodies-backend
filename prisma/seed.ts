import { PrismaClient } from '@prisma/client';
import { randomInt } from 'crypto';
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    const retainer = await prisma.retainer.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Retainer #${i}`,
        email: `retainer.${i}@gmail.com`,
        password: 'password',
      },
    });
    const shop = await prisma.shop.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Shop #${i}`,
        description: 'this is a description for a shop',
        retainerId: retainer.id,
      },
    });
    for (let j = 1; j <= 20; j++) {
      const randkey = randomInt(0, 1000000);
      console.log(randkey);
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
