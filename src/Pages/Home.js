import React from 'react'
import Cronometro from '../Components/Cronometro'

export default function Home() {
  return (
    <>
      <h1>Pomodoro</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'spaceAround'
        }}
      >
        <p> Trabalho</p>
        <p> Pausa</p>
        <p> Sessões</p>
      </div>
      <button>Continuar</button>
    </>
  )
}
