import React, { useState, useEffect} from 'react'
import { IconButton, Paper, ButtonGroup } from  '@mui/material'
import { Pause , Stop, PlayArrow, MusicNote } from '@mui/icons-material'
import * as Tone from 'tone'
 
/* 
const synth = new Tone.Synth().toDestination();
const seq = new Tone.Sequence((time, note) => {
	synth.triggerAttackRelease(note, 0.1, time);
	// subdivisions are given as subarrays
}, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
Tone.Transport.start(); */

    export default function PlayData() {
        const [toneState, setToneState] = useState('')
        const [hasRunState, setHasRunState] = useState(false)
        const [notes, setNotes] = useState([20])
        
        const now = Tone.now() 
        const synth = new Tone.FMSynth().toDestination()
     


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
       //play button
       //function to play array, so that array of values from axios call will be able to be played.


 /*              const now = Tone.now() 
        const synth = new Tone.FMSynth().toDestination()
        const ArraySeq = new Tone.Sequence(function(time, note) {
            synth.triggerAttackRelease(note, time)
            console.log('hello') 
            
        },
        notes, '8n')
  const playInst = () => {
        ArraySeq.stop((now + 1))
        console.log(ArraySeq)
            return (
            ArraySeq.start()
            )
       }
 */
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
    }/* 
    const now = Tone.now()
    let note = 101
   
    console.log('asjkf')
    await Tone.start() 
    const synth = await new Tone.FMSynth().toDestination()
    console.log(note)
        return (
       
        synth.triggerAttackRelease(note,"4n", now) 
        )



 */
