import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from '../src/Pages/Home'
import Work from '../src/Pages/Work'
import Pause from '../src/Pages/Pause'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/pause" element={<Pause />} />
        <Route path="*" element={<div>ERROR 404 - NÃO ENCONTRADO</div>} />
      </Routes>
    </>
  )
}

export default App
