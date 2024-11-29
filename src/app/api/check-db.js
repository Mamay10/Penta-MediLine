import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany(); 
    res.status(200).json({ success: true, message: "Database connected!", users });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ success: false, message: "Database connection failed!" });
  } finally {
    await prisma.$disconnect();
  }
}