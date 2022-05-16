import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function ContinueButton({ handle }) {
  return (
    <Link to="/work">
      <button onClick={handle} className="button-continue">
        Continuar
      </button>
    </Link>
  )
}
