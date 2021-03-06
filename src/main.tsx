import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Running from './components/Running'
import './main.css'
import Apresentacao from './pages/Apresentacao'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='apresentacao' element={<Apresentacao/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
