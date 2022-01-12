import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'
import axios from 'axios'
import _ from 'lodash'
import { AutoFixHighSharp } from '@mui/icons-material'

export const DataAV = (props) => {
    
    const [dataOHLCV, setDataOHLCV] = useState([])
    const [volArr, setVolArr] = useState([0])
    const [closeArray, setCloseArray] = useState([]) 
     
    const axiosDataAV = axios.create({
        baseURL: 'http://127.0.0.1:4000/',
        timeout: 10000,
      });
 

    
    useEffect((async) => {
        axiosDataAV.get('/crypto/ohlcv')
        .then(response => {
            setDataOHLCV(response.data.resFormatted)
            
            setVolArr(response.data.volArr)
           
        })
        return () => {
           /*  console.log(volArr + dataOHLCV) */
            //cleanup function here
        }
    }, []
    )
    
    return(
        <div id="dataAv">
        <ApexChart/>
        <PlayData/>
        </div>
    )
}