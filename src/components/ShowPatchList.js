import * as React from 'react';
import { axiosUser } from './axiosinstances';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ListItem, Paper } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { List, ListItemButton, ListItemText } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';
import axios from 'axios'
import { useState, useRef, useEffect, useContext } from "react"

import { UserContext } from './userContext';
import { ConstructionOutlined } from '@mui/icons-material';
import PatchTable from './patchTable';
import { LoadPatchButton } from './loadButton';
import { GridCellParams, GridRowParams, selectedGridRowsCountSelector, useGridApiRef} from '@mui/x-data-grid';
import { EditPatchButton } from './EditButton';
import { DeletePatchButton } from './deletePatch';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function ShowPatch() {
  const [ open, setOpen ] = useState(false);
  const { user, setUser } = useContext(UserContext)
  let [patchArray, setPatchArray] = useState([])
  const [loading, setLoading] = useState([''])
  const [rows, setRows] = useState([])

  useEffect(() => {
    console.log(user.savedPatches.length > patchArray.length)
    if (patchArray.length < user.savedPatches.length) {
    const showPatches = async () => {
      setLoading('true')
      console.log('showpatches hit')
      await axiosUser.get('/showallpatches/' + user.id)
      .then((res, err) => {
        if (err) {
          throw err
        }
        if (!err) { 
          console.log(res.data)
          return setPatchArray(res.data)
        }
      })
      .catch(err => console.log(err))     
    }    
    showPatches()
  }   
}, [patchArray.length, user.id, user.savedPatches.length])

useEffect(() => {
  if (patchArray.length  !== 0) {
    setLoading('done')
  };
}, [patchArray]);
/* 
let listElements
const listMaker = () => {
  listElements = patchArray.map((patch) => {
    console.log(patch.patchParams._id)
    return (
  <ListItem key={patch.patchParams._id} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={patch.patchParams.patchName} />
      </ListItemButton>
    </ListItem>
    )
  })
  patchArray.length === listElements.length ? setLoading('done') : console.log('lengths do not match')
  console.log(listElements)
} */
/* 
Eventually have user confirm pass when registering, setting state and re-rendering dialog modal with text prompting user to confirm password. 
  const [isRegister, setIsRegister] = React.useState(false) */
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPatchArray([])
  };

 const handleEditButton = (patchId) => {
   console.log(patchId)
   /* console.log(Object.entries(patchId))
   console.log('handle edit') */

 }

 const handleDeleteButton = (patchId) => {
  console.log(patchId)
  /* console.log(Object.entries(patchId))
  console.log('handle edit') */

}
/* 
  async function showPatches() { 
    console.log('i am being called?')      
    await axiosUser.get('/showallpatches/' + user.id,)
    .then((res, err) => {
      if (err) {
        throw err
      }
      if (!err) { 
        return setPatchArray(res.data)
    }
    rowMaker()
})
    .catch(err => console.log(err))     
  }     */

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       Saved patches
      </Button>
      <Dialog open={open} onClose={handleClose} elevation={24} fullWidth={true}>
        <Paper variant="elevation" elevation={24}>
        <DialogTitle color="primary">Saved Patches</DialogTitle>
        <DialogContent color="secondary">
        
          
        <DialogContentText color="primary">
             these are patches
          </DialogContentText>
          
          <List>
    {loading === 'done'? patchArray.map((patch) => (
      <ListItem key={patch.patchParams._id} disablePadding color='secondary'>
        <ListItemButton sx={{color: 'primary'}}>
          <ListItemText primary={patch.patchParams.name}     primaryTypographyProps={{
                  color: '#9e988b',
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}/>
        </ListItemButton>
        <EditPatchButton patchId={patch._id} onClick={(patchId) => handleEditButton} />
        {/* <LoadPatchButton/> */}
        <DeletePatchButton patchId={patch._id} onClick={(patchId) => handleDeleteButton} />

    </ListItem>
        
    ))
  : console.log(patchArray)
  }
</List>

         {/*  { loading === 'done' ? <PatchTable data={rows} columns={columns}  apiRef={apiRef}/> : <Typography variant="h4">No patches to display.</Typography>}  */}
          
        </DialogContent>
        
        {/* {loading === 'done' ? <List>{listElements}</List> : <Typography variant="h4">No patches to display.</Typography>} */}
        {/* <PatchList/> */}
        <DialogActions sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
          
            }}>
        
        <Button variant="outlined" onClick={handleClose}>Close and refresh</Button>
        </DialogActions>
        
        </Paper>
      </Dialog>
    </div>
  );
}
