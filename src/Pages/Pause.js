import React from 'react'
import { Link } from 'react-router-dom'
import Cronometro from '../Components/Cronometro'

export default function Pause() {
  return (
    <>
      <header>
        <h1>Pomodoro</h1>
        <Link to="/">
          <button>Inicio</button>
        </Link>
      </header>
      <Cronometro type="Pause" />
      <div>
        <p>Pause</p>
        <p>Sessões</p>
        <button>play/pause</button>
      </div>
    </>
  )
}
