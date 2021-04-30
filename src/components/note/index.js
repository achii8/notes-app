import { getNodeText } from '@testing-library/dom'
import React from 'react'
import { useHistory } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';

export function Note({ note, handleClick }) {
  const history = useHistory()
  const getNote = (id) => {
    history.push(`./note/${id}`)
  }
  return (
    <div>
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.id)}>{note.title}</div>
      <div style={{display:"flex", flexDirection:"row"}}>
      <div>
        <button
          className='btn btn-sm btn btn-primary'
          onClick={() => history.push(`/update-note/${note.id}`)}
        >
          <EditIcon style={{height:'20px', width:'20px'}}/>
        </button>
      </div>
      <div style={{marginLeft:"10px"}}>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleClick(note.id)}
        >
          x
        </button>
      </div>
      </div>
    </li>
    </div>
  )
}
