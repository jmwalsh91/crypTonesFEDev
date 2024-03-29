import React from "react";
import { useState, useContext, useRef } from "react";
import { UserContext } from "./userContext";
import { axiosUser } from "./axiosinstances";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Paper} from "@mui/material"


export function EditPatchButton(props) {
console.log(props)
const [ open, setOpen ] = useState(false);
const { user, setUser } = useContext(UserContext)
const nameRef = useRef(null)
const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
function handleClickSubmitName() {
    
        console.log(props)
        console.log(nameRef.current.value)
        axiosUser.patch('/patch/rename/' + props.patchId, {
            newName: nameRef.current.value
        })
        .then((res, err) => {
            if (err) {
            throw err
            }
            if (!err) { 
            console.log(res.data)
            handleClose()
            return (res.data)
            }
        })
        .catch(err => console.log(err))     
    }
 
function handleClickEdit() {

}
    return (
        <div>
          <IconButton
              size="large"
              aria-label="edit patch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="secondary"
              label="Edit"
              //make sure to handle close!
            >
              <EditIcon/>
              <Typography variant="body2"> Rename</Typography>
              </IconButton>
              <Dialog open={open} onClose={handleClose} elevation={24}>
                <Paper variant="elevation" elevation={24}>
                    <DialogTitle color="primary">Edit </DialogTitle>
                    <DialogContent color="secondary">
                    <TextField 
            sx={{
               input: { color: 'black' },
              bgcolor: 'primary.main' }}
              InputLabelProps={{style : {color : '#53e6e6'} }}
            autoFocus
            margin="dense"
            id="patchName"
            label="Rename"
            type="string"
            fullWidth
            variant="filled"
            required={true}
           placeholder="New "
           inputRef={nameRef}
          />
           <DialogActions sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        }}>
          <IconButton
                size="large"
                aria-label="close"
                aria-controls="close"
                aria-haspopup="true"
                onClick={handleClose}
                color="secondary"
                label="Close">
                <ArrowBackIosIcon/>
                <Typography variant="body2"> No, close. </Typography>
                </IconButton>

          <IconButton
          size="large"
          aria-label="submit name"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClickSubmitName}
          color="secondary"
          label="Submit">
              <SendIcon />
              <Typography variant="body2"> Update name</Typography>
          </IconButton>
          </DialogActions>
          </DialogContent>
          </Paper>
          </Dialog>
            </div>

    )
}