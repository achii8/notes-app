import React, { useState, useEffect } from 'react';
import './update-note.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


export function UpdateNote({ id }) {
  const [note, setNote] = useState({title:"", body:""});
  let history = useHistory();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setNote(data))
  }, [])
  const updateNote = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH', body: note})
    .then((response) => response.json())
    .then((resp) => {
      if(resp){
        history.push('/notes')
      }
      console.log("response");
    })
    
  }
  return (
    <div id="update-note">
      <div className="field">
        <TextField
          label="სათაური"
          variant="outlined"
          className="field-style"
          value={note.title}
          onChange={(e)=>{
            setNote({...note,title: e.target.value})
          }}
        />
      </div>
      <div className="field">
      <TextField
          label="აღწერა"
          value= {note.body}
          variant="outlined"
          className="field-style"
          multiline={true}
          rows={5}
          rowsMax={15}
          onChange={(e)=>{
            setNote({...note,body: e.target.value})
          }}
        />
      </div>
      <div className="field">
      <Button variant="contained" 
          color="secondary" 
          className="field-style"
          onClick={()=>{
            console.log(note);
            updateNote()
          }}
        >
        დამატება
      </Button>
      </div>
    </div>
  )
}
