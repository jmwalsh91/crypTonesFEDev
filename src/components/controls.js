import React from "react";
import { IconButton, Paper, ButtonGroup } from  '@mui/material'
import { Pause , Stop, PlayArrow, MusicNote } from '@mui/icons-material'
import { SavePatchButton } from "./saveButton";

export const Controls = (props) => {
    return (
            <Paper variant="outlined" >
                
                <ButtonGroup>
                
                    <IconButton aria-label="MusicNote" color="secondary" size="large">
                    <MusicNote/>
                    </IconButton>
                    <IconButton aria-label="PlayArrow" color="secondary" size="large">
                        <PlayArrow/>
                    </IconButton>
                    <IconButton aria-label="Pause" color="secondary" size="large">
                        <Pause/>
                    </IconButton>
                    <IconButton aria-label="Stop" color="secondary" size="large">
                        <Stop/>
                    </IconButton>
                </ButtonGroup>
            </Paper>
    )
}