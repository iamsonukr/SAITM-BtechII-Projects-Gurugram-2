import React, { useEffect, useState } from 'react'

const Sample = () => {
  const [color,setColor]=useState('red')
  const [title,setTitle]=useState("Hello")

  const changeColor=()=>{
    setColor('yellow')
  }
  useEffect(()=>{
    console.log("Title has been changed")
    console.log("")
  },[])

  return (
    <div>
      <h1 style={{color:color}}>{title}</h1>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={changeColor} >Change Color</button>
    </div>
  )
}

export default Sample