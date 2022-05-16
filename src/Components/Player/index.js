import React from 'react'
import { Play, Pause } from 'phosphor-react'
import './index.css'

export default function Player({ playerState }) {
  return (
    <>
      <button className="button-player">
        {playerState === true ? (
          <Pause size={32} weight="bold" />
        ) : (
          <Play size={32} weight="bold" />
        )}
      </button>
    </>
  )
}
