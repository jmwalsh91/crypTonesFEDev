import React, { useState, useEffect} from 'react'
import { IconButton, Paper, ButtonGroup, List } from  '@mui/material'
import { Pause , Stop, PlayArrow, MusicNote } from '@mui/icons-material'
import * as Tone from 'tone'
 

    export default function PlayData() {
        const [toneState, setToneState] = useState('')
        const [hasRunState, setHasRunState] = useState(false)
        const [notes, setNotes] = useState([104, 151,  190, 68,   442,  34, 9,  17,  25,   61,  37])
   
        function ElementLi(props) {
                return(
                    <List >
                        {notes.map((note, i) => {
                        return(
                        <li key={note + i}>{note}</li>
                    
                        )})
                    }
                    </List>
                )}
        
        const now = Tone.now() 
        
 
    
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
                
            },
            notes).start(0)
            setHasRunState(true)
           /*  Tone.Transport.start() */
                } else {
                    Tone.Transport.start() 
                    console.log('handling click')
       }}

       // stop / dispose? 
       const handleClickStop = () => {
       Tone.Transport.stop(now)
       Tone.Transport.clear(this)
       }
        return (
            <Paper variant="outlined" >
                <Paper elevation={2}>
                    <ElementLi/>
                </Paper>
                <ButtonGroup>
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
            </Paper>
    )
    }