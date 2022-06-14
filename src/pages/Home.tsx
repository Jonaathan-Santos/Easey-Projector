import React, { useEffect, useState } from 'react'
import controls from '../utils/controls'
import Header from '../components/Header'
import Running from '../components/Running'
import Search from '../components/Search'


function Home() {

  const [IsPlay, setIsPlay] = useState(false)

  useEffect(() => {
    controls.initStorage()
    setIsPlay(controls.getStorage({target: "STATE" }).state)
    console.log("ta rodando")
  },[])
  

  function onPlay (){
    setIsPlay(true)
  }
  return (
    <>
      <Header />
      {
        !IsPlay? <Search onPlay={onPlay} /> : <Running/>
      }
      
    </>
  )
}

export default Home