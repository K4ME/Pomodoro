import React from 'react'
import { Link } from 'react-router-dom'
import Cronometro from '../Components/Cronometro'

export default function Home() {
  return (
    <>
      <header>
        <h1>Pomodoro</h1>
        <Link to="/">
          <button>Inicio</button>
        </Link>
      </header>
      <Cronometro type="Work" />
      <div>
        <p>Trabalho</p>
        <p>Sessões</p>
        <button>play/pause</button>
      </div>
    </>
  )
}
