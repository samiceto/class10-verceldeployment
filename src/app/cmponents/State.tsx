"use client"
import React, { useState } from 'react'

export const State = () => {
    const[count, setCount]=useState(100);
    const[price, setPrice]=useState(2500);
    const[name, setName]=useState('Haseeeb');
    const[islogin, setIslogin]=useState(false);
  return (
    <div>state
        <br></br>
        {count}
        <br />
        <button onClick={()=>setCount(count+1)}>Click here</button><br />
        <button onClick={()=>setCount(count-1)}>Decrease </button><br />
        <button onClick={()=>setCount(90)}>Reset</button>
        
    </div>
  )
}
