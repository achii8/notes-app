import React, { useState, useEffect } from 'react';
import './create-note.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export function CreateNote() {
  const [toDo, setToDo] = useState({
    title:"",
    description: ""
  });

  return (
    <div id="create-note">
      <div className="field">
        <TextField
          label="სათაური"
          variant="outlined"
          className="field-style"
          onChange={(e)=>{
            setToDo(...toDo,{title: e.target.value})
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
            setToDo(...toDo,{description: e.target.value})
          }}
        />
      </div>
      <div className="field">
      <Button variant="contained" 
          color="secondary" 
          className="field-style"
          onClick={()=>{
            console.log(toDo)
          }}
        >
        დამატება
      </Button>
      </div>
    </div>
  )
}
