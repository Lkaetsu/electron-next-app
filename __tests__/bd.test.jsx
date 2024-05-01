/**
 * @jest-environment node
 */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
it("DB funciona", async() => {
    const userCreate = await prisma.user.create({
        data: {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
        },
    })
    const userFind = await prisma.user.findUnique({
        where: {
            email: 'elsa@prisma.io',
        },
    })
    expect(userFind).toEqual(userCreate);
});
