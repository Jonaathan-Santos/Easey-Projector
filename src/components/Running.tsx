import { ArrowArcRight, ArrowBendDoubleUpLeft, ArrowLeft, ArrowRight, Play } from 'phosphor-react'
import React, { useState } from 'react'
import controls from '../utils/controls'


function Running() {


  const [Index, setIndex] = useState<number>(0)

  const lyricList = controls.getStorage({ target: "LYRIC" }).lyric


  return (

    <div className='w-full h-[calc(100vh-70px)] bg-zinc-800 flex'>
      <div className='h-full flex-1 bg-zinc-900 flex flex-col items-center'>
        <div className='w-3/4 h-[300px] bg-black flex flex-col items-center justify-center'>
          {lyricList[Index].split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)}
        </div>
        <div className='w-[60px] h-[60px] bg-green-600 flex justify-center items-center rounded-full animate-pulse m-3'>
          <Play size={40} weight="fill" />
        </div>
        <div className='flex'>

          <div 
            className='w-[60px] h-[60px] flex m-4 items-center justify-center bg-zinc-700 rounded-md cursor-pointer'
            onClick={()=> {
              setIndex(Index - 1)
              controls.setStorage({target: 'INDEX', payload:{index: Index}})
            }}
          >
            <ArrowLeft weight="bold"size={30}/>
          </div>
          <div 
            className='w-[60px] h-[60px] flex m-4 items-center justify-center bg-zinc-700 rounded-md cursor-pointer'
            onClick={()=> {
              console.log(Index)
              setIndex(Index + 1)
              controls.setStorage({target: 'INDEX', payload:{index: Index}})
            }} 
          >
            <ArrowRight weight="bold" size={30} />
          </div>

        </div>
      </div>
      <div className='h-full bg-zinc-700 w-1/4 p-2 overflow-scroll scrollbar-none'>
        {
          lyricList
            .map(
              (item: string, index: number) => <div style={{ borderColor: "#169f49", borderWidth: Index == index ? "3px" : "0" }} className='bg-black p-1 my-2 rounded-md flex flex-col items-center justify-center border-transparent'>
                {
                  item.split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)
                }
                <div className="w-full bg-zinc-900 mt-2 flex justify-center text-green-500 text-lg">
                  {index}
                </div>
              </div>
            )}
      </div>
    </div>


  )
}

export default Running