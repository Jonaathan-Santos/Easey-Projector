import React from 'react'

function Header() {
  return (
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
  )
}

export default Header