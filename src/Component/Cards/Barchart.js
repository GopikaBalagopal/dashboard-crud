import React from "react";
import './chart.css';
import Chart from 'react-apexcharts';

export default function Barchart(){
    const data3={ 
        options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
      },
      series: [
        {
          name: "Earnings",
          data: [50,80,150,200, 250, 300]
        }
      ]
    }

    return (
      <div>
        
    <div className="BarchartArea">
    <Chart options={data3.options} series={data3.series} type="bar"  />
    </div></div>
    );
    }
