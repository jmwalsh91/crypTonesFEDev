import React, { useState, useEffect, useContext} from 'react'
import { IconButton, Paper, ButtonGroup, List, Typography } from  '@mui/material'
import { Pause , Stop, PlayArrow, MusicNote } from '@mui/icons-material'
import * as Tone from 'tone'
 import SavePatchButton from './saveButton'
import { UserContext } from './userContext'
    export default function PlayData(props) {

        const [toneState, setToneState] = useState('')
        const [hasRunState, setHasRunState] = useState(false)
        const [notes, setNotes] = useState([])
     
            let difArray = []

            function genRelArr () {
               console.log('props data is ' + props.data)
                props.data.reduce(function(acc, cur, ind) {
                    if (props.data[ind][1][3] === props.data[0][1][3]) {
                        return console.log('first pos')
                    } else {
                        let dif = ((props.data[ind][1][3]) - (props.data[ind - 1][1][3]))
                        return difArray.push(Math.abs(Math.trunc(dif)))
                }
            }
            ,0
            )
            
            setNotes(difArray)
            console.log(notes)
        }
        useEffect(() => {
            hasRunState === false ? genRelArr() : console.log('Im not gonna do it! im not gonna run genRelArr! No Way!')
            /* hasRunState === false ?  */
          
        },[])
        let currentNote 
        /* const notelist =
            <List sx={{display: "inline"}}>
                {notes.map((note, i) => {
                    return(<li>{note}, </li>)
                })}
                {currentNote}
            </List> 
             */

    function ElementLi(props) {
            return(
                <div>
                    <Typography variant="body1" color="primary">
                        crypTones v1.0 uses the difference between sequential close values to determine the frequency values used in rendering audio. The differences are: 
                </Typography>
                
              {/*   { notelist } */}
                
                
                </div>
            )}
    
    const now = Tone.now() 
    
    
    /* const vol = new Tone.Volume(-12).toDestination();
    const osc = new Tone.Oscillator().connect(vol).start();  */
    const filter = new Tone.Filter(800, "lowpass").toDestination();
    filter.frequency.rampTo(8000, 100);
    let distort = new Tone.Distortion(2).connect(filter)
    const synth = new Tone.FMSynth().connect(distort)

    function initTone() {
        if (toneState === '') {
            console.log('false')
            Tone.start()
            .then((data) => {
                console.log(data)
                setToneState(data)
                console.log('toneState is ' + toneState)
            })
            
        } else if (toneState !== '') {
            console.log('ready to go!')
        }
    }
    useEffect(() => {
        console.log('effect hit and tone state is ' + toneState)
        initTone()
    })

    //note button 
    const addNote = () => {
        let note = (Math.floor(Math.random() * (1000 - 20 + 1)) + 20) 
        setNotes((prev) => {
            return [...prev, note]
        })
    }
    const handleClickNote = () => {
        addNote()
        console.log(notes)

    }
    
    const handleClickPlay = () => {
    if (hasRunState === false) {
        const ArraySeq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, '8n', time)
            
            console.log(note) 
            currentNote = note
            
        }, notes).start(0)
        setHasRunState(true)
        /*  Tone.Transport.start() */
            } else {
                Tone.Transport.start() 
                console.log('handling click, hasRunState is ' + hasRunState)
    }}

    // stop / dispose? 
    const handleClickStop = () => {
    Tone.Transport.stop(now)
    Tone.Transport.clear(this)
    }

    const handleClickOpenSave = () => {

    }
    return (
        <Paper variant="outlined" >
            <Paper elevation={2}>
                <ElementLi/>
            </Paper>
                <ButtonGroup size="large">
                    
                    <IconButton aria-label="MusicNote" color="secondary" size="large" onClick={handleClickNote}>
                    <MusicNote/>
                    </IconButton>
                    <IconButton aria-label="PlayArrow" color="secondary" size="large" onClick={handleClickPlay}>
                        <PlayArrow/>
                    </IconButton>
                    <IconButton aria-label="Pause" color="secondary" size="large">
                        <Pause/>
                    </IconButton>
                    <IconButton aria-label="Stop" color="secondary" size="large" onClick={handleClickStop}>
                        <Stop/>
                    </IconButton>
                </ButtonGroup>
                <SavePatchButton  chartData={props.data} noteData={notes} onClick={handleClickOpenSave}/>
        </Paper>
)
}