import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i <= 100; i++) {
    const shop = await prisma.shop.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Shop #${i}`,
        description: 'this is a description for a shop',
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const product = await prisma.product.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Product #${i}`,
        description: 'this is a description',
        price: 20.99,
        stock: 100,
        shopId: shop.id,
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
