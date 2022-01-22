import * as React from 'react';
import {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LoadPatchButton } from './loadButton';
import {useGridApiRef, GridCellEditCommitParams} from '@mui/x-data-grid';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
export default function PatchTable(props) {
  const [dataValues, setDataValues] = useState(Object.entries(props.data))
  const [snackbar, setSnackbar] = React.useState(null);
  const apiRef = useGridApiRef()
  const [rows, setRows] = useState()
  /* const handleRowEditCommit = async (id) => {
    console.log('clicked')
  } */
  useEffect(() => {
    return () => {
      setDataValues(Object.entries(props.data))
    };
  }, [props.data]);

  const handleCellEditCommit = (params, event) => {
  
      event.defaultMuiPrevented = true;
      console.log('CELL EVENT HIT') // https://mui.com/components/data-grid/events/#disabling-the-default-behavior
      const model = apiRef.current.getEditRowsModel();
      const { value } = model[params.id].patchName;
      const row = apiRef.current.getRow(params.id); // The row before start editing
      const rowUpdate = { ...row, patchName: value}; // Merge the old row with the new value
      console.log(value)
      apiRef.current.updateRows([rowUpdate]);
    
  };
  console.log(props)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      apiRef={apiRef}
      iconStyle={{fill: 'white'}}
      sx={{
        color: "secondary",
        borderColor: "secondary"
      }}
        rows={props.data}
        editMode="row"
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        
        /* disableSelectionOnClick */
        onCellEditCommit={handleCellEditCommit}
        
        />
        
     
    </div>
  );
} 
