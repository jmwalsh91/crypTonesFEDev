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
import { ListItem, Paper } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch'
import IconButton from '@mui/material/IconButton';
import { List } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';
import axios from 'axios'
import { useState, useRef, useEffect, useContext } from "react"
import { UserContext } from './userContext';
import { ConstructionOutlined } from '@mui/icons-material';

export default function ShowPatch() {
  const [ open, setOpen ] = useState(false);
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  
/* 
Eventually have user confirm pass when registering, setting state and re-rendering dialog modal with text prompting user to confirm password. 
  const [isRegister, setIsRegister] = React.useState(false) */
  

  const handleClickOpen = () => {
    setOpen(true);
    showPatch()
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  
  useEffect(() => {
    console.log(user)
  })

 const handleClickRegister = () => {
     console.log('not undefined!')
 }

  const axiosUserPatch = axios.create({
    baseURL: 'http://127.0.0.1:4000/user/',
    timeout: 10000
  });

  
let [patchArray, setPatchArray] = useState([])
let newPatchArray

  function showPatch() {       
    axiosUserPatch.get('/showallpatches', 
        { params : {
            id : user.id}
        })
    .then((response, err) => {
        if (!err) { 
        console.log(user.id)
        console.log('below is response data')
        console.log(response.data)
        return newPatchArray = response.data
    }
    console.log(patchArray)
    return setPatchArray(newPatchArray)
})
    .catch(err => console.log(err))     
  }    
      
 //REMEMBER: HANDLE CLOSE!!
 

 const patchList = patchArray.map((patch, i) =>
    <ListItem sx={{}}>
        {patch}
    </ListItem>
 )

            

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       Saved patches
      </Button>
      <Dialog open={open} onClose={handleClose} elevation={24}>
        <Paper variant="elevation" elevation={24}>
        <DialogTitle color="primary">Saved Patches</DialogTitle>
        <DialogContent color="secondary">
            {patchArray.length > 0 ?
            {patchList}
            : null}
           
           
          
        <DialogContentText color="primary">
             these are patches
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
              <Typography variant="body2"> Load patch</Typography>

            </IconButton>
        </DialogActions>
        
        </Paper>
      </Dialog>
    </div>
  );
}
