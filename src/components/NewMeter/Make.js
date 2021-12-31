import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import IconButton from '@material-ui/core/IconButton';
import { Stack,Grid,Button,TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './useStyle';
function Make() {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
 const clearField = ()=>{
   alert("elements cleared")
 }
 const addField = ()=>{
  alert("elements submitted")
}
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
             <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveCircleIcon />
            </IconButton>
            <TextField
              name="firstName"
              label="Manufacture Code"
              variant="standard"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="lastName"
              label="Manufacture Name"
              variant="standard"
              value={inputField.lastName}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
           
            <IconButton
              onClick={handleAddFields}
            >
              <AddCircleIcon />
            </IconButton>
          </div>
        )) }
        <br/>
        <Grid container direction="column" alignItems="center" justify="center">
        <Stack spacing={2} direction="row">
                <Button variant="outlined" color="error" onClick={clearField}>
                    Clear
                </Button>

                <Button variant="contained" onClick={addField}>Submit</Button>
            </Stack>
            </Grid>
      </form>
    </Grid>
  );
}

export default Make;
