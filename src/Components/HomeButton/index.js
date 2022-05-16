import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function HomeButton() {
  return (
    <Link to="/">
      <button className="button">Inicio</button>
    </Link>
  )
}
