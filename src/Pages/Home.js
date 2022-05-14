import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectNumber from '../Components/SelectNumber'

export default function Home() {
  const [workNumber, setWorkNumber] = useState()
  const [pauseNumber, setPauseNumber] = useState()
  const [sectionNumber, setSectionNumber] = useState()

  console.log(workNumber)
  console.log(pauseNumber)
  console.log(sectionNumber)

  const handleSave = () => {
    localStorage.setItem(
      'pomodoro',
      JSON.stringify({
        workNumber: workNumber * 60,
        pauseNumber: pauseNumber * 60,
        sectionNumber: sectionNumber * 60
      })
    )
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            color: '#777da1',
            fontWeight: 'bold',
            fontSize: 60
          }}
        >
          Pomodoro
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'spaceAround'
        }}
      >
        <SelectNumber name="Trabalho" number={25} setNumber={setWorkNumber} />
        <SelectNumber name="Pausa" number={5} setNumber={setPauseNumber} />
        <SelectNumber name="Sessões" number={3} setNumber={setSectionNumber} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link to="/work">
          <button
            onClick={handleSave}
            style={{
              color: '#777da1',
              backgroundColor: '#333853',
              borderColor: '#777da1',
              borderRadius: 16,
              fontWeight: 'bold',
              fontSize: 60
            }}
          >
            Continuar
          </button>
        </Link>
      </div>
    </>
  )
}
