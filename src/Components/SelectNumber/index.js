import React, { useState } from 'react'
import { ArrowFatUp, ArrowFatDown } from 'phosphor-react'

import './index.css'

export default function SelectNumber({ number, name, setNumber }) {
  let [initialNumber, setInitialNumber] = useState(number || 25)

  setNumber(initialNumber)

  const handleUp = () => {
    setInitialNumber(initialNumber + 1)
  }

  const handleDown = () => {
    setInitialNumber(initialNumber - 1)
  }

  return (
    <div className="container">
      <div className="buttonContainer">
        <div className="numberAdjust">
          <button onClick={handleUp} type="button">
            <ArrowFatUp size={24} weight="fill" />
          </button>
          <button onClick={handleDown} type="button">
            <ArrowFatDown size={24} weight="fill" />
          </button>
        </div>
        <div className="number">{initialNumber}</div>
      </div>
      <div className="name">{name || 'name'}</div>
    </div>
  )
}
