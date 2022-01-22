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
import { List } from '@mui/material';
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
    rowMaker()
  };
}, [patchArray]);

  
  let tableArr
  console.log(patchArray)
  console.log(patchArray.length)
  console.log('this is the patch array ^^^^')
  
/* 
Eventually have user confirm pass when registering, setting state and re-rendering dialog modal with text prompting user to confirm password. 
  const [isRegister, setIsRegister] = React.useState(false) */
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 const handleClickRegister = () => {
     console.log('not undefined!')
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

  
  function rowMaker(){
    console.log('rowmaker hit')
    console.log(patchArray)
    let i = 1
    tableArr = patchArray.map((patch) => {
      //index, patchname, patternlength
      console.log(patch)
      let index = i++
      let name = patch.patchParams.name
      let arrTarget = Object.values(patch.patchParams.noteData)
      console.log(arrTarget.length)
      let length = arrTarget.length
      return {id : index, patchName : name, patternLength: length}  
  })
  tableArr.forEach((row) => {
    console.log(row)
    rows.push(row)
  })

  console.log(rows)
  console.log(tableArr)
  console.log('setloading done')
  return setLoading('done')
}
const [loadTarget, setLoadTarget] = useState()


const handleLoadClick = () => {
  console.log(apiRef)
  /* console.log(apiRef.current.getRowModels()); */
 /*  const getName =(() => {}) */
  console.log('load clickaroo')
  //setloadtarget/getname
}
const apiRef = useGridApiRef()
const handleEditCommit = async (id) => {
  console.log('clicked')
  const model = apiRef.current.getEditRowsModel()
  console.log(model)
}


console.log('load target is' + loadTarget) 
console.log(apiRef)

 //REMEMBER: HANDLE CLOSE!!
const renderLoadButton = () => {
  return (
  <IconButton
    size="large"
    aria-label="load patch"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleLoadClick}
    color="secondary"
    label="load"
    //make sure to handle close!
  >
    <DoubleArrowIcon />
    <Typography variant="body2"> Load patch</Typography>

  </IconButton>)
}
 const columns = [
  { field: 'id', headerName: '#', width: 50
},
  {
    field: 'patchName',
    headerName: 'Patch Name',
    width: 150,
    editable: true
  },
  {
    field: 'patternLength',
    headerName: 'Pattern Length',
    width: 150,
    editable: false,
  },
  {
    field: 'load',
    headerName: '',
    width: 90,
    editable: false,
    renderCell: renderLoadButton,
  }
];

 console.log(rows)
console.log('is rows')
 
            

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

          { loading === 'done' ? <PatchTable data={rows} columns={columns}  apiRef={apiRef}/> : <Typography variant="h4">No patches to display.</Typography>} 
          
        </DialogContent>
        <DialogActions sx={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
          
            }}>
        
          
        </DialogActions>
        
        </Paper>
      </Dialog>
    </div>
  );
}
