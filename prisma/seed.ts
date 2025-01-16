// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  //   const user1 = await prisma.user.upsert({
  //     where: { email: 'jack@efron.com' },
  //     update: {},
  //     create: {
  //       email: 'jack@efron.com',
  //       name: 'jack',
  //     },
  //   });
  //   const user2 = await prisma.user.upsert({
  //     where: { email: 'rose@efron.com' },
  //     update: {},
  //     create: {
  //       email: 'rose@efron.com',
  //       name: 'rose',
  //     },
  //   });
  //   const user3 = await prisma.user.upsert({
  //     where: { email: 'augustus@efron.com' },
  //     update: {},
  //     create: {
  //       email: 'augustus@efron.com',
  //       name: 'Augustus',
  //     },
  //   });

  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      userId: 1,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      userId: 2,
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });
  const post3 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      userId: 3,
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  //   console.log({ post1, post2 });
  console.log({ post1, post2, post3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
