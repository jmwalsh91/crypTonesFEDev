///this is with props, functional component
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'

export default function ApexChart(props) {
        useEffect(() => {
            console.log('we got the data, buddy!')
            console.log(props.data)
        }, [])
        
        let chartParams = {
        
            series: [{
                name: "Desktops",
                data: props.data
            }],
            options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'stepline'
            },
            title: {
                text: 'BTC PRICE',
                align: 'left'
            },
            markers: {
                strokeColors: '#08c9c9'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [],
                }
                },
            
            
            };
          return (
        
      <div id="chart">
  <ReactApexChart options={chartParams.options} series={chartParams.series} type="line" height={350} />
  {console.log(chartParams.series)}
</div>);
        }
      
    
//
