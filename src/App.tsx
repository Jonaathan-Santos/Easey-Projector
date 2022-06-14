
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { getLyric } from "./utils/api"


function App() {

  const [Letra, setLetra] = useState<String[]>([])

  useEffect(() => {

    getLyric('https://www.vagalume.com.br/anderson-freire/raridade.html')
      .then(response => setLetra(response))

  }, [])



  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
