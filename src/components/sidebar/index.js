import React from 'react'
import { Link } from 'react-router-dom'
import { sidebar } from './style.module.css'

export function Sidebar() {
  return (
    <div className={sidebar}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/notes'>Notes</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
