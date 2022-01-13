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

export default function UserLogin() {
  const [open, setOpen] = React.useState(false);

  const axiosUser = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
    timeout: 10000,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  function registerUser() { 
  axiosUser.put('/crypto/user')
        .then(response => {
           
        })
        return () => {
           
        }
      }
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickRegister = () => {
    console.log('clicked')
    registerUser()
  }


  const handleClickSignIn = () => {
    console.log('clicked')
  }
  const handleSubmit = () => {
  
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       Log in
      </Button>
      <Dialog open={open} onClose={handleClose} elevation={24}>
        <Paper variant="elevation" elevation={24}>
        <DialogTitle color="primary">Sign in</DialogTitle>
        <DialogContent color="secondary">
          <DialogContentText color="secondary">
           If you have already created an account, please sign in.
           
          </DialogContentText>
          
          <TextField 
            sx={{
               input: { color: 'black' },
              bgcolor: 'primary.main' }}
              InputLabelProps={{style : {color : '#53e6e6'} }}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="filled"
            required={true}
           placeholder="can you see me"
            
          />
       
          <TextField
            sx={{
              input: { color: 'black' },
             bgcolor: 'primary.main' }}
             InputLabelProps={{style : {color : '#53e6e6'} }}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="filled"
          />
        <DialogContentText color="primary">
              Don't have an account yet? Don't worry! Creating an account will allow you to save and recall patches. Just check the "register" box and hit submit.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
          
            }}>
        {/* <FormGroup color="primary">
                <FormControlLabel control={<Checkbox defaultUnchecked />} label="Create new account" color="secondary.main"   FormLabel={{color: 'secondary'}}
/>                          <FormControlLabel control={<Switch defaultChecked />} label="Easy Mode" />

                
            </FormGroup> */}
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickRegister}
              color="secondary"
              label="Register"
              //make sure to handle close!
            >
              <PersonAddIcon />
              <Typography variant="body2">Register</Typography>

            </IconButton>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickSignIn}
              color="secondary"
              label="Register"
              //make sure to handle close!!
            >
              <LoginIcon />
              <Typography variant="body2">Sign In</Typography>

            </IconButton>
          
            
        </DialogActions>
        
        </Paper>
      </Dialog>
    </div>
  );
}
