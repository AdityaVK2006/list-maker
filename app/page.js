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
  return (
    <>
    <h1>List</h1>
    <form>
      <input type="text" placeholder='Add items here'
      value={item}
      onChange={(e)=>{
        setItem(e.target.value)
      }}
      />
      <button
        onClick={display}
      ><b>Add</b></button>
      <button onClick={()=>{
        setList([])
      }} className='clear'>Clear</button>
      <hr/>
      <div className='list'>
        <ol>{list.map((t,i)=>{
          return(<li key={i} 
          onClick={(e)=>{
            list[i].item = `${list[i].item} ---purchasedgit`
            setList([...list])
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
