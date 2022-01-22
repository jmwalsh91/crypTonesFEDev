import React, { useEffect, useState } from 'react'
import { axiosDataAV } from './axiosinstances'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'
import { LinearProgress } from '@mui/material'

export const DataAV = (props) => {
    
    const [dataOHLC, setDataOHLC] = useState([])
    const [volArr, setVolArr] = useState([])

    useEffect((async) => {
        axiosDataAV.get('/crypto/ohlcv')
        .then(response => {  
            setVolArr(response.data.volArr)
            setDataOHLC(response.data.resFormatted)
            console.log(volArr + dataOHLC)
            return {dataOHLC, volArr}
        })
    },[])
    
    return(
        <div id="dataAv">
                <ApexChart data={dataOHLC}/>
                {dataOHLC.length > 2 ?
                    <PlayData data={dataOHLC}/> 
                    : <LinearProgress/>
                }
        </div>
    )
}