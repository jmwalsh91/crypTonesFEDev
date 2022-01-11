import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import ApexChart from './chartComponent'
import PlayData from './tonepromise'
import axios from 'axios'
import _ from 'lodash'

export const DataAV = (props) => {
    
    const [dataOHLCV, setDataOHLCV] = useState([])
    const [closeArray, setCloseArray] = useState([])
     const axiosDataAV = axios.create({
        baseURL: 'http://127.0.0.1:4000/',
        timeout: 5000,
      });
 
        
    useEffect((async) => {
        axiosDataAV.get('/crypto/ohlcv')
        .then(response => {
            let resArr = []
            let resObj = response.data
            console.log('this is obj values ')
            console.log(Object.entries(resObj))
            let newArr = (Object.values(resObj))
            for (let val of newArr) {
            resArr.push(Object.entries(val))
            }
            alert(resArr)
            setDataOHLCV(resArr)
            console.log(dataOHLCV)
        })
        .then(function(){
        console.log('this is the log of ohlcv')
        console.log(dataOHLCV[5])
        })
        return () => {
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