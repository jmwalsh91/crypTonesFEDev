import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./userContext";
import { axiosUser } from "./axiosinstances";
import { IconButton } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Typography } from "@mui/material";
import { Preview } from "@mui/icons-material";
import PatchSuccess from "./successAlert";

export function LoadPatchButton(props) {
const [user, setUser] = useContext(UserContext)
console.log(props)
/* console.log(user) */
    const handleClickLoadPatch = async () => {
        /* await axiosUser.get('/user/loadpatch/' + props.patchId)
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
    }, [patchArray.length, user.id, user.savedPatches.length]) */
    console.log('handleclickloadpatch hit')
    /* setUser(prev => ({
        ...prev, [user.loadedPatch.chartData]: [1 , 1 ,1 ,1 ,1 ,1]
    })
    ) */}

    return (
          <IconButton
              size="large"
              aria-label="load patch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickLoadPatch}
              color="secondary"
              label="Load"
              //make sure to handle close!
            >
              <DoubleArrowIcon />
              <Typography variant="body2"> Load patch</Typography>

            </IconButton>
    )
}