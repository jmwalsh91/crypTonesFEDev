import React from 'react'
import reactDOM from 'react-dom'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'

export const DataAV = (props) => {

    return(
        <div id="dataAv">
        <ApexChart/>
        <PlayData/>
        </div>
    )
}