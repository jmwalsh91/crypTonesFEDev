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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';
import axios from 'axios'
import { useState, useRef, useEffect, useContext } from "react"
import { UserContext } from './userContext';
import { ConstructionOutlined } from '@mui/icons-material';
import { axiosUser } from './axiosinstances';

export default function UserLogin() {
  const [ open, setOpen ] = useState(false);
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  
/* 
Eventually have user confirm pass when registering, setting state and re-rendering dialog modal with text prompting user to confirm password. 
  const [isRegister, setIsRegister] = React.useState(false) */
  
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickRegister = () => {
    console.log('clicked')
    registerUser()
  }
  const handleClickSignIn = () => {
    console.log('sign in clicked')
    loginUser()
  }


  
  useEffect(() => {
    console.log(user)
  })

  //REMEMBER: HANDLE CLOSE!!
  function registerUser() { 
    let email = emailRef.current.value
    let password = passwordRef.current.value
    

    axiosUser.post('/register', {email, password})
    .then((response) => {
      console.log(response.body)
    })
    .catch(err => console.log(err))     
  }

      
  function loginUser() {       
    axiosUser.post('/login', {
      username: emailRef.current.value,
      password: passwordRef.current.value
    })
    .then(async res => {
      if (res.status !== 200) {
        console.log('no bueno')
      }
      if (res.status === 200) {
        handleClose()
        return setUser(res.data.currentUser)
      } 
    })
    .catch(err => console.log(err))     
  }    

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       sign in
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
           inputRef={emailRef}
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
            inputRef={passwordRef}
          />
        <DialogContentText color="primary">
              Don't have an account yet? Don't worry! Creating an account will allow you to save and recall patches. Just enter your preferred credentials and hit "register" below.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
          
            }}>
        
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
              <Typography variant="body2"> Register</Typography>

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
              <Typography variant="body2">  Sign In</Typography>

            </IconButton>
          
            
        </DialogActions>
        
        </Paper>
      </Dialog>
    </div>
  );
}
