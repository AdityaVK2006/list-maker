'use client'

import React from 'react'
import { PrismaClient } from '@prisma/client'
import action from '@/components/action'
import DeleteHandler from '@/components/DeleteHandler'
import purchased from '@/components/purchased'

const prisma = new PrismaClient() 

const page = async () => {
  const list = await prisma.list.findMany()

  return (
    <>
    <h1>List</h1>
    <form action={action}>
      <input type="text" placeholder='Add items here' name='newItem'/>
      <button><b>Add</b></button>
    </form>
    <form action={DeleteHandler}> 
    <button className='clear'>Clear</button>
    </form>
    
      <hr/>
      <div className='list'>
        <ol>
          <form action={purchased}>
          {list.map((t)=>(
            <li key={t.id}>{t.item_name}</li>
          ))}
          </form>
        </ol>
      </div>
    </> 
  )
}

export default page
