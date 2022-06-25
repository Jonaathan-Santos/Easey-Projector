import React, { useEffect, useState } from 'react'
import controls from '../utils/controls'
import Header from '../components/Header'
import Running from '../components/Running'
import Search from '../components/Search'


function Home() {

  const [IsPlay, setIsPlay] = useState(false)

  useEffect(() => {
    controls.initStorage()
    setIsPlay(controls.getStorage({target: "STATE" }).state as boolean)
  },[])
  

  function onPlay (){
    setIsPlay(true)
    controls.setStorage({target: "STATE", payload: {state: true}})
  }
  return (
    <>
      <Header />
      {
        !IsPlay? <Search onPlay={onPlay} /> : <Running onStop={setIsPlay}/>
      }
      
    </>
  )
}

export default Home