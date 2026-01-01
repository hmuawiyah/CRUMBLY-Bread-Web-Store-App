import prisma from '../src/libs/prisma.js';
import { faker } from '@faker-js/faker';
import bcrypt from "bcryptjs"

async function main() {

    for (let i = 0; i < 5; i++) {
        await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: await bcrypt.hash(faker.internet.password(), 10),
                addresses: {
                    create: [
                        {
                            addressName: 'Home ' + faker.number.int({ min: 1, max: 9 }).toString(),
                            street: faker.location.streetAddress(),
                            city: faker.location.city(),
                            province: faker.location.state(),
                            postalCode: faker.location.zipCode(),
                            phone: faker.phone.number(),
                        },
                    ],
                },
            },
        });
    }

    for (let i = 0; i < 6; i++) {
        await prisma.products.create({
            data: {
                name: faker.food.dish(),
                description: faker.lorem.words(7), 
                price: faker.number.int({ min: 5, max: 50 }) * 1000,
                stock: faker.number.int({ min: 10, max: 100 }), 
                imageUrl: faker.image.url({ width: 640, height: 480, category: 'food' }), 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        })
    };

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
