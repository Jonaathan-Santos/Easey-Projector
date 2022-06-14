import React, { useState } from 'react'
import controls from '../utils/controls'

function Apresentacao() {

  const [Index, setIndex] = useState<number>(0)

  setInterval(()=>{
    setIndex(controls.getStorage({target: "INDEX"}).index)}, 100
  )
  return (
    <div className='bg-zinc-900 text-zinc-50 w-full h-screen flex  flex-col items-center justify-center text-4xl p-8'>
      {controls.getStorage({target: "LYRIC"}).lyric[Index].split("<br>").map((item: string, index: number)=> <span className='text-center' key={index}>{item}</span>)}
    </div>
  )
}

export default Apresentacao