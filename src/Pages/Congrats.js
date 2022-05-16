import { FileX, TextAlignCenter } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeButton from '../Components/HomeButton'

export default function Congrats() {
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
      <header
        style={{
          width: '100vw',
          marginTop: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <h1 style={{ fontSize: 50, color: '#777da1' }}>Pomodoro</h1>
        <Link to="/">
          <HomeButton />
        </Link>
      </header>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            marginTop: 60,
            fontSize: 90,
            color: 'green'
          }}
        >
          Parabéns por finalizar!
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            marginTop: 60,
            fontSize: 40,
            color: '#777da1'
          }}
        >
          {`Foram ${
            (workNumberState * sectionNumberState) / 60
          } minutos de foco total!`}
        </h1>
      </div>
    </>
  )
}
