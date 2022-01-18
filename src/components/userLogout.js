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
import { UserContext, initUser } from './userContext';

export default function UserLogout() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext)



  const handleClickOpen = () => {
    setOpen(true);
    logoutUser()
  };
  const handleClose = () => {
    setOpen(false);
  };
  






  const axiosUser = axios.create({
    baseURL: 'http://127.0.0.1:4000/user',
    timeout: 10000
  });

  //REMEMBER: HANDLE CLOSE!!

  
  function logoutUser() {     
  
  axiosUser.post('/logout').then(response => {
    console.log(response.status)
    if (response.status === 200) {
      console.log(response.status)
      return setUser(initUser)
    }
  }).catch(error => {
      console.log(error)
  })
  }
    /* axiosUser.post('/logout')
     .then(res => {
       console.log(res.data)
       handleClose() 
       return setUser(null) 
    })
    .catch(err => console.log(err))     
  }     */
 //REMEMBER: HANDLE CLOSE!!
 



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       Log out
      </Button>
      <Dialog open={open} onClose={handleClose} elevation={24}>
        <Paper variant="elevation" elevation={24}>
        <DialogTitle color="primary">Logged Out</DialogTitle>
        <DialogContent color="secondary">
          <DialogContentText color="secondary">
          You have been logged out.       
           </DialogContentText> 
           <Button variant="outlined" onClick={handleClose} color="secondary">
                Return
            </Button>
           </DialogContent>               
        </Paper>
      </Dialog>
    </div>
  );
}
