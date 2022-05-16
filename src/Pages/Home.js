import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContinueButton from '../Components/ContinueButton'
import SelectNumber from '../Components/SelectNumber'

export default function Home() {
  const [workNumber, setWorkNumber] = useState()
  const [pauseNumber, setPauseNumber] = useState()
  const [sectionNumber, setSectionNumber] = useState()

  const handleSave = () => {
    localStorage.setItem(
      'pomodoro',
      JSON.stringify({
        workNumber: workNumber * 60,
        pauseNumber: pauseNumber * 60,
        sectionNumber: sectionNumber,
        sectionActiveWorkNumber: 1,
        sectionActivePauseNumber: 1
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
        <ContinueButton handle={handleSave} />
      </div>
    </>
  )
}
