import { Play } from "phosphor-react"
import { useEffect, useState } from "react"
import { getLyric } from "./utils/api"


function App() {

  const [Letra, setLetra] = useState<String[]>([])

  useEffect(() => {

    getLyric('https://www.vagalume.com.br/anderson-freire/raridade.html')
      .then(response => setLetra(response))

  }, [])



  return (
    <>
      <header className="w-full p-2 h-[70px] bg-zinc-800 flex justify-between items-center">
        <div className="font-bold text-xl text-green-500 hover:text-green-400 transition duration-500 select-none ">
          Easy Projector
        </div>
        <nav className="flex justify-between">
          <div className="p-2 font-bold text-zinc-300 flex justify-center items-center rounded-md hover:bg-zinc-900 h-[80%] mx-2">Inicio</div>
          <div className="p-2 font-bold text-zinc-300 flex justify-center items-center rounded-md hover:bg-zinc-900 h-[80%] mx-2">Como usar</div>
          <div className="p-2 font-bold text-zinc-300 flex justify-center items-center rounded-md hover:bg-zinc-900 h-[80%] mx-2">Contribuir</div>
        </nav>
      </header>
      <section className="w-full bg-zinc-900 h-[calc(100vh-70px)] flex flex-col items-center">
        <div className="font-bold text-6xl mt-16 text-green-500 hover:text-green-400 transition duration-500 select-none ">
          Easy Projector
        </div>
        <div className="w-[40%] h-16 bg-zinc-800 mt-8 rounded-full shadow-md p-2 flex items-center">
          <input placeholder="Cole aqui o link da letra" type="text" className="flex-1 bg-transparent px-4 placeholder:text-zinc-500 text-zinc-300 outline-none"/>
          <div className="bg-green-600 h-14 w-14 rounded-full flex justify-center items-center hover:bg-green-500 transition-colors duration-700 ">
            <Play weight="fill" size={30} className="text-zinc-800 cursor-pointer" />
          </div>
        </div>
        <span className="text-zinc-300 text-md m-2">Pesquise a letra no site: <a className="text-green-600" target='_blank' href="https://www.vagalume.com.br/">vagalume.com.br</a></span>
        <span className="text-zinc-300 text-md m-2">Não sabe como usar? click <a className="text-green-600" target='_blank' href="#">aqui</a></span>
        <span className="text-zinc-300 text-md p-3 bg-zinc-800 rounded-md">Ajude a manter esta ferramenta <a className="text-green-600" target='_blank' href="#">doe qualquer valor</a></span>

      </section>



    </>
  )
}

export default App
