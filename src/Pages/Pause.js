import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cronometro from '../Components/Cronometro'

export default function Pause() {
  const [workNumber, setWorkNumber] = useState()
  const [pauseNumber, setPauseNumber] = useState()
  const [sectionNumber, setSectionNumber] = useState()

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
      <Cronometro type="Pause" />
      <div>
        <p>Pause</p>
        <p>Sessões</p>
        <button>play/pause</button>
      </div>
    </>
  )
}
