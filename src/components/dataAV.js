import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'
import axios from 'axios'
import _ from 'lodash'
import { AutoFixHighSharp } from '@mui/icons-material'
import { render } from '@testing-library/react'
import { Typography } from '@mui/material'

export const DataAV = (props) => {
    
    const [dataOHLC, setDataOHLC] = useState([])
    const [volArr, setVolArr] = useState([])
    let dataIsReturned

    /* const [closeArray, setCloseArray] = useState([])  */


    /* const dataArr = 
        [[
            1642390800000,
            [
            "42984.95000",
            "43047.94000",
            "42972.68000",
            "43002.82000"
            ]
            ],
            [
            1642390500000,
            [
            "42960.82000",
            "42999.98000",
            "42955.75000",
            "42984.96000"
            ]
            ],
            [
            1642390200000,
            [
            "43005.33000",
            "43039.21000",
            "42940.50000",
            "42960.83000"
            ]
            ],
            [
            1642389900000,
            [
            "42942.11000",
            "43042.76000",
            "42917.20000",
            "43005.33000"
            ]
            ],
        ]  */
    
   /*  const DataContext = React.createContext(dataOHLC) */

    const axiosDataAV = axios.create({
        baseURL: 'http://127.0.0.1:4000/',
        timeout: 10000,
      });
    


    useEffect((async) => {
        axiosDataAV.get('/crypto/ohlcv')
        .then(response => {  
            setVolArr(response.data.volArr)
            setDataOHLC(response.data.resFormatted)
            console.log(volArr + dataOHLC)
            return {dataOHLC, volArr}
        })
        /* return (response) => {
            console.log(volArr)
            console.log(dataOHLC)
            
            return {dataOHLC, volArr}
            
           
            //cleanup function here
        } */
    }, []
    )
    
    return(
        <div id="dataAv">
          {/*   <DataContext.Provider value={dataOHLC}> */}
                <ApexChart data={dataOHLC}/>
                {dataOHLC.length > 2 ?
                <PlayData data={dataOHLC}/> 
                : <Typography variant="h1"> loading </Typography>}
            {/* </DataContext.Provider> */}
        </div>
    )
}