import React, { useState, useEffect } from 'react';
import './create-note.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



export function CreateNote() {
  let history = useHistory();

  const [note, setNote] = useState({title:"", body:""});

  
  const createNote = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`,{method:'POST', body: note})
    .then((response) => response.json())
    .then((resp) => {
      if(resp){
        history.push('/notes')
      }
      console.log("response");
    })
  }
  return (
    <div id="create-note">
      <div className="field">
        <TextField
          label="სათაური"
          variant="outlined"
          className="field-style"
          onChange={(e)=>{
            setNote({...note,title: e.target.value})
          }}
        />
      </div>
      <div className="field">
      <TextField
          label="აღწერა"
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
            createNote(note);
          }}
        >
        დამატება
      </Button>
      </div>
    </div>
  )
}
