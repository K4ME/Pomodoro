import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cronometro from '../Components/Cronometro'

export default function Home() {
  const [workNumberState, setWorkNumber] = useState(0)
  const [pauseNumberState, setPauseNumber] = useState(0)
  const [sectionNumberState, setSectionNumber] = useState(0)

  const getobj = () => {
    const { workNumber, pauseNumber, sectionNumber } = JSON.parse(
      localStorage.getItem('pomodoro')
    )
    setWorkNumber(workNumber)
    setPauseNumber(pauseNumber)
    setSectionNumber(sectionNumber)
  }

  useEffect(() => {
    getobj()
  }, [])

  return (
    <>
      <header>
        <h1>Pomodoro</h1>
        <Link to="/">
          <button>Inicio</button>
        </Link>
      </header>
      {workNumberState != 0 ? (
        <Cronometro type="Work" initialTime={workNumberState} />
      ) : (
        <div />
      )}
      <div>
        <p>Trabalho</p>
        <p>Sessões</p>
        <button>play/pause</button>
      </div>
    </>
  )
}
