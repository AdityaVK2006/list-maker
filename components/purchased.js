'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const prisma = new PrismaClient()

const purchased = async (e) => {
  await prisma.list.update({
    where:{
        id: e.key
    },
    data:{
        item_name: 'Purchased' 
    }
  })
  revalidatePath('/')
}

export default purchased
