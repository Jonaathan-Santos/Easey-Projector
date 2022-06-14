import React, { useState } from 'react'
import { Play } from "phosphor-react"
import controls from '../utils/controls';
import { getLyric } from '../utils/api';

interface SearchProps {
  onPlay: () => void;
}


function Search({ onPlay }: SearchProps) {

  const [ImputValue, setImputValue] = useState('')
  
  async function Go (){
  
    const lyric = await getLyric(ImputValue)
    controls.setStorage({ target: "LYRIC", payload: { lyric } })
    controls.setStorage({target:"INDEX", payload: {index: 0}})
    onPlay()
  }

  return (
    <section className="w-full bg-zinc-900 h-[calc(100vh-70px)] flex flex-col items-center">
      <div className="font-bold text-6xl mt-16 text-green-500 hover:text-green-400 transition duration-500 select-none ">
        Easy Projector
      </div>
      <div className="w-[40%] h-16 bg-zinc-800 mt-8 rounded-full shadow-md p-2 flex items-center">
        <input onChange={(event) => setImputValue(event.target.value as any)} placeholder="Cole aqui o link da letra" type="text" className="flex-1 bg-transparent px-4 placeholder:text-zinc-500 text-zinc-300 outline-none" />
        <div
          onClick={() => {Go()}}
          className="bg-green-600 h-14 w-14 rounded-full flex justify-center items-center hover:bg-green-500 transition-colors duration-700 "
        >
          <Play weight="fill" size={30} className="text-zinc-800 cursor-pointer" />
        </div>
      </div>
      <span className="text-zinc-300 text-md m-2">Pesquise a letra no site: <a className="text-green-600" target='_blank' href="https://www.vagalume.com.br/">vagalume.com.br</a></span>
      <span className="text-zinc-300 text-md m-2">Não sabe como usar? click <a className="text-green-600" target='_blank' href="#">aqui</a></span>
      <span className="text-zinc-300 text-md p-3 bg-zinc-800 rounded-md">Ajude a manter esta ferramenta <a className="text-green-600" target='_blank' href="#">doe qualquer valor</a></span>
    </section>
  )
}

export default Search