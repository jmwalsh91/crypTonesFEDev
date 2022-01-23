import * as React from 'react';
import { axiosUser } from './axiosinstances';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper } from '@mui/material'
import { useState, useContext } from "react"
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
  
  //REMEMBER: HANDLE CLOSE!!

  
  function logoutUser() {     
    axiosUser.post('/logout').then(response => {
      console.log(response.status)
      if (response.status === 200) {
        console.log(response.status)
        //success!
        return setUser(initUser)
      }
    }).catch(error => {
        console.log(error)
    })
  }
 
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} color="primary">
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
