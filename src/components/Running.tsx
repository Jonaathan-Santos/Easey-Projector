import { ArrowArcRight, ArrowBendDoubleUpLeft, ArrowLeft, ArrowRight, Play } from 'phosphor-react'
import React, { useState } from 'react'
import controls from '../utils/controls'

interface RunningProps{
  onStop: (arg: boolean)=>void
}

function Running({onStop}: RunningProps) {


  const [Index, setIndex] = useState<number>(0)

  const lyricList = controls.getStorage({ target: "LYRIC" }).lyric
  



  function prevLyric() {
    const respondePrevIndex = controls.prevIndex()
    setIndex(respondePrevIndex)
  }

  function nextLyric() {
    const responseNextIndex = controls.nextIndex()
    setIndex(responseNextIndex)
  }

  return (
    <div
      className='w-full h-[calc(100vh-70px)] bg-zinc-800 flex'
      onKeyDown={(e) => {

        switch (e.code) {
          case "ArrowLeft":
            prevLyric()
            

          case "ArrowUp":
            prevLyric()
            break;

          case "ArrowRight":
            nextLyric()
            break;

          case "ArrowDown":
            nextLyric()
            break;

          case "Space":
            break;

          case "Escape":

            controls.setStorage({target: "STATE", payload: {state: false}})
            onStop(false)

            break;
          default:
            break;
        }
      }}
      tabIndex={0}
    >
      <div className='h-full flex-1 bg-zinc-900 flex flex-col items-center'>
        <div className='w-3/4 flex flex-col '>

          <div className='w-full h-[300px] bg-black select-none flex flex-col items-center justify-center'>
            {lyricList[Index].split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)}
          </div>
          <div className='w-full flex'>
            <div className='w-1/2 h-[100px] text-xs select-none bg-black border-green-600 border-solid border-y-2 border-x-2 flex flex-col items-center justify-center'>
              {lyricList[Index == 0 ? Index : Index - 1].split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)}
            </div>
            <div className='w-1/2 h-[100px] bg-black select-none text-xs border-green-600 border-solid border-y-2 border-x-2 flex flex-col items-center justify-center'>

              {lyricList[Index == (lyricList.length - 1)? Index : Index + 1].split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)}
            </div>

          </div>
        </div>

        <span className='m-4 text-green-600'><a href='/apresentacao' target="_blank" >Abir tela de apresentação</a></span>
        <div className='w-[60px] h-[60px] bg-green-600 flex justify-center items-center rounded-full animate-pulse m-3'>
          <Play size={40} weight="fill" />
        </div>
        <div className='flex'>

          <div
            className='w-[60px] h-[60px] flex m-4 items-center justify-center bg-zinc-700 rounded-md cursor-pointer'
            onClick={prevLyric}
          >
            <ArrowLeft weight="bold" size={30} />
          </div>
          <div
            className='w-[60px] h-[60px] flex my-4 items-center justify-center bg-zinc-900 border-green-600 border-2 rounded-md cursor-pointer'
          >
            <span className="text-green-600 text-xl">
              {Index}
            </span>
          </div>
          
          <div
            className='w-[60px] h-[60px] flex m-4 items-center justify-center bg-zinc-700 rounded-md cursor-pointer'
            onClick={nextLyric}
          >
            <ArrowRight weight="bold" size={30} />
          </div>

        </div>
      </div>
      <div className='h-full bg-zinc-700 w-1/4 p-2 overflow-scroll scrollbar-none'>
        {
          lyricList
            .map(
              (item: string, key: number) =>
                <div
                  style={{ borderColor: "#169f49", borderWidth: Index == key ? "3px" : "0" }}
                  className='bg-black p-1 my-2 rounded-md flex select-none flex-col cursor-pointer items-center justify-center border-transparent'
                  onClick={() => {

                    setIndex(key)
                    controls.setStorage({ target: 'INDEX', payload: { index: key } })
                  }}
                  key={key}
                >
                  {
                    item.split("<br>").map((item: string, index: number) => <span className='text-center' key={index}>{item}</span>)
                  }
                  <div className="w-full bg-zinc-900 mt-2 flex justify-center text-green-500 text-lg">
                    {key}
                  </div>
                </div>
            )}
      </div>
    </div>


  )
}

export default Running