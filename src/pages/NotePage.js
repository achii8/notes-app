import React, { useEffect, useState } from 'react'

export function NotePage({ id }) {
  //console.log('props', props)
  const [note, setNote] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setNote(data))
  }, [])

  return (
    <div className='container'>
      {note ? (
        <>
          <p>id: {note.id}</p>
          <p>title: {note.title}</p>
          <p>userId: {note.userId}</p>
          <p>completed: {note.completed?.toString()}</p>
        </>
      ) : null}
    </div>
  )
}
