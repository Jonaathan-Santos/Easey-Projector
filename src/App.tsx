
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"






function App() {

  const [Letra, setLetra] = useState<String[]>([])
  const [Screen, setScreen] = useState<boolean>(true)


  window.addEventListener('resize', () => {
    if (window.screen.width < 770 && Screen) {
      setScreen(false)
    }
    if (window.screen.width > 770 && !Screen) {
      setScreen(true)
    }
  })

  useEffect(() => {

    setScreen(window.screen.width > 770)

  }, [])




  return (
    <>
      {
        Screen ?
          <Outlet />
          :
          <div className="w-full h-screen bg-zinc-800 flex justify-center flex-col items-center text-2xl">
            <span className="text-4xl text-green-500 my-4">
              Easy Projector
            </span>
            <span className="text-center">
              Esta aplicação não pode ser executada em dispositivos mobiles
            </span>
            <span className="text-lg my-4">
              Sinto muito!
            </span>
          </div>
      }
    </>
  )
}

export default App
