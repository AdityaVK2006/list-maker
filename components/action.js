'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const prisma = new PrismaClient()

const action = async (formData) => {
  await prisma.list.create({
    data: {
        item_name: formData.get('newItem')
    }
  })
  revalidatePath('/')
}

export default action
