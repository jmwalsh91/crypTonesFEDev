/* import {Synth} from 'tone'
 */
import React,{ useState, useEffect} from 'react'
import * as Tone from 'tone'


export const testNoise = async () => {
    const now = Tone.now()
    let note = 201
   
    console.log('asjkf')
    await Tone.start() 
    const synth = await new Tone.AMSynth().toDestination()
    console.log(note)
    console.log(Tone.start())
        return (
       
        synth.triggerAttackRelease(note,"4n", now) 
        )
}



