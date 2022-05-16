import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cronometro from '../Components/Cronometro'
import HomeButton from '../Components/HomeButton'
import Player from '../Components/Player'

export default function Work() {
  const [workNumberState, setWorkNumber] = useState(0)
  const [pauseNumberState, setPauseNumber] = useState(0)
  const [sectionNumberState, setSectionNumber] = useState(0)
  const [sectionActiveWorkNumberState, setSectionActiveWorkNumber] = useState(0)
  const [playerState, setPlayerState] = useState(true)

  const getobj = () => {
    const { workNumber, pauseNumber, sectionNumber, sectionActiveWorkNumber } =
      JSON.parse(localStorage.getItem('pomodoro'))
    setWorkNumber(workNumber)
    setPauseNumber(pauseNumber)
    setSectionNumber(sectionNumber)
    setSectionActiveWorkNumber(sectionActiveWorkNumber)
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
          marginTop: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {workNumberState !== 0 ? (
          <Cronometro
            type="Work"
            workTime={workNumberState}
            pauseTime={pauseNumberState}
            play={playerState}
          />
        ) : (
          <div />
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 50
          }}
        >
          <p style={{ fontSize: 50, color: 'green', fontWeight: 'bold' }}>
            Trabalho
          </p>
          <p
            style={{
              fontSize: 30,
              color: 'green',
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {`Sessão: ${sectionActiveWorkNumberState}`}
          </p>
          <button
            style={{
              backgroundColor: '#333853',
              border: 0
            }}
            onClick={() => setPlayerState(!playerState)}
          >
            <Player playerState={playerState} />
          </button>
        </div>
      </div>
    </>
  )
}
