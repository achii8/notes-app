import React from 'react'
import { Note } from '../note'
import IconButton from '@material-ui/core/IconButton';
import './style.css'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

export function Notes({ notes, removeNote }) {
  let history = useHistory();

  return (
    <div className='container some-style'>
      <div className='add'>
        <div>
          <IconButton color="primary">
            <AddIcon onClick={()=>{
              history.push('/create-note')
            }}/>
          </IconButton>
        </div>
      </div>
      <ul className='list-group'>
        {notes.map((item) => (
          <Note key={item.id} note={item} handleClick={removeNote} />
        ))}
      </ul>
    </div>
  )
}

