"use client"
import React, { useState } from 'react'

const page = () => {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])
  const display = (e)=>{
    e.preventDefault()
    setList([...list,{item}])
    setItem("")
  }
  const deleteHandler = (i)=>{
    
  }
  return (
    <>
    <h1>List</h1>
    <form>
      <input type="text" placeholder='Enter items here'
      value={item}
      onChange={(e)=>{
        setItem(e.target.value)
      }}
      />
      <button
        onClick={display}
      ><b>Add</b></button>
      <hr/>
      <div className='list'>
        <ol>{list.map((t,i)=>{
          return(<li key={i}
          onClick={(i)=>{
            deleteHandler(i)
          }}
          >{t.item}</li>) 
        })}
        </ol>
      </div>
    </form>
    </> 
  )
}

export default page
