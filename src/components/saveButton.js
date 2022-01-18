//need object for patch
// main page needs context to render chart and audio
// button can take props via prop drilling from main page -> tone -> button 
//from tone, need dataOHLC and notes

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch'
import IconButton from '@mui/material/IconButton';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';

import axios from 'axios'
import { useState, useRef, useEffect, useContext } from "react"
import { UserContext, UserContextProvider } from './userContext';

export default function SavePatchButton() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  /* const [user, setUser] = useContext(UserContext) */
/* 
Eventually have user confirm pass when registering, setting state and re-rendering dialog modal with text prompting user to confirm password. 
  const [isRegister, setIsRegister] = React.useState(false) */
  
  const patchNameRef = useRef(null)
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickSavePatch = () => {
    console.log('clicked')
    savePatch()
  }

  
  useEffect(() => {
    console.log(UserContext)
  })


  const axiosUserSavePatch = axios.create({
    baseURL: 'http://127.0.0.1:4000/user/',
    timeout: 10000
  });

  //REMEMBER: HANDLE CLOSE!!
  function savePatch() { 
    /* console.log(user.user) */
        
    axiosUserSavePatch.post('/patch', {
        /* username: user.user, */
        patchName: patchNameRef.current.value
    })
    .then((response) => {
      console.log('oh hi' + response)
    })
    .catch(err => console.log(err))     
  }
      
 //REMEMBER: HANDLE CLOSE!!
 



  return (
    <div>
      <Button variant="outlined" 
      onClick={handleClickOpen}
      color="secondary"
      /* sx={{
          color: "primary",
        bgColor: "secondary"
        }} */>
       Save patch
      </Button>
      <Dialog open={open} onClose={handleClose} elevation={24}>
        <Paper variant="elevation" elevation={24}>
        <DialogTitle color="primary">Save current patch</DialogTitle>
        <DialogContent color="secondary">
          <DialogContentText color="secondary">
           Saving a patch will allow you to recall and play back the associated data from the "saved patches" window.
           
          </DialogContentText>
          
          <TextField 
            sx={{
               input: { color: 'black' },
              bgcolor: 'primary.main' }}
              InputLabelProps={{style : {color : '#53e6e6'} }}
            autoFocus
            margin="dense"
            id="patchName"
            label="Name"
            type="string"
            fullWidth
            variant="filled"
            required={true}
           placeholder="Please name your patch"
           inputRef={patchNameRef}
          />
        </DialogContent>
        <DialogActions sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
          
            }}>
        
          <Button variant="outlined" onClick={handleClose}>Close</Button>
          <IconButton
              size="large"
              aria-label="save button for patch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickSavePatch}
              color="secondary"
              label="Save Patch"
              //make sure to handle close!
            >
              <PersonAddIcon />
              <Typography variant="body2"> Save patch </Typography>

            </IconButton>
            </DialogActions>
            
        
        </Paper>
      </Dialog>
    </div>
  );
}





