import React from 'react'
import { Notes } from '../components/notes'

export function NotesPage(props) {
  return (
    <Notes
      notes={props.notes}
      removeNote={props.removeNote}
      getNote={props.getNote}
    />
  )
}
