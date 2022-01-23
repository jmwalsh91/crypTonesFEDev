
import React from "react";
import { useState, useContext, useRef } from "react";
import { UserContext } from "./userContext";
import { axiosUser } from "./axiosinstances";
import { IconButton, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Typography } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, TextField, Paper, DialogActions} from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export function DeletePatchButton(props) {
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
  const handleDeleteClose = () => {
     handleClose()

  }
function handleClickSubmitDelete() {
    
        console.log(props)
        axiosUser.delete('/patch/delete/' + props.patchId)
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
 
    return (
        <div>
          <IconButton
              size="large"
              aria-label="delete patch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="secondary"
              label="Delete"
              //make sure to handle close!
            >
              <DeleteForeverIcon/>
              <Typography variant="body2"> Delete Patch</Typography>
              </IconButton>
              <Dialog open={open} onClose={handleClose} elevation={24}>
                <Paper variant="elevation" elevation={24}>
                    <DialogTitle color="primary">Delete</DialogTitle>
                   <DialogContent color="secondary">
                    <Typography variant="h6" color="primary">Are you sure you want to delete?</Typography>
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
                aria-controls="close delete"
                onClick={handleClickSubmitDelete}
                color="warning"
                label="Submit">
                    <DeleteForeverIcon/>
                    <Typography variant="body2"> Yes, delete. </Typography>
                </IconButton>
        
                </DialogActions>
                </DialogContent>
          </Paper>
          </Dialog>
          </div>
    )
}