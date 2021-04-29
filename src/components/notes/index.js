import React from 'react'
import { Note } from '../note'
import './style.css'

export function Notes({ notes, removeNote }) {
  return (
    <div className='container some-style'>
      <ul className='list-group'>
        {notes.map((item) => (
          <Note key={item.id} note={item} handleClick={removeNote} />
        ))}
      </ul>
    </div>
  )
}

//z.revazishvili@live.com
