import React, { useState } from 'react'
import controls from '../utils/controls'

function Apresentacao() {

  const [Index, setIndex] = useState<number>(0)
  const [IsPaused, setIsPaused] = useState<boolean>(false)

  setInterval(() => {
      setIndex(controls.getStorage({ target: "INDEX" }).index)
      setIsPaused(controls.getStorage({ target: "ISPAUSED" }).isPaused)
      console.log(IsPaused)
    }, 100
  )
  return (
    <div className='bg-black text-zinc-50 w-full h-screen flex  flex-col items-center justify-center text-4xl p-8'>
      {
        IsPaused? <></> :
        controls.getStorage({ target: "LYRIC" }).lyric[Index].split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)
      }
    </div>
  )
}

export default Apresentacao