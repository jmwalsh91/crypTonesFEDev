import React from "react";
import { IconButton } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Typography } from "@mui/material";
export function LoadPatchButton(props) {
console.log(props)

    return (
          <IconButton
              size="large"
              aria-label="load patch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              /* onClick={handleClickload} */
              color="secondary"
              label="Load"
              //make sure to handle close!
            >
              <DoubleArrowIcon />
              <Typography variant="body2"> Load patch</Typography>

            </IconButton>
    )
}