import { PrismaClient } from "@prisma/client";

// conexão com o bd
export const prisma = new PrismaClient({
  log: ['query']
})