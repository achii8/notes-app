import { getNodeText } from '@testing-library/dom'
import React from 'react'
import { useHistory } from 'react-router-dom'

export function Note({ note, handleClick }) {
  const history = useHistory()
  const getNote = (id) => {
    history.push(`./note/${id}`)
  }
  return (
    <div>
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.id)}>{note.title}</div>
      <div>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleClick(note.id)}
        >
          x
        </button>
      </div>
    </li>
    </div>
  )
}
