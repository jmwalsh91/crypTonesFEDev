import React from 'react';
import ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);
    //this.state.series.data =~will be~ props."cryptData"
        this.state = {
        
            series: [{
                name: "Desktops",
                data: [104, 151,  190, 68,   442,  34, 9,  17,  25,   61,  37]
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
    }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>);
        }
      }

//
