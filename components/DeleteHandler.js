'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

const DeleteHandler = async (formdata) => {
  await prisma.list.deleteMany({})
  revalidatePath('/')
}

export default DeleteHandler

