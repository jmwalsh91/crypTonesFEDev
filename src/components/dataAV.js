import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'
import axios from 'axios'
import _ from 'lodash'
import { AutoFixHighSharp } from '@mui/icons-material'
import { render } from '@testing-library/react'

export const DataAV = (props) => {
    
    const [dataOHLC, setDataOHLC] = useState([])
    const [volArr, setVolArr] = useState([0])
    const [closeArray, setCloseArray] = useState([]) 
    
    const DataContext = React.createContext(dataOHLC)

    const axiosDataAV = axios.create({
        baseURL: 'http://127.0.0.1:4000/',
        timeout: 10000,
      });
    
      useEffect(() => {
          console.log('this is for testing')
          console.log(dataOHLC)
      })

    
    useEffect((async) => {
        axiosDataAV.get('/crypto/ohlcv')
        .then(response => {
            setDataOHLC(response.data.resFormatted)
            
            setVolArr(response.data.volArr)
            console.log(volArr + dataOHLC)
           
        })
        return (response) => {
            console.log(dataOHLC)
            return {dataOHLC, volArr}
            
           
            //cleanup function here
        }
    }, []
    )
    
    return(
        <div id="dataAv">
            <DataContext.Provider value={dataOHLC}>
                <ApexChart/>
                <PlayData/>
            </DataContext.Provider>
        </div>
    )
}