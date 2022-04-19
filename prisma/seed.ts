import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    const shop = await prisma.shop.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Shop #${i}`,
        description: 'this is a description for a shop',
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
  for (let g = 1; g <= 50; g++) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash('password', salt);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await prisma.user.upsert({
      where: { id: g },
      update: {},
      create: {
        username: `Utilisateur #${g}`,
        email: `user.${g}@gmail.com`,
        password: hash,
        role: 'ROlE_BUYER',
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
