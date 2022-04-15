import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 13; i++) {
    let incp = 0;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const product = await prisma.product.upsert({
        where: { id: j * i },
        update: {},
        create: {
          price: Number(9.85 * j),
          stock: Number(5 * j),
          name: `Product #${j + incp}`,
          description: 'This is a description',
          shopId: shop.id,
        },
      });
    }
    incp++;
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
